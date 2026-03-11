'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { featuredProjects, services, statistics, getHighlightColorClasses } from '@/lib/constants';

const iconMap = {
  Code,
  Database,
  BarChart3,
} as const;

type IconName = keyof typeof iconMap;

const getIconComponent = (iconName: string) => {
  const IconComponent = iconMap[iconName as IconName];
  return IconComponent || Code; // Fallback to Code icon
};

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                <span className="text-black">Desarrollador &</span>
                <br />
                <span className="text-highlight-yellow">Analista de Datos</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Especializado en transformar datos en soluciones impactantes. 
                Ofrezco servicios de consultoría en desarrollo web, análisis de datos 
                y machine learning para impulsar tu negocio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  highlightColor="yellow"
                  onClick={() => router.push('/contacto')}
                >
                  Iniciar Proyecto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => router.push('/proyectos')}
                >
                  Ver Proyectos
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {statistics.map((stat, index) => (
                  <div 
                    key={index}
                    className={`${getHighlightColorClasses(stat.color, 'bg')} rounded-lg p-6 h-32 flex flex-col items-center justify-center`}
                    role="status"
                    aria-live="polite"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    <span className="font-bold text-2xl mb-1" aria-hidden="true">{stat.value}</span>
                    <span className="text-xs text-center opacity-75" aria-hidden="true">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="text-highlight-orange">Servicios</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Soluciones integrales para tus necesidades de desarrollo y análisis de datos
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = getIconComponent(service.iconName);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-black rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${getHighlightColorClasses(service.highlightColor, 'bg')}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Proyectos <span className="text-highlight-green">Destacados</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Casos de éxito que demuestran mi experiencia en desarrollo y análisis de datos
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  {...project}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/proyectos')}
            >
              Ver Todos los Proyectos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t-2 border-black bg-highlight-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-black">
              ¿Listo para transformar tus datos en resultados?
            </h2>
            <p className="text-xl text-black mb-8">
              Hablemos sobre tu proyecto y cómo puedo ayudarte a alcanzar tus objetivos
            </p>
            <Button
              size="lg"
              highlightColor="pink"
              onClick={() => router.push('/contacto')}
            >
              Contactar Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
