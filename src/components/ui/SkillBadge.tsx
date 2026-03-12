'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  highlightColor?: 'yellow' | 'pink' | 'blue' | 'green' | 'orange';
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  icon,
  highlightColor = 'yellow',
  className,
}) => {
  const colorClasses = {
    yellow: 'bg-highlight-yellow text-white hover:bg-highlight-yellow/90',
    pink: 'bg-highlight-pink text-white hover:bg-highlight-pink/90',
    blue: 'bg-highlight-blue text-white hover:bg-highlight-blue/90',
    green: 'bg-highlight-green text-white hover:bg-highlight-green/90',
    orange: 'bg-highlight-orange text-white hover:bg-highlight-orange/90',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200',
        colorClasses[highlightColor],
        className
      )}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{name}</span>
    </motion.div>
  );
};
