'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

export default function InvestorGroupPage() {
  return (
    <>
      <HeroSection
        imageSrc="/investor_landowner_hero.png"
        imageAlt="Investor and Landowner Group"
        title={
          <>
            We build on the right land.<br />Finding it is the hardest part
          </>
        }
        body="If you are a landowner, investor, or institution with land in Maharashtra's high-growth corridors — we would like to speak with you."
        
      />

      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="investor-intro">
            <div className="investor-intro__left">
              <h2>Your land deserves a developer who understands what it took to acquire it.</h2>
              <p>
                Land in Maharashtra's high-growth corridors is not acquired easily. It takes patience, foresight, capital, and a willingness to act before the market confirms you were right. The people who hold this land have already demonstrated the intelligence we look for in a development partner.
              </p>
              <div className="investor-intro__image">
                <Image src="/house1.jpg" alt="Maharashtra Landscape" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            
            <div className="investor-intro__right">
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h4>TRANSPARENT DEVELOPMENT TERMS</h4>
                  <p>Every clause explained, no structures you didn't agree to.</p>
                </div>
                <div className="benefit-card">
                  <h4>DESIGNED BY CCBA DESIGNS</h4>
                  <p>Named architectural practice, not a generic contractor.</p>
                </div>
                <div className="benefit-card">
                  <h4>FULL REGULATORY COMPLIANCE BEFORE ANY MARKETING BEGINS</h4>
                  <p>Your land is never at legal risk.</p>
                </div>
                <div className="benefit-card">
                  <h4>A FOUNDING TEAM WITH FIFTEEN YEARS OF PUNE MARKET KNOWLEDGE</h4>
                  <p>We know what this land is worth.</p>
                </div>
                <div className="benefit-image-card">
                  <Image src="/courtyard.png" alt="Sunrise landscape" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="benefit-card">
                  <h4>A BRAND BUILT FOR THE LONG TERM</h4>
                  <p>Our reputation is the collateral we bring to every partnership.</p>
                </div>
              </div>
              
              <p className="stewardship-text">
                What we offer in return is not just development expertise. It is stewardship. We treat every parcel we develop as if we intend to live on it — because the buyers we attract are people who will. That accountability runs through every design decision, every regulatory filing, and every conversation with every buyer who purchases a plot on land you entrusted to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="fewer-projects">
            <div className="fewer-projects__left">
              <h2>
                We take fewer projects.<br />We execute them completely.
              </h2>
              <p>
                We are building a portfolio defined by the quality of its decisions, not its volume. Every project we accept reflects a clear belief that the land, the timing, the regulatory pathway, and the design potential are all aligned. That discipline is what protects our partners. And what makes Oltraya a brand worth building on.
              </p>
            </div>
            <div className="fewer-projects__right">
              <div className="fewer-projects__image">
                <Image src="/project1.png" alt="Project Aerial" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 40, fontSize: '2.5rem', color: 'var(--prussian)' }}>Land Acquisition Criteria</h2>
          
          <div className="criteria-grid">
            <div className="criteria-card">
              <p>Location within an identified high-growth corridor — NAINA, Mumbai 3.0, or equivalent.</p>
            </div>
            <div className="criteria-card">
              <p>Minimum 5 acres — we do not develop parcels below this threshold.</p>
            </div>
            <div className="criteria-card">
              <p>Clear title and regulatory pathway — we do not work with encumbered land.</p>
            </div>
            <div className="criteria-card">
              <p>Design potential for community-led plotted or villa development.</p>
            </div>
            <div className="criteria-card">
              <p>Long-term appreciation fundamentals that we can demonstrate to buyers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ivory-dark)', paddingBlock: '80px' }}>
        <div className="container">
          <div className="begin-conversation">
            <div className="begin-conversation__left">
              <h2 style={{ fontSize: '2.5rem', color: 'var(--prussian)', marginBottom: 24 }}>Begin A Conversation</h2>
              <p style={{ opacity: 0.8, marginBottom: 24, lineHeight: 1.6 }}>
                If your land meets these criteria — or if you're not sure and would like a frank assessment — we are open to that conversation.
              </p>
              <p style={{ fontWeight: 500 }}>
                Write to: <a href="mailto:partnerships@oltraya.com" style={{ textDecoration: 'underline' }}>partnerships@oltraya.com</a>
              </p>
            </div>
            <div className="begin-conversation__right">
                <div className="brand-block">
                <Image src="/logo/White-Logo-with-Endorsement.png" alt="Oltraya" width={250} height={100} style={{ width: '60%', height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .investor-intro {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 60px;
        }

        .investor-intro__left h2 {
          font-size: 2.2rem;
          line-height: 1.3;
          margin-bottom: 24px;
          color: var(--prussian);
        }

        .investor-intro__left p {
          font-family: var(--font-body);
          line-height: 1.7;
          opacity: 0.8;
          margin-bottom: 40px;
          color: var(--prussian);
        }

        .investor-intro__image {
          position: relative;
          width: 100%;
          height: 300px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .benefit-card {
          border: 1px solid var(--brass);
          padding: 30px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .benefit-card h4 {
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
          color: var(--prussian);
          font-weight: 500;
        }

        .benefit-card p {
          font-family: var(--font-body);
          font-size: 0.85rem;
          line-height: 1.6;
          opacity: 0.8;
          color: var(--prussian);
        }

        .benefit-image-card {
          position: relative;
          min-height: 200px;
          border: 1px solid var(--brass);
        }

        .stewardship-text {
          font-family: var(--font-body);
          line-height: 1.8;
          opacity: 0.85;
          color: var(--prussian);
          font-size: 1rem;
        }

        .fewer-projects {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .fewer-projects__left h2 {
          font-size: 2.5rem;
          line-height: 1.3;
          margin-bottom: 24px;
          color: var(--prussian);
        }

        .fewer-projects__left p {
          font-family: var(--font-body);
          line-height: 1.7;
          opacity: 0.8;
          color: var(--prussian);
        }

        .fewer-projects__image {
          position: relative;
          height: 400px;
          width: 100%;
        }

        .criteria-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .criteria-card {
          border: 1px solid var(--brass);
          padding: 40px 20px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .criteria-card p {
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--prussian);
          opacity: 0.9;
        }

        .begin-conversation {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .brand-block {
          background: var(--prussian);
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1100px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .criteria-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .investor-intro {
            grid-template-columns: 1fr;
          }
          .fewer-projects {
            grid-template-columns: 1fr;
          }
          .begin-conversation {
            grid-template-columns: 1fr;
          }
          .criteria-grid {
            grid-template-columns: 1fr;
          }
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
