const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
const promptsPath = path.join(__dirname, '../data/prompts_with_bodies.json');
const outputBaseDir = path.join(__dirname, '../app/reviews');
const templatePath = path.join(__dirname, '../templates/ReviewPage.tsx');

const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf-8'));

const templateImport = `import ReviewPage from '../../../templates/ReviewPage';\n`;

function escapeProp(val: string) {
  return val.replace(/`/g, '\`').replace(/\\/g, '\\');
}

function createSlugFromAngle(angle: string): string {
  return angle
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Ensure base directory exists
if (!fs.existsSync(outputBaseDir)) {
  fs.mkdirSync(outputBaseDir, { recursive: true });
}

prompts.forEach((prompt: any, index: number) => {
  const product = products.find((p: any) => p.slug === prompt.productSlug);
  if (!product) return;
  
  // Create unique slug for this specific angle
  const angleSlug = createSlugFromAngle(prompt.angle);
  
  // Create directory for this specific angle
  const angleDir = path.join(outputBaseDir, angleSlug);
  if (!fs.existsSync(angleDir)) {
    fs.mkdirSync(angleDir, { recursive: true });
  }
  
  const props = {
    productName: product.name,
    title: prompt.title,
    metaDescription: prompt.metaDescription,
    angle: prompt.angle,
    affiliateLink: product.affiliateLink,
    body: prompt.body,
  };

  // Schema.org metadata
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "brand": "Eissix",
    "review": {
      "@type": "Review",
      "reviewBody": prompt.body,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "AI Reviewer"
      }
    }
  };

  const fileContent = `${templateImport}
import React from 'react';

export const metadata = {
  title: \`${escapeProp(props.title)}\`,
  description: \`${escapeProp(props.metaDescription)}\`,
};

export default function Page() {
  return <>
    <head>
      <title>{metadata.title}</title>
      <meta name=\"description\" content={metadata.description} />
      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(schema)}) }} />
    </head>
    <ReviewPage
      productName={\`${escapeProp(props.productName)}\`}
      title={\`${escapeProp(props.title)}\`}
      metaDescription={\`${escapeProp(props.metaDescription)}\`}
      angle={\`${escapeProp(props.angle)}\`}
      affiliateLink={\`${escapeProp(props.affiliateLink)}\`}
      body={\`${escapeProp(props.body)}\`}
    />
  </>;
}
`;
  
  const outPath = path.join(angleDir, 'page.tsx');
  fs.writeFileSync(outPath, fileContent, 'utf-8');
  console.log(`Generated: /app/reviews/${angleSlug}/page.tsx`);
}); 