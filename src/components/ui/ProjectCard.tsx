'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { safeOpenUrl } from '@/lib/utils';
import { getHighlightColorClasses } from '@/lib/constants';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  highlightColor?: 'yellow' | 'pink' | 'blue' | 'green' | 'orange';
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = React.memo(({
  title,
  description,
  technologies,
  image,
  demoUrl,
  githubUrl,
  highlightColor = 'yellow',
  className,
}) => {
  const handleDemoClick = () => {
    if (demoUrl) {
      safeOpenUrl(demoUrl);
    }
  };

  const handleGithubClick = () => {
    if (githubUrl) {
      safeOpenUrl(githubUrl);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        'bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-all duration-300',
        className
      )}
    >
      {image ? (
        <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div
          className={cn('w-full h-8 mb-4 rounded-sm', getHighlightColorClasses(highlightColor, 'bg'))}
          aria-hidden="true"
        />
      )}
      
      <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 border border-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2">
        {demoUrl && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleDemoClick}
            aria-label={`Ver demo de ${title}`}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </Button>
        )}
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleGithubClick}
            aria-label={`Ver código de ${title}`}
          >
            <Github className="w-4 h-4 mr-2" />
            Código
          </Button>
        )}
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';
