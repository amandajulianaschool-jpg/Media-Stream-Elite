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
    question: 'Which devices are supported for streaming?',
    answer: 'StreamVault supports all major devices including Amazon Firestick, Apple TV (all generations), Android phones and tablets, Smart TVs (Samsung, LG, Sony, Hisense), iPhone, iPad, Windows PC, Mac, and any web browser. Our app is available on Google Play Store and Apple App Store.',
  },
  {
    question: 'Is StreamVault compatible with VPN services?',
    answer: 'Yes, StreamVault works seamlessly with all major VPN providers including NordVPN, ExpressVPN, Surfshark, and CyberGhost. You can stream all 20,000+ channels without any VPN restrictions or bandwidth throttling.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'We offer a 24-hour free trial so you can test the full service before committing to a plan. No credit card required for the trial. After the trial, choose from our Monthly, 6-Month, or 12-Month plans.',
  },
  {
    question: 'How many simultaneous connections are included?',
    answer: 'All plans include 2 simultaneous connections, allowing you to stream on two devices at the same time. You can add extra connections for a small fee if needed.',
  },
  {
    question: 'What is Anti-Freeze Technology 2.0?',
    answer: 'Anti-Freeze Technology 2.0 is our proprietary buffering elimination system that uses intelligent pre-loading and adaptive bitrate streaming to ensure your content plays without interruptions, even on slower internet connections as low as 10 Mbps.',
  },
  {
    question: 'How quickly can I get access after subscribing?',
    answer: 'Activation is instant. You receive your login credentials via email within seconds of payment. Simply download our app or open the web player and start watching your favourite content immediately.',
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
              maxHeight: openIndex === i ? '300px' : '0',
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
