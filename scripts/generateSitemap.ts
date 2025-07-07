import fs from 'fs';
import path from 'path';

// Load review data
const promptsPath = path.join(__dirname, '../data/prompts_with_bodies.json');
const prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf-8'));

const baseUrl = 'https://www.aipowerpicks.pro';

// Build <url> entries
const urls = prompts.map((prompt: any) => {
  const slug = prompt.url.replace('/reviews/', '');
  return `  <url>\n    <loc>${baseUrl}/reviews/${slug}</loc>\n  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.join('\n') +
  '\n</urlset>\n';

// Write to public/sitemap.xml
const publicPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicPath, sitemap, 'utf-8');

console.log(`Sitemap generated with ${urls.length} entries at public/sitemap.xml`); 