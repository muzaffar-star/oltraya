"use client";

import Link from 'next/link';
import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';

const members = [
  {
    name: 'Nitin Mudaliar',
    role: 'Founder',
    href: '/leadership/nitin',
    excerpt: `Nitin Mudaliar has spent fifteen years in the rooms where Pune's real estate decisions get made — as an advisor, broker, and trusted guide to hundreds of buyers across the city's premium and luxury markets. That proximity to the market gave him something most developers don't have: a precise understanding of where buyers feel let down, where design falls short of promise, and where genuine opportunity gets overlooked.\n\nIn 2011, he founded Otis Realty on two principles that the market had convinced him mattered above all else — trust and transparency. Fifteen years later, those principles remain unchanged. The ambition has simply grown.`,
    image: '/leadership_hero.png',
    imageLeft: true,
  },
  {
    name: 'Chandni Rav —',
    role: 'Chief Business Officer',
    href: '/leadership/chandni-rav',
    excerpt: `Most people who work in real estate understand property. Chandni Rav understands people — how they decide, what they trust, and what makes them act. That distinction is what she brings to Oltraya.\n\nAs Partner and Chief Business Officer, Chandni leads brand strategy, business development, investor relations, and client experience at Oltraya.`,
    image: '/leadership_hero.png',
    imageLeft: false,
  },
  {
    name: 'Ricky Yeole —',
    role: 'Chief Operating Officer',
    href: '/leadership/ricky',
    excerpt: `Ricky Yeole knows what buyers actually do — not what developers assume they do. Over more than a decade operating across every layer of Pune's real estate ecosystem, he has sat on both sides of the table often enough to understand where transactions break down, where trust is lost, and where the right positioning changes the outcome entirely.\n\nAs Partner and Chief Operating Officer, Ricky leads the full arc of execution at Oltraya — from how each project reaches the right buyer to how the final possession is delivered.`,
    image: '/leadership_hero.png',
    imageLeft: true,
  },
];

const management = [
  {
    title: 'General Manager',
    name: 'Nitin Mudaliar',
    excerpt: `Nitin Mudaliar brings to Oltraya a grounded, client-first approach built across years of hands-on experience in the Pune real estate market. His career spans sales, understanding of developments, builds, and market connections — giving him a comprehensive understanding of how property moves across every stage of the market cycle.`,
    href: '/leadership/nitin',
  },
  {
    title: 'Human Resource Manager',
    name: 'Nitin Mudaliar',
    excerpt: `Nitin Mudaliar brings to Oltraya a grounded, client-first approach built across years of hands-on experience in the Pune real estate market. His career spans sales, understanding of developments, builds, and market connections — giving him a comprehensive understanding of how property moves across every stage of the market cycle.`,
    href: '/leadership/nitin',
  },
];

