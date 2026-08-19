 'use client';

import { useState } from 'react';
import Image from 'next/image';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(10,18,42,0.1)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          width: '100%', padding: '20px 0', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left', color: 'var(--prussian)', gap: 16,
        }}
      >
        <strong style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>{q}</strong>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>
          <path d="M5 8L10 13L15 8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <p style={{ paddingBottom: 20, fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, opacity: 0.8, color: 'var(--prussian)' }}>
          {a}
        </p>
      )}
    </div>
  );
}

interface ArticleLayoutProps {
  title: string;
  tags: string[];
  image: string;
  imageAlt?: string;
  dualImage?: string;
  body: string;
  faqs: { q: string; a: string }[];
  author?: string;
  authorBio?: string;
  date?: string;
}

export default function ArticleLayout({ title, tags, image, imageAlt, dualImage, body, faqs, author, authorBio, date }: ArticleLayoutProps) {
  const authorName = author || 'Oltraya Team';
  const authorBlurb = authorBio || 'Author bio goes here. A short paragraph about the author, their role, and why they are qualified to write on this topic.';
  const publishDate = date || '01 Jan 2026';

  return (
    <>
      <article className="article-page">
        {/* Header */}
        <header className="article-header">
          <h1>{title}</h1>
          <div className="article-tags">
            {tags.map((tag) => (
              <span key={tag} className="article-tag">{tag}</span>
            ))}
          </div>

          <div className="article-meta">
            <span className="article-date">{publishDate}</span>
            <span className="article-by">By {authorName}</span>
          </div>
        </header>

        {/* Hero image */}
        <div className={`article-hero ${dualImage ? 'article-hero--dual' : ''}`}>
          <div className="article-hero__img">
            <Image src={image} alt={imageAlt || title} fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 900px) 100vw, 900px" />
          </div>
          {dualImage && (
            <div className="article-hero__img">
              <Image src={dualImage} alt={`${imageAlt || title} secondary`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 450px" />
            </div>
          )}
        </div>

        {/* Author bio */}
        <div className="article-author">
          <div className="article-author__avatar">{authorName.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
          <div className="article-author__meta">
            <strong className="article-author__name">{authorName}</strong>
            <p className="article-author__bio">{authorBlurb}</p>
          </div>
        </div>

        {/* Body */}
        <div className="article-body">
          {body.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* FAQs */}
        {faqs.length > 0 && (
          <div className="article-faqs">
            <div className="article-faqs__divider" />
            <h3 className="article-faqs__title">FAQs</h3>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        )}
      </article>

      <style jsx>{`
        .article-page {
          background: var(--ivory);
          padding-top: 120px;
          padding-bottom: 80px;
        }

        .article-header {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          padding: 0 24px;
          margin-bottom: 48px;
        }

        .article-header h1 {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          line-height: 1.2;
          color: var(--prussian);
          margin-bottom: 24px;
        }

        .article-tags {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .article-tag {
          border: 1px solid rgba(10, 18, 42, 0.2);
          padding: 8px 20px;
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          color: var(--prussian);
        }

        .article-meta { display: flex; gap: 12px; justify-content: center; margin-top: 12px; color: rgba(10,18,42,0.7); }
        .article-date { font-size: 0.95rem; }
        .article-by { font-size: 0.95rem; }

        .article-hero {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
          margin-bottom: 60px;
        }

        .article-hero--dual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }

        .article-hero__img {
          position: relative;
          height: 500px;
          width: 100%;
        }

        .article-body {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .article-body p {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.8;
          color: var(--prussian);
          opacity: 0.85;
          margin-bottom: 20px;
        }

        .article-faqs {
          max-width: 800px;
          margin: 80px auto 0;
          padding: 0 24px;
        }

        .article-faqs__divider {
          width: 100%;
          height: 1px;
          background: rgba(10, 18, 42, 0.15);
          margin-bottom: 40px;
        }

        .article-faqs__title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 300;
          color: var(--brass);
          margin-bottom: 24px;
        }

        .article-author {
          max-width: 800px;
          margin: 0 auto 40px;
          display: flex;
          gap: 18px;
          align-items: center;
          padding: 0 24px;
        }
        .article-author__avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--prussian);
          color: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-family: var(--font-heading);
        }
        .article-author__name { display: block; font-weight: 600; margin-bottom: 6px; }
        .article-author__bio { margin: 0; color: rgba(10,18,42,0.9); opacity: 0.9; }

        @media (max-width: 768px) {
          .article-page {
            padding-top: 96px;
            padding-bottom: 64px;
          }

          .article-header,
          .article-hero,
          .article-body,
          .article-faqs,
          .article-author {
            padding-left: 16px;
            padding-right: 16px;
          }

          .article-header {
            margin-bottom: 32px;
          }

          .article-header h1 {
            font-size: clamp(1.9rem, 8vw, 2.6rem);
          }

          .article-meta {
            flex-direction: column;
            gap: 4px;
          }

          .article-hero {
            margin-bottom: 40px;
          }

          .article-hero--dual { grid-template-columns: 1fr; }
          .article-hero__img { height: 320px; }

          .article-author {
            flex-direction: column;
            align-items: flex-start;
          }

          .article-faqs {
            margin-top: 56px;
          }

          .article-faqs__title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
