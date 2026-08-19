'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionLabel from '@/components/SectionLabel';

const values = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="8" y="18" width="6" height="14" />
        <rect x="18" y="10" width="6" height="22" />
        <rect x="28" y="14" width="6" height="18" />
        <circle cx="28" cy="14" r="2" />
      </svg>
    ),
    num: 'VALUE 01',
    title: 'Intelligence over impulse',
    desc: 'Every decision is backed by data and market analysis. We never build on instinct alone.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M12 8h16M12 16h16M12 24h10" />
        <rect x="8" y="4" width="24" height="32" rx="2" />
      </svg>
    ),
    num: 'VALUE 02',
    title: 'Transparency as standard',
    desc: 'Soil testing reports, timelines, approvals — available to buyers who ask. Transparency isn\'t a gesture. It\'s our operating model.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M8 24l12-12 12 12M12 24v8h16v-8" />
      </svg>
    ),
    num: 'VALUE 03',
    title: 'Design that serves humans',
    desc: 'How a space is designed determines how it is experienced and how it holds its value. We design accordingly.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="20" cy="20" r="14" />
        <path d="M20 10v10l4 4" />
      </svg>
    ),
    num: 'VALUE 04',
    title: 'Long term over fast return',
    desc: 'We build in locations before they peak, for clients who understand that the best returns come from patience and precision.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        imageSrc="/about_hero.png"
        imageAlt="Oltraya About Us"
        title="About Us"
        body={`Built on what we believed was possible\nFifteen years of working with buyers taught us what was missing — a developer built around transparency, careful design, and genuine long-term thinking`}
        ctaLabel="Request the Prospectus"
        ctaHref="/contact"
        
      />

      {/* Advisory to Development */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="about-advisory">
            <div className="about-advisory__left">
              <SectionLabel text="OUR STORY" />
              <h2 style={{ marginTop: 24, marginBottom: 32 }}>From advisory to development.</h2>
              <div className="about-text-content">
                <p>
                  Oltraya (formerly Otis Realty) began as a real estate advisory firm in Pune in 2011. For fifteen years, we worked with buyers, investors, and landowners across the city&apos;s premium market — navigating some of the most significant financial decisions of their lives.
                </p>
                <p>
                  Over time, we saw what was missing. Buyers who made careful decisions deserved developments that combined thoughtful design, radical transparency, and a genuine connection to how people live. That combination rarely existed in one place.
                </p>
                <p>
                  We decided to build the company we wished existed — one that chose land carefully, designed with nature rather than against it, and treated transparency as an operating principle. That decision became Oltraya.
                </p>
                <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
                  The name changed. The commitment deepened.
                </p>
              </div>
              <Link href="/investor-group" className="arrow-link" style={{ marginTop: 32 }}>
                INVESTOR & LANDOWNERS GROUP
              </Link>
            </div>
            <div className="about-advisory__right">
              <div className="about-advisory__image-wrapper">
                <div style={{ background: 'var(--prussian)', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
                  <Image src="/logo/White-Logo-with-Endorsement.png" alt="Oltraya Logo" width={300} height={120} style={{ width: '80%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="about-vision">
            <div className="about-vision__left">
              <div className="about-vision__image">
                <Image src="/house1.jpg" alt="Oltraya Vision" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div className="about-vision__right">
              <SectionLabel text="OUR VISION" />
              <h2 style={{ marginTop: 24, marginBottom: 32, fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>
                To create fewer projects. Better considered
              </h2>
              <div className="about-text-content">
                <p>
                  We are not trying to become the largest developer. We are building a company defined by the quality of its decisions and the long-term value it creates for the people it serves.
                </p>
                <p>
                  When land is chosen carefully, design follows nature, and transparency guides every step — better outcomes follow. For residents. For communities. For future generations.
                </p>
                <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
                  Build deliberately. Delivered thoughtfully.
                </p>
              </div>
              <Link href="/philosophy" className="arrow-link" style={{ marginTop: 32 }}>
                EXPLORE OUR PHILOSOPHY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Oltraya Exists */}
      <section className="section">
        <div className="container">
          <div className="about-why">
            <div className="about-why__left">
              <SectionLabel text="WHY OLTRAYA EXISTS" />
              <h2 style={{ marginTop: 24, marginBottom: 32, fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>
                We build what we believe in. And we believe in what we build.
              </h2>
              <div className="about-text-content">
                <p>
                  We start with the buyer and work backwards to the site. Land is chosen for where it is going. Design is shaped by how people live, not what photographs well. Transparency is built in from the first conversation.
                </p>
                <p>
                  The result is a different experience — from first enquiry to possession. That is what we mean by peace of mind.
                </p>
                <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
                  Most developers build what sells. We build what endures.
                </p>
              </div>
              <Link href="/why-oltraya" className="arrow-link" style={{ marginTop: 32 }}>
                DISCOVER WHY OLTRAYA
              </Link>
            </div>
            <div className="about-why__right">
              <div className="about-why__image">
                <Image src="/project2.png" alt="Oltraya Landscapes" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--ivory-dark)', paddingBlock: 100 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 60 }}>Our Values</h2>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={i} className="about-value-card">
                <div className="about-value-card__icon">{v.icon}</div>
                <h5 className="about-value-card__num">{v.num}</h5>
                <p className="about-value-card__title">{v.title}</p>
                <p className="about-value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay With You */}
      <section className="section">
        <div className="container">
          <div className="about-stay">
            <div className="about-stay__text">
              <h2 style={{ marginBottom: 32, fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>We Stay With You. Beyond Possession.</h2>
              <p style={{ opacity: 0.8 }}>
                From first enquiry through final handover, we remain present and accountable. Trust is built through consistency — regular updates without being asked, honest answers to difficult questions, and a team that treats your investment with the same seriousness you do.
              </p>
            </div>
            <div className="about-stay__image">
              <div className="image-wrap">
                <Image src="/courtyard.png" alt="Oltraya Courtyard" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-text-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-advisory {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-advisory__image-wrapper {
          position: relative;
          height: 500px;
          width: 100%;
        }

        .about-vision {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-vision__image {
          position: relative;
          height: 400px;
        }

        .about-why {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-why__image {
          position: relative;
          height: 400px;
        }

        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid var(--ivory-darker);
          background: var(--ivory);
        }
        .about-value-card {
          padding: 48px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-right: 1px solid var(--ivory-darker);
        }
        .about-value-card:last-child {
          border-right: none;
        }
        .about-value-card__icon {
          color: var(--brass);
          margin-bottom: 24px;
        }
        .about-value-card__num {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--prussian);
          margin-bottom: 12px;
        }
        .about-value-card__title {
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 16px;
        }
        .about-value-card__desc {
          font-size: 0.8rem;
          opacity: 0.75;
          line-height: 1.6;
        }

        .about-stay {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-stay__text {
          padding-right: 40px;
        }
        .about-stay__image .image-wrap {
          position: relative;
          height: 360px;
        }

        @media (max-width: 1024px) {
          .about-values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-value-card {
            border-bottom: 1px solid var(--ivory-darker);
          }
        }
        @media (max-width: 768px) {
          .about-advisory,
          .about-vision,
          .about-why,
          .about-stay {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-advisory__image-wrapper,
          .about-vision__image,
          .about-why__image,
          .about-stay__image .image-wrap {
            height: 280px;
          }
          .about-vision__left { order: 2; }
          .about-vision__right { order: 1; }
          .about-stay__text { padding-right: 0; }
          .about-values-grid { grid-template-columns: 1fr; }
          .about-value-card {
            border-right: none;
            border-bottom: 1px solid var(--ivory-darker);
            padding: 32px 20px;
          }
          .about-value-card:last-child { border-bottom: none; }
        }
      `}</style>
    </>
  );
}
