import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  market?: "uk" | "fr";
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which devices are supported for streaming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "StreamVault supports all major devices including Amazon Firestick, Apple TV (all generations), Android phones and tablets, Smart TVs (Samsung, LG, Sony, Hisense), iPhone, iPad, Windows PC, Mac, and any web browser. Our app is available on Google Play Store and Apple App Store.",
      },
    },
    {
      "@type": "Question",
      name: "Is StreamVault compatible with VPN services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, StreamVault works seamlessly with all major VPN providers including NordVPN, ExpressVPN, Surfshark, and CyberGhost. You can stream all 20,000+ channels without any VPN restrictions or bandwidth throttling.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a 24-hour free trial so you can test the full service before committing to a plan. No credit card required for the trial. After the trial, choose from our Monthly (€12.99), 6-Month (€49.99), or 12-Month (€79.99) plans.",
      },
    },
    {
      "@type": "Question",
      name: "How many simultaneous connections are included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All plans include 2 simultaneous connections, allowing you to stream on two devices at the same time. You can add extra connections for a small fee if needed.",
      },
    },
    {
      "@type": "Question",
      name: "What is Anti-Freeze Technology 2.0?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anti-Freeze Technology 2.0 is our proprietary buffering elimination system that uses intelligent pre-loading and adaptive bitrate streaming to ensure your content plays without interruptions, even on slower internet connections as low as 10 Mbps.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get access after subscribing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Activation is instant. You receive your login credentials via email within seconds of payment. Simply download our app or open the web player and start watching your favourite content immediately.",
      },
    },
  ],
};

export default function SEO({
  title = "StreamVault – The Ultimate 4K Global Streaming Service | 20,000+ Channels",
  description = "Access 20,000+ global TV channels, blockbuster movies and premium series in stunning 4K. Anti-Freeze Technology, instant activation. Serving UK & France. Try free for 24 hours.",
  canonical = "https://streamvault.tv",
  ogImage = "https://streamvault.tv/og-image.jpg",
  market = "uk",
}: SEOProps) {
  const hreflang = market === "fr" ? "fr-FR" : "en-GB";
  const locale = market === "fr" ? "fr_FR" : "en_GB";

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:locale", locale, true);
    setMeta("og:site_name", "StreamVault", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = canonical;

    let hreflangEl = document.querySelector<HTMLLinkElement>(`link[hreflang="${hreflang}"]`);
    if (!hreflangEl) {
      hreflangEl = document.createElement("link");
      hreflangEl.rel = "alternate";
      hreflangEl.setAttribute("hreflang", hreflang);
      document.head.appendChild(hreflangEl);
    }
    hreflangEl.href = canonical;

    let schemaEl = document.getElementById("faq-schema");
    if (!schemaEl) {
      schemaEl = document.createElement("script");
      schemaEl.id = "faq-schema";
      schemaEl.type = "application/ld+json";
      document.head.appendChild(schemaEl);
    }
    schemaEl.textContent = JSON.stringify(faqSchema);

    let serviceSchemaEl = document.getElementById("service-schema");
    if (!serviceSchemaEl) {
      serviceSchemaEl = document.createElement("script");
      serviceSchemaEl.id = "service-schema";
      serviceSchemaEl.type = "application/ld+json";
      document.head.appendChild(serviceSchemaEl);
    }
    serviceSchemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "StreamVault",
      serviceType: "Digital Media Streaming",
      description: description,
      provider: {
        "@type": "Organization",
        name: "StreamVault",
        url: canonical,
      },
      areaServed: ["GB", "FR"],
      offers: [
        { "@type": "Offer", name: "Monthly Plan", price: "12.99", priceCurrency: "EUR" },
        { "@type": "Offer", name: "6-Month Plan", price: "49.99", priceCurrency: "EUR" },
        { "@type": "Offer", name: "12-Month Plan", price: "79.99", priceCurrency: "EUR" },
      ],
    });
  }, [title, description, canonical, ogImage, hreflang, locale]);

  return null;
}
