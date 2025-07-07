import React from 'react';

export interface ReviewPageProps {
  productName: string;
  title: string;
  metaDescription: string;
  angle: string;
  affiliateLink: string;
  body: string;
}

const ReviewPage: React.FC<ReviewPageProps> = ({ productName, title, metaDescription, angle, affiliateLink, body }) => (
  <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
    <head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </head>
    <h1>{title}</h1>
    <h2>{productName}</h2>
    <p><strong>Review Angle:</strong> {angle}</p>
    <article style={{ margin: '32px 0', lineHeight: 1.7 }}>{body}</article>
    <div style={{ marginTop: 40, padding: 24, background: '#f6f6f6', borderRadius: 8, textAlign: 'center' }}>
      <a href={affiliateLink} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', fontSize: 18, color: '#0070f3', textDecoration: 'none' }}>
        ✅ Buy the {productName} now →
      </a>
    </div>
  </div>
);

export default ReviewPage; 