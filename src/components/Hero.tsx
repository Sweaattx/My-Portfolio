'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useEffect, useState, memo, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import avatarPlaceholder from '@/utils/avatarPlaceholder';

// Componente de enlaces sociales optimizado
const SocialLinks = memo(({ delay }: { delay: number }) => {
  const socials = [
    { icon: FaGithub, href: 'https://github.com/tuusuario', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/tuusuario', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/tuusuario', label: 'Twitter' },
  ];

  return (
    <div className="flex gap-6 justify-center lg:justify-start">
      {socials.map((social, index) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-white hover:text-white/80 transition-colors duration-300"
        >
          <div className="relative">
            <social.icon className="w-6 h-6 relative z-10" />
          </div>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 glass-effect rounded-full text-sm font-body opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
});

// Componente de fondo optimizado
const BackgroundEffects = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Reducir la frecuencia de actualización y el rango de movimiento
    requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10, // Reducido a 10
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      <div 
        className="absolute inset-0 bg-gradient-shine"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          willChange: 'transform',
        }}
      />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl opacity-30" />
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl opacity-30" />
    </>
  );
});

// Componente principal optimizado
const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]); // Reducido de 300 a 200
  const y = useTransform(scrollY, [0, 200], [0, 50]); // Reducido de 300 a 200 y de 100 a 50

  return (
    <section className="section-lg relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundEffects />
      
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      
      <div className="container relative z-10">
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          style={{ 
            opacity: opacity.get(), 
            transform: `translateY(${y.get()}px)`,
            willChange: 'transform, opacity' 
          }}
        >
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-6">
              <span className="inline-block px-6 py-2 rounded-full glass-effect text-white/80 text-sm font-heading font-medium tracking-wide">
                Aspirante a Desarrollador Full Stack
              </span>
              <motion.h1 
                className="text-5xl font-heading font-bold text-white mb-3"
              >
                Piero Valdez
              </motion.h1>
              <motion.h2 
                className="text-xl font-medium text-white/80 mb-4"
              >
                Desarrollador Full Stack
              </motion.h2>
              <motion.p 
                className="text-base text-white/60 max-w-md mb-6"
              >
                Apasionado por crear soluciones web innovadoras y experiencias de usuario excepcionales.
              </motion.p>
            </div>

            <p className="text-lg font-body text-white/60 max-w-lg mx-auto lg:mx-0 tracking-wide">
              Actualmente me estoy formando en el desarrollo web full stack, enfocándome en React, 
              Next.js y desarrollo backend. Mi objetivo es crear aplicaciones web modernas y escalables 
              que ofrezcan una excelente experiencia de usuario.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Contactar
              </a>
              <a
                href="#projects"
                className="btn btn-outline"
              >
                Ver Proyectos
              </a>
            </div>
            
            <SocialLinks delay={0} />
          </div>
          
          {/* Avatar optimizado */}
          <div className="relative">
            <div className="relative w-56 h-56 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg opacity-30" />
              <Image
                src={avatarPlaceholder}
                alt="Piero Valdez"
                width={224}
                height={224}
                className="rounded-full relative z-10"
                priority
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
