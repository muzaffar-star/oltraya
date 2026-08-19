'use client';

import ArticleLayout from '@/components/ArticleLayout';

export default function DesignValueArticle() {
  return (
    <ArticleLayout
      title="Why the design of a space determines its value — and what most developers get wrong."
      tags={['Buyer Education', 'Design Philosophy']}
      image="/project3.png"
      dualImage="/courtyard.png"
      body={`Environmental psychology applied to residential development. How natural light, green corridors, community layout, and pathway design affect the daily experience of living in a space — and therefore its long-term value and resale appeal. Draws on published research. Explains the specific design decisions at Oltraya Verde and why they were made. Written by Chandni Rav — the behavioural science background gives this article genuine authority that no generic marketing copy can replicate.

The relationship between design quality and property value is well documented but poorly understood in the Indian market. Most developers treat design as a finishing exercise — selecting tiles, paint colours, and fixture brands. The decisions that actually determine how a space feels to live in happen much earlier: orientation, spacing, pathway logic, natural light angles, vegetation planning, and the relationship between private and communal spaces.

At Oltraya Verde, every one of these decisions was made by CCBA Designs — a practice founded by the late Prof. Christopher Charles Benninger, one of India's most respected architects. The design philosophy is not decorative. It is structural. It shapes how residents move through the community, how natural light enters living spaces at different times of day, how green corridors reduce ambient temperature and create natural gathering points.

Research in environmental psychology consistently shows that these factors — often invisible to buyers reviewing a brochure — have a measurable impact on wellbeing, satisfaction, and long-term property value. Developments designed with these principles retain value better, attract more discerning buyers on resale, and create communities where people genuinely want to live.

The difference between a development that photographs well and one that lives well is the quality of the decisions that came before the first brick was laid. At Oltraya, we believe that difference is worth investing in — because the people who buy from us deserve spaces that were designed for their lives, not for our marketing materials.`}
      faqs={[
        {
          q: 'What is environmental psychology in real estate?',
          a: 'The study of how the design of built environments affects human behaviour, wellbeing, and quality of life.',
        },
        {
          q: 'Does plot orientation matter when buying land?',
          a: 'Yes significantly. East or northeast facing plots receive morning light, which research consistently associates with better sleep quality and wellbeing. Ask your developer for the orientation specifications of available plots.',
        },
        {
          q: 'What is a green corridor in residential development?',
          a: 'A planned landscaped pathway or planting strip that connects open spaces within a development. Green corridors reduce ambient temperature, reduce noise, and create natural community gathering points.',
        },
      ]}
      author="Chandni Rav"
      authorBio="Partner & Chief Business Officer at Oltraya. Chandni writes about design, behavioural insights, and why design choices matter for long-term value."
      date="Apr 14, 2026"
    />
  );
}
