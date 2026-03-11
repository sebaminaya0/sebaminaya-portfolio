'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts, getHighlightColorClasses } from '@/lib/constants';
import { CalendarDays, Tag } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              <span className="text-highlight-pink">Blog</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Reflexiones y guías prácticas sobre desarrollo web, análisis de datos y machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <motion.article
                    whileHover={{ y: -5 }}
                    className="bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                  >
                    <div className={`w-full h-2 ${getHighlightColorClasses(post.highlightColor, 'bg')}`} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <CalendarDays className="w-4 h-4" />
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                      <h2 className="font-heading text-xl font-bold mb-3 group-hover:text-highlight-pink transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-0.5 text-xs border border-black rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
