'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionLabel from '@/components/SectionLabel';

export default function Mumbai30Page() {
  const stats = [
    '15 years in the real estate market',
    'Hundreds of buyers advised (300+)',
    '₹500+ crores transacted from Otis Realty records',
    '9 acres currently under development (Verde)',
    'Multiple projects in pipeline (RERA filed or near filing)',
  ];

  return (
    <>
      <HeroSection
        imageSrc="/projects_hero.png"
        imageAlt="Mumbai 3.0"
        title="Mumbai 3.0"
        body={`The next Mumbai isn't coming. It's already being built.\nKhopoli sits at the centre of one of the most significant urban expansions in Indian history.\nOltraya Verde is positioned precisely at the inflection point.`}
        ctaLabel="Request the Prospectus"
        ctaHref="/contact"
        
      />

      {/* By the Numbers */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="numbers-split">
            <div className="numbers-split__left">
              <h2 style={{ marginBottom: 8 }}>By the Numbers</h2>
              <SectionLabel text="THE NUMBERS BEHIND THE PROMISE." />
              <div className="numbers-divider" />
              <ul className="numbers-list">
                {stats.map((stat, i) => (
                  <li key={i}>{stat}</li>
                ))}
              </ul>
            </div>
            <div className="numbers-split__right">
              <div className="numbers-image">
                <Image src="/project1.png" alt="Mumbai 3.0 Aerial" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From the Journal */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="journal-split">
            <div className="journal-split__left">
              <div className="journal-image">
                <Image src="/house1.jpg" alt="Journal" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
            </div>
            <div className="journal-split__right">
              <h2 style={{ marginBottom: 8 }}>From the Journal</h2>
              <SectionLabel text="WHAT WE KNOW. FREELY SHARED." />
              <p style={{ marginTop: 24, marginBottom: 40, opacity: 0.8, lineHeight: 1.7 }}>
                We spent fifteen years learning how real estate decisions go wrong. Here is what we learned
              </p>
              <div className="journal-cards">
                <div className="journal-card">
                  <span className="journal-card__label">FEATURED ARTICLE NO. 1</span>
                  <h4>The most expensive thing in real estate is a surprise.</h4>
                  <span className="journal-card__read">8 MIN READ</span>
                  <Link href="/journal/the-most-expensive-thing" className="arrow-link" style={{ marginTop: 'auto' }}>
                    READ ARTICLE
                  </Link>
                </div>
                <div className="journal-card">
                  <span className="journal-card__label">FEATURED ARTICLE NO. 2</span>
                  <h4>What soil testing actually means — and why most developers don&apos;t show you the results.</h4>
                  <span className="journal-card__read">6 MIN READ</span>
                  <Link href="/journal/soil-testing" className="arrow-link" style={{ marginTop: 'auto' }}>
                    READ ARTICLE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .numbers-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .numbers-divider {
          width: 60px;
          height: 2px;
          background: var(--prussian);
          margin: 32px 0;
        }

        .numbers-list {
          list-style: disc;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .numbers-list li {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--prussian);
          opacity: 0.85;
        }

        .numbers-image {
          position: relative;
          height: 400px;
          width: 100%;
        }

        .journal-split {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 60px;
          align-items: start;
        }

        .journal-image {
          position: relative;
          height: 550px;
          width: 100%;
        }

        .journal-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .journal-card {
          border: 1px solid rgba(10, 18, 42, 0.15);
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 250px;
        }

        .journal-card__label {
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--prussian);
          font-weight: 600;
        }

        .journal-card h4 {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1.4;
          color: var(--prussian);
        }

        .journal-card__read {
          font-family: var(--font-body);
          font-size: 0.7rem;
          color: var(--brass);
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .numbers-split, .journal-split {
            grid-template-columns: 1fr;
          }
          .journal-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
