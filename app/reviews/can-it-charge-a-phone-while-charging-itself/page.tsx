import ReviewPage from '../../../templates/ReviewPage';

import React from 'react';

export const metadata = {
  title: `Can it charge a phone while charging itself?`,
  description: `AI-generated review summary of the Eissix MagSafe Power Bank.`,
};

export default function Page() {
  return <>
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Eissix 12000mAh MagSafe Power Bank","brand":"Eissix","review":{"@type":"Review","reviewBody":"The Eissix 12000mAh MagSafe Power Bank supports pass-through charging, allowing you to charge your phone while the power bank itself is being recharged. Users find this feature convenient for overnight charging or when access to outlets is limited.\n\nPros: Pass-through charging, convenient for travel, and efficient design. Cons: Charging speed may be slightly reduced when both devices are charging.\n\nFor those who need to maximize charging efficiency, the Eissix is a practical solution. You can check specs or buy it here → https://your-affiliate-link.com/eissix","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"AI Reviewer"}}}) }} />
    </head>
    <ReviewPage
      productName={`Eissix 12000mAh MagSafe Power Bank`}
      title={`Can it charge a phone while charging itself?`}
      metaDescription={`AI-generated review summary of the Eissix MagSafe Power Bank.`}
      angle={`Can it charge a phone while charging itself?`}
      affiliateLink={`https://your-affiliate-link.com/eissix`}
      body={`The Eissix 12000mAh MagSafe Power Bank supports pass-through charging, allowing you to charge your phone while the power bank itself is being recharged. Users find this feature convenient for overnight charging or when access to outlets is limited.

Pros: Pass-through charging, convenient for travel, and efficient design. Cons: Charging speed may be slightly reduced when both devices are charging.

For those who need to maximize charging efficiency, the Eissix is a practical solution. You can check specs or buy it here → https://your-affiliate-link.com/eissix`}
    />
  </>;
}
