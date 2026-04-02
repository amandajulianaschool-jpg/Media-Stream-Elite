import { useState, useEffect } from 'react';

interface CookieBannerProps {
  message: string;
  acceptAll: string;
  rejectAll: string;
  settings: string;
  settingsTitle: string;
  necessary: string;
  necessaryDesc: string;
  analytics: string;
  analyticsDesc: string;
  functional: string;
  functionalDesc: string;
  marketing: string;
  marketingDesc: string;
  savePreferences: string;
  privacyLink: string;
  privacyHref: string;
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'sv-cookie-consent';

export default function CookieBanner(props: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
      } else {
        const parsed = JSON.parse(stored);
        setPreferences({
          necessary: true,
          analytics: !!parsed.analytics,
          functional: !!parsed.functional,
          marketing: !!parsed.marketing,
        });
      }
    } catch {
      setVisible(true);
    }

    function handleOpenSettings() {
      setShowSettings(true);
      setVisible(true);
    }
    const btn = document.getElementById('open-cookie-settings');
    btn?.addEventListener('click', handleOpenSettings);
    return () => btn?.removeEventListener('click', handleOpenSettings);
  }, []);

  function saveConsent(prefs: CookiePreferences) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, timestamp: Date.now() }));
    } catch {}
    setVisible(false);
    setShowSettings(false);
  }

  function handleAcceptAll() {
    saveConsent({ necessary: true, analytics: true, functional: true, marketing: true });
  }

  function handleRejectAll() {
    saveConsent({ necessary: true, analytics: false, functional: false, marketing: false });
  }

  function handleSavePreferences() {
    saveConsent(preferences);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-6" role="dialog" aria-label="Cookie consent">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/[0.10] bg-black/80 backdrop-blur-xl shadow-2xl">
        {!showSettings ? (
          <div className="flex flex-col gap-4 p-5 sm:p-6 md:flex-row md:items-center md:gap-6">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-300 leading-relaxed">
                {props.message}{' '}
                <a href={props.privacyHref} className="text-blue-400 hover:underline">
                  {props.privacyLink}
                </a>
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {props.settings}
              </button>
              <button
                onClick={handleRejectAll}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {props.rejectAll}
              </button>
              <button
                onClick={handleAcceptAll}
                className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
              >
                {props.acceptAll}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6">
            <h3 className="mb-4 text-lg font-bold text-white">{props.settingsTitle}</h3>
            <div className="space-y-3 mb-5">
              <CookieToggle
                label={props.necessary}
                description={props.necessaryDesc}
                checked={true}
                disabled={true}
                onChange={() => {}}
              />
              <CookieToggle
                label={props.analytics}
                description={props.analyticsDesc}
                checked={preferences.analytics}
                onChange={(v) => setPreferences(p => ({ ...p, analytics: v }))}
              />
              <CookieToggle
                label={props.functional}
                description={props.functionalDesc}
                checked={preferences.functional}
                onChange={(v) => setPreferences(p => ({ ...p, functional: v }))}
              />
              <CookieToggle
                label={props.marketing}
                description={props.marketingDesc}
                checked={preferences.marketing}
                onChange={(v) => setPreferences(p => ({ ...p, marketing: v }))}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleRejectAll}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {props.rejectAll}
              </button>
              <button
                onClick={handleSavePreferences}
                className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
              >
                {props.savePreferences}
              </button>
              <button
                onClick={handleAcceptAll}
                className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
              >
                {props.acceptAll}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CookieToggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 sm:p-4">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative mt-0.5 inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ${
          disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
        } ${checked ? 'bg-blue-500' : 'bg-slate-600'}`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
