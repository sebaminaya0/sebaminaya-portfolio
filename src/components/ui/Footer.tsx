import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Sobre Mí', href: '/sobre-mi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/sebaminaya', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sebaminaya', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contacto@sebaminaya.com', label: 'Email' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-heading text-2xl font-bold text-highlight-blue mb-2">SM</p>
            <p className="text-sm text-gray-600">Desarrollador & Analista de Datos</p>
            <p className="text-sm text-gray-600">Lima, Perú</p>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-highlight-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Redes</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-lg hover:bg-highlight-blue hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-black mt-8 pt-8 text-sm text-gray-600 text-center">
          © {year} Sebastián Miñaya. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
