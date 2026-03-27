import { useState, useEffect } from "react";
import { Menu, X, Tv2, Play } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Content", href: "#content" },
  { label: "Pricing", href: "#pricing" },
  { label: "Setup", href: "#setup" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="/"
            className="flex items-center gap-2 group"
            aria-label="StreamVault - Go to homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Tv2 className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Stream<span className="text-blue-400">Vault</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#pricing")}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 blue-glow hover:scale-105"
              aria-label="Join Now - View pricing plans"
            >
              <Play className="w-3.5 h-3.5 fill-white" aria-hidden="true" />
              Join Now
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 glass-card border-l border-white/10 transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-lg font-bold text-white">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          <ul className="p-4 space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-4">
              <button
                onClick={() => handleNavClick("#pricing")}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all"
              >
                <Play className="w-4 h-4 fill-white" aria-hidden="true" />
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
