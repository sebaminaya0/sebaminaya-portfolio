import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="bg-highlight-yellow inline-block px-4 py-1 rounded-sm mb-6">
          <span className="font-heading text-6xl font-bold text-black">404</span>
        </div>
        <h1 className="font-heading text-3xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-gray-700 mb-8">
          La página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md border-2 border-black bg-black text-white hover:bg-highlight-yellow hover:text-black transition-colors duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
