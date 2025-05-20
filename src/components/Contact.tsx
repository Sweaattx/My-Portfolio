'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, memo } from 'react';
import { initEmailJS, sendEmail } from '@/utils/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null as string | null,
  });

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, isSuccess: false, error: null });

    try {
      await sendEmail(formData);
      setStatus({ isSubmitting: false, isSuccess: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus(prev => ({ ...prev, isSuccess: false }));
      }, 5000);
    } catch (err) {
      console.error('Error:', err);
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Fondo con grid y máscara */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-bold text-white mb-2 -mt-10">
              Contacto
            </h2>
            <p className="text-base text-white/60 max-w-2xl mx-auto mb-8">
              ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para colaborar en nuevos proyectos y oportunidades.
          </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
          {status.error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {status.error}
            </div>
          )}

          {status.isSuccess && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
              ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
            </div>
          )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.isSubmitting}
                  className="w-full px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder-white/40"
                  placeholder="Tu nombre"
              />
            </div>
            <div>
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.isSubmitting}
                  className="w-full px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder-white/40"
                  placeholder="tu@email.com"
              />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={status.isSubmitting}
                className="w-full px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder-white/40 resize-none"
                placeholder="Tu mensaje..."
              />
            </div>

            <div className="flex justify-center">
              <button
              type="submit"
              disabled={status.isSubmitting}
                className="group relative px-8 py-4 bg-black text-sm font-semibold rounded-lg hover:bg-black/90 active:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-black/30 focus:outline-none focus:ring-2 focus:ring-black/50 min-w-[200px] overflow-hidden border border-white/10"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
              {status.isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar mensaje</span>
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/5 to-black/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </div>
          </form>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 text-white/60">
            <a
              href="mailto:piero.ayvar@upc.edu.pe"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              piero.ayvar@upc.edu.pe
            </a>
            <a
              href="https://linkedin.com/in/piero-ayvar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/pieroayvar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Contact);
