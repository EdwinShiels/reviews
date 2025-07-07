import Link from 'next/link';
import prompts from '../data/prompts_with_bodies.json';
import products from '../data/products.json';

export default function Home() {
  // Map productSlug to productName for quick lookup
  const productMap = Object.fromEntries(products.map((p: any) => [p.slug, p.name]));

  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#1a1a1a' }}>All Reviews</h1>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, listStyle: 'none' }}>
        {prompts.map((prompt: any) => {
          const slug = prompt.url.replace('/reviews/', '');
          const title = prompt.title || slug;
          const productName = productMap[prompt.productSlug] || prompt.productSlug || slug;
          return (
            <li key={slug} style={{ padding: 0, border: 'none', borderRadius: 8 }}>
              <Link
                href={`/reviews/${slug}`}
                style={{
                  display: 'block',
                  padding: '1rem 1.25rem',
                  borderRadius: 8,
                  background: '#f7f8fa',
                  color: '#181c20',
                  textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                  fontWeight: 500,
                  transition: 'background 0.2s, box-shadow 0.2s',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#181c20' }}>{title}</div>
                <div style={{ color: '#3a4a5a', fontSize: '0.97rem', marginTop: 2 }}>{productName}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <style>{`
        a:hover {
          background: #e6eaf0 !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06) !important;
        }
      `}</style>
    </main>
  );
}
