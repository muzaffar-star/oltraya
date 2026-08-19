'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';

const btnSolid: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '14px 32px',
  background: 'var(--brass)',
  color: 'var(--ivory)',
  border: '1px solid var(--brass)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.7rem',
  fontWeight: 400,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'opacity 0.25s',
};

const btnOutline: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '14px 32px',
  background: 'transparent',
  color: 'var(--brass)',
  border: '1px solid var(--brass)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.7rem',
  fontWeight: 400,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background 0.25s, color 0.25s',
};

const insightArticles = [
  {
    title: 'Why Soil Testing Matters More Than Most Buyers Realise',
    readTime: '6 MIN READ',
    image: '/project1.png',
    href: '/journal/soil-testing',
  },
  {
    title: 'Title 2',
    readTime: '7 MIN READ',
    image: '/project2.png',
    href: '/journal/khalapur-mumbai',
  },
  {
    title: 'Title 3',
    readTime: '7 MIN READ',
    image: '/project3.png',
    href: '/journal/design-determines-value',
  },
  {
    title: 'Title 4',
    readTime: '7 MIN READ',
    image: '/house1.jpg',
    href: '/journal/the-most-expensive-thing',
  },
];

export default function NitinMudaliarPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="ldr-hero">
        <div className="ldr-hero__left">
          <div className="ldr-hero__content">
            <Link href="/leadership" className="ldr-back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </Link>
            <h1 className="ldr-name">Nitin Mudaliar</h1>
            <p className="ldr-role">FOUNDER & MANAGING DIRECTOR</p>
            <p className="ldr-intro">
              Helping ensure every important decision serves the people who will eventually call Oltraya home.
            </p>
            <p className="ldr-body">
              Nitin works alongside the Oltraya leadership team before key decisions are finalised — bringing clarity, strategic foresight and a deep understanding of human behaviour to shape better outcomes for our customers.
            </p>
            <div className="ldr-btns">
              <Link href="/philosophy" style={btnSolid}>OUR PHILOSPHY</Link>
              <Link href="/projects" style={btnOutline}>EXPLORE PROJECTS</Link>
            </div>
          </div>
        </div>
        <div className="ldr-hero__right">
          <Image src="/leadership_hero.png" alt="Nitin Mudaliar" fill style={{ objectFit: 'cover' }} priority sizes="60vw" />
        </div>
      </section>

      {/* ── Strategic Advisory section ── */}
      <section className="section ldr-split-section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="ldr-split">
            {/* Left */}
            <div className="ldr-split__left">
              <SectionLabel text="WHY STRATEGIC ADVISORY MATTERS" />
              <h2 className="ldr-quote-h">
                Luxury isn't defined by finishes.
              </h2>
              <h2 className="ldr-quote-italic">
                It's defined by the quality<br />of the decisions that came before them
              </h2>
              <p className="ldr-body" style={{ marginTop: 32, marginBottom: 40 }}>
                At Oltraya, strategic advisory is integrated before key decisions are made — helping align land selection, positioning, design philosophy, customer experience and long-term vision.
              </p>
              <div className="ldr-eval-block">
                <p className="ldr-eval-label">Every decision is evaluated against one question:</p>
                <blockquote className="ldr-eval-quote">
                  "Will this create a better life<br />for the people who will live here?"
                </blockquote>
              </div>
            </div>

            {/* Right */}
            <div className="ldr-split__right">
              <SectionLabel text="HOW THIS BENEFITS YOU" />
              <div className="ldr-benefits">
                {[
                  { title: 'BEHAVIOURAL SCIENCE', sub: 'Understanding how people think, choose and live.', desc: 'Homes designed around how people actually live, not how we assume they do.' },
                  { title: 'STRATEGIC DEVELOPMENT', sub: 'Defining direction and priorities before execution begins.', desc: 'A community guided by a long-term vision, not short-term trends.' },
                  { title: 'BRAND ARCHITECTURE', sub: 'Building a clear, consistent and meaningful brand.', desc: 'Clarity and confidence at every touchpoint of your journey with Oltraya.' },
                  { title: 'PRODUCT THINKING', sub: 'Ensuring every element serves a purpose in the bigger picture.', desc: 'Thoughtful spaces and experiences that feel intentional, not random.' },
                  { title: 'LONG-TERM PLANNING', sub: 'Decisions made today with decades in mind.', desc: 'Enduring value, stronger appreciation potential and future-ready developments.' },
                ].map((b) => (
                  <div key={b.title} className="ldr-benefit-row">
                    <div className="ldr-benefit-row__left">
                      <p className="ldr-benefit-title">{b.title}</p>
                      <p className="ldr-benefit-sub">{b.sub}</p>
                    </div>
                    <div className="ldr-benefit-row__arrow">—</div>
                    <div className="ldr-benefit-row__right">
                      <p className="ldr-benefit-desc">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Working Together section ── */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <SectionLabel text="WORKING TOGETHER FOR LASTING VALUE" />
          <div className="ldr-working-grid">
            {[
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'ALIGNED VISION',
                desc: 'MindManifesta brings an external, unbiased lens to challenge assumptions and protect the long-term vision.',
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                ),
                title: 'BETTER DECISIONS',
                desc: 'From land to lifestyle, every decision is refined through insight, research and customer-centric thinking.',
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
                title: 'STRONGER OUTCOMES',
                desc: 'The result is developments that are coherent, timeless and designed to enrich lives for generations.',
              },
            ].map((c) => (
              <div key={c.title} className="ldr-working-card">
                <div className="ldr-working-card__icon">{c.icon}</div>
                <div>
                  <p className="ldr-working-card__title">{c.title}</p>
                  <p className="ldr-working-card__desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy Quote ── */}
      <section className="section" style={{ background: 'var(--ivory)', paddingBlock: '80px' }}>
        <div className="container">
          <SectionLabel text="OUR PHILOSOPHY" />
          <div className="ldr-philosophy-grid">
            <blockquote className="ldr-philosophy-quote">
              "The homes people love most are shaped by decisions they never have to think about."
            </blockquote>
            <div className="ldr-philosophy-img">
              <Image src="/leadership_hero.png" alt="Oltraya philosophy" fill style={{ objectFit: 'cover' }} sizes="40vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="section" style={{ background: 'var(--ivory)', paddingTop: 0 }}>
        <div className="container">
          <SectionLabel text="INSIGHTS AND PERSPECTIVES" />
          <div className="ldr-insights-grid">
            {insightArticles.map((a) => (
              <Link key={a.href} href={a.href} className="ldr-insight-card">
                <div className="ldr-insight-card__image">
                  <Image src={a.image} alt={a.title} fill style={{ objectFit: 'cover' }} sizes="25vw" />
                </div>
                <div className="ldr-insight-card__body">
                  <p className="ldr-insight-card__title">{a.title}</p>
                  <p className="ldr-insight-card__read">{a.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/journal" className="arrow-link" style={{ marginTop: 32, display: 'inline-flex' }}>
            VISIT THE JOURNAL
          </Link>
        </div>
      </section>

      <style jsx>{`
        .ldr-hero {
          display: grid;
          grid-template-columns: 2fr 3fr;
          min-height: 100svh;
          background: var(--ivory);
        }
        .ldr-hero__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 5% 80px 7%;
        }
        .ldr-back {
          display: inline-flex;
          align-items: center;
          color: var(--prussian);
          margin-bottom: 48px;
          transition: transform 0.25s;
        }
        .ldr-back:hover { transform: translateX(-4px); }
        .ldr-name {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          font-weight: 300;
          color: var(--prussian);
          margin-bottom: 10px;
          line-height: 1.1;
        }
        .ldr-role {
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          color: var(--prussian);
          margin-bottom: 28px;
        }
        .ldr-intro {
          font-family: var(--font-heading);
          font-size: clamp(0.95rem, 1.4vw, 1.15rem);
          font-style: italic;
          color: var(--prussian);
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .ldr-body {
          font-family: var(--font-body);
          font-size: 0.875rem;
          line-height: 1.75;
          color: rgba(10, 18, 42, 0.8);
          margin-bottom: 40px;
        }
        .ldr-btns { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 8px; }
        .ldr-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.25s, color 0.25s, opacity 0.25s;
          white-space: nowrap;
        }
        .ldr-btn--solid {
          background: var(--brass);
          color: var(--ivory);
          border: 1px solid var(--brass);
        }
        .ldr-btn--solid:hover { opacity: 0.88; }
        .ldr-btn--outline {
          background: transparent;
          color: var(--brass);
          border: 1px solid var(--brass);
        }
        .ldr-btn--outline:hover { background: var(--brass); color: var(--ivory); }
        .ldr-hero__right { position: relative; min-height: 600px; }

        .ldr-split-section { padding-block: 80px; }
        .ldr-split { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .ldr-quote-h {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 300;
          color: var(--prussian);
          margin-top: 24px;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .ldr-quote-italic {
          font-family: var(--font-heading);
          font-size: clamp(1.3rem, 2vw, 1.9rem);
          font-style: italic;
          font-weight: 300;
          color: var(--brass);
          line-height: 1.25;
        }
        .ldr-eval-block { border-left: 2px solid var(--brass); padding-left: 20px; }
        .ldr-eval-label { font-size: 0.8rem; color: var(--prussian); font-weight: 600; margin-bottom: 12px; }
        .ldr-eval-quote {
          font-family: var(--font-heading);
          font-size: clamp(1rem, 1.6vw, 1.4rem);
          font-style: italic;
          font-weight: 300;
          color: var(--prussian);
          line-height: 1.4;
          border: none; padding: 0; margin: 0;
        }

        .ldr-benefits { margin-top: 32px; }
        .ldr-benefit-row {
          display: grid;
          grid-template-columns: 1fr 24px 1fr;
          gap: 16px;
          align-items: center;
          padding: 24px 0;
          border-bottom: 1px solid rgba(10, 18, 42, 0.1);
        }
        .ldr-benefit-row:last-child { border-bottom: none; }
        .ldr-benefit-title { font-size: 0.68rem; letter-spacing: 0.08em; font-weight: 600; color: var(--prussian); margin-bottom: 6px; }
        .ldr-benefit-sub { font-size: 0.78rem; color: var(--prussian); opacity: 0.75; line-height: 1.5; }
        .ldr-benefit-row__arrow { color: var(--brass); text-align: center; font-size: 1rem; }
        .ldr-benefit-desc { font-size: 0.78rem; color: var(--prussian); opacity: 0.75; line-height: 1.5; }

        .ldr-working-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 40px; }
        .ldr-working-card { display: flex; gap: 18px; align-items: flex-start; }
        .ldr-working-card__icon { color: var(--brass); flex-shrink: 0; }
        .ldr-working-card__title { font-size: 0.68rem; letter-spacing: 0.08em; font-weight: 600; color: var(--prussian); margin-bottom: 10px; }
        .ldr-working-card__desc { font-size: 0.82rem; line-height: 1.65; color: rgba(10, 18, 42, 0.75); }

        .ldr-philosophy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-top: 24px; }
        .ldr-philosophy-quote {
          font-family: var(--font-heading);
          font-size: clamp(1.3rem, 2.2vw, 2rem);
          font-style: italic;
          font-weight: 300;
          color: var(--prussian);
          line-height: 1.4;
          border: none; padding: 0; margin: 0;
        }
        .ldr-philosophy-img { position: relative; height: 280px; overflow: hidden; background: var(--ivory-darker); }

        .ldr-insights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 32px; }
        .ldr-insight-card { display: flex; flex-direction: column; gap: 12px; text-decoration: none; color: inherit; }
        .ldr-insight-card__image { position: relative; height: 140px; overflow: hidden; background: var(--ivory-darker); }
        .ldr-insight-card__title { font-size: 0.82rem; line-height: 1.4; color: var(--prussian); font-weight: 500; }
        .ldr-insight-card__read { font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--brass); }

        @media (max-width: 1024px) {
          .ldr-hero { grid-template-columns: 1fr; min-height: auto; }
          .ldr-hero__left { padding: 120px 6% 60px; }
          .ldr-hero__right { min-height: 50vw; }
          .ldr-split { grid-template-columns: 1fr; gap: 40px; }
          .ldr-working-grid { grid-template-columns: 1fr; gap: 28px; }
          .ldr-philosophy-grid { grid-template-columns: 1fr; }
          .ldr-insights-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .ldr-insights-grid { grid-template-columns: 1fr; }
          .ldr-btns { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
