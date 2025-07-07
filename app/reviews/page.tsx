import fs from 'fs';
import path from 'path';
import React from 'react';

// Read prompts_with_bodies.json at build time
const promptsPath = path.join(process.cwd(), 'data', 'prompts_with_bodies.json');
const prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf-8'));

export const metadata = {
  title: 'All Eissix Review Angles',
  description: 'Internal index of all generated review pages for QA/testing.',
};

export default function ReviewsIndex() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="noindex" />
      </head>
      <h1>All Eissix Review Angles (Internal Index)</h1>
      <ul style={{ lineHeight: 2 }}>
        {prompts.map((prompt: any) => {
          const slug = prompt.url.replace('/reviews/', '');
          return (
            <li key={slug}>
              <a href={`/reviews/${slug}`}>{prompt.title}</a>
            </li>
          );
        })}
      </ul>
      <p style={{ marginTop: 32, color: '#888' }}>
        <strong>Note:</strong> This page is for internal QA/testing only and is excluded from search engine indexing.
      </p>
    </div>
  );
} 