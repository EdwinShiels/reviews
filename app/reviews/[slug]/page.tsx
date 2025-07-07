import ReviewPage from './ReviewPage';
import products from '../../../data/products.json';
import prompts from '../../../data/prompts_with_bodies.json';
import { Metadata, ResolvingMetadata } from 'next';

function getReviewData(slug: string) {
  const prompt = prompts.find((p: any) => {
    // Support both old and new slugs
    const angleSlug = p.angle
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    return angleSlug === slug;
  });
  const product = products.find((p: any) => p.slug === (prompt?.productSlug || ''));
  if (!prompt || !product) return null;
  return {
    productName: product.name,
    title: prompt.title,
    metaDescription: prompt.metaDescription,
    angle: prompt.angle,
    affiliateLink: product.affiliateLink,
    body: prompt.body,
  };
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewData(slug);
  return {
    title: review?.title || 'Review',
    description: review?.metaDescription || '',
    robots: 'noindex, nofollow',
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReviewData(slug);
  if (!review) return <div>Review not found</div>;
  return <ReviewPage {...review} />;
}

export async function generateStaticParams() {
  return prompts.map((p: any) => {
    const angleSlug = p.angle
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    return { slug: angleSlug };
  });
} 