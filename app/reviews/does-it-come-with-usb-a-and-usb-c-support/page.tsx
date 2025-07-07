import ReviewPage from '../../../templates/ReviewPage';

import React from 'react';

export const metadata = {
  title: `Does it come with USB-A and USB-C support?`,
  description: `AI-generated review summary of the Eissix MagSafe Power Bank.`,
};

export default function Page() {
  return <>
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Eissix 12000mAh MagSafe Power Bank","brand":"Eissix","review":{"@type":"Review","reviewBody":"The Eissix 12000mAh MagSafe Power Bank features both USB-A and USB-C ports, allowing for versatile charging options. Users appreciate the ability to charge multiple devices, including older phones and modern gadgets, using the appropriate cable.\n\nPros: Dual USB-A and USB-C support, versatile charging, and user-friendly design. Cons: None significant reported.\n\nIf you need flexibility in charging, the Eissix is a solid choice. You can check specs or buy it here → https://your-affiliate-link.com/eissix","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"AI Reviewer"}}}) }} />
    </head>
    <ReviewPage
      productName={`Eissix 12000mAh MagSafe Power Bank`}
      title={`Does it come with USB-A and USB-C support?`}
      metaDescription={`AI-generated review summary of the Eissix MagSafe Power Bank.`}
      angle={`Does it come with USB-A and USB-C support?`}
      affiliateLink={`https://your-affiliate-link.com/eissix`}
      body={`The Eissix 12000mAh MagSafe Power Bank features both USB-A and USB-C ports, allowing for versatile charging options. Users appreciate the ability to charge multiple devices, including older phones and modern gadgets, using the appropriate cable.

Pros: Dual USB-A and USB-C support, versatile charging, and user-friendly design. Cons: None significant reported.

If you need flexibility in charging, the Eissix is a solid choice. You can check specs or buy it here → https://your-affiliate-link.com/eissix`}
    />
  </>;
}
