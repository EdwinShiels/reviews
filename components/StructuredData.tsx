import React from 'react';
import Head from 'next/head';

interface StructuredDataProps {
  productName: string;
  metaDescription: string;
  body: string;
  ratingValue?: string | number;
  reviewCount?: string | number;
}

export default function StructuredData({
  productName,
  metaDescription,
  body,
  ratingValue = '4.8',
  reviewCount = '312',
}: StructuredDataProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    description: metaDescription,
    review: {
      '@type': 'Review',
      author: 'AI Review Engine',
      reviewBody: body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: ratingValue,
        bestRating: '5',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
    },
  };
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
} 