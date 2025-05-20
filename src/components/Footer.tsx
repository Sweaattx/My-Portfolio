'use client';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-8 mt-auto">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-light/60 mb-4 md:mb-0">
            © {currentYear} Piero Benjamin Ayvar Valdez. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/pieroayvar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/60 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/piero-ayvar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/60 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:piero.ayvar@upc.edu.pe"
              className="text-light/60 hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
