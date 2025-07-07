import ReviewPage from './ReviewPage';
import products from '../../../data/products.json';
import prompts from '../../../data/prompts_with_bodies.json';
import { Metadata, ResolvingMetadata } from 'next';
import StructuredData from '../../../components/StructuredData';
import React from 'react';

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
  if (!review) throw new Error(`Review data missing for slug: ${slug}`);
  const { productName, metaDescription, body } = review;
  if (!productName || !metaDescription || !body) {
    throw new Error(`Missing required review data for slug: ${slug} (productName: ${productName}, metaDescription: ${metaDescription}, body: ${body})`);
  }
  // Log for debugging SSR/SSG
  console.log('StructuredData SSR props:', { productName, metaDescription, body });
  return <>
    <StructuredData productName={productName} metaDescription={metaDescription} body={body} />
    <ReviewPage {...review} />
  </>;
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