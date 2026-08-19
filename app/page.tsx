'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionLabel from '@/components/SectionLabel';
import ProjectCard from '@/components/ProjectCard';
import type { Metadata } from 'next';

const pillars = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="10"/>
        <circle cx="18" cy="18" r="4"/>
        <line x1="18" y1="4" x2="18" y2="8"/>
        <line x1="18" y1="28" x2="18" y2="32"/>
        <line x1="4" y1="18" x2="8" y2="18"/>
        <line x1="28" y1="18" x2="32" y2="18"/>
      </svg>
    ),
    label: 'TRANSPARENT\nAT EVERY STEP',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="18,3 33,12 33,24 18,33 3,24 3,12"/>
        <circle cx="18" cy="18" r="5"/>
      </svg>
    ),
    label: 'WELLNESS- LED.\nLIFE CENTRIC.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="28" x2="8" y2="16"/>
        <line x1="18" y1="28" x2="18" y2="8"/>
        <line x1="28" y1="28" x2="28" y2="20"/>
        <line x1="4" y1="28" x2="32" y2="28"/>
      </svg>
    ),
    label: 'DISCIPLINED\nEXECUTION',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4C18 4 6 10 6 20c0 6.627 5.373 12 12 12s12-5.373 12-12C30 10 18 4 18 4z"/>
        <path d="M18 14v6l4 2"/>
      </svg>
    ),
    label: 'BUILT FOR\nGENERATIONS',
  },
];

const philosophyColumns = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="20" r="14"/>
        <circle cx="20" cy="20" r="6"/>
        <line x1="20" y1="2" x2="20" y2="6"/>
        <line x1="20" y1="34" x2="20" y2="38"/>
        <line x1="2" y1="20" x2="6" y2="20"/>
        <line x1="34" y1="20" x2="38" y2="20"/>
      </svg>
    ),
    title: 'INTENTIONAL\nLAND CHOICES',
    desc: 'Locations selected for long-term value and quality of life.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20 6C20 6 8 12 8 22a12 12 0 0 0 24 0C32 12 20 6 20 6z"/>
        <path d="M20 18a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
      </svg>
    ),
    title: 'ENVIRONMENTAL\nINTELLIGENCE',
    desc: 'Designs crafted with nature, light, air and well-being in mind.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="20" r="14"/>
        <path d="M14 20l4 4 8-8"/>
      </svg>
    ),
    title: 'TOTAL\nTRANSPARENCY',
    desc: 'From testing to hand-over, clarity at every step.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="14" cy="14" r="6"/>
        <circle cx="26" cy="14" r="6"/>
        <path d="M6 36c0-6 3.5-10 8-10s8 4 8 4 3.5-4 8-4 8 4 8 10"/>
      </svg>
    ),
    title: 'RELATIONSHIPS\nTHAT LAST',
    desc: 'We stay with you, beyond possession and beyond time.',
  },
];

