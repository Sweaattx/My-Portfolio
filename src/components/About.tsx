'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: FaCode,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: FaServer,
      items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Herramientas',
      icon: FaTools,
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Testing']
    },
    {
      category: 'Bases de Datos',
      icon: FaDatabase,
      items: ['SQL', 'NoSQL', 'Redis', 'ORM', 'Migrations']
    }
  ];

  return (
    <section id="about" className="section relative overflow-hidden pb-8">
      {/* Fondo con grid y máscara */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Gradientes decorativos */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      
      {/* Formas animadas */}
      <motion.div 
        className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="container relative z-10"
      >
        {/* Título "Sobre Mí" centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
          >
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 -mt-10">
          {/* Columna de la imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-neon mt-[13px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <img
              src="/images/about/perfil.jpg"
              alt="Piero Valdez"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Columna del contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 mt-[-122px]"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-heading font-bold text-white mb-2"
            >
              Estudiante de Ingeniería de Software
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base font-body text-white/60 tracking-wide mb-2"
            >
              Soy un estudiante de Ingeniería de Software apasionado por el desarrollo web. 
              Mi objetivo es convertirme en un desarrollador Full Stack, combinando diseño intuitivo 
              con código limpio y eficiente para crear experiencias web excepcionales.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-base font-body text-white/60 tracking-wide mb-2"
            >
              Actualmente me estoy formando en el desarrollo de aplicaciones web modernas y escalables, 
              enfocándome en React, Next.js y desarrollo backend. Me mantengo en constante aprendizaje 
              de las últimas tecnologías y mejores prácticas del desarrollo web.
            </motion.p>

            {/* Habilidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="glass-effect p-6 rounded-xl space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-md" />
                      <skill.icon className="w-6 h-6 text-white relative z-10" />
                    </div>
                    <h3 className="text-sm text-white font-heading font-semibold tracking-wide">
                      {skill.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + itemIndex * 0.1 }}
                        className="flex items-center gap-2 text-white/60 text-xs font-body tracking-wide"
                      >
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
