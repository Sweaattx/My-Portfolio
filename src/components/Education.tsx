'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Education = () => {
  const education = [
    {
      institution: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      degree: 'Ingeniería de Software',
      period: '2025 - Presente',
      description: 'Estudiante de ingeniería de software con enfoque en desarrollo web y tecnologías modernas.',
      logo: 'https://static.wikia.nocookie.net/logopedia/images/2/2d/UPC-Logo-Actual.png/revision/latest?cb=20230305155749&path-prefix=es'
    }
  ];

  const achievements = [
    'Participación en proyectos académicos de desarrollo de software',
    'Conocimientos en metodologías ágiles y gestión de proyectos',
    'Experiencia en desarrollo full-stack con tecnologías modernas',
  ];

  return (
    <section id="education" className="section-lg relative min-h-screen flex items-center justify-center overflow-hidden mt-20">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      
      <div className="container relative z-10 -mt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-heading font-bold text-white mb-12 text-center">
            Educación
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - Contenido */}
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect p-8 rounded-xl"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {item.institution}
                  </h3>
                  <p className="text-white/80 mb-2">{item.degree}</p>
                  <p className="text-white/60 text-sm mb-4">{item.period}</p>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-effect p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Logros y Habilidades Destacadas</h3>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center text-white/70"
                    >
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Columna derecha - Logo UPC */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 rounded-xl flex items-center justify-center h-full"
            >
              <div className="relative w-full aspect-square max-w-md">
                <Image
                  src={education[0].logo}
                  alt="Logo UPC"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
