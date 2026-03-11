'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contacto() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contacto@sebaminaya.com",
      action: "mailto:contacto@sebaminaya.com",
      highlightColor: "yellow" as const,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Teléfono",
      value: "+51 987 654 321",
      action: "tel:+51987654321",
      highlightColor: "pink" as const,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Ubicación",
      value: "Lima, Perú",
      action: "#",
      highlightColor: "blue" as const,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Disponibilidad",
      value: "Lun - Vie, 9:00 - 18:00",
      action: "#",
      highlightColor: "green" as const,
    },
  ];

  const services = [
    "Desarrollo Web Full Stack",
    "Análisis de Datos",
    "Machine Learning",
    "Consultoría Técnica",
    "Dashboard & Reporting",
    "Optimización de Procesos",
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/sebaminaya", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sebaminaya", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/51987654321", label: "WhatsApp" },
  ];

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
              <span className="text-black">Ponte en</span>
              <br />
              <span className="text-highlight-orange">Contacto</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Estoy listo para ayudarte a transformar tus ideas en realidad. 
              Hablemos sobre tu proyecto y cómo podemos colaborar juntos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-black rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => info.action !== "#" && window.open(info.action, '_blank')}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  info.highlightColor === 'yellow' ? 'bg-highlight-yellow' :
                  info.highlightColor === 'pink' ? 'bg-highlight-pink' :
                  info.highlightColor === 'blue' ? 'bg-highlight-blue' :
                  info.highlightColor === 'green' ? 'bg-highlight-green' :
                  'bg-highlight-orange'
                }`}>
                  {info.icon}
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{info.label}</h3>
                <p className="text-gray-700">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-highlight-yellow rounded-lg p-8">
                <h2 className="font-heading text-2xl font-bold mb-6 text-black">
                  Envíame un mensaje
                </h2>
                
                <p className="text-black mb-6">
                  Para una comunicación más rápida y organizada, te recomiendo usar 
                  mi formulario de contacto oficial. Allí podré darte seguimiento 
                  adecuado a tu solicitud.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-black">
                    <CheckCircle className="w-5 h-5 text-black" />
                    <span>Respuesta en menos de 24 horas</span>
                  </div>
                  <div className="flex items-center gap-3 text-black">
                    <CheckCircle className="w-5 h-5 text-black" />
                    <span>Atención personalizada</span>
                  </div>
                  <div className="flex items-center gap-3 text-black">
                    <CheckCircle className="w-5 h-5 text-black" />
                    <span>Seguimiento garantizado</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  highlightColor="pink"
                  // TODO: Replace with your actual Google Form URL
                onClick={() => window.open('https://forms.gle/tu-formulario-google', '_blank')}
                  className="w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Abrir Formulario de Contacto
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Services & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border-2 border-black rounded-lg p-8 mb-6">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Servicios que ofrezco:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-highlight-pink rounded-full"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-lg p-8">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Conéctate en redes sociales:
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg hover:bg-highlight-yellow hover:text-black transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              Preguntas <span className="text-highlight-blue">Frecuentes</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "¿Cuál es tu tiempo de respuesta?",
                answer: "Me comprometo a responder todas las consultas en menos de 24 horas hábiles. Para proyectos urgentes, puedo responder en menos de 4 horas."
              },
              {
                question: "¿Trabajas con proyectos internacionales?",
                answer: "Sí, trabajo con clientes de todo el mundo. Tengo experiencia en proyectos para empresas en Estados Unidos, Europa y América Latina."
              },
              {
                question: "¿Cuáles son tus métodos de pago?",
                answer: "Acepto transferencias bancarias, PayPal, y criptomonedas. Para proyectos largos, puedo trabajar con pagos en hitos."
              },
              {
                question: "¿Ofreces mantenimiento post-lanzamiento?",
                answer: "Sí, ofrezco paquetes de mantenimiento que incluyen actualizaciones, soporte técnico y mejoras continuas según las necesidades del proyecto."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-black rounded-lg p-6"
              >
                <h3 className="font-heading text-lg font-bold mb-3 text-highlight-pink">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
              ¿Listo para empezar tu proyecto?
            </h2>
            <p className="text-xl text-black mb-8">
              El primer paso es simple. Envíame un mensaje y hablemos sobre tus ideas.
            </p>
            <Button
              size="lg"
              highlightColor="pink"
              // TODO: Replace with your actual Google Form URL
            onClick={() => window.open('https://forms.gle/tu-formulario-google', '_blank')}
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensaje Ahora
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
