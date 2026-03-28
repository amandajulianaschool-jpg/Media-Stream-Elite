import { useState } from 'react';

const issues = [
  {
    category: 'Buffering & Playback',
    items: [
      {
        question: 'Channels are buffering or freezing frequently',
        answer: 'First, check your internet speed at speedtest.net — you need at least 10 Mbps for HD and 25 Mbps for 4K. If your speed is adequate, try these steps: (1) Restart your router and streaming device. (2) Connect via Ethernet instead of Wi-Fi. (3) Clear the app cache. (4) Try switching to a lower video quality temporarily. (5) If using a VPN, try switching to a closer server location. Our Anti-Freeze Technology 2.0 handles most buffering automatically, but these steps can help with persistent issues.',
      },
      {
        question: 'Video quality is poor or pixelated',
        answer: 'Poor video quality is usually caused by insufficient bandwidth. Ensure no other devices are consuming bandwidth (downloads, other streams). Try selecting a lower resolution in the player settings. If the issue persists on specific channels, it may be a temporary source-side issue — try again later or contact support.',
      },
      {
        question: 'Audio is out of sync with video',
        answer: 'Audio sync issues can usually be fixed by: (1) Pausing and resuming the stream. (2) Switching to a different audio track if available. (3) Restarting the app. (4) Checking if your TV has an audio delay setting and adjusting it. If the problem persists on a specific channel, report it to our support team.',
      },
    ],
  },
  {
    category: 'Login & Account',
    items: [
      {
        question: 'I cannot log in with my credentials',
        answer: 'Double-check that you are entering the username and password exactly as received in your welcome email (credentials are case-sensitive). Ensure there are no extra spaces before or after the username/password. If you have recently renewed your subscription, your credentials may have been updated — check your latest email. If you are still unable to log in, contact support for a credential reset.',
      },
      {
        question: '"Maximum connections reached" error',
        answer: 'This error means you have exceeded the allowed number of simultaneous device connections (typically 2). To fix this: (1) Close the app on any other device you are not currently using. (2) Wait 5 minutes for the session to expire. (3) If you did not log in on another device, your credentials may have been shared — contact support immediately to secure your account.',
      },
      {
        question: 'My subscription expired but I renewed it',
        answer: 'After renewal, it may take up to 15 minutes for your access to be reactivated. If the issue persists, try logging out and back in. Check your email for any updated credentials. Contact support if access is not restored within 30 minutes.',
      },
    ],
  },
  {
    category: 'DNS & Network Setup',
    items: [
      {
        question: 'How do I change my DNS settings for better performance?',
        answer: 'Changing your DNS to a faster provider can improve loading times. We recommend Google DNS (8.8.8.8, 8.8.4.4) or Cloudflare DNS (1.1.1.1, 1.0.0.1). To change DNS: On your router, access the admin panel (usually 192.168.1.1), navigate to DNS settings, and replace the existing values. On individual devices, go to Network Settings > DNS and enter the new values. Restart your device after changing DNS.',
      },
      {
        question: 'StreamVault is blocked by my ISP',
        answer: 'Some ISPs may block streaming services. To bypass this: (1) Use a VPN — StreamVault works with all major VPN providers. (2) Change your DNS settings (see above). (3) Try accessing the service on mobile data to confirm it is an ISP-level block. Contact our support team for VPN recommendations specific to your region.',
      },
    ],
  },
  {
    category: 'App & Device Issues',
    items: [
      {
        question: 'The app crashes on launch',
        answer: 'Try these steps in order: (1) Force close the app and reopen it. (2) Clear the app cache and data (Settings > Apps > StreamVault > Clear Cache). (3) Uninstall and reinstall the app. (4) Ensure your device firmware is up to date. (5) Check if there is a newer version of the app available. If the issue persists, contact support with your device model and OS version.',
      },
      {
        question: 'EPG (TV Guide) is not loading',
        answer: 'The EPG data refreshes every 24 hours. To force a refresh: (1) Go to Settings within the app. (2) Select "Update EPG" or "Refresh Guide". (3) Wait 2-3 minutes for the data to load. If the EPG is still empty, try clearing the app cache and restarting. Some channels in less common regions may not have EPG data available.',
      },
    ],
  },
];

export default function TroubleshootingAccordion() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="space-y-10">
      {issues.map((section, si) => (
        <div key={si}>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-500" />
            {section.category}
          </h2>
          <div className="space-y-3">
            {section.items.map((item, ii) => {
              const key = `${si}-${ii}`;
              const isOpen = openIndex === key;
              return (
                <div
                  key={key}
                  className="rounded-xl border border-white/[0.07] bg-dark-800/50 overflow-hidden transition-all duration-200 hover:border-brand-500/30"
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-white group-hover:text-brand-400 transition-colors pr-4">
                      {item.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? '500px' : '0',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="px-6 pb-5 text-slate-400 leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
