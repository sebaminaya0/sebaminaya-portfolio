'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Filter } from 'lucide-react';

export default function Proyectos() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const projects = [
    {
      title: "Análisis de Ventas con R",
      description: "Análisis exploratorio completo de datos de ventas utilizando R para identificar patrones, tendencias y oportunidades de negocio. Implementación de modelos estadísticos para pronóstico de ventas estacionales con un accuracy del 87%. El proyecto incluyó limpieza de datos, visualizaciones interactivas con ggplot2 y dashboard con Shiny.",
      technologies: ["R", "ggplot2", "dplyr", "Shiny", "Statistical Analysis", "Time Series"],
      // TODO: Replace with real demo and GitHub URLs
      demoUrl: "https://demo-r-analysis.example.com",
      githubUrl: "https://github.com/sebaminaya/r-sales-analysis",
      highlightColor: "yellow" as const,
    },
    {
      title: "Pipeline de Machine Learning",
      description: "Desarrollo completo de un pipeline de machine learning automatizado para procesamiento de datos, entrenamiento de modelos y despliegue en producción. Implementado con Python, scikit-learn y MLflow para el seguimiento de experimentos. El pipeline procesa más de 1M de registros diarios con una latencia promedio de 2.3 segundos.",
      technologies: ["Python", "scikit-learn", "pandas", "MLflow", "Docker", "Apache Airflow"],
      // TODO: Replace with real demo and GitHub URLs
      demoUrl: "https://demo-ml-pipeline.example.com",
      githubUrl: "https://github.com/sebaminaya/ml-pipeline",
      highlightColor: "pink" as const,
    },
    {
      title: "Dashboard con Jupyter Notebook",
      description: "Creación de dashboards interactivos utilizando Jupyter Notebook y Python para visualización de datos en tiempo real y reportes automatizados. Implementado con Plotly Dash para crear visualizaciones interactivas que permiten filtrar datos por múltiples dimensiones. El dashboard actualiza datos cada 5 minutos y soporta hasta 100 usuarios concurrentes.",
      technologies: ["Python", "Jupyter", "matplotlib", "Plotly", "Dash", "pandas", "NumPy"],
      // TODO: Replace with real demo and GitHub URLs
      demoUrl: "https://demo-dashboard.example.com",
      githubUrl: "https://github.com/sebaminaya/jupyter-dashboard",
      highlightColor: "blue" as const,
    },
    {
      title: "Sistema de Recomendación E-commerce",
      description: "Desarrollo de un sistema de recomendación basado en collaborative filtering y content-based filtering para una plataforma e-commerce. Implementado con Python y TensorFlow, el sistema procesa el comportamiento de usuarios en tiempo real y genera recomendaciones personalizadas con un CTR del 15%.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Redis", "FastAPI", "PostgreSQL"],
      // TODO: Replace with real demo and GitHub URLs
      demoUrl: "https://demo-rec-system.example.com",
      githubUrl: "https://github.com/sebaminaya/recommendation-system",
      highlightColor: "green" as const,
    },
    {
      title: "Análisis de Sentimientos en Redes Sociales",
      description: "Proyecto de análisis de sentimientos utilizando NLP para analizar más de 500K tweets diarios. Implementado con Python, NLTK y spaCy para procesamiento de lenguaje natural. El sistema clasifica sentimientos con un accuracy del 92% y genera reportes automatizados para equipos de marketing.",
      technologies: ["Python", "NLTK", "spaCy", "scikit-learn", "Twitter API", "MongoDB"],
      // TODO: Replace with real demo and GitHub URLs
      demoUrl: "https://demo-sentiment.example.com",
      githubUrl: "https://github.com/sebaminaya/sentiment-analysis",
      highlightColor: "orange" as const,
    },
    {
      title: "Predictive Maintenance Dashboard",
      description: "Sistema de mantenimiento predictivo para maquinaria industrial utilizando IoT y machine learning. Implementado con Python y TensorFlow para predecir fallos de equipos con 24 horas de antelación. El sistema redujo el downtime en un 35% y generó ahorros de $2M anuales.",
      technologies: ["Python", "TensorFlow", "pandas", "Grafana", "InfluxDB", "MQTT"],
      // TODO: Replace with real demo and GitHub URLs
      demoUrl: "https://demo-maintenance.example.com",
      githubUrl: "https://github.com/sebaminaya/predictive-maintenance",
      highlightColor: "yellow" as const,
    },
  ];

  const technologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  const filteredProjects = activeFilter
    ? projects.filter(p => p.technologies.includes(activeFilter))
    : projects;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Mis <span className="text-highlight-blue">Proyectos</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explora mi portafolio de proyectos en desarrollo web, análisis de datos y machine learning. 
              Cada proyecto representa un desafío único resuelto con tecnología de vanguardia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex items-center gap-2 shrink-0">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filtrar:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter(null)}
                className={`px-3 py-1 text-sm border-2 border-black rounded-full transition-colors ${
                  activeFilter === null
                    ? 'bg-black text-white'
                    : 'hover:bg-highlight-yellow hover:text-black'
                }`}
              >
                Todos
              </button>
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setActiveFilter(activeFilter === tech ? null : tech)}
                  className={`px-3 py-1 text-sm border-2 border-black rounded-full transition-colors ${
                    activeFilter === tech
                      ? 'bg-highlight-yellow text-black'
                      : 'hover:bg-highlight-yellow hover:text-black'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-500 py-16">
              No hay proyectos con la tecnología seleccionada.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t-2 border-black bg-highlight-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-black">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-black mb-8">
              Hablemos sobre cómo puedo ayudarte a desarrollar tu próximo proyecto
            </p>
            <Button
              size="lg"
              highlightColor="pink"
              onClick={() => router.push('/contacto')}
            >
              Iniciar Conversación
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
