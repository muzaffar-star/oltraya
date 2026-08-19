'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  status: 'CURRENT PROJECT' | 'UPCOMING PROJECT' | 'COMPLETED PROJECT';
  title: string;
  location: string;
  description: string;
  statusNote?: string;
  features?: string[];
  exploreLabel?: string;
  exploreHref?: string;
  comingSoon?: boolean;
  registerHref?: string;
  layout?: 'list' | 'grid';
}

export default function ProjectCard({
  image,
  status,
  title,
  location,
  description,
  statusNote,
  features,
  exploreLabel = 'EXPLORE',
  exploreHref = '#',
  comingSoon = false,
  registerHref = '#',
  layout = 'list',
}: ProjectCardProps) {
  if (layout === 'grid') {
    return (
      <div className="project-card-grid">
        <div className="project-card-grid__image">
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="project-card-grid__body">
          <h4>{title}</h4>
          <p>{location}</p>
        </div>
        <style jsx>{`
          .project-card-grid { display: flex; flex-direction: column; gap: 12px; }
          .project-card-grid__image { position: relative; height: 200px; overflow: hidden; }
          .project-card-grid__image img { transition: transform 0.5s ease; }
          .project-card-grid:hover .project-card-grid__image img { transform: scale(1.04); }
          .project-card-grid__body h4 { font-size: 0.95rem; font-weight: 500; color: var(--prussian); margin-bottom: 4px; }
          .project-card-grid__body p { font-size: 0.78rem; color: var(--brass); letter-spacing: 0.04em; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="project-card">
      {/* Image */}
      <div className="project-card__image">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
      </div>

      {/* Main info */}
      <div className="project-card__body">
        <span className="label" style={{ marginBottom: 16, display: 'inline-flex' }}>{status}</span>
        <h2 className="project-card__title">{title}</h2>
        <p className="project-card__location">{location}</p>
        <p className="project-card__desc">{description}</p>
        {statusNote && <p className="project-card__status-note">{statusNote}</p>}
        <Link href={exploreHref} className="arrow-link" style={{ marginTop: 20 }}>
          {exploreLabel}
        </Link>
      </div>

      {/* Features / sidebar */}
      <div className="project-card__sidebar">
        {features && features.length > 0 && (
          <ul className="project-card__features">
            {features.map((f, i) => (
              <li key={i}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="var(--brass)" strokeWidth="1"/>
                  <circle cx="6" cy="6" r="2" fill="var(--brass)"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>
        )}
        {comingSoon && (
          <>
            <span className="project-card__coming-soon">COMING SOON</span>
            <Link href={registerHref} className="arrow-link" style={{ marginTop: 16 }}>
              REGISTER INTEREST
            </Link>
          </>
        )}
      </div>

      <style jsx>{`
        .project-card {
          display: grid;
          grid-template-columns: 320px 1fr 220px;
          gap: 0;
          border-bottom: 1px solid var(--ivory-darker);
          padding-bottom: 60px;
          margin-bottom: 60px;
        }
        .project-card__image {
          position: relative;
          height: 340px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .project-card__image img { transition: transform 0.6s ease; }
        .project-card:hover .project-card__image img { transform: scale(1.04); }
        .project-card__body {
          padding: 0 40px;
          display: flex;
          flex-direction: column;
        }
        .project-card__title {
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 300;
          color: var(--prussian);
          margin-bottom: 6px;
          line-height: 1.1;
        }
        .project-card__location {
          font-size: 0.8rem;
          color: var(--prussian);
          opacity: 0.6;
          margin-bottom: 16px;
          font-style: italic;
        }
        .project-card__desc {
          font-size: 0.9rem;
          color: var(--prussian);
          opacity: 0.8;
          line-height: 1.7;
          max-width: 380px;
        }
        .project-card__status-note {
          font-size: 0.78rem;
          color: var(--prussian);
          opacity: 0.5;
          margin-top: 10px;
          font-style: italic;
        }
        .project-card__sidebar {
          padding: 0 0 0 32px;
          border-left: 1px solid var(--ivory-darker);
          display: flex;
          flex-direction: column;
          padding-top: 8px;
        }
        .project-card__features {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .project-card__features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--prussian);
          opacity: 0.75;
        }
        .project-card__coming-soon {
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--brass);
          font-weight: 500;
        }
        @media (max-width: 900px) {
          .project-card {
            grid-template-columns: 1fr;
          }
          .project-card__image { height: 260px; }
          .project-card__body { padding: 24px 0; }
          .project-card__sidebar { border-left: none; padding: 0; border-top: 1px solid var(--ivory-darker); padding-top: 20px; }
        }
        @media (max-width: 768px) {
          .project-card {
            padding-bottom: 36px;
            margin-bottom: 36px;
          }

          .project-card__body {
            padding: 20px 0;
          }

          .project-card__title {
            font-size: clamp(1.5rem, 8vw, 2.2rem);
          }

          .project-card__sidebar {
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