const featuredProjects = [
  { image: '/project1.png', title: 'OLTRAYA VERDE', location: 'Khalapur, NAINA Corridor', href: '/projects/oltraya-verde' },
  { image: '/project2.png', title: 'OLTRAYA HILLS', location: 'Mumbai 3.0 Corridor', href: '/projects/oltraya-hills' },
  { image: '/project3.png', title: 'OLTRAYA RESERVE', location: 'Mumbai 3.0 Corridor', href: '/projects/oltraya-reserve' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroSection
        imageSrc="/home_hero.png"
        imageAlt="Oltraya — luxury real estate"
        title={
          <>
            Anyone can sell you a view.<br />
            We sell you <span style={{ color: 'var(--brass)' }}>Peace.</span>
          </>
        }
        body="Luxury isn't just what you see. It's what you never have to worry about."
        ctaLabel="Request the Prospectus"
        ctaHref="/contact"
        pillars={pillars}
        exploreLinkLabel="EXPLORE OUR PROJECTS"
        exploreLinkHref="/projects"
      />

      {/* ── ABOUT SPLIT ── */}
      <section className="section home-about">
        <div className="container">
          <div className="home-about__inner">
            <div className="home-about__left">
              <SectionLabel text="EXPLORE OUR PROJECTS" />
              <h2 style={{ marginTop: 20, marginBottom: 24 }}>
                Beyond Buildings.<br />Peace of mind.
              </h2>
              <p style={{ marginBottom: 16 }}>
                Oltraya is a design-led real estate development company based in Pune. We create enduring spaces through thoughtful design, environmental intelligence and transparent execution.
              </p>
              <p style={{ marginBottom: 32 }}>
                Every project is chosen with intention and crafted for long-term value — for the people who live in it and the future it shapes.
              </p>
              <Link href="/about" className="arrow-link">KNOW OUR STORY</Link>
            </div>
            <div className="home-about__image">
              <Image
                src="/courtyard.png"
                alt="Oltraya courtyard"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PHILOSOPHY ── */}
      <section className="section home-philosophy">
        <div className="container">
          <div className="home-philosophy__inner">
            <div className="home-philosophy__left">
              <SectionLabel text="OUR PHILOSOPHY" />
              <h2 style={{ marginTop: 20 }}>
                Built on trust.<br />Focused on<br />the long term.
              </h2>
            </div>
            <div className="home-philosophy__columns">
              {philosophyColumns.map((col, i) => (
                <div key={i} className="home-philosophy__col">
                  <div style={{ color: 'var(--brass)', marginBottom: 16 }}>{col.icon}</div>
                  <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 500, marginBottom: 12, whiteSpace: 'pre-line', textAlign: 'center' }}>
                    {col.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', textAlign: 'center', opacity: 0.7, lineHeight: 1.6 }}>{col.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── FEATURED PROJECTS ── */}
      <section className="section home-featured">
        <div className="container">
          <div className="home-featured__header">
            <div>
              <SectionLabel text="FEATURED PROJECTS" />
              <h2 style={{ marginTop: 20 }}>
                Land chosen before it<br />was obvious
              </h2>
              <Link href="/projects" className="arrow-link" style={{ marginTop: 20, display: 'inline-flex' }}>
                VIEW ALL PROJECTS
              </Link>
            </div>
            <div className="home-featured__grid">
              {featuredProjects.map((p) => (
                <Link key={p.title} href={p.href} className="home-featured__item">
                  <div className="home-featured__item-image">
                    <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} sizes="(max-width: 768px) 100vw, 25vw" />
                  </div>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', marginTop: 12, color: 'var(--prussian)' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--brass)', marginTop: 4 }}>{p.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* About split */
        .home-about__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .home-about__image {
          position: relative;
          height: 480px;
          overflow: hidden;
        }

        /* Philosophy */
        .home-philosophy__inner {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 60px;
          align-items: flex-start;
        }
        .home-philosophy__columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid var(--ivory-darker);
        }
        .home-philosophy__col {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 24px;
          border-right: 1px solid var(--ivory-darker);
        }
        .home-philosophy__col:last-child { border-right: none; }

        /* Featured projects */
        .home-featured__header {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 60px;
          align-items: flex-start;
        }
        .home-featured__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .home-featured__item {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .home-featured__item-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .home-featured__item:hover .home-featured__item-image img {
          transform: scale(1.04);
        }

        @media (max-width: 1024px) {
          .home-philosophy__columns { grid-template-columns: repeat(2, 1fr); }
          .home-philosophy__col { border-bottom: 1px solid var(--ivory-darker); }
        }
        @media (max-width: 768px) {
          .home-about__inner,
          .home-philosophy__inner,
          .home-featured__header { grid-template-columns: 1fr; }
          .home-about__inner,
          .home-philosophy__inner,
          .home-featured__header {
            gap: 32px;
          }

          .home-about__image { height: 260px; }
          .home-featured__item-image { height: 200px; }
          .home-featured__grid { grid-template-columns: 1fr; }
          .home-philosophy__columns { grid-template-columns: 1fr; }
          .home-philosophy__col { border-right: none; }
          .home-featured__grid { gap: 20px; }
          .home-featured__header h2,
          .home-about__left h2,
          .home-philosophy__left h2 {
            font-size: clamp(1.7rem, 7vw, 2.4rem);
          }
        }
      `}</style>
    </>
  );
}