export default function LeadershipLanding() {
  return (
    <main>
      {/* Hero */}
      <section className="lead-hero">
        <div className="lead-hero__bg">
          <Image
            src="/leadership_hero.png"
            alt="Oltraya leadership"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
          />
          <div className="lead-hero__overlay" />
        </div>
        <div className="lead-hero__content">
          <h1>Leadership</h1>
          <p className="lead-hero__sub">The people behind the promise.</p>
        </div>
      </section>

      {/* Members */}
      <section className="section" style={{ background: 'var(--ivory)', paddingBlock: '80px 0' }}>
        <div className="container">
          <div className="members-list">
            {members.map((m) => (
              <article key={m.href} className={`member-card ${m.imageLeft ? 'member-card--img-left' : ''}`}>
                <div className="member-card__image">
                  <Image src={m.image} alt={m.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 420px" />
                </div>
                <div className="member-card__body">
                  <h2 className="member-card__name">{m.name}</h2>
                  {m.role && <p className="member-card__role">{m.role}</p>}
                  {m.excerpt.split('\n\n').map((para, i) => (
                    <p key={i} className="member-card__excerpt">{para}</p>
                  ))}
                  <Link href={m.href} className="member-card__read">READ MORE →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="section" style={{ background: 'var(--ivory)', paddingTop: '80px' }}>
        <div className="container">
          <div className="divider" style={{ marginBottom: 48 }} />
          <h3 className="mgmt-heading">Management</h3>
          <div className="mgmt-grid">
            {management.map((m, i) => (
              <div key={i} className="mgmt-card">
                <p className="mgmt-card__title">{m.title}</p>
                <h4 className="mgmt-card__name">{m.name}</h4>
                <p className="mgmt-card__excerpt">{m.excerpt}</p>
                <Link href={m.href} className="member-card__read">READ MORE →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── Hero ── */
        .lead-hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .lead-hero__bg {
          position: absolute;
          inset: 0;
        }
        .lead-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 18, 42, 0.7) 0%,
            rgba(10, 18, 42, 0.3) 55%,
            rgba(10, 18, 42, 0.05) 100%
          );
        }
        .lead-hero__content {
          position: relative;
          z-index: 2;
          padding: 0 var(--container-pad) 80px;
          max-width: var(--container-max);
          width: 100%;
          margin-inline: auto;
        }
        .lead-hero__content h1 {
          color: var(--ivory);
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 300;
          margin-bottom: 12px;
        }
        .lead-hero__sub {
          color: rgba(247, 242, 232, 0.8);
          font-size: 0.9rem;
          letter-spacing: 0.02em;
        }

        /* ── Member cards ── */
        .members-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .member-card {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 0;
          align-items: stretch;
          border-bottom: 1px solid var(--ivory-darker);
          padding-block: 48px;
        }
        .member-card--img-left {
          grid-template-columns: 380px 1fr;
        }
        .member-card:not(.member-card--img-left) {
          grid-template-columns: 1fr 380px;
        }
        .member-card:not(.member-card--img-left) .member-card__image {
          order: 2;
        }
        .member-card:not(.member-card--img-left) .member-card__body {
          order: 1;
          padding-right: 48px;
          padding-left: 0;
        }
        .member-card__image {
          position: relative;
          height: 300px;
          overflow: hidden;
          background: var(--ivory-darker);
          flex-shrink: 0;
        }
        .member-card__body {
          padding-left: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
        }
        .member-card__name {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 300;
          color: var(--prussian);
          margin: 0;
          line-height: 1.15;
        }
        .member-card__role {
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          color: var(--prussian);
          opacity: 0.7;
          margin: 0;
        }
        .member-card__excerpt {
          font-size: 0.875rem;
          line-height: 1.75;
          color: rgba(10, 18, 42, 0.85);
          margin: 0;
        }
        .member-card__read {
          display: inline-block;
          margin-top: 8px;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--prussian);
          text-decoration: none;
          transition: color 0.2s;
        }
        .member-card__read:hover { color: var(--brass); }

        /* ── Management ── */
        .mgmt-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 300;
          color: var(--prussian);
          margin-bottom: 32px;
        }
        .mgmt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .mgmt-card {
          background: var(--ivory-dark);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mgmt-card__title {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brass);
          margin: 0;
        }
        .mgmt-card__name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--prussian);
          margin: 0 0 8px;
        }
        .mgmt-card__excerpt {
          font-size: 0.82rem;
          line-height: 1.7;
          color: rgba(10, 18, 42, 0.8);
          margin: 0 0 8px;
        }

        @media (max-width: 900px) {
          .member-card,
          .member-card:not(.member-card--img-left) {
            grid-template-columns: 1fr;
          }
          .member-card__image { height: 240px; }
          .member-card__body,
          .member-card:not(.member-card--img-left) .member-card__body {
            padding: 24px 0 0;
            order: 2;
          }
          .member-card:not(.member-card--img-left) .member-card__image { order: 1; }
          .mgmt-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
