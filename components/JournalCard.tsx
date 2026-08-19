'use client';

import Image from 'next/image';
import Link from 'next/link';

interface JournalCardProps {
  image: string;
  title: string;
  excerpt: string;
  readTime: string;
  date?: string;
  href?: string;
  size?: 'featured' | 'normal' | 'small';
}

export default function JournalCard({
  image,
  title,
  excerpt,
  readTime,
  href = '#',
  date,
  size = 'normal',
}: JournalCardProps) {
  if (size === 'small') {
    return (
      <div className="journal-card-small">
        <div className="journal-card-small__image">
          <Image src={image} alt={title} width={80} height={64} style={{ objectFit: 'cover' }} />
        </div>
        <div className="journal-card-small__body">
          <Link href={href}>
            <h4>{title}</h4>
            {date && <span className="journal-card-small__date">{date}</span>}
          </Link>
          <span className="journal-card-small__read">{readTime}</span>
        </div>
        <style jsx>{`
          .journal-card-small { display: flex; gap: 14px; align-items: flex-start; }
          .journal-card-small__image { position: relative; width: 80px; height: 64px; flex-shrink: 0; overflow: hidden; }
          .journal-card-small__body { display: flex; flex-direction: column; gap: 6px; }
          .journal-card-small__body h4 { font-size: 0.82rem; font-weight: 500; color: var(--prussian); line-height: 1.35; transition: color 0.2s; }
          .journal-card-small__body h4:hover { color: var(--brass); }
          .journal-card-small__read { font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--brass); }
            .journal-card-small__date { font-size: 0.7rem; color: var(--prussian); opacity: 0.8; }
        `}</style>
      </div>
    );
  }

  return (
    <article className={`journal-card${size === 'featured' ? ' journal-card--featured' : ''}`}>
      <div className="journal-card__image">
        {size === 'featured' ? (
          <Link href={href}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </Link>
        ) : (
          <Link href={href}>
            <Image src={image} alt={title} width={600} height={220} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} sizes="(max-width: 768px) 100vw, 33vw" />
          </Link>
        )}
      </div>
      <div className="journal-card__body">
        <Link href={href}>
          <h3 className="journal-card__title">{title}</h3>
        </Link>
        <p className="journal-card__excerpt">{excerpt}</p>
        <div className="journal-card__footer">
          <div>
            {date && <div className="journal-card__date">{date}</div>}
            <span className="journal-card__read">{readTime}</span>
          </div>
          <Link href={href} className="arrow-link" style={{ fontSize: '0.65rem' }}>
            READ ARTICLE
          </Link>
        </div>
      </div>

      <style jsx>{`
        .journal-card {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .journal-card--featured {
          flex-direction: row;
          gap: 32px;
          align-items: stretch;
        }
        .journal-card__image {
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .journal-card:not(.journal-card--featured) .journal-card__image {
          height: 220px;
        }
        .journal-card--featured .journal-card__image {
          flex: 1 1 60%;
          min-width: 320px;
          min-height: 420px;
          height: auto;
        }
        @media (max-width: 900px) {
          .journal-card--featured {
            flex-direction: column;
            gap: 18px;
          }
          .journal-card--featured .journal-card__image {
            min-width: 0;
            min-height: 240px;
            width: 100%;
            height: 260px;
            flex: none;
          }
          .journal-card--featured .journal-card__body { padding-left: 0; }
        }
        .journal-card--featured .journal-card__body { flex: 1 1 40%; padding-left: 32px; }
        .journal-card__image img { transition: transform 0.5s ease; display: block; }
        .journal-card:hover .journal-card__image img { transform: scale(1.04); }
        .journal-card__body {
          padding: 20px 0 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .journal-card--featured .journal-card__body { padding: 0; }
        .journal-card__title {
          font-family: var(--font-heading);
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          font-weight: 300;
          color: var(--prussian);
          line-height: 1.3;
          transition: color 0.2s;
        }
        .journal-card__title:hover { color: var(--brass); }
        .journal-card__excerpt {
          font-size: 0.82rem;
          color: var(--prussian);
          opacity: 0.7;
          line-height: 1.7;
        }
        .journal-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
        }
        .journal-card__read {
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--brass);
        }
        .journal-card__date { font-size: 0.78rem; color: var(--prussian); opacity: 0.85; margin-bottom: 6px; }

        @media (max-width: 768px) {
          .journal-card__footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .journal-card__body {
            padding-top: 16px;
          }

          .journal-card-small {
            align-items: center;
          }
        }
      `}</style>
    </article>
  );
}
