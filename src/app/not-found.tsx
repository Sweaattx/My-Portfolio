'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold text-primary mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-light/80 mb-8"
        >
          Página no encontrada
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary/90 text-light px-8 py-3 rounded-lg transition-colors"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
