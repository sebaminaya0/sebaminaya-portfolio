'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  highlightColor?: 'yellow' | 'pink' | 'blue' | 'green' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const highlightColors = {
  yellow: 'bg-highlight-yellow text-black hover:bg-highlight-yellow/90',
  pink: 'bg-highlight-pink text-white hover:bg-highlight-pink/90',
  blue: 'bg-highlight-blue text-black hover:bg-highlight-blue/90',
  green: 'bg-highlight-green text-black hover:bg-highlight-green/90',
  orange: 'bg-highlight-orange text-white hover:bg-highlight-orange/90',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button: React.FC<ButtonProps> = React.memo(({
  variant = 'primary',
  highlightColor = 'yellow',
  size = 'md',
  className,
  children,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: highlightColors[highlightColor],
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';
