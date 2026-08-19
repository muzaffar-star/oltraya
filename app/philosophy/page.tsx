'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export default function PhilosophyPage() {
  return (
    <>
      <HeroSection
        imageSrc="/philosophy_hero.png"
        imageAlt="Philosophy"
        title="Philosophy"
        body={`Having no negative surprises is the real luxury\nIn real estate, surprises are never positive. They are disruptions that cost time, money, and peace of mind. We built Oltraya to eliminate them — not through hope, but through design.`}
        ctaLabel="Request the Prospectus"
        ctaHref="/contact"
        
      />

      {/* The Oltraya Belief */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="belief-grid">
            <div className="belief-text">
              <h2 style={{ marginBottom: 24 }}>The Oltraya Belief</h2>
              <p style={{ fontStyle: 'italic', fontWeight: 500, letterSpacing: '0.02em', marginBottom: 24, fontSize: '0.9rem' }}>
                LUXURY IS NOT DEFINED BY WHAT YOU SEE.<br />IT IS DEFINED BY WHAT YOU NEVER HAVE TO WORRY ABOUT.
              </p>
              <p style={{ opacity: 0.8, lineHeight: 1.8 }}>
                Through thoughtful design, disciplined execution, and radical transparency, we create places that offer something increasingly rare: peace of mind. That is what we are building toward. That is what every process, every document, and every conversation at Oltraya is designed to deliver.
              </p>
            </div>
            <div className="belief-image">
              <div style={{ position: 'relative', height: '100%', minHeight: '300px' }}>
                <Image src="/house1.jpg" alt="Sunrise landscape" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Pillars */}
      <section className="section" style={{ background: 'var(--ivory-dark)', paddingBlock: 100 }}>
        <div className="container">
          <div className="pillars-layout">
            {/* Pillar 1 */}
            <div className="pillar-card text-card">
              <h4 className="pillar-num">PILLAR 1</h4>
              <h3 className="pillar-title">Radical Transparency</h3>
              <p className="pillar-subtitle">WE TELL YOU THE BAD NEWS FIRST. THAT'S THE WHOLE DIFFERENCE</p>
              <div className="pillar-content">
                <p>
                  Every document that matters — testing, approvals, environmental clearances, construction timelines — is available to our buyers before they ask. We don't manage information. We share it. Because bad news doesn't age well, and the longer a developer waits to disclose a setback, the more it looks like deception.
                </p>
                <p>
                  Every buyer receives proactive updates at each construction milestone — without needing to ask. If something changes, we communicate it immediately. You will hear it from us first. That is what peace of mind looks like in practice.
                </p>
              </div>
            </div>

            <div className="pillar-image-card">
              <div style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
                <Image src="/house2.jpg" alt="Transparency" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>

            <div className="pillar-image-card">
              <div style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
                <Image src="/project1.png" alt="Pre-emptive risk" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card text-card">
              <h4 className="pillar-num">PILLAR 2</h4>
              <h3 className="pillar-title">Pre-emptive Risk Engineering</h3>
              <p className="pillar-subtitle">WE SPEND MORE TIME BEFORE WE START SO YOU NEVER WORRY AFTER.</p>
              <div className="pillar-content">
                <p>
                  Our commitment is to have critical approvals in place before marketing begins. In a corridor like NAINA, where regulatory frameworks are active and evolving, compliance clarity before launch is both ethical and commercially smart.
                </p>
                <p>
                  We build realistic buffers into every timeline and communicate those ranges clearly. It is better to under-promise and over-deliver than to manufacture a crisis.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card text-card">
              <h4 className="pillar-num">PILLAR 3</h4>
              <h3 className="pillar-title">Quality Control as a Ritual</h3>
              <p className="pillar-subtitle">WHAT WE SHOW IS WHAT WE DELIVER</p>
              <div className="pillar-content">
                <p>
                  The most common betrayal in Indian real estate is the gap between what was shown and what was delivered. The marble that became tile. The ceiling height that quietly dropped.
                </p>
                <p>
                  Our commitment is to establish material and finish specifications in writing before any sale — and to hold ourselves to those specifications through delivery. What you see in the materials schedule is what you receive at handover. That commitment is in your agreement.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="pillar-card text-card">
              <h4 className="pillar-num">PILLAR 4</h4>
              <h3 className="pillar-title">The Founder's Promise</h3>
              <p className="pillar-subtitle">OUR COMMITMENT IS COMMUNICATION- BEFORE YOU HAVE TO ASK.</p>
              <div className="pillar-content">
                <p>
                  If a problem arises — and in construction, problems do arise — we communicate it immediately, with a solution already in hand. We stay involved, stay honest, and stay accountable long after handover. Our advisory roots mean that when we say we stay with you beyond possession, we mean it — not as a line on a brochure, but as a practice.
                </p>
                <p>
                  Everything Oltraya builds — every process, every document, every conversation — is designed to give you something increasingly rare in this market: the peace of mind that comes from knowing exactly where your investment stands, at every stage, without having to ask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .belief-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .pillars-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .pillar-card {
          border: 1px solid var(--ivory-darker);
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: var(--ivory);
        }

        .pillar-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--prussian);
          margin-bottom: 16px;
        }

        .pillar-title {
          font-size: 1.8rem;
          margin-bottom: 24px;
        }

        .pillar-subtitle {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          font-weight: 500;
          text-transform: uppercase;
          margin-bottom: 32px;
          color: var(--prussian);
        }

        .pillar-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-size: 0.85rem;
          opacity: 0.85;
          line-height: 1.7;
        }

        .pillar-image-card {
          border: 1px solid var(--ivory-darker);
          padding: 24px;
          background: var(--ivory);
        }

        @media (max-width: 900px) {
          .belief-grid {
            grid-template-columns: 1fr;
          }
          .belief-image {
            height: 300px;
          }
          .pillars-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
