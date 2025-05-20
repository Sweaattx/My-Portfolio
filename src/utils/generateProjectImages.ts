import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

const generateProjectImage = async (
  title: string,
  technologies: string[],
  category: string,
  outputPath: string,
  isThumbnail: boolean = false
) => {
  const width = isThumbnail ? 400 : 1200;
  const height = isThumbnail ? 300 : 800;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fondo con gradiente
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#000000');
  gradient.addColorStop(1, '#1a1a1a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Grid de fondo
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  const gridSize = 40;
  for (let x = 0; x < width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Círculos decorativos
  const circles = [
    { x: width * 0.2, y: height * 0.3, radius: 100, opacity: 0.1 },
    { x: width * 0.8, y: height * 0.7, radius: 150, opacity: 0.05 },
    { x: width * 0.5, y: height * 0.5, radius: 200, opacity: 0.08 }
  ];

  circles.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${circle.opacity})`;
    ctx.fill();
  });

  // Título
  ctx.font = isThumbnail ? 'bold 32px Inter' : 'bold 64px Inter';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(title, width / 2, height * 0.3);

  // Categoría
  ctx.font = isThumbnail ? '24px Inter' : '32px Inter';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.fillText(category.toUpperCase(), width / 2, height * 0.4);

  // Tecnologías
  ctx.font = isThumbnail ? '16px Inter' : '24px Inter';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  const techText = technologies.join(' • ');
  ctx.fillText(techText, width / 2, height * 0.5);

  // Guardar la imagen
  const buffer = canvas.toBuffer(); // PNG por defecto
  await fs.promises.writeFile(outputPath.replace(/\.webp$/, '.png'), buffer);
};

const projects = [
  {
    title: 'Portfolio Personal',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend'
  },
  {
    title: 'Sistema Académico',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Full Stack'
  },
  {
    title: 'E-commerce',
    technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Full Stack'
  },
  {
    title: 'API REST de Gestión',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
    category: 'Backend'
  },
  {
    title: 'Microservicio de Notificaciones',
    technologies: ['Node.js', 'RabbitMQ', 'Redis', 'Docker', 'Kubernetes'],
    category: 'Backend'
  },
  {
    title: 'Dashboard Analítico',
    technologies: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS', 'WebSocket'],
    category: 'Frontend'
  }
];

export const generateAllImages = async (): Promise<void> => {
  const basePath = path.join(process.cwd(), 'public', 'images', 'projects');

  for (const project of projects) {
    const filename = project.title.toLowerCase().replace(/\s+/g, '-');
    
    // Generar imagen principal
    await generateProjectImage(
      project.title,
      project.technologies,
      project.category,
      path.join(basePath, `${filename}.png`),
      false
    );

    // Generar thumbnail
    await generateProjectImage(
      project.title,
      project.technologies,
      project.category,
      path.join(basePath, `${filename}-thumb.png`),
      true
    );
  }
};

// Ejecutar la generación de imágenes
generateAllImages().catch(console.error); 