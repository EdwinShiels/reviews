import ReviewPage from './ReviewPage';
import products from '../../../data/products.json';
import prompts from '../../../data/prompts.json';
import { Metadata } from 'next';

function getReviewData(slug: string) {
  const prompt = prompts.find((p: any) => p.productSlug === slug);
  const product = products.find((p: any) => p.slug === slug);
  if (!prompt || !product) return null;
  return {
    productName: product.name,
    title: prompt.title,
    metaDescription: prompt.metaDescription,
    angle: prompt.angle,
    affiliateLink: product.affiliateLink,
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const review = getReviewData(params.slug);
  return {
    title: review?.title || 'Review',
    description: review?.metaDescription || '',
    robots: 'index, follow',
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const review = getReviewData(params.slug);
  if (!review) return <div>Review not found</div>;
  return <ReviewPage {...review} />;
} 