'use client';

import ArticleLayout from '@/components/ArticleLayout';

export default function SoilTestingArticle() {
  return (
    <ArticleLayout
      title="What soil testing actually tells you — and why most developers don't show you the results."
      tags={['Trust & Transparency', 'Real Estate Intelligence']}
      image="/project1.png"
      body={`Soil testing is one of the most important due diligence documents in any land purchase. It tells you what you are actually buying beneath the surface — load-bearing capacity, drainage, groundwater, and whether the land can support what you intend to build. The fact that most developers treat it as proprietary information is not an accident. It is a choice. We explain what soil testing means, how to read a report, and why Oltraya publishes its results by default.

A geotechnical investigation analyses the composition, load-bearing capacity, and drainage characteristics of land. It determines whether the soil can safely support construction, whether there are groundwater concerns, and whether any remediation is required before building.

Most developers do not share soil testing results with buyers. At Oltraya, soil testing reports are available for download on the project page — because a buyer making a decision of this size deserves to know exactly what they are buying.

The report will typically include bore log data showing soil composition at different depths, standard penetration test (SPT) values indicating bearing capacity, water table depth measurements, and recommendations for foundation design. If a developer cannot or will not show you this information, that reluctance tells you something important about how they view your role in the transaction.`}
      faqs={[
        {
          q: 'What is soil testing in real estate?',
          a: 'A geotechnical investigation that analyses the composition, load-bearing capacity, and drainage characteristics of land.',
        },
        {
          q: 'Can I ask a developer for a soil testing report?',
          a: 'Yes, and you should. A developer who refuses is protecting information you have a right to see.',
        },
        {
          q: 'Does Oltraya publish its soil testing reports?',
          a: 'Yes. The full report for Oltraya Verde is available for download on the project page without requiring registration or a sales conversation.',
        },
      ]}
      author="Oltraya Editorial"
      authorBio="Technical research and advisory team at Oltraya — providing independent analysis and document transparency for buyers."
      date="Jul 20, 2026"
    />
  );
}
