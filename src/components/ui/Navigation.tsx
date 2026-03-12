'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { safeOpenUrl, isValidUrl } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

const menuItems = [
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

export const Navigation: React.FC<NavigationProps> = React.memo(({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuItemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    setFocusedIndex(-1);
  };

  const handleMenuItemClick = (href: string) => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
    router.push(href);
  };

  const handleSocialLinkClick = (href: string) => {
    if (isValidUrl(href)) {
      safeOpenUrl(href);
    } else {
      console.warn('Invalid social link URL:', href);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => (prev + 1) % menuItems.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => (prev - 1 + menuItems.length) % menuItems.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0) handleMenuItemClick(menuItems[focusedIndex].href);
        break;
      case 'Escape':
        setIsOpen(false);
        menuButtonRef.current?.focus();
        break;
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    if (focusedIndex >= 0 && menuItemRefs.current[focusedIndex]) {
      menuItemRefs.current[focusedIndex]?.focus();
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, focusedIndex]);

  return (
    <nav className={cn('sticky top-0 z-50 bg-white border-b-2 border-black', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="font-heading text-2xl font-bold text-highlight-blue">
              SM
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      'font-medium transition-colors',
                      isActive
                        ? 'text-highlight-blue border-b-2 border-highlight-blue pb-0.5'
                        : 'hover:text-highlight-blue'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Social Links + Theme Toggle — Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-highlight-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              ref={menuButtonRef}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-black text-black hover:bg-black hover:text-white p-2"
              onClick={handleMenuToggle}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-black bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => handleMenuItemClick(item.href)}
                    onKeyDown={handleKeyDown}
                    className={cn(
                      'block w-full text-left px-3 py-2 font-medium transition-colors',
                      isActive
                        ? 'text-highlight-blue bg-highlight-blue/10'
                        : 'hover:text-highlight-blue',
                      focusedIndex === index && !isActive
                        ? 'bg-highlight-blue/20 text-highlight-blue'
                        : ''
                    )}
                    whileHover={{ x: 5 }}
                    ref={(el) => { menuItemRefs.current[index] = el; }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}

              <div className="flex items-center space-x-4 px-3 py-2 border-t-2 border-black mt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.button
                      key={social.label}
                      onClick={() => handleSocialLinkClick(social.href)}
                      className="text-gray-600 hover:text-highlight-blue transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
