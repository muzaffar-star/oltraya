'use client';

import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  pillars?: {
    icon: React.ReactNode;
    label: string;
  }[];
  exploreLinkLabel?: string;
  exploreLinkHref?: string;
  overlayStrength?: 'light' | 'medium' | 'heavy' | 'none';
  // allow disabling the overlay when images already include haze
  // pass 'none' to skip rendering the overlay
  // (default changed below)
  minHeight?: string;
}

export default function HeroSection({
  title,
  subtitle,
  body,
  ctaLabel,
  ctaHref = '#',
  imageSrc,
  imageAlt,
  pillars,
  exploreLinkLabel,
  exploreLinkHref = '#',
  overlayStrength = 'medium',
  minHeight = '100svh',
}: HeroSectionProps) {
  const overlayMap: { [k in 'light' | 'medium' | 'heavy' | 'none']: string } = {
    light: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 100%)',
    medium: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)',
    heavy: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.35) 100%)',
    none: '',
  };

  return (
    <section className="hero" style={{ minHeight }}>
      {/* Background image */}
      <div className="hero__bg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
      </div>

      {/* Overlay (render only when requested) */}
      {overlayStrength !== 'none' && (
        <div className="hero__overlay" style={{ background: overlayMap[overlayStrength] }} />
      )}

      {/* Content */}
      <div className="hero__content">
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        <h1>{title}</h1>
        {body && <p className="hero-body">{body}</p>}
        {ctaLabel && (
          <Link href={ctaHref} className="btn btn-light">
            {ctaLabel}
          </Link>
        )}

        {/* Pillars row */}
        {pillars && pillars.length > 0 && (
          <div className="hero__pillars">
            {pillars.map((pillar, i) => (
              <div key={i} className="hero__pillar">
                <div className="hero__pillar-icon">{pillar.icon}</div>
                <span className="hero__pillar-label">{pillar.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Explore link */}
        {exploreLinkLabel && (
          <Link href={exploreLinkHref} className="arrow-link" style={{ marginTop: 24, display: 'inline-flex' }}>
            {exploreLinkLabel}
          </Link>
        )}
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero__content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          padding: 40px 24px;
          color: var(--ivory);
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: flex-start;
        }

        .hero__content > * {
          max-width: 760px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(1.6rem, 3.5vw, 3.2rem);
          line-height: 1.05;
          text-wrap: balance;
        }

        .hero-subtitle,
        .hero-body {
          margin: 0;
        }

        .hero__pillars {
          display: flex;
          gap: 40px;
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(247, 242, 232, 0.15);
          flex-wrap: wrap;
        }
        .hero__pillar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }
        .hero__pillar-icon {
          color: var(--brass);
          opacity: 0.9;
        }
        .hero__pillar-label {
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(247, 242, 232, 0.75);
          line-height: 1.5;
          max-width: 80px;
        }
        @media (max-width: 900px) {
          .hero__content {
            padding: 24px 16px 32px;
            align-items: center;
            text-align: center;
            gap: 14px;
          }

          .hero__content > * {
            max-width: 100%;
          }

          .hero h1 {
            font-size: clamp(2rem, 7vw, 3rem);
          }

          .hero__pillars {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px 12px;
            width: 100%;
            margin-top: 24px;
            padding-top: 20px;
          }

          .hero__pillar {
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            min-width: 0;
          }

          .hero__pillar-label {
            max-width: none;
            font-size: 0.68rem;
            line-height: 1.35;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .arrow-link {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
