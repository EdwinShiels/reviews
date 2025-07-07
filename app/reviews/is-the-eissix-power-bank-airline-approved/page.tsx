import ReviewPage from '../../../templates/ReviewPage';

import React from 'react';

export const metadata = {
  title: `Is the Eissix power bank airline approved?`,
  description: `AI-generated review summary of the Eissix MagSafe Power Bank.`,
};

export default function Page() {
  return <>
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Eissix 12000mAh MagSafe Power Bank","brand":"Eissix","review":{"@type":"Review","reviewBody":"Travelers will appreciate that the Eissix 12000mAh MagSafe Power Bank is airline-approved, as confirmed by both product documentation and user reports. Its compact size and lightweight design (203g) make it easy to carry in hand luggage, and the battery capacity is within the limits allowed by most airlines.\n\nPros: Airline-approved, lightweight, and travel-friendly. Cons: None significant reported.\n\nIf you need a power bank for frequent flights, the Eissix is a reliable companion. You can check specs or buy it here → https://your-affiliate-link.com/eissix","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"AI Reviewer"}}}) }} />
    </head>
    <ReviewPage
      productName={`Eissix 12000mAh MagSafe Power Bank`}
      title={`Is the Eissix power bank airline approved?`}
      metaDescription={`AI-generated review summary of the Eissix MagSafe Power Bank.`}
      angle={`Is the Eissix power bank airline approved?`}
      affiliateLink={`https://your-affiliate-link.com/eissix`}
      body={`Travelers will appreciate that the Eissix 12000mAh MagSafe Power Bank is airline-approved, as confirmed by both product documentation and user reports. Its compact size and lightweight design (203g) make it easy to carry in hand luggage, and the battery capacity is within the limits allowed by most airlines.

Pros: Airline-approved, lightweight, and travel-friendly. Cons: None significant reported.

If you need a power bank for frequent flights, the Eissix is a reliable companion. You can check specs or buy it here → https://your-affiliate-link.com/eissix`}
    />
  </>;
}
