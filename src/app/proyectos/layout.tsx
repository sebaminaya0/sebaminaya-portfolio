import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos - Sebastián Miñaya',
  description: 'Portafolio de proyectos en desarrollo web, análisis de datos y machine learning. Casos de éxito en R, Python, scikit-learn, TensorFlow y más.',
  openGraph: {
    title: 'Proyectos - Sebastián Miñaya',
    description: 'Portafolio de proyectos en desarrollo web, análisis de datos y machine learning.',
  },
};

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
