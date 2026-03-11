import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Sebastián Miñaya',
  description: 'Contacta a Sebastián Miñaya para proyectos de desarrollo web, análisis de datos o machine learning. Respuesta en menos de 24 horas.',
  openGraph: {
    title: 'Contacto - Sebastián Miñaya',
    description: 'Contacta a Sebastián para proyectos de desarrollo web, análisis de datos o machine learning.',
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
