'use client';

import ArticleLayout from '@/components/ArticleLayout';

export default function RERAArticle() {
  return (
    <ArticleLayout
      title="How to read a RERA certificate — what it means, what it doesn't, and what to ask next."
      tags={['Development Process', 'Buyer Education']}
      image="/house2.jpg"
      body={`A genuinely useful comparative analysis. What you own in each case, how the assets appreciate differently, what the maintenance obligations are, what the resale market looks like, and how to think about which product suits which investor profile. Not a sales document for plotted development — an honest comparison that acknowledges when a flat is the right choice.

RERA — the Real Estate Regulatory Authority — was established to bring accountability and transparency to the Indian real estate market. A RERA certificate is the document that confirms a project has been registered with the authority and is legally permitted to be marketed and sold.

But what does the certificate actually tell you? And more importantly, what doesn't it tell you?

A RERA certificate shows the registration number, promoter details, approved layout, total plots or units, and the committed possession date. These are important facts. But registration alone does not guarantee quality of construction, design integrity, or the developer's commitment to their promises.

What you should check: Is the registration current and not expired? Does the possession date match what the developer has told you verbally? Do the project details — number of units, total area, amenities — match the brochure and marketing materials? Is the promoter entity the same as the one you are dealing with?

What you should ask next: Can I see the soil testing report? Are all environmental clearances in place? What happens if you miss the possession deadline? Can I review the sale agreement before committing? At Oltraya, we believe these questions should never make a developer uncomfortable. If they do, that discomfort is itself information.`}
      faqs={[
        {
          q: 'Is plotted development a better investment than a flat?',
          a: "It depends on the location, your holding period, and your intentions for the land. In high-growth infrastructure corridors, plotted land has historically outperformed vertical residential. In established urban markets with strong rental demand, a flat may offer better short-term returns.",
        },
        {
          q: 'What do I own when I buy a plot?',
          a: 'The land itself — with the right to build within local municipal guidelines.',
        },
        {
          q: 'Can I build whatever I want on a plot?',
          a: 'Within the FSI (Floor Space Index) and building regulations of the local planning authority. Your developer should provide the applicable guidelines for your specific plot.',
        },
      ]}
      author="Oltraya Editorial"
      authorBio="Legal and compliance team summaries from Oltraya — explaining regulatory documents in plain language for buyers." 
      date="May 05, 2026"
    />
  );
}
