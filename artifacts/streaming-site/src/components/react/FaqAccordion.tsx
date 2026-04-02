import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: 'What is StreamVault IPTV and how does it work?',
    answer: 'StreamVault is a premium IPTV service offering 20,000+ live TV channels, 65,000+ movies and series on demand. It works on any internet-connected device — simply install a compatible app, enter your login credentials, and start watching instantly. No satellite dish or cable box required.',
  },
  {
    question: 'What devices are compatible with StreamVault?',
    answer: 'StreamVault works on virtually every device: Amazon Firestick, Android TV, Smart TVs (Samsung, LG, Sony, Hisense), Apple TV, iPhone, iPad, Android phones and tablets, Windows PC, Mac, and any modern web browser. Dedicated apps are available for the best experience.',
  },
  {
    question: 'Do I need a VPN to use StreamVault?',
    answer: 'No, a VPN is not required to use StreamVault. Our service works perfectly without one. However, if you prefer to use a VPN for privacy, StreamVault is fully compatible with all major providers including NordVPN, ExpressVPN, Surfshark, and CyberGhost — with zero speed throttling.',
  },
  {
    question: 'Is the free trial really free? Do I need a credit card?',
    answer: 'Yes, our 4-hour free trial is 100% free with absolutely no credit card or payment information required. Simply contact us via WhatsApp, receive your trial credentials instantly, and enjoy full access to all channels and VOD content. No strings attached.',
  },
  {
    question: 'Which Nordic and Scandinavian channels are available?',
    answer: 'StreamVault offers extensive Nordic coverage including all major Danish, Norwegian, Swedish, Finnish, and Icelandic channels. Watch DR, TV2 Danmark, NRK, SVT, Yle, RÚV, and hundreds more — plus premium sports channels like Viaplay, TV2 Sport, and Eurosport.',
  },
  {
    question: 'What internet speed do I need for 4K streaming?',
    answer: 'For optimal 4K Ultra HD streaming, we recommend a minimum of 25 Mbps. Our Anti-Freeze Technology 2.0 ensures smooth playback even on connections as low as 10 Mbps by using intelligent buffering and adaptive bitrate streaming.',
  },
  {
    question: 'How do I receive my login details after purchase?',
    answer: 'After purchase, your login credentials are delivered instantly via WhatsApp or Email — whichever you prefer. Most customers are watching within 60 seconds of receiving their details. Our team is available 24/7 to help with setup if needed.',
  },
  {
    question: 'What is the best app for Firestick and Smart TV?',
    answer: 'We recommend several premium apps depending on your device: for Firestick, TiviMate and IPTV Smarters Pro are excellent choices. For Smart TVs, Smart IPTV and IPTV Smarters work great. Our support team will guide you to the perfect app and help with installation via WhatsApp.',
  },
  {
    question: 'Is VOD (Video on Demand) included in all plans?',
    answer: 'Yes, every StreamVault plan includes access to our massive VOD library with 65,000+ movies and TV series. This includes the latest blockbusters, classic films, complete TV series, documentaries, anime, K-drama, and kids content — all updated regularly.',
  },
  {
    question: 'Can I use StreamVault when travelling abroad?',
    answer: 'Absolutely! StreamVault works anywhere in the world with an internet connection. Whether you are on holiday, travelling for business, or living abroad, you can access all your favourite channels and content just as you would at home. No geo-restrictions apply.',
  },
  {
    question: 'How do I contact StreamVault for technical support?',
    answer: 'Our 24/7 support team is available via WhatsApp at +212631130357 for instant assistance. Average response time is under 2 minutes. We help with installation, app setup, troubleshooting, account management, and any technical questions you may have.',
  },
];

export default function FaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/[0.07] bg-dark-800/50 overflow-hidden transition-all duration-200 hover:border-brand-500/30"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left group"
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span className="text-base md:text-lg font-medium text-white group-hover:text-brand-400 transition-colors pr-4">
              {faq.question}
            </span>
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            id={`faq-panel-${i}`}
            role="region"
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === i ? '500px' : '0',
              opacity: openIndex === i ? 1 : 0,
            }}
          >
            <p className="px-6 pb-5 text-slate-400 leading-relaxed text-sm md:text-base">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
