import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mí - Sebastián Miñaya',
  description: 'Conoce a Sebastián Miñaya: desarrollador y analista de datos con más de 5 años de experiencia en Next.js, Python, R y machine learning. Basado en Lima, Perú.',
  openGraph: {
    title: 'Sobre Mí - Sebastián Miñaya',
    description: 'Desarrollador y analista de datos con más de 5 años de experiencia en tecnologías web y de datos.',
  },
};

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
