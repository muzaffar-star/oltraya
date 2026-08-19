'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'HOME', href: '/' },
  { 
    label: 'PROJECTS', 
    href: '/projects',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Oltraya Verde', href: '/projects/oltraya-verde' },
      { label: 'Mumbai 3.0', href: '/projects/mumbai-3' },
    ]
  },
  { 
    label: 'ABOUT US', 
    href: '/about', 
    hasDropdown: true,
    dropdownItems: [
      { label: 'Our Philosophy', href: '/philosophy' },
      { label: 'Why Oltraya', href: '/why-oltraya' },
      { label: 'Investor & Landowner Group', href: '/investor-group' },
      { label: 'Leadership', href: '/leadership' }
    ]
  },
  { label: 'JOURNAL', href: '/journal' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'CONNECT', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const firstFocusable = useRef<HTMLElement | null>(null);
  const lastFocusable = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // lock scroll when mobile menu open
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen || !mobileRef.current) return;

    const node = mobileRef.current;
    const focusable = node.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable.current = focusable[0] || null;
    lastFocusable.current = focusable[focusable.length - 1] || null;

    // focus the first element for accessibility
    firstFocusable.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setMobileProjectsOpen(false);
        setMobileAboutOpen(false);
      }
      if (e.key === 'Tab') {
        if (!firstFocusable.current || !lastFocusable.current) return;
        if (e.shiftKey && document.activeElement === firstFocusable.current) {
          e.preventDefault();
          lastFocusable.current.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable.current) {
          e.preventDefault();
          firstFocusable.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="navbar__logo">
          <div className="navbar__logo-inner">
            <Image
              src="/logo/CMYK-Logo-with-Endorsement.png"
              alt="Oltraya"
              fill
              priority
              style={{ objectFit: 'contain', objectPosition: 'center', transform: 'scale(2.5)' }}
            />
          </div>
        </Link>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <div key={link.href} className="navbar__link-wrapper">
              <Link href={link.href} className="navbar__link">
                {link.label}
                {link.hasDropdown && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4 }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                )}
              </Link>
              {link.dropdownItems && (
                <div className="navbar__dropdown">
                  {link.dropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} className="navbar__dropdown-link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className={`navbar__hamburger${mobileOpen ? ' is-open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu (kept in DOM to allow transitions and accessibility) */}
      <div
        id="nav-mobile"
        ref={mobileRef}
        className={`navbar__mobile ${mobileOpen ? 'open' : 'closed'}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Primary navigation"
      >
        <div
          className={`navbar__backdrop ${mobileOpen ? 'open' : 'closed'}`}
          onClick={() => setMobileOpen(false)}
          aria-hidden={!mobileOpen}
        />
        <div className="navbar__mobile-inner">
          <button className="navbar__mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">Close</button>
          <Link
            href="/"
            className="navbar__mobile-plain-link"
            style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }}
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            HOME
          </Link>

          <div className="navbar__mobile-section">
            <button
              type="button"
              className="navbar__mobile-section-title"
              style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }}
              onClick={() => setMobileProjectsOpen((current) => !current)}
              aria-expanded={mobileProjectsOpen}
            >
              <span>PROJECTS</span>
              <span>{mobileProjectsOpen ? '−' : '+'}</span>
            </button>
            {mobileProjectsOpen && (
              <div className="navbar__mobile-submenu">
                <Link href="/projects" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1}>All Projects</Link>
                <Link href="/projects/oltraya-verde" className="navbar__mobile-sublink" style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }} onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1}>Oltraya Verde</Link>
                <Link href="/projects/mumbai-3" className="navbar__mobile-sublink" style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }} onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1}>Mumbai 3.0</Link>
              </div>
            )}
          </div>

          <div className="navbar__mobile-section">
            <button
              type="button"
              className="navbar__mobile-section-title"
              style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }}
              onClick={() => setMobileAboutOpen((current) => !current)}
              aria-expanded={mobileAboutOpen}
            >
              <span>ABOUT US</span>
              <span>{mobileAboutOpen ? '−' : '+'}</span>
            </button>
            {mobileAboutOpen && (
              <div className="navbar__mobile-submenu">
                <Link href="/about" className="navbar__mobile-sublink" style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }} onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1}>About</Link>
                <Link href="/philosophy" className="navbar__mobile-sublink" style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }} onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1}>Our Philosophy</Link>
                <Link href="/why-oltraya" className="navbar__mobile-sublink" style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }} onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1}>Why Oltraya</Link>
                <Link href="/investor-group" className="navbar__mobile-sublink" style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }} onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1}>Investor & Landowner Group</Link>
                <Link href="/leadership" className="navbar__mobile-sublink" style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }} onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1}>Leadership</Link>
              </div>
            )}
          </div>

          <Link
            href="/journal"
            className="navbar__mobile-plain-link"
            style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }}
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            JOURNAL
          </Link>

          <Link
            href="/faqs"
            className="navbar__mobile-plain-link"
            style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }}
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            className="navbar__mobile-plain-link"
            style={{ color: 'var(--ivory)', opacity: 1, WebkitTextFillColor: 'var(--ivory)' }}
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            CONNECT
          </Link>
        </div>
      </div>

      <style jsx>{`
        .navbar__link-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .navbar__logo { display: inline-block; }
        .navbar__logo-inner { position: relative; width: 140px; height: 40px; overflow: hidden; border-radius: 2px; }

        .navbar__dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translate(-50%, 10px);
          background: var(--prussian);
          min-width: 220px;
          display: flex;
          flex-direction: column;
          padding: 8px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 180ms ease, transform 180ms ease, visibility 180ms;
          border-radius: 8px;
          box-shadow: 0 8px 20px rgba(10,18,42,0.45);
          z-index: 9999;
          border: 1px solid rgba(255,255,255,0.03);
        }

        .navbar__link-wrapper:hover .navbar__dropdown {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, 0);
        }

        .navbar__dropdown-link {
          display: block;
          padding: 10px 18px;
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--ivory);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: background 150ms ease, color 150ms ease;
          border-radius: 6px;
          margin: 4px 0;
        }

        .navbar__dropdown-link:hover {
          background: rgba(255, 255, 255, 0.04);
          color: var(--brass);
        }

        .navbar__link {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ivory);
          opacity: 0.85;
          transition: opacity 0.3s ease;
          padding: 10px 0;
        }
        .navbar__link:hover { opacity: 1; }

        .navbar__mobile {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--prussian);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 32px;
          gap: 24px;
          overflow-y: auto;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 220ms ease, transform 220ms ease;
        }

        .navbar__mobile.open { opacity: 1; transform: translateY(0); }
        .navbar__mobile.closed { pointer-events: none; }
        .navbar__mobile-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 680px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 8px;
          padding: 12px 20px 32px;
        }
        .navbar__mobile-close {
          position: sticky;
          top: 0;
          align-self: flex-end;
          background: transparent;
          border: none;
          color: var(--ivory);
          font-size: 0.9rem;
          cursor: pointer;
          margin-bottom: 8px;
        }
        .navbar__backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.45); z-index: 0; opacity: 0; transition: opacity 220ms ease; pointer-events: none; }
        .navbar__backdrop.open { opacity: 1; pointer-events: auto; }

        .navbar__mobile-link:focus-visible,
        .navbar__mobile-sublink:focus-visible,
        .navbar__mobile-close:focus-visible,
        .navbar__hamburger:focus-visible {
          outline: 3px solid rgba(255, 215, 130, 0.95);
          outline-offset: 4px;
        }

        .navbar__mobile-link {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 300;
          color: var(--ivory);
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
          text-align: left;
          width: 100%;
          opacity: 1;
          -webkit-text-fill-color: var(--ivory);
        }
        .navbar__mobile-link:hover { color: var(--ivory); }

        .navbar__mobile-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(247, 242, 232, 0.08);
        }

        .navbar__mobile-section-title {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 6px 0;
          background: transparent;
          border: none;
          color: var(--ivory);
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 300;
          text-align: left;
          opacity: 1;
          -webkit-text-fill-color: var(--ivory);
        }

        .navbar__mobile-section-title:hover {
          color: var(--ivory);
        }

        .navbar__mobile-section-title span:last-child {
          font-size: 0.8rem;
          color: rgba(247, 242, 232, 0.75);
        }

        .navbar__mobile-submenu {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0 0 8px 16px;
        }

        .navbar__mobile-sublink {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--ivory);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
          text-align: left;
          width: 100%;
          opacity: 1;
          -webkit-text-fill-color: var(--ivory);
        }
        .navbar__mobile-sublink:hover { color: var(--ivory); }

        .navbar__mobile-plain-link {
          width: 100%;
          padding: 10px 0;
          color: var(--ivory);
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 300;
          text-align: left;
          border-bottom: 1px solid rgba(247, 242, 232, 0.08);
          opacity: 1;
          -webkit-text-fill-color: var(--ivory);
        }

        .navbar__mobile-plain-link:hover {
          color: var(--ivory);
        }

        .navbar__hamburger {
          background: transparent;
          border: none;
          display: none;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
          align-items: center;
          justify-content: center;
        }
        .navbar__hamburger span { display: block; width: 22px; height: 2px; background: var(--ivory); transition: transform 220ms ease, opacity 220ms ease; }
        .navbar__hamburger.is-open span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
        .navbar__hamburger.is-open span:nth-child(2) { opacity: 0; transform: translateX(-6px); }
        .navbar__hamburger.is-open span:nth-child(3) { transform: rotate(-45deg) translate(3px, -3px); }

        @media (max-width: 900px) {
          .navbar {
            height: 64px;
            padding: 0 16px;
          }

          .navbar__links {
            display: none;
          }

          .navbar__hamburger { display: flex; }
          .navbar__logo-inner { width: 92px; height: 32px; }
          .navbar__mobile {
            top: 64px;
            padding-top: 24px;
          }

          .navbar__mobile-inner {
            padding-inline: 16px;
          }

          .navbar__mobile-link {
            font-size: 1.45rem;
            color: var(--ivory) !important;
          }

          .navbar__mobile-sublink {
            color: var(--ivory) !important;
          }

          .navbar__mobile-section-title,
          .navbar__mobile-plain-link {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 901px) {
          .navbar__mobile { display: none; }
        }
      `}</style>
    </>
  );
}
