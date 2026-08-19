'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

export default function WhyOltrayaPage() {
  const cards = [
    {
      title: 'We take fewer projects. By design.',
      text: 'Oltraya will never be the largest developer in the market. That is not a limitation — it is a decision. Every project receives the complete attention of the founding team, from land selection to final handover. You will always know who is responsible for your investment.',
      image: '/house1.jpg',
      imageRight: true,
    },
    {
      title: 'Every document. Before you ask',
      text: 'Testing reports, regulatory approvals, construction timelines, payment plans — available in full, before you sign anything. Most developers consider this information proprietary. We consider withholding it a breach of trust.',
      image: '/project1.png',
      imageRight: false,
    },
    {
      title: 'Designed by architects. Not assembled by contractors.',
      text: 'Oltraya Verde is designed by CCBA Designs, founded by the late Prof. Christopher Charles Benninger — one of India\'s most respected architects. Every amenity, every pathway, every planted space has been considered by people who understand how design shapes the quality of a life.',
      image: '/project2.png',
      imageRight: true,
    },
    {
      title: 'We build in locations before the market catches up',
      text: 'Our land selection is informed by fifteen years of watching where Pune\'s premium market moved — and where it was going to move. We don\'t follow the market. We read it early and build before it confirms we were right.',
      image: '/courtyard.png',
      imageRight: false,
    },
  ];

  return (
    <>
      <HeroSection
        imageSrc="/why_hero.png"
        imageAlt="Why Oltraya"
        title="Why Oltraya"
        body="What makes the difference. And why it matters."
        
      />

      <section className="section" style={{ background: 'var(--ivory)', paddingBlock: '80px' }}>
        <div className="container">
          <div className="why-cards">
            {cards.map((card, idx) => (
              <div key={idx} className="why-card">
                {card.imageRight ? (
                  <>
                    <div className="why-card__text">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                    <div className="why-card__image">
                      <Image src={card.image} alt={card.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="why-card__image">
                      <Image src={card.image} alt={card.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="why-card__text">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ivory)', paddingBottom: '120px' }}>
        <div className="container">
          <div className="why-conclusion">
            <div className="why-conclusion__text">
              <h2>
                The outcome of all of this — the transparency, the design, the long-term thinking — is not just a better investment. It is peace of mind. That is what we are building toward. That is what Oltraya means.
              </h2>
            </div>
            <div className="why-conclusion__image">
              <Image src="/house2.jpg" alt="Peace of mind" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .why-cards {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .why-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid var(--ivory-darker);
          background: var(--ivory-dark);
          overflow: hidden;
        }

        .why-card__text {
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .why-card__text h3 {
          font-size: 2rem;
          margin-bottom: 24px;
          color: var(--prussian);
        }

        .why-card__text p {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.6;
          color: var(--prussian);
          opacity: 0.8;
        }

        .why-card__image {
          position: relative;
          min-height: 350px;
          height: 100%;
          width: 100%;
        }

        .why-conclusion {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-top: 80px;
        }

        .why-conclusion__text h2 {
          font-size: 2.2rem;
          line-height: 1.4;
          font-weight: 300;
          color: var(--prussian);
        }

        .why-conclusion__image {
          position: relative;
          height: 500px;
          width: 100%;
        }

        @media (max-width: 900px) {
          .why-card, .why-conclusion {
            grid-template-columns: 1fr;
          }
          
          .why-card__image {
            order: -1;
            height: 250px;
          }

          .why-card__text {
            padding: 30px;
          }

          .why-conclusion__text h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}
