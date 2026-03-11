'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { Github, Linkedin, Mail, Calendar, MapPin, Download, Brain, ArrowRight } from 'lucide-react';
import { skills, experience, certifications } from '@/lib/constants';

const socialLinks = [
  { icon: Github, href: "https://github.com/sebaminaya", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sebaminaya", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contacto@sebaminaya.com", label: "Email" },
];

export default function SobreMi() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                <span className="text-black">Hola, soy</span>
                <br />
                <span className="text-highlight-pink">Sebastián Miñaya</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Desarrollador apasionado y analista de datos con más de 5 años de experiencia 
                transformando datos en soluciones impactantes. Me especializo en crear aplicaciones 
                web modernas y sistemas de machine learning que generan valor real para las empresas.
              </p>
              
              <div className="flex items-center gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lima, Perú</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Disponible para proyectos</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  highlightColor="pink"
                  onClick={() => router.push('/contacto')}
                >
                  Contactarme
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  // TODO: Add cv-sebastian-minaya.pdf to /public folder
                  onClick={() => window.open('/cv-sebastian-minaya.pdf', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar CV
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-highlight-pink rounded-lg p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-highlight-pink">SM</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sebastián Miñaya</h3>
                <p className="text-white/90">Desarrollador & Analista de Datos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="text-highlight-yellow">Habilidades</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones excepcionales
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-black rounded-lg p-6"
              >
                <h3 className="font-heading text-lg font-bold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skillIndex}
                      name={skill.name}
                      highlightColor={skill.highlightColor}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Mi <span className="text-highlight-blue">Experiencia</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Más de 5 años de experiencia en desarrollo y análisis de datos
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative border-l-4 border-highlight-yellow pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-highlight-yellow rounded-full -translate-x-1/2"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-heading text-xl font-bold">{job.position}</h3>
                  <span className="text-highlight-pink font-medium">{job.period}</span>
                </div>
                
                <p className="text-lg text-gray-700 mb-2">{job.company}</p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-highlight-blue/20 text-highlight-blue border border-highlight-blue rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              <span className="text-highlight-green">Certificaciones</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Certificaciones que validan mi experiencia y conocimientos
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-black rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-highlight-green rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-700 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-600">{cert.year}</p>
                <p className="text-xs text-highlight-green mt-2">ID: {cert.credential}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t-2 border-black bg-highlight-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl text-white mb-8">
              Estoy disponible para proyectos interesantes y desafíos técnicos
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
