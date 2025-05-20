'use client';
import { memo } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export interface Project {
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  technologies: string[];
  links: { label: string; url: string; }[];
  category: string;
  features: string[];
}

export interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = memo(({ project, index }: ProjectCardProps) => (
  <div
    className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 p-6"
    style={{
      opacity: 0,
      transform: 'translateY(20px)',
      animation: `fadeInUp 0.5s ease-out ${index ? index * 0.1 : 0}s forwards`,
    }}
  >
    <div className="relative aspect-video mb-4">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain p-4 bg-white/5 rounded-lg transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        loading="lazy"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          padding: '1rem'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </div>
    
    <div className="space-y-3">
      <h3 className="text-lg font-heading font-semibold text-white">{project.title}</h3>
      <p className="text-xs text-white/60 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-white/80"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3 pt-1.5">
        {project.links?.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-1.5 text-xs"
          >
            {link.label === 'GitHub' ? (
              <FaGithub className="w-3.5 h-3.5" />
            ) : (
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
            )}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>

    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard; 