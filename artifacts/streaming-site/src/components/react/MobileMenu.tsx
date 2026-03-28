import { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  navLinks?: NavLink[];
  joinNowLabel?: string;
  menuLabel?: string;
  openMenuLabel?: string;
  closeMenuLabel?: string;
}

const defaultNavLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Content', href: '#content' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Setup', href: '#setup' },
  { label: 'FAQ', href: '#faq' },
];

export default function MobileMenu({ navLinks, joinNowLabel = 'Join Now', menuLabel = 'Menu', openMenuLabel = 'Open menu', closeMenuLabel = 'Close menu' }: Props) {
  const [open, setOpen] = useState(false);
  const links = navLinks && navLinks.length > 0 ? navLinks : defaultNavLinks;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeMenuLabel : openMenuLabel}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>

      {open && (
        <div id="mobile-nav" className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 bg-dark-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transform animate-slide-in">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <span className="text-lg font-bold text-white">{menuLabel}</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10" aria-label={closeMenuLabel}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="p-4 space-y-1" aria-label="Mobile navigation">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium text-base"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => handleNav('#pricing')}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-lg transition-all shadow-lg shadow-brand-500/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  {joinNowLabel}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in { animation: slideIn 0.3s ease-out; }
      `}</style>
    </>
  );
}
