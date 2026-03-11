import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Sebastián Miñaya',
  description: 'Artículos sobre desarrollo web, análisis de datos y machine learning por Sebastián Miñaya.',
  openGraph: {
    title: 'Blog - Sebastián Miñaya',
    description: 'Artículos sobre desarrollo web, análisis de datos y machine learning.',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
