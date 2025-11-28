import { motion } from 'framer-motion';
import { FaBriefcase, FaCubes } from 'react-icons/fa';

import {
  SiReact,
  SiGraphql,
  SiDocker,
  SiPython,
  SiDjango,
  SiJavascript,
  SiCss3,
  SiNginx,
} from 'react-icons/si';
import type { JSX } from 'react';

// Diccionario de íconos Labsol + Arkon
const expTechIcons: Record<string, JSX.Element> = {
  React: <SiReact />,
  GraphQL: <SiGraphql />,
  NX: <SiNginx />,
  Microservices: <FaCubes />,
  Docker: <SiDocker />,

  // ⭐ LABSOL TECH
  Python: <SiPython />,
  Django: <SiDjango />,
  JavaScript: <SiJavascript />,
  CSS: <SiCss3 />,
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="experience-title">
        <FaBriefcase className="experience-icon" /> Work Experience
      </h2>

      <div className="experience-grid">
        {/* ⭐ LABSOL */}
        <motion.div
          className="exp-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <h3>Labsol — Frontend Developer</h3>
          <span className="exp-date">Jan 2022 – Jun 2023</span>
          <p>
            Built a remote learning web application. Worked on UI, internal tools, REST APIs,
            microfrontend structure and performance improvements.
          </p>

          {/* ⭐ TECNOLOGÍAS LABSOL */}
          <div className="exp-tech-list">
            {['Python', 'Django', 'JavaScript', 'CSS'].map((t) => (
              <div className="exp-tech-pill" key={t}>
                <span className="exp-tech-icon">{expTechIcons[t]}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ⭐ ARKON DATA */}
        <motion.div
          className="exp-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <h3>Arkon Data — Frontend Developer</h3>
          <span className="exp-date">Feb 2024 – Jan 2025</span>
          <p>
            Designed high-performance UIs using React, TypeScript, GraphQL & NX. Worked with
            microfrontends, real-time monitoring, TDD and large-scale data flow systems. Created
            prototypes and technical documentation for the product team.
          </p>

          {/* ⭐ TECNOLOGÍAS ARKON */}
          <div className="exp-tech-list">
            {['React', 'GraphQL', 'NX', 'Microservices', 'Docker'].map((t) => (
              <div className="exp-tech-pill" key={t}>
                <span className="exp-tech-icon">{expTechIcons[t]}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
