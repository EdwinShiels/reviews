import ReviewPage from '../../../templates/ReviewPage';

import React from 'react';

export const metadata = {
  title: `Does it include a stand for video calls?`,
  description: `AI-generated review summary of the Eissix MagSafe Power Bank.`,
};

export default function Page() {
  return <>
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Eissix 12000mAh MagSafe Power Bank","brand":"Eissix","review":{"@type":"Review","reviewBody":"One of the standout features of the Eissix 12000mAh MagSafe Power Bank is its integrated 360° rotating stand. We found this especially useful for video calls and streaming, as it allows you to prop up your phone at the perfect angle while charging. Users consistently praise the stand's stability and convenience.\n\nPros: Built-in stand, adjustable viewing angles, and sturdy design. Cons: None significant reported.\n\nIf you value hands-free use while charging, the Eissix is a great choice. You can check specs or buy it here → https://your-affiliate-link.com/eissix","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"AI Reviewer"}}}) }} />
    </head>
    <ReviewPage
      productName={`Eissix 12000mAh MagSafe Power Bank`}
      title={`Does it include a stand for video calls?`}
      metaDescription={`AI-generated review summary of the Eissix MagSafe Power Bank.`}
      angle={`Does it include a stand for video calls?`}
      affiliateLink={`https://your-affiliate-link.com/eissix`}
      body={`One of the standout features of the Eissix 12000mAh MagSafe Power Bank is its integrated 360° rotating stand. We found this especially useful for video calls and streaming, as it allows you to prop up your phone at the perfect angle while charging. Users consistently praise the stand's stability and convenience.

Pros: Built-in stand, adjustable viewing angles, and sturdy design. Cons: None significant reported.

If you value hands-free use while charging, the Eissix is a great choice. You can check specs or buy it here → https://your-affiliate-link.com/eissix`}
    />
  </>;
}
