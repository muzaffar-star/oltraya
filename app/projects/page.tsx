'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

const projects = [
  {
    id: 'oltraya-verde',
    slug: 'oltraya-verde',
    status: 'CURRENT PROJECT' as const,
    title: 'Oltraya Verde',
    location: 'Khalapur, NAINA Corridor',
    description: '9 acres of plotted development positioned at India\'s highest-potential land investment corridor',
    statusNote: 'Accepting Expressions of Interest',
    image: '/project1.png',
    features: [
      '9.1 Acres · NA Grade A Residences',
      'CCBA Designs Architecture',
      'Nature-Integrated Living',
      'Transparency by Design',
    ],
    exploreLabel: 'EXPLORE VERDE',
    category: 'current',
  },
  {
    id: 'oltraya-hills',
    slug: 'mumbai-3',
    status: 'UPCOMING PROJECT' as const,
    title: 'Oltraya Hills',
    location: 'Mumbai 3.0 Corridor — location to be announced',
    description: 'A private hillside community surrounded by nature.',
    statusNote: 'Coming Soon',
    image: '/project2.png',
    features: [],
    exploreLabel: 'DISCOVER MORE',
    comingSoon: true,
    category: 'upcoming',
  },
  {
    id: 'oltraya-reserve',
    slug: 'mumbai-3',
    status: 'UPCOMING PROJECT' as const,
    title: 'Oltraya Reserve',
    location: 'Mumbai 3.0 Corridor — location to be announced',
    description: 'Low density. High privacy. Designed to endure.',
    statusNote: 'Coming Soon',
    image: '/project3.png',
    features: [],
    exploreLabel: 'DISCOVER MORE',
    comingSoon: true,
    category: 'upcoming',
  },
];

