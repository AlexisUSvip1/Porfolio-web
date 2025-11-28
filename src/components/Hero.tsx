import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useTransform(mouseX, [0, 1], ['-20px', '20px']);
  const translateY = useTransform(mouseY, [0, 1], ['-20px', '20px']);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className="relative overflow-hidden hero-container">
      {/* 🎇 Fondo Neon */}
      <motion.div
        className="neon-bg"
        style={{ x: translateX, y: translateY }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
      />

      {/* 📝 Contenido */}
      <motion.section
        className="hero relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title">
          Hi, I'm <span>Alexis Ultreras Sotelo</span>
        </h1>

        {/* 🔥 NUEVA LÍNEA — Frontend Developer */}
        <h3 className="frontend-title">Frontend Developer</h3>

        <p className="subtitle">
          I am a software engineer who loves creating cutting-edge, dynamic and high-quality user
          interfaces. I communicate clearly, learn fast, and continuously improve my craft.
        </p>
        <motion.a
          href="/cv/AlexisUS.pdf"
          download
          className="cv-button neon-cv"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.92 }}
        >
          Download CV
        </motion.a>
      </motion.section>
    </section>
  );
}
