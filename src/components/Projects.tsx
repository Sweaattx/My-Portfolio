'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { useState, memo, useCallback, Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
// Importar solo los tipos estáticamente
import { type Project, type ProjectCardProps } from './ProjectCard';

// Cargar componente dinámicamente
const ProjectCard = dynamic(() => import('./ProjectCard'), {
  loading: () => (
    <div className="h-[400px] bg-white/5 rounded-xl animate-pulse" />
  ),
});

const categories = ['Todos', 'Web', 'Backend', 'Full Stack'] as const;
type Category = typeof categories[number];

const projects: Project[] = [
  {
    title: 'Portfolio Personal',
    description: 'Portfolio profesional desarrollado con Next.js, TypeScript y Tailwind CSS. Incluye animaciones suaves, diseño responsivo y optimización de rendimiento.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tuusuario/portfolio' },
      { label: 'Demo', url: 'https://tudominio.com' }
    ],
    category: 'Web',
    features: [
      'Diseño moderno y responsivo',
      'Optimización de rendimiento',
      'Animaciones suaves',
      'SEO optimizado'
    ]
  },
  {
    title: 'Sistema de Gestión Académica',
    description: 'Sistema completo para la gestión de estudiantes, profesores y cursos. Incluye autenticación, roles de usuario y reportes en tiempo real.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tuusuario/academic-system' },
      { label: 'Demo', url: 'https://academic.tudominio.com' }
    ],
    category: 'Full Stack',
    features: [
      'Gestión de usuarios y roles',
      'Reportes en tiempo real',
      'API RESTful',
      'Base de datos relacional'
    ]
  },
  {
    title: 'API REST de Gestión',
    description: 'API REST robusta para gestión de recursos, con autenticación JWT, validación de datos y documentación con Swagger.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tuusuario/rest-api' },
      { label: 'Documentación', url: 'https://api.tudominio.com/docs' }
    ],
    category: 'Backend',
    features: [
      'Autenticación JWT',
      'Documentación Swagger',
      'Validación de datos',
      'Tests automatizados'
    ]
  }
];

const ProjectFilter = memo(({ 
  activeCategory, 
  onCategoryChange 
}: { 
  activeCategory: Category; 
  onCategoryChange: (category: Category) => void;
}) => (
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          activeCategory === category
            ? 'bg-primary text-white shadow-lg shadow-primary/20'
            : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
));

ProjectFilter.displayName = 'ProjectFilter';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1]);

  const filteredProjects = useCallback(() => {
    return activeCategory === 'Todos'
      ? projects
      : projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-heading font-bold text-white mb-2">
            Mis Proyectos
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Una selección de mis proyectos más destacados, demostrando mis habilidades
            en desarrollo web y backend.
          </p>
        </motion.div>

        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <motion.div
          style={{ opacity, scale }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects().map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