const filters = ['ALL PROJECTS', 'CURRENT', 'UPCOMING', 'COMPLETED'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL PROJECTS');
  const [isMobile, setIsMobile] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const filtered = projects.filter((p) => {
    if (activeFilter === 'ALL PROJECTS') return true;
    if (activeFilter === 'CURRENT') return p.category === 'current';
    if (activeFilter === 'UPCOMING') return p.category === 'upcoming';
    if (activeFilter === 'COMPLETED') return p.category === 'completed';
    return true;
  });

  return (
    <>
      {/* Hero */}
      <HeroSection
        imageSrc="/projects_hero.png"
        imageAlt="Oltraya Projects"
        title="A Portfolio of Places."
        body={`Each Oltraya development is chosen before the world catches up.\nSelected for long-term value, designed for the people who will live in it.`}
        ctaLabel="Request the Prospectus"
        ctaHref="/contact"
        
      />

      {/* Filter tabs */}
      <div className="projects-filters">
        <div className="container">
          <div className="projects-filters__inner">
            {isMobile ? (
              <div className="projects-filter-dropdown">
                <button
                  type="button"
                  className="projects-filter-trigger"
                  onClick={() => setMobileFilterOpen((current) => !current)}
                  aria-expanded={mobileFilterOpen}
                  aria-controls="projects-filter-menu"
                >
                  <span>Filter projects</span>
                  <span className="projects-filter-trigger__value">{activeFilter}</span>
                </button>
                {mobileFilterOpen && (
                  <div id="projects-filter-menu" className="projects-filter-menu">
                    {filters.map((f) => (
                      <button
                        key={f}
                        type="button"
                        className={`projects-filter-menu__item${activeFilter === f ? ' active' : ''}`}
                        onClick={() => {
                          setActiveFilter(f);
                          setMobileFilterOpen(false);
                        }}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              filters.map((f) => (
                <button
                  key={f}
                  className={`projects-filter-btn${activeFilter === f ? ' active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Project list */}
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          {filtered.map((project) => (
            <div key={project.id} className="project-list-item">
              {/* Image */}
              <div className="project-list-item__image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Main body */}
              <div className="project-list-item__body">
                <span className="label" style={{ marginBottom: 16, display: 'inline-flex' }}>
                  {project.status}
                </span>
                <h2 className="project-list-item__title">{project.title}</h2>
                <p className="project-list-item__location">{project.location}</p>
                <p className="project-list-item__desc">{project.description}</p>
                {project.statusNote && (
                  <p className="project-list-item__note">{project.statusNote}</p>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="arrow-link"
                  style={{ marginTop: 24 }}
                >
                  {project.exploreLabel}
                </Link>
              </div>

              {/* Sidebar */}
              <div className="project-list-item__sidebar">
                {project.features.length > 0 ? (
                  <ul className="project-list-item__features">
                    {project.features.map((f, i) => (
                      <li key={i}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <circle cx="6" cy="6" r="5" stroke="var(--brass)" strokeWidth="1"/>
                          <circle cx="6" cy="6" r="2" fill="var(--brass)"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <span className="coming-soon-badge">COMING SOON</span>
                    <Link href="/contact" className="arrow-link" style={{ marginTop: 20 }}>
                      REGISTER INTEREST
                    </Link>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .projects-filters {
          border-bottom: 1px solid var(--ivory-darker);
          border-top: 1px solid var(--ivory-darker);
          background: var(--ivory);
        }
        .projects-filters__inner {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .projects-filter-dropdown {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 16px 0 0;
          max-width: 520px;
          margin-inline: auto;
        }

        .projects-filter-trigger {
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

        .projects-filter-trigger__value {
          color: var(--brass-light);
          letter-spacing: 0.08em;
          text-align: right;
        }

        .projects-filter-menu {
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

        .projects-filter-menu__item {
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

        .projects-filter-menu__item.active {
          color: var(--brass-light);
        }
        .projects-filter-btn {
          padding: 18px 36px;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--prussian);
          opacity: 0.5;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .projects-filter-btn.active,
        .projects-filter-btn:hover {
          opacity: 1;
          border-bottom-color: var(--prussian);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* Project list item */
        .project-list-item {
          display: grid;
          grid-template-columns: 320px 1fr 220px;
          gap: 0;
          border-bottom: 1px solid var(--ivory-darker);
          padding-bottom: 60px;
          margin-bottom: 60px;
        }
        .project-list-item__image {
          position: relative;
          height: 340px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .project-list-item:hover .project-list-item__image img {
          transform: scale(1.04);
        }
        .project-list-item__body {
          padding: 0 48px;
          display: flex;
          flex-direction: column;
        }
        .project-list-item__title {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 300;
          color: var(--prussian);
          margin-bottom: 8px;
          line-height: 1.1;
        }
        .project-list-item__location {
          font-size: 0.82rem;
          color: var(--prussian);
          opacity: 0.55;
          margin-bottom: 18px;
          font-style: italic;
        }
        .project-list-item__desc {
          font-size: 0.9rem;
          color: var(--prussian);
          opacity: 0.75;
          line-height: 1.7;
          max-width: 380px;
        }
        .project-list-item__note {
          font-size: 0.78rem;
          color: var(--prussian);
          opacity: 0.45;
          margin-top: 10px;
          font-style: italic;
        }
        .project-list-item__sidebar {
          padding: 0 0 0 32px;
          border-left: 1px solid var(--ivory-darker);
          display: flex;
          flex-direction: column;
          padding-top: 4px;
        }
        .project-list-item__features {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .project-list-item__features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--prussian);
          opacity: 0.75;
        }
        .coming-soon-badge {
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--brass);
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .project-list-item {
            grid-template-columns: 1fr;
          }
          .project-list-item__image { height: 260px; }
          .project-list-item__body { padding: 24px 0; }
          .project-list-item__sidebar {
            border-left: none;
            padding: 0;
            border-top: 1px solid var(--ivory-darker);
            padding-top: 20px;
          }
          .projects-filter-btn { padding: 14px 20px; }
          .projects-filters__inner {
            gap: 10px;
            justify-content: flex-start;
          }
          .projects-filter-dropdown {
            padding: 12px 0 0;
            max-width: none;
          }
        }
      `}</style>
    </>
  );
}
