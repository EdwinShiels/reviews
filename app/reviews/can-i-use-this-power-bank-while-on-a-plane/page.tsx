import ReviewPage from '../../../templates/ReviewPage';

import React from 'react';

export const metadata = {
  title: `Can I use this power bank while on a plane?`,
  description: `AI-generated review summary of the Eissix MagSafe Power Bank.`,
};

export default function Page() {
  return <>
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Eissix 12000mAh MagSafe Power Bank","brand":"Eissix","review":{"@type":"Review","reviewBody":"The Eissix 12000mAh MagSafe Power Bank is airline-approved and safe for use on planes, according to both product documentation and user experiences. Its capacity is within airline limits, and its compact size makes it easy to carry in your hand luggage.\n\nPros: Airline-approved, portable, and reliable. Cons: None significant reported.\n\nIf you travel frequently, the Eissix is a worry-free choice for in-flight charging. You can check specs or buy it here → https://your-affiliate-link.com/eissix","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"AI Reviewer"}}}) }} />
    </head>
    <ReviewPage
      productName={`Eissix 12000mAh MagSafe Power Bank`}
      title={`Can I use this power bank while on a plane?`}
      metaDescription={`AI-generated review summary of the Eissix MagSafe Power Bank.`}
      angle={`Can I use this power bank while on a plane?`}
      affiliateLink={`https://your-affiliate-link.com/eissix`}
      body={`The Eissix 12000mAh MagSafe Power Bank is airline-approved and safe for use on planes, according to both product documentation and user experiences. Its capacity is within airline limits, and its compact size makes it easy to carry in your hand luggage.

Pros: Airline-approved, portable, and reliable. Cons: None significant reported.

If you travel frequently, the Eissix is a worry-free choice for in-flight charging. You can check specs or buy it here → https://your-affiliate-link.com/eissix`}
    />
  </>;
}
