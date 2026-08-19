'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function OltrayaVerdePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is Oltraya Verde?',
      a: 'Oltraya Verde is a plotted development of approximately 9 acres in Khalapur, in the NAINA corridor — between Mumbai and Pune on the Expressway. The site has been designed by CCBA Designs, founded by the late Prof. Christopher Charles Benninger. Plots are available from 88 lakhs. The development includes a clubhouse, green trails, cycle track, and landscaped community spaces.',
    },
    {
      q: 'Where exactly is Oltraya Verde located?',
      a: 'Oltraya Verde is located in Khalapur, in the Sahyadri foothills, directly on the Mumbai-Pune Expressway corridor. It is approximately 15 minutes from Lonavala, 20 minutes from Pawna Lake, and 30 minutes from Matheran. Mumbai and Pune are both accessible directly via the Expressway.',
    },
    {
      q: 'What is the starting price of a plot at Oltraya Verde?',
      a: 'Plots at Oltraya Verde start from 88 lakhs. Full pricing and plot size breakdown are available in the prospectus — request it using the form on this page.',
    },
    {
      q: 'Is Oltraya Verde RERA registered?',
      a: 'RERA registration is in progress. All documents — including the RERA certificate, soil testing report, approvals, and construction timeline — will be available for download on this page.',
    },
    {
      q: 'Who is the architect of Oltraya Verde?',
      a: 'CCBA Designs — a world-renowned practice with nearly six decades of experience, founded by the late Prof. Christopher Charles Benninger (M.Arch Harvard, M.City Planning MIT). The only firm in India to receive six IIA National Excellence in Architecture Awards. Projects include IIT Hyderabad, IIM Calcutta, and the Suzlon One Earth headquarters — LEED Platinum and GRIHA Five Star certified.',
    },
    {
      q: 'Can I visit the Oltraya Verde site?',
      a: 'Yes. We conduct site visits for serious buyers. Request the prospectus or begin a conversation using the form below and we will arrange a visit. We will not pressure you to make a decision during or after the visit.',
    },
    {
      q: 'What is the possession timeline for Oltraya Verde?',
      a: 'The project is currently in pre-launch phase. Possession is approximately 24 months from launch — with buffer clearly stated in the agreement. The committed timeline will be registered with MahaRERA.',
    },
  ];

  const naturalPlaces = [
    { name: 'Lonavala', time: '15 mins', img: '/project3.png' },
    { name: 'Pawna Lake', time: '20 mins', img: '/project1.png' },
    { name: 'Matheran', time: '30 mins', img: '/house1.jpg' },
    { name: 'Karjat', time: '30 mins', img: '/project2.png' },
    { name: 'Alibaug', time: '1 hour', img: '/project3.png' },
    { name: 'Ambey Valley City', time: '30 mins', img: '/house1.jpg' },
  ];

  const infrastructure = [
    'Atal Setu (Mumbai Trans Harbour Link) — completed',
    'Navi Mumbai International Airport — under construction, anchor infrastructure of the NAINA corridor',
    'Missing Link, Mumbai-Pune Expressway — now open, saving approximately 30 minutes travel time',
    'Chirle Connector — links Atal Setu to Mumbai-Pune Expressway. MMRDA targeting February 2027.',
    'Metro expansion across MMR — ongoing',
    'Virar-Alibaug Multimodal Transport Corridor — Phase 1 underway.',
  ];

  const investmentPoints = [
    "Located within India's highest-potential land investment corridor — the Mumbai 3.0 / NAINA zone.",
    'Significant public and private investment committed to the corridor.',
    'Khopoli MMR identified by Colliers as a high-potential land investment location.',
    'Appreciation projected by third-party analysts through 2030.',
    'Significant land transaction activity in the corridor in recent years.',
  ];

  const arrivalSpaces = [
    { title: 'THE ROUNDABOUT', desc: 'A retained mango tree at the centre of a cobblestone roundabout — the first thing you see.', img: '/house1.jpg' },
    { title: 'THE AVENUE', desc: 'A Royal Palm and Gulmohar tree-lined approach road — a ceremonial entry into the community.', img: '/project1.png' },
    { title: 'THE GROVE', desc: 'A bamboo and Bird of Paradise planting that frames the entrance to each cluster.', img: '/project2.png' },
    { title: 'THE SIGNAGE COURT', desc: 'Brand signage on a white marble-finished wall with ambient landscape lighting.', img: '/project3.png' },
  ];

  const communitySpaces = [
    { title: 'THE CLUBHOUSE', desc: '543 sq.m of community space across two levels with indoor and outdoor areas.', img: '/project2.png' },
    { title: 'THE TRAIL', desc: 'Green walking paths connecting the development to nature.', img: '/project3.png' },
    { title: 'THE CYCLE TRACK', desc: 'A dedicated cycling route integrated into the landscape.', img: '/house1.jpg' },
    { title: 'THE BREAKOUT ZONES', desc: 'Landscaped rest and gathering areas distributed throughout.', img: '/project1.png' },
    { title: 'THE GATE', desc: 'A secured entry with boom barrier and green pergolas framing the welcome.', img: '/project2.png' },
  ];

  const designPrinciples = [
    { title: 'OPEN SPACES', desc: 'Generous plots with room to breathe, not just room to build.', img: '/project1.png' },
    { title: 'NATURAL LIGHT', desc: 'Orientation and layout planned to maximise morning and evening light.', img: '/project2.png' },
    { title: 'GREEN CORRIDORS', desc: 'Landscaping that reduces ambient temperature, noise, and stress.', img: '/project3.png' },
    { title: 'COMMUNITY BY DESIGN', desc: 'Layout that naturally creates connection rather than isolation.', img: '/house1.jpg' },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="vhero" style={{ position: 'relative' }}>
        <Image src="/project1.png" alt="Oltraya Verde" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
        <div className="vhero__overlay" />
        <div className="vhero__content container">
          <p className="vhero__eyebrow">📍 Khalapur, NAINA Corridor</p>
          <h1>Oltraya Verde</h1>
          <p className="vhero__sub">Not just a plot. A position.</p>
          <p className="vhero__body">
            9 acres of thoughtfully designed plotted development in the Sahyadri foothills — positioned at
            the inflection point of India&apos;s most significant urban expansion. Designed by CCBA Designs.
          </p>
          <a href="#enquire" className="btn btn-light" style={{ marginTop: 32, display: 'inline-flex' }}>
            Request the Prospectus
          </a>
        </div>
      </section>

      {/* ── 1. LAND CHOSEN ───────────────────── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="v-split">
            <div className="v-split__text">
              <p className="v-label">THE DEVELOPMENT</p>
              <h2>Land chosen with intention.<br />Designed for generations.</h2>
              <p className="v-body" style={{ marginTop: 24 }}>
                Every Oltraya development begins with a question most developers don&apos;t ask: will this still
                be the right decision in ten years? Oltraya Verde is our answer — 9 acres in the Sahyadri
                foothills, designed by one of India&apos;s most respected architectural practices.
              </p>
              <p className="v-body">
                The architecture and landscape design is by CCBA Designs, founded by the late Prof. Christopher
                Charles Benninger — a Harvard-educated planner whose work has shaped some of the most
                significant institutional and residential developments in Maharashtra.
              </p>
            </div>
            <div className="v-split__image" style={{ position: 'relative' }}>
              <Image src="/house1.jpg" alt="Oltraya Verde land" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. KHALAPUR ──────────────────────── */}
      <section className="section" style={{ background: 'var(--ivory-dark)', paddingTop: 0 }}>
        <div className="container">
          <div className="v-split v-split--reverse">
            <div className="v-split__text">
              <p className="v-label">LOCATION</p>
              <h2>Khalapur. Between two worlds.<br />Ahead of both.</h2>
              <p className="v-body" style={{ marginTop: 24 }}>
                Oltraya Verde is located in Khalapur — in the Sahyadri foothills, directly on the Mumbai-Pune
                Expressway corridor. It sits at the precise geographic midpoint between India&apos;s two largest
                economic centres, surrounded by some of Maharashtra&apos;s most celebrated natural destinations.
              </p>
            </div>
            <div className="v-split__image" style={{ position: 'relative' }}>
              <Image src="/project2.png" alt="Khalapur location" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. NATURAL SURROUNDINGS ──────────── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <p className="v-label">SURROUNDINGS</p>
          <h2 style={{ marginBottom: 40 }}>Natural Surroundings</h2>
          <div className="v-grid-6">
            {naturalPlaces.map((place, i) => (
              <div key={i} className="v-place-card">
                <div className="v-place-card__img" style={{ position: 'relative' }}>
                  <Image src={place.img} alt={place.name} fill sizes="(max-width: 600px) 50vw, 17vw" style={{ objectFit: 'cover' }} />
                </div>
                <p className="v-place-card__name">{place.name}</p>
                <p className="v-place-card__time">{place.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CONNECTIVITY ──────────────────── */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="v-split">
            <div className="v-split__image" style={{ position: 'relative' }}>
              <Image src="/project1.png" alt="Connectivity" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="v-split__text">
              <p className="v-label">CONNECTIVITY</p>
              <h2 style={{ marginBottom: 32 }}>Getting Here</h2>
              <ul className="v-bullet-list">
                <li>Mumbai — direct expressway access</li>
                <li>Pune — direct expressway access</li>
                <li>Mumbai Trans Harbour Link — completed, connecting the wider corridor</li>
                <li>Navi Mumbai International Airport — anchor infrastructure of the NAINA corridor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. INVESTMENT CORRIDOR ───────────── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <p className="v-label">THE OPPORTUNITY</p>
          <h2 style={{ marginBottom: 40 }}>Investment Corridor</h2>
          <div className="v-grid-5">
            {investmentPoints.map((text, i) => (
              <div key={i} className="v-info-box">
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. THE NEXT MUMBAI ───────────────── */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="v-split">
            <div className="v-split__text">
              <p className="v-label">MUMBAI 3.0</p>
              <h2>The Next Mumbai isn&apos;t coming.<br />It&apos;s already being built.</h2>
              <p className="v-label" style={{ marginTop: 40 }}>THE INVESTMENT THESIS</p>
              <p className="v-body" style={{ marginTop: 16 }}>
                For a long time, Khopoli was seen as a stop between Mumbai and Pune. That perception is
                changing — not because of hype, but because connectivity, infrastructure investment, and
                residential demand are beginning to align in a way they have not before.
              </p>
              <p className="v-body">
                As connectivity improves, the perception of distance changes. And when the perception of
                distance changes, residential patterns follow. That is the thesis behind Oltraya Verde.
              </p>
            </div>
            <div className="v-split__image" style={{ position: 'relative' }}>
              <Image src="/house1.jpg" alt="Mumbai 3.0" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. SIX INFRASTRUCTURE PROJECTS ──── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="v-split">
            <div className="v-split__image" style={{ position: 'relative' }}>
              <Image src="/project2.png" alt="Infrastructure" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="v-split__text">
              <p className="v-label">INFRASTRUCTURE</p>
              <h2 style={{ marginBottom: 32 }}>The Six Infrastructure Projects Now Converging</h2>
              <div className="v-infra-grid">
                {infrastructure.map((item, i) => (
                  <div key={i} className="v-info-box">
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. DESIGN PHILOSOPHY / CCBA ──────── */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="v-split">
            <div className="v-split__text">
              <p className="v-label">ARCHITECTURE</p>
              <h2 style={{ marginBottom: 24 }}>Design Philosophy</h2>
              <p className="v-label" style={{ marginBottom: 12 }}>ARCHITECT CREDIT</p>
              <p className="v-body">
                Designed by CCBA Designs — founded by the late Prof. Christopher Charles Benninger,
                M.Arch Harvard, M.City Planning MIT.
              </p>
              <p className="v-label" style={{ marginTop: 32, marginBottom: 12 }}>TIMELESS DESIGN. FOR HOW PEOPLE ACTUALLY LIVE.</p>
              <p className="v-body">
                CCBA is the only firm in India to have received six IIA National Excellence in Architecture
                Awards. Their projects include Lodha Belmondo, IIT Hyderabad, and IIM campuses —
                LEED Platinum and GRIHA Five Star certified.
              </p>
            </div>
            <div className="v-ccba-col">
              <div className="v-ccba-img" style={{ position: 'relative' }}>
                <Image src="/house1.jpg" alt="CCBA Architect" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="v-ccba-badge">
                <span className="v-ccba-wordmark">CCBA</span>
                <p>The firm&apos;s founding belief was that the spaces we design should bring out the poetry in the place. That philosophy is not decorative. It is structural.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FOUR DESIGN PRINCIPLES ────────── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <p className="v-label">DESIGN</p>
          <h2 style={{ marginBottom: 40 }}>Four Design Principles</h2>
          <div className="v-grid-4">
            {designPrinciples.map((item, i) => (
              <div key={i} className="v-principle-card">
                <div className="v-principle-card__img" style={{ position: 'relative' }}>
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="v-principle-card__body">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. THE MASTERPLAN ───────────────── */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="v-split">
            <div className="v-split__image v-split__image--contain" style={{ position: 'relative' }}>
              <Image src="/project1.png" alt="Masterplan" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'contain' }} />
            </div>
            <div className="v-split__text">
              <p className="v-label">THE MASTERPLAN</p>
              <h2 style={{ marginBottom: 8 }}>The Masterplan</h2>
              <p className="v-label" style={{ color: 'var(--brass)', marginBottom: 32 }}>36,220 SQ.M. EVERY SQUARE FOOT CONSIDERED</p>
              <ul className="v-spec-list">
                <li><span className="v-spec-val">36,220 sq.m</span><span className="v-spec-key">Total plot area (approx. 9 acres)</span></li>
                <li><span className="v-spec-val">19,768 sq.m</span><span className="v-spec-key">Saleable plot area</span></li>
                <li><span className="v-spec-val">3,622 sq.m</span><span className="v-spec-key">Open space (10% of total)</span></li>
                <li><span className="v-spec-val">3,622 sq.m</span><span className="v-spec-key">Amenity space</span></li>
                <li><span className="v-spec-val">9,182 sq.m</span><span className="v-spec-key">Internal road area</span></li>
                <li><span className="v-spec-val">543 sq.m</span><span className="v-spec-key">Clubhouse</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. DESIGNED SPACES ──────────────── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <p className="v-label">AMENITIES</p>
          <h2 style={{ marginBottom: 16 }}>Designed spaces. Not listed features.</h2>
          <p className="v-body" style={{ maxWidth: 640, marginBottom: 56 }}>
            Every amenity at Oltraya Verde has been designed by CCBA — not selected from a standard
            developer checklist. These are named, considered spaces with a specific purpose and a specific
            feeling. The difference is visible the moment you arrive.
          </p>

          <p className="v-sublabel" style={{ marginBottom: 32 }}>THE ARRIVAL EXPERIENCE</p>
          <div className="v-grid-4" style={{ marginBottom: 80 }}>
            {arrivalSpaces.map((item, i) => (
              <div key={i} className="v-amenity-card">
                <div className="v-amenity-card__img" style={{ position: 'relative' }}>
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="v-amenity-card__label v-amenity-card__label--brass">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="v-sublabel" style={{ marginBottom: 32 }}>THE COMMUNITY</p>
          <div className="v-grid-5">
            {communitySpaces.map((item, i) => (
              <div key={i} className="v-amenity-card">
                <div className="v-amenity-card__img" style={{ position: 'relative' }}>
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="v-amenity-card__label v-amenity-card__label--prussian">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. EVERYTHING YOU NEED TO KNOW ─── */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="v-split">
            <div className="v-split__text">
              <p className="v-label">TRANSPARENCY</p>
              <h2>Everything you need to know.<br />Before you ask.</h2>
              <p className="v-body" style={{ marginTop: 24, marginBottom: 32 }}>
                This is what &apos;No surprises by design&apos; means in practice. Every document that matters
                is available to buyers before they sign.
              </p>
              <ul className="v-bullet-list">
                <li>Soil Testing Report — available to buyers before signing</li>
                <li>RERA Registration — number and portal link</li>
                <li>Environmental Clearance — available on request</li>
                <li>Construction Timeline — shared at booking, with buffers clearly stated</li>
                <li>Payment Plan — every stage, every amount, no hidden charges</li>
              </ul>
            </div>
            <div className="v-split__image" style={{ position: 'relative' }}>
              <Image src="/project3.png" alt="Documents" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. PRICING ──────────────────────── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <p className="v-label">PRICING</p>
          <h2>Clear, honest, nothing hidden.</h2>
          <p className="v-sublabel" style={{ marginTop: 16, marginBottom: 8 }}>PLOT SIZES AND PRICING</p>
          <p className="v-body" style={{ marginBottom: 48 }}>All-inclusive pricing — no hidden charges, no surprises at registration.</p>

          <div className="v-pricing-grid" style={{ marginBottom: 64 }}>
            <div className="v-pricing-card">
              <div className="v-pricing-card__img" style={{ position: 'relative' }}>
                <Image src="/project1.png" alt="Starting plot" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="v-pricing-card__body">
                <h3>Starting Plot Size</h3>
                <p>1,200 sq ft — starting from <strong>₹88 lakhs</strong> all-inclusive.</p>
              </div>
            </div>
            <div className="v-pricing-card">
              <div className="v-pricing-card__img" style={{ position: 'relative' }}>
                <Image src="/project2.png" alt="Largest plot" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="v-pricing-card__body">
                <h3>Largest Plot Size</h3>
                <p>2,500 sq ft — up to <strong>₹1.82 crores</strong> all-inclusive.</p>
              </div>
            </div>
          </div>

          <div className="v-split">
            <div className="v-split__text">
              <p className="v-sublabel" style={{ marginBottom: 24 }}>PROJECT SPECIFICATIONS</p>
              <ul className="v-bullet-list">
                <li>Total land parcel: 9.1 acres</li>
                <li>Total plots: 143 — NA Grade A villa plotted development</li>
                <li>Saleable plot area: 5.1 acres</li>
                <li>Open space and amenities: 2 acres</li>
                <li>Internal roads: 2 acres of wide internal roads</li>
                <li>FSI: 1.6 — Ground plus 1 floor permissible</li>
                <li>Clubhouse: 543 sq.m across two levels</li>
              </ul>
            </div>
            <div className="v-split__image" style={{ position: 'relative' }}>
              <Image src="/house1.jpg" alt="Project specs" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. TIMELINE ─────────────────────── */}
      <section className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <p className="v-label">TIMELINE</p>
          <h2 style={{ marginBottom: 16 }}>Timeline</h2>
          <p className="v-body" style={{ maxWidth: 560, marginBottom: 80 }}>
            The price you see is the price you pay. No additional charges at booking, no surprises at
            registration, no costs that appear after you sign.
          </p>
          <div className="v-timeline">
            <div className="v-timeline__line" />
            <div className="v-timeline__step">
              <div className="v-timeline__circle">
                <p>Project currently in pre-launch phase</p>
              </div>
              <span className="v-timeline__label">NOW</span>
            </div>
            <div className="v-timeline__step">
              <div className="v-timeline__circle">
                <p>RERA — project sanctions received. Filing in progress.</p>
              </div>
              <span className="v-timeline__label">NEAR TERM</span>
            </div>
            <div className="v-timeline__step">
              <div className="v-timeline__circle">
                <p>Possession: approximately 24 months from launch — with buffer clearly stated in agreement</p>
              </div>
              <span className="v-timeline__label">~24 MONTHS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 15. GALLERY ──────────────────────── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <p className="v-label">GALLERY</p>
          <h2 style={{ marginBottom: 40 }}>Gallery</h2>
          <div className="v-gallery">
            <div className="v-gallery__large" style={{ position: 'relative' }}>
              <Image src="/project1.png" alt="Gallery 1" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="v-gallery__small">
              <div className="v-gallery__item" style={{ position: 'relative' }}>
                <Image src="/project2.png" alt="Gallery 2" fill sizes="25vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="v-gallery__item" style={{ position: 'relative' }}>
                <Image src="/project3.png" alt="Gallery 3" fill sizes="25vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="v-gallery__item" style={{ position: 'relative' }}>
                <Image src="/house1.jpg" alt="Gallery 4" fill sizes="25vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="v-gallery__item" style={{ position: 'relative' }}>
                <Image src="/house2.jpg" alt="Gallery 5" fill sizes="25vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 16. ENQUIRE ──────────────────────── */}
      <section id="enquire" className="section" style={{ background: 'var(--ivory-dark)' }}>
        <div className="container">
          <div className="v-enquire">
            {/* Download links */}
            <div className="v-downloads">
              <p className="v-label">DOCUMENTS</p>
              <h3 style={{ marginBottom: 32 }}>Download Links</h3>
              <div className="v-downloads__list">
                {['Project Brochure', 'Masterplan', 'Soil Testing Report', 'Payment Plan'].map((doc, i) => (
                  <a key={i} href="#" className="v-download-link">
                    <span>{doc}</span>
                    <span className="v-download-link__format">PDF</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="v-form-col">
              <p className="v-label">GET IN TOUCH</p>
              <h3 style={{ marginBottom: 8 }}>Enquire Now</h3>
              <p className="v-body" style={{ marginBottom: 32 }}>The best investment decisions start with the right conversation.</p>
              <form className="v-form" onSubmit={(e) => e.preventDefault()}>
                <div className="v-form__row">
                  <input type="text" placeholder="Name" className="v-form__input" />
                  <input type="tel" placeholder="Phone Number" className="v-form__input" />
                </div>
                <select className="v-form__input v-form__select">
                  <option value="">Plot preference (size / budget)</option>
                  <option>1,200 sq ft — from ₹88 lakhs</option>
                  <option>2,500 sq ft — up to ₹1.82 crores</option>
                </select>
                <select className="v-form__input v-form__select">
                  <option value="">Best time to call</option>
                  <option>Morning (9am–12pm)</option>
                  <option>Afternoon (12pm–5pm)</option>
                  <option>Evening (5pm–8pm)</option>
                </select>
                <button type="submit" className="v-form__submit">
                  <span>Request Prospectus</span>
                  <span className="v-form__whatsapp">WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 17. FAQs ─────────────────────────── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <p className="v-label">FAQs</p>
          <h2 style={{ marginBottom: 48 }}>Oltraya Verde FAQs</h2>
          <div className="v-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="v-faq-item">
                <button className="v-faq-item__trigger" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="v-faq-item__icon" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {openFaq === i && (
                  <div className="v-faq-item__answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STYLES ───────────────────────────── */}
      <style jsx>{`
        /* ── Hero ── */
        .vhero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .vhero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,18,42,0.82) 0%, rgba(10,18,42,0.35) 55%, rgba(10,18,42,0.1) 100%);
          z-index: 1;
        }
        .vhero__content {
          position: relative;
          z-index: 2;
          padding-bottom: 80px;
          color: var(--ivory);
        }
        .vhero__eyebrow {
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          opacity: 0.75;
          margin-bottom: 16px;
        }
        .vhero__content h1 {
          color: var(--ivory);
          margin-bottom: 16px;
        }
        .vhero__sub {
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-weight: 300;
          color: var(--brass-light);
          margin-bottom: 16px;
        }
        .vhero__body {
          max-width: 520px;
          opacity: 0.88;
          line-height: 1.75;
          color: var(--ivory);
        }

        /* ── Labels ── */
        .v-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--brass);
          margin-bottom: 16px;
        }
        .v-label::after {
          content: '';
          display: inline-block;
          width: 32px;
          height: 1px;
          background: var(--brass);
        }
        .v-sublabel {
          font-family: var(--font-body);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--prussian);
          opacity: 0.5;
        }

        /* ── Body text ── */
        .v-body {
          font-family: var(--font-body);
          font-size: clamp(0.9rem, 1.2vw, 1rem);
          line-height: 1.75;
          color: var(--prussian);
          opacity: 0.82;
          margin-bottom: 20px;
        }

        /* ── Split layouts ── */
        .v-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .v-split--reverse {
          direction: rtl;
        }
        .v-split--reverse > * {
          direction: ltr;
        }
        .v-split__image {
          position: relative;
          width: 100%;
          height: 520px;
        }
        .v-split__image--contain {
          background: rgba(255,255,255,0.4);
          border: 1px solid rgba(10,18,42,0.08);
        }

        /* ── Bullet list ── */
        .v-bullet-list {
          list-style: disc;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .v-bullet-list li {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--prussian);
          opacity: 0.82;
        }

        /* ── Info box (bordered tile) ── */
        .v-info-box {
          border: 1px solid rgba(10,18,42,0.15);
          padding: 28px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.35);
          min-height: 120px;
        }
        .v-info-box p {
          font-size: 0.9rem;
          line-height: 1.65;
          text-align: center;
          opacity: 0.85;
        }

        /* ── Grids ── */
        .v-grid-6 {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }
        .v-grid-5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .v-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .v-infra-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        /* ── Place card (natural surroundings) ── */
        .v-place-card { text-align: center; }
        .v-place-card__img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .v-place-card__name {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--prussian);
          margin-bottom: 2px;
        }
        .v-place-card__time {
          font-family: var(--font-body);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--brass);
        }

        /* ── CCBA column ── */
        .v-ccba-col {
          display: flex;
          flex-direction: column;
        }
        .v-ccba-img {
          position: relative;
          width: 100%;
          height: 320px;
        }
        .v-ccba-badge {
          background: var(--prussian);
          color: var(--ivory);
          padding: 32px;
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }
        .v-ccba-wordmark {
          font-family: var(--font-heading);
          font-size: 2.4rem;
          font-weight: 300;
          letter-spacing: 0.12em;
          color: var(--ivory);
          flex-shrink: 0;
        }
        .v-ccba-badge p {
          font-size: 0.72rem;
          line-height: 1.7;
          opacity: 0.75;
          color: var(--ivory);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ── Design principle cards ── */
        .v-principle-card {
          border: 1px solid rgba(10,18,42,0.12);
          background: rgba(255,255,255,0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .v-principle-card__img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
        }
        .v-principle-card__body {
          padding: 24px 20px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .v-principle-card__body h4 {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--prussian);
        }
        .v-principle-card__body p {
          font-size: 0.88rem;
          line-height: 1.65;
          opacity: 0.78;
        }

        /* ── Spec list (masterplan) ── */
        .v-spec-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .v-spec-list li {
          display: flex;
          flex-direction: column;
          padding: 16px 0;
          border-bottom: 1px solid rgba(10,18,42,0.1);
          gap: 4px;
        }
        .v-spec-val {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 300;
          color: var(--prussian);
        }
        .v-spec-key {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--prussian);
          opacity: 0.55;
        }

        /* ── Amenity cards (overlapping label) ── */
        .v-amenity-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .v-amenity-card__img {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
        }
        .v-amenity-card__label {
          width: 82%;
          padding: 20px 16px;
          margin-top: -36px;
          position: relative;
          z-index: 2;
          text-align: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }
        .v-amenity-card__label--brass {
          background: var(--brass-light);
          color: var(--prussian);
        }
        .v-amenity-card__label--prussian {
          background: var(--prussian);
          color: var(--ivory);
        }
        .v-amenity-card__label h4 {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .v-amenity-card__label--brass h4 { color: var(--prussian); }
        .v-amenity-card__label--prussian h4 { color: var(--ivory); }
        .v-amenity-card__label p {
          font-size: 0.72rem;
          line-height: 1.55;
          opacity: 0.8;
        }

        /* ── Pricing ── */
        .v-pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .v-pricing-card {
          border: 1px solid rgba(10,18,42,0.12);
          background: rgba(255,255,255,0.3);
          overflow: hidden;
        }
        .v-pricing-card__img {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
        }
        .v-pricing-card__body {
          padding: 28px;
        }
        .v-pricing-card__body h3 {
          font-weight: 300;
          margin-bottom: 8px;
        }
        .v-pricing-card__body p {
          opacity: 0.8;
          line-height: 1.65;
        }

        /* ── Timeline ── */
        .v-timeline {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 860px;
        }
        .v-timeline__line {
          position: absolute;
          top: 110px;
          left: 12%;
          right: 12%;
          height: 1px;
          background: var(--brass);
          z-index: 1;
        }
        .v-timeline__step {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 30%;
          gap: 16px;
        }
        .v-timeline__circle {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1px solid var(--brass);
          background: var(--ivory-dark);
          box-shadow: 0 0 0 8px var(--ivory-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }
        .v-timeline__circle p {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--prussian);
          opacity: 0.85;
        }
        .v-timeline__label {
          font-family: var(--font-body);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--brass);
        }

        /* ── Gallery ── */
        .v-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          height: 640px;
        }
        .v-gallery__large {
          position: relative;
          height: 100%;
        }
        .v-gallery__small {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .v-gallery__item {
          position: relative;
        }

        /* ── Enquire ── */
        .v-enquire {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .v-downloads__list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .v-download-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid rgba(10,18,42,0.12);
          font-size: 0.88rem;
          color: var(--prussian);
          opacity: 0.85;
          transition: opacity var(--transition), color var(--transition);
        }
        .v-download-link:hover { opacity: 1; color: var(--brass); }
        .v-download-link__format {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brass);
          border: 1px solid var(--brass);
          padding: 2px 6px;
        }

        /* ── Form ── */
        .v-form { display: flex; flex-direction: column; gap: 16px; }
        .v-form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .v-form__input {
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: 1px solid rgba(10,18,42,0.2);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--prussian);
          outline: none;
          transition: border-color var(--transition);
          appearance: none;
        }
        .v-form__input:focus { border-color: var(--brass); }
        .v-form__input::placeholder { opacity: 0.5; }
        .v-form__select { color: var(--prussian); opacity: 0.7; }
        .v-form__submit {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 18px 24px;
          background: var(--prussian);
          color: var(--ivory);
          border: none;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background var(--transition);
        }
        .v-form__submit:hover { background: rgba(10,18,42,0.85); }
        .v-form__whatsapp {
          background: #25D366;
          color: white;
          padding: 6px 14px;
          border-radius: 2px;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
        }

        /* ── FAQs ── */
        .v-faq-list { display: flex; flex-direction: column; gap: 0; max-width: 860px; }
        .v-faq-item { border-bottom: 1px solid rgba(10,18,42,0.12); }
        .v-faq-item__trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          font-weight: 300;
          color: var(--prussian);
          cursor: pointer;
          text-align: left;
          gap: 24px;
        }
        .v-faq-item__icon {
          font-size: 1.5rem;
          font-weight: 200;
          color: var(--brass);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .v-faq-item__answer {
          padding: 0 0 24px;
        }
        .v-faq-item__answer p {
          font-size: 0.95rem;
          line-height: 1.75;
          opacity: 0.8;
          max-width: 680px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .v-grid-6 { grid-template-columns: repeat(3, 1fr); }
          .v-timeline { flex-direction: column; align-items: center; gap: 40px; }
          .v-timeline__line { display: none; }
          .v-timeline__step { width: 100%; }
        }
        @media (max-width: 900px) {
          .v-split, .v-enquire { grid-template-columns: 1fr; gap: 40px; }
          .v-split--reverse { direction: ltr; }
          .v-split__image { height: 360px; }
          .v-grid-5 { grid-template-columns: repeat(2, 1fr); }
          .v-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .v-infra-grid { grid-template-columns: 1fr; }
          .v-gallery { grid-template-columns: 1fr; height: auto; }
          .v-gallery__large { height: 300px; }
          .v-pricing-grid { grid-template-columns: 1fr; }
          .v-form__row { grid-template-columns: 1fr; }
          .v-enquire { grid-template-columns: 1fr; }
          .v-ccba-badge { flex-direction: column; gap: 16px; }
        }
        @media (max-width: 600px) {
          .v-grid-6, .v-grid-5, .v-grid-4 { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}
