'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Educación', href: '#education' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-light"
          >
            PV
          </motion.div>
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex space-x-8"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-light hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
