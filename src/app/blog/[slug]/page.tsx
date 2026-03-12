import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getHighlightColorClasses } from '@/lib/constants';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} - Sebastián Miñaya`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/blog"
          className="text-sm text-gray-600 hover:text-highlight-blue transition-colors mb-8 inline-block"
        >
          ← Volver al blog
        </Link>

        <div className={`w-full h-2 rounded-sm mb-8 ${getHighlightColorClasses(post.highlightColor, 'bg')}`} />

        <p className="text-sm text-gray-500 mb-3">{post.date}</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm border-2 border-black rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="border-2 border-black rounded-lg p-12 text-center text-gray-500">
          <p className="text-lg mb-2">Este artículo está en construcción.</p>
          <p className="text-sm">Vuelve pronto para leer el contenido completo.</p>
        </div>
      </div>
    </div>
  );
}
