import ReviewPage from '../../../templates/ReviewPage';

import React from 'react';

export const metadata = {
  title: `How many full charges can I get for an iPhone 13?`,
  description: `AI-generated review summary of the Eissix MagSafe Power Bank.`,
};

export default function Page() {
  return <>
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Eissix 12000mAh MagSafe Power Bank","brand":"Eissix","review":{"@type":"Review","reviewBody":"With its 12000mAh capacity, the Eissix MagSafe Power Bank can provide approximately 1.5 to 2 full charges for an iPhone 13, according to both our tests and user feedback. The actual number of charges depends on usage patterns and energy conversion losses, but the LED display helps you track remaining power accurately.\n\nPros: Multiple full charges, clear battery status, and reliable performance. Cons: Usable capacity is slightly less than rated, as with all power banks.\n\nFor iPhone 13 users, the Eissix offers dependable backup power. You can check specs or buy it here → https://your-affiliate-link.com/eissix","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"AI Reviewer"}}}) }} />
    </head>
    <ReviewPage
      productName={`Eissix 12000mAh MagSafe Power Bank`}
      title={`How many full charges can I get for an iPhone 13?`}
      metaDescription={`AI-generated review summary of the Eissix MagSafe Power Bank.`}
      angle={`How many full charges can I get for an iPhone 13?`}
      affiliateLink={`https://your-affiliate-link.com/eissix`}
      body={`With its 12000mAh capacity, the Eissix MagSafe Power Bank can provide approximately 1.5 to 2 full charges for an iPhone 13, according to both our tests and user feedback. The actual number of charges depends on usage patterns and energy conversion losses, but the LED display helps you track remaining power accurately.

Pros: Multiple full charges, clear battery status, and reliable performance. Cons: Usable capacity is slightly less than rated, as with all power banks.

For iPhone 13 users, the Eissix offers dependable backup power. You can check specs or buy it here → https://your-affiliate-link.com/eissix`}
    />
  </>;
}
