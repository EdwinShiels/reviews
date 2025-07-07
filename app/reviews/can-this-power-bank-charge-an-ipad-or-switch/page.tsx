import ReviewPage from '../../../templates/ReviewPage';

import React from 'react';

export const metadata = {
  title: `Can this power bank charge an iPad or Switch?`,
  description: `AI-generated review summary of the Eissix MagSafe Power Bank.`,
};

export default function Page() {
  return <>
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Eissix 12000mAh MagSafe Power Bank","brand":"Eissix","review":{"@type":"Review","reviewBody":"The Eissix 12000mAh MagSafe Power Bank is versatile enough to charge larger devices like iPads and Nintendo Switch consoles via its USB-C or USB-A ports. Users report that while wireless charging is best suited for phones, wired charging provides ample power for tablets and gaming devices.\n\nPros: Can charge tablets and consoles, high-capacity battery, and multiple output options. Cons: Charging speed may be slower for high-drain devices.\n\nIf you need a power bank for more than just your phone, the Eissix is up to the task. You can check specs or buy it here → https://your-affiliate-link.com/eissix","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"AI Reviewer"}}}) }} />
    </head>
    <ReviewPage
      productName={`Eissix 12000mAh MagSafe Power Bank`}
      title={`Can this power bank charge an iPad or Switch?`}
      metaDescription={`AI-generated review summary of the Eissix MagSafe Power Bank.`}
      angle={`Can this power bank charge an iPad or Switch?`}
      affiliateLink={`https://your-affiliate-link.com/eissix`}
      body={`The Eissix 12000mAh MagSafe Power Bank is versatile enough to charge larger devices like iPads and Nintendo Switch consoles via its USB-C or USB-A ports. Users report that while wireless charging is best suited for phones, wired charging provides ample power for tablets and gaming devices.

Pros: Can charge tablets and consoles, high-capacity battery, and multiple output options. Cons: Charging speed may be slower for high-drain devices.

If you need a power bank for more than just your phone, the Eissix is up to the task. You can check specs or buy it here → https://your-affiliate-link.com/eissix`}
    />
  </>;
}
