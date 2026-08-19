'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

const faqTiers = [
  {
    title: 'TIER 1 — INVESTMENT QUESTIONS',
    faqs: [
      {
        q: 'Is Buying a Plot in the Naina Corridor a Good Investment?',
        a: 'Oltraya will never be the largest developer in the market. That is not a limitation — it is a decision. Every project receives the complete attention of the founding team, from land selection to final handover. You will always know who is responsible for your investment.',
      },
      {
        q: 'What is the Difference Between Plotted Development and Buying a Flat?',
        a: 'A plot gives you ownership of the land itself, with freedom to build within municipal guidelines. A flat gives you a share of a building, which depreciates while the land beneath it appreciates. In high-growth corridors, plotted land has historically shown stronger long-term appreciation — and eliminates the construction and maintenance risk of a developer-built unit.',
      },
      {
        q: 'What is the Mumbai 3.0 Corridor?',
        a: 'Mumbai 3.0 refers to the Karnala-Sai-Chirner New Town — a 324 sq km planned urban expansion anchored by the Navi Mumbai International Airport. Khalapur, where Oltraya Verde is located, sits within this corridor. [SOURCE REQUIRED: verify investment figures before publishing].',
      },
      {
        q: 'How Do I Know If a Location Will Actually Appreciate?',
        a: 'The most reliable indicators are confirmed infrastructure investment, active regulatory frameworks, and institutional capital movement. All three are present in the NAINA Corridor. However, appreciation is never guaranteed. No developer can promise a specific return — and any who does should be treated with caution. Independent financial advice is always recommended.',
      },
    ],
  },
  {
    title: 'TIER 2 — PROCESS AND PROTECTION QUESTIONS',
    faqs: [
      {
        q: 'What is RERA and How Does It Protect Me as a Buyer?',
        a: 'RERA — the Real Estate Regulatory Authority — requires developers to register projects before marketing and maintain separate escrow accounts for buyer funds. Registration caps approvals, timelines, and specifications on public record and gives buyers a formal grievance mechanism. Always verify a RERA number on the MahaRERA portal before paying any amount.',
      },
      {
        q: 'What Does Soil Testing Tell Me About the Land?',
        a: 'Soil testing — formally called a geotechnical investigation — analyses the composition, load-bearing capacity, and drainage characteristics of the land. It determines whether the soil can safely support construction, whether there are groundwater concerns, and whether any remediation is required before building. Most developers do not share soil testing results with buyers. At Oltraya, soil testing reports are available for download on the project page — because a buyer making a decision of this size deserves to know exactly what they are buying.',
      },
      {
        q: 'What Should I Check Before Buying Plotted Development In Maharashtra?',
        a: 'At minimum — verify clear land title through a title search, confirm RERA registration on MahaRERA, review layout approval, request the soil testing report, check environmental clearances, confirm plot boundaries and common area commitments in writing, review the sale agreement for possession timelines and penalty clauses. If a developer is reluctant to share any of these, that reluctance is itself information.',
      },
      {
        q: 'How Do I Read a RERA Certificate?',
        a: 'A RERA certificate shows the registration number, promoter details, approved layout, total plots or units, and the committed possession date. Key checks: registration is current, possession date matches what the developer tells you, and project details match the brochure. Verify directly at maharera.maharashtra.gov.in.',
      },
      {
        q: 'What Happens If A Developer Delays Possession?',
        a: 'Under RERA, if a developer misses the committed possession date, buyers can claim a full refund with interest, or continue and receive interest for the delay period (SBI MCLR + 2%). Enforceability depends on the developer\'s financial position and your agreement terms. Always ensure your timeline includes a stated buffer — in writing.',
      },
      {
        q: 'How Do I Read a RERA Certificate?',
        a: 'A RERA certificate shows the registration number, promoter details, approved layout, total plots or units, and the committed possession date. Key checks: registration is current, possession date matches what the developer tells you, and project details match the brochure. Verify directly at maharera.maharashtra.gov.in.',
      },
    ],
  },
  {
    title: 'TIER 3 — OLTRAYA SPECIFIC QUESTIONS',
    faqs: [
      {
        q: 'What Makes Oltraya Different From Other Developers?',
        a: 'Three structural differences. First, critical approvals are in place before we begin marketing. Second, key documents — soil testing, RERA, timelines, payment plan — are available to buyers before signing. Third, our founding team spent fifteen years as real estate advisors. We have seen, from the buyer\'s side, exactly what goes wrong — and built our operating model around preventing it.',
      },
      {
        q: 'Can I Visit The Oltraya Verde Site?',
        a: 'Yes. We conduct regular site visits for serious buyers. Request the prospectus or begin a conversation through the Verde project page and we will arrange a visit at a time that works for you. We will not pressure you to make a decision during or after the visit.',
      },
      {
        q: 'What Happens After I Book a Plot?',
        a: 'After booking, you will receive regular construction milestone updates directly from the Oltraya team — without needing to ask. All project documents are available on request at any stage. If anything changes on the timeline, you will be informed immediately. Our commitment is that you will never learn about a problem from anyone other than us.',
      },
      {
        q: 'Who Designed Oltraya Verde?',
        a: 'The entrance, landscape, and site layout of Oltraya Verde has been designed by CCBA Designs — a world-renowned practice founded by the late Prof. Christopher Charles Benninger (M.Arch Harvard, M.City Planning MIT). CCBA is the only firm in India to have received an SIA National Excellence in Architecture Award. Their portfolio includes the Suzlon One Earth Headquarters — LEED Platinum and GRIHA Five Star certified. The same design rigour applied to those landmark institutions is applied to every element of Oltraya Verde.',
      },
      {
        q: 'Is Oltraya Verde RERA Registered?',
        a: '[RERA registration number to be inserted here once confirmed. Link to MahaRERA portal entry.] All Oltraya projects are registered with MahaRERA before marketing begins.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-item__question" onClick={() => setOpen(!open)}>
        <h3>{q}</h3>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease',
            flexShrink: 0,
          }}
        >
          <path d="M5 8L10 13L15 8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="faq-item__answer">
          <p>{a}</p>
        </div>
      )}

      <style jsx>{`
        .faq-item {
          border-bottom: 1px solid rgba(10, 18, 42, 0.1);
        }

        .faq-item__question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          width: 100%;
          padding: 28px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          color: var(--prussian);
        }

        .faq-item__question h3 {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 300;
          color: var(--prussian);
          margin: 0;
        }

        .faq-item__answer {
          padding-bottom: 28px;
        }

        .faq-item__answer p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--prussian);
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}

export default function FAQsPage() {
  return (
    <>
      <HeroSection
        imageSrc="/faq_hero.png"
        imageAlt="Frequently Asked Questions"
        title="FAQs"
        body="Frequently Asked Questions"
        
      />

      {faqTiers.map((tier, i) => (
        <section key={i} className="section" style={{ background: i % 2 === 0 ? 'var(--ivory)' : 'var(--ivory-dark)' }}>
          <div className="container">
            <h4 className="tier-title">{tier.title}</h4>
            <div className="faq-list">
              {tier.faqs.map((faq, j) => (
                <FAQItem key={j} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <style jsx>{`
        .tier-title {
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--prussian);
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--prussian);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
