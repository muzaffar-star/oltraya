'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export default function ConnectPage() {
  return (
    <>
      <HeroSection
        imageSrc="/connect_hero.png"
        imageAlt="Connect"
        title={
          <>
            The Best Investment Decisions<br />
            Start With the Right<br />
            Conversation
          </>
        }
        body="We don't have a sales team. We have people who have spent years understanding this market deeply enough to have a genuinely useful conversation. That's what we're offering."
        
      />

      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="connect-split">
            {/* Left side info */}
            <div className="connect-info">
              <div className="connect-info__card">
                <Image src="/logo/White-Logo-with-Endorsement.png" alt="Oltraya Logo" width={300} height={100} style={{ width: '60%', height: 'auto' }} />
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: 24, marginTop: 40 }}>Reach Out:</h3>
              <div className="connect-details">
                <p>Phone: [to be confirmed]</p>
                <p>Email: enquiries@oltraya.com</p>
                <p>WhatsApp: [to be confirmed]</p>
                <p>Office address: [to be confirmed]</p>
              </div>
            </div>

            {/* Right side form */}
            <div className="connect-form-container">
              <h2 style={{ fontSize: '2rem', marginBottom: 12 }}>Enquire Now</h2>
              <p style={{ opacity: 0.8, marginBottom: 32, fontSize: '0.9rem' }}>The best investment decisions start with the right conversation.</p>
              
              <form className="connect-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Name" required className="connect-input" />
                <input type="tel" placeholder="Phone Number" required className="connect-input" />
                <input type="email" placeholder="Email Address" required className="connect-input" />
                
                <select className="connect-input" defaultValue="">
                  <option value="" disabled hidden>I am</option>
                  <option value="buyer">A Buyer</option>
                  <option value="investor">An Investor</option>
                  <option value="landowner">A Landowner</option>
                  <option value="other">Other</option>
                </select>

                <textarea placeholder="Message (Optional)" rows={5} className="connect-input connect-textarea"></textarea>

                <button type="submit" className="btn btn-brass" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
                  Send My Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .connect-split {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: flex-start;
        }

        .connect-info__card {
          background: var(--prussian);
          padding: 60px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connect-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 0.95rem;
          color: var(--prussian);
          opacity: 0.85;
        }

        .connect-form-container {
          border: 1px solid var(--ivory-darker);
          padding: 48px;
          background: var(--ivory);
        }

        .connect-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .connect-input {
          width: 100%;
          padding: 16px;
          background: transparent;
          border: 1px solid var(--ivory-darker);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--prussian);
        }

        .connect-input:focus {
          outline: none;
          border-color: var(--prussian);
        }

        .connect-textarea {
          resize: vertical;
        }

        select.connect-input {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A122A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 16px;
        }

        @media (max-width: 900px) {
          .connect-split {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .connect-form-container {
            padding: 32px 24px;
          }
        }
      `}</style>
    </>
  );
}
