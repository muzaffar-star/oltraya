'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">

          {/* Logo */}
          <div className="footer__logo">
            <Link href="/">
              <div className="footer__logo-inner">
                <Image
                  src="/logo/CMYK-Logo-with-Endorsement.png"
                  alt="Oltraya"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center', transform: 'scale(2.9)' }}
                />
              </div>
            </Link>
          </div>

          {/* Nav links */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <Link href="/">HOME</Link>
            <Link href="/projects">PROJECTS</Link>
            <Link href="/about">ABOUT US</Link>
            <Link href="/journal">JOURNAL</Link>
            <Link href="/contact">CONNECT</Link>
          </nav>

          <div className="footer__sep"></div>

          {/* Contact */}
          <div className="footer__col">
            <p>Reach Out</p>
            <p>enquiries@oltraya.com</p>
            <p>Phone Number</p>
          </div>

          <div className="footer__sep"></div>

          {/* Legal */}
          <div className="footer__col">
            <Link href="/investor-group">Investor & Landowner</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>

          {/* Right: copyright + social */}
          <div className="footer__right">
            <p className="footer__copyright">
              © 2024 OLTRAYA REALTY<br />All Right Reserved
            </p>
            <div className="footer__social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="mailto:enquiries@oltraya.com" aria-label="Email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </footer>
      <style jsx>{`
        .footer {
          background: #090f1e; /* Extremely dark blue like the inspo */
          color: var(--ivory);
          padding: 24px 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .footer__inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer__logo-inner {
          position: relative;
          width: 140px;
          height: 40px;
          overflow: hidden;
        }

        .footer__nav {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer__nav a {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ivory);
          text-decoration: none;
          opacity: 0.85;
          transition: opacity 0.25s;
        }

        .footer__nav a:hover {
          opacity: 1;
        }

        .footer__sep {
          width: 1px;
          height: 48px;
          background: rgba(255, 255, 255, 0.15);
        }

        .footer__col {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--ivory);
          opacity: 0.85;
        }

        .footer__col p,
        .footer__col a {
          color: var(--ivory);
          text-decoration: none;
          transition: opacity 0.25s;
          margin: 0;
          font-size: inherit;
        }

        .footer__col a:hover {
          opacity: 1;
        }

        .footer__right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .footer__copyright {
          font-family: var(--font-body);
          font-size: 0.65rem;
          opacity: 0.6;
          line-height: 1.4;
        }

        .footer__social {
          display: flex;
          gap: 16px;
        }

        .footer__social a {
          color: var(--ivory);
          opacity: 0.8;
          transition: opacity 0.25s;
        }

        .footer__social a:hover {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .footer__inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 32px;
          }
          .footer__sep { display: none; }
          .footer__nav { flex-wrap: wrap; justify-content: center; }
          .footer__right { align-items: center; }
        }
      `}</style>
    </>
  );
}
