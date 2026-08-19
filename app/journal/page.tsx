'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import JournalCard from '@/components/JournalCard';

const journalCategories = [
  'ALL INSIGHTS',
  'REAL ESTATE INTELLIGENCE',
  'DESIGN PHILOSOPHY',
  'DEVELOPMENT PROCESS',
  'TRANSPARENCY & TRUST',
  'PUNE & GROWTH CORRIDORS',
  'BUYER EDUCATION'
];

const articles = [
  {
    id: 1,
    title: 'The Most Expensive Thing in Real Estate is a Surprise.',
    excerpt: 'In fifteen years of advising buyers across Pune\'s premium market, we heard versions of the same story hundreds of times.',
    image: '/house1.jpg',
    readTime: '8 MIN READ',
    href: '/journal/the-most-expensive-thing',
  },
  {
    id: 2,
    title: 'What soil testing actually tells you — and why most developers don\'t show you the results.',
    excerpt: 'Soil testing is one of the most important due diligence documents in any land purchase.',
    image: '/project1.png',
    readTime: '6 MIN READ',
    href: '/journal/soil-testing',
  },
  {
    id: 3,
    title: 'Why Khalapur is where Mumbai grows next.',
    excerpt: 'The investment thesis for the NAINA corridor — what it is, why the infrastructure commitments are real.',
    image: '/project2.png',
    readTime: '7 MIN READ',
    href: '/journal/khalapur-mumbai',
  },
  {
    id: 4,
    title: 'How to read a RERA certificate — what it means, what it doesn\'t, and what to ask next.',
    excerpt: 'A genuinely useful comparative analysis. What you own in each case, how the assets appreciate differently.',
    image: '/house2.jpg',
    readTime: '8 MIN READ',
    href: '/journal/rera-certificate',
  },
  {
    id: 5,
    title: 'Why the design of a space determines its value — and what most developers get wrong.',
    excerpt: 'Environmental psychology applied to residential development. How natural light, green corridors, community layout affect daily experience.',
    image: '/project3.png',
    readTime: '10 MIN READ',
    href: '/journal/design-determines-value',
  },
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState('ALL INSIGHTS');
  const [isMobile, setIsMobile] = useState(false);
  const [mobileTopicOpen, setMobileTopicOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <HeroSection
        imageSrc="/journal_hero.png"
        imageAlt="Journal"
        title="Journal"
        body={`Thinking clearly about land, design, and the long term\nThe Oltraya Journal is where we share what we know — about markets, design, transparency, and the decisions that shape a good investment.`}
        ctaLabel="Request the Prospectus"
        ctaHref="/contact"
        
      />

      {/* Featured Section */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="journal-featured-split">
            <div className="journal-featured-main">
              <JournalCard
                title="The Most Expensive Thing in Real Estate is a Surprise."
                excerpt="In fifteen years of advising buyers across Pune's premium market, we heard versions of the same story hundreds of times. A purchase made in good faith. A possession that didn't match the promise. A cost that appeared after the agreement was signed. A timeline that quietly doubled. Real estate surprises are never positive — and the industry has been normalising them for decades. Oltraya exists because we decided not to."
                image="/house1.jpg"
                readTime="8 MIN READ"
                date="Aug 09, 2026"
                size="featured"
                href="/journal/the-most-expensive-thing"
              />
            </div>
            <div className="journal-sidebar">
              <JournalCard
                title="What soil testing actually tells you — and why most developers don't show you the results."
                excerpt=""
                image="/project1.png"
                readTime="6 MIN READ"
                date="Jul 20, 2026"
                size="small"
                href="/journal/soil-testing"
              />
              <JournalCard
                title="Why Khalapur is where Mumbai grows next."
                excerpt=""
                image="/project2.png"
                readTime="7 MIN READ"
                date="Jun 11, 2026"
                size="small"
                href="/journal/khalapur-mumbai"
              />
              <JournalCard
                title="How to read a RERA certificate"
                excerpt=""
                image="/house2.jpg"
                readTime="8 MIN READ"
                date="May 05, 2026"
                size="small"
                href="/journal/rera-certificate"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h4 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 24, textTransform: 'uppercase' }}>EXPLORED BY TOPIC</h4>
          {isMobile ? (
            <div className="journal-topic-dropdown">
              <button
                type="button"
                className="journal-topic-trigger"
                onClick={() => setMobileTopicOpen((current) => !current)}
                aria-expanded={mobileTopicOpen}
                aria-controls="journal-topic-menu"
              >
                <span>Choose a topic</span>
                <span className="journal-topic-trigger__value">{activeCategory}</span>
              </button>
              {mobileTopicOpen && (
                <div id="journal-topic-menu" className="journal-topic-menu">
                  {journalCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`journal-topic-menu__item${activeCategory === cat ? ' active' : ''}`}
                      onClick={() => {
                        setActiveCategory(cat);
                        setMobileTopicOpen(false);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="journal-topics">
              {journalCategories.map((cat) => (
                <button
                  key={cat}
                  className={`topic-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Grid */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="journal-grid">
            {articles.map((article) => (
              <JournalCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                readTime={article.readTime}
                date={"Aug 01, 2026"}
                href={article.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container">
          <div className="newsletter-split">
            <div className="newsletter-image">
              <Image src="/house1.jpg" alt="Newsletter" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="newsletter-form-container">
              <h3 style={{ fontSize: '1.5rem', marginBottom: 16 }}>Receive Thoughtful Insights</h3>
              <p style={{ opacity: 0.8, marginBottom: 32 }}>Monthly insights on real estate, design, and long-term value. No spam. Ever.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter Your Email" required className="newsletter-input" />
                <button type="submit" className="btn btn-brass" style={{ width: '100%', justifyContent: 'center' }}>SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .journal-featured-split {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
        }

        .journal-sidebar {
          display: flex;
          flex-direction: column;
          gap: 32px;
          border-left: 1px solid var(--ivory-darker);
          padding-left: 40px;
        }

        .journal-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .journal-topic-dropdown {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 520px;
          margin-inline: auto;
        }

        .journal-topic-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border: 1px solid rgba(168, 131, 69, 0.35);
          background: linear-gradient(180deg, rgba(10,18,42,0.98) 0%, rgba(10,18,42,0.92) 100%);
          color: var(--ivory);
          padding: 14px 16px;
          font-family: var(--font-body);
          font-size: 0.76rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 14px;
          box-shadow: 0 12px 24px rgba(10,18,42,0.12);
        }

        .journal-topic-trigger__value {
          color: var(--brass-light);
          letter-spacing: 0.08em;
          text-align: right;
        }

        .journal-topic-menu {
          position: static;
          display: flex;
          flex-direction: column;
          padding: 8px;
          margin-top: 10px;
          background: rgba(10,18,42,0.98);
          border: 1px solid rgba(168, 131, 69, 0.2);
          border-radius: 14px;
          box-shadow: 0 16px 32px rgba(10,18,42,0.24);
        }

        .journal-topic-menu__item {
          width: 100%;
          text-align: left;
          padding: 12px 10px;
          background: transparent;
          border: none;
          color: var(--ivory);
          font-family: var(--font-body);
          font-size: 0.74rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .journal-topic-menu__item.active {
          color: var(--brass-light);
        }

        .topic-btn {
          border: 1px solid var(--ivory-darker);
          background: transparent;
          color: var(--prussian);
          font-size: 0.75rem;
          padding: 16px 24px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .topic-btn:hover, .topic-btn.active {
          background: var(--prussian);
          color: var(--ivory);
          border-color: var(--prussian);
        }

        .journal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .newsletter-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid var(--ivory-darker);
        }

        .newsletter-image {
          position: relative;
          min-height: 400px;
        }

        .newsletter-form-container {
          padding: 60px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--ivory-dark);
        }

        .newsletter-input {
          width: 100%;
          padding: 16px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--prussian);
          margin-bottom: 32px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--prussian);
        }

        .newsletter-input:focus {
          outline: none;
          border-bottom-width: 2px;
        }

        @media (max-width: 900px) {
          .journal-featured-split { grid-template-columns: 1fr; }
          .journal-sidebar { border-left: none; padding-left: 0; padding-top: 40px; border-top: 1px solid var(--ivory-darker); }
          .journal-grid { grid-template-columns: repeat(2, 1fr); }
          .newsletter-split { grid-template-columns: 1fr; }
          .newsletter-form-container { padding: 40px 24px; }
          .journal-topic-dropdown {
            max-width: none;
          }
        }
        @media (max-width: 600px) {
          .journal-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
