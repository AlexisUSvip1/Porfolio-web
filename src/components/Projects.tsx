import { motion } from 'framer-motion';
import type { JSX } from 'react';
import {
  SiNestjs,
  SiFirebase,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiFlutter,
  SiDart,
} from 'react-icons/si';
import { FaBrain, FaMapMarkedAlt, FaNetworkWired } from 'react-icons/fa';

export interface Project {
  title: string;
  description: string;
  tech: string;
  color: string;
}

const techIcons: Record<string, JSX.Element> = {
  React: <SiReact />,
  TailwindCSS: <SiTailwindcss />,
  'Next.js': <SiNextdotjs />,
  'Node.js': <SiNodedotjs />,
  Flutter: <SiFlutter />,
  Dart: <SiDart />,
  NestJS: <SiNestjs />,
  Firebase: <SiFirebase />,
  AI: <FaBrain />,
  'Maps API': <FaMapMarkedAlt />,
  WebSockets: <FaNetworkWired />,
};

const projects: Project[] = [
  {
    title: 'Freelance — Landing Pages',
    description:
      'Designed and developed custom landing pages optimized for conversions using React.',
    tech: 'React, TailwindCSS',
    color: 'linear-gradient(135deg, #00faff, #008cff, #0051ff)',
  },
  {
    title: 'E-commerce Components',
    description: 'Reusable UI components such as carts, product galleries and checkout flows.',
    tech: 'Next.js, Node.js',
    color: 'linear-gradient(135deg, #ff00e6, #b800ff, #6500ff)',
  },
  {
    title: 'Mobile UI Kits',
    description: 'Modular UI kits for Flutter apps to accelerate development.',
    tech: 'Flutter, Dart',
    color: 'linear-gradient(135deg, #39ff14, #00c853, #00e676)',
  },

  // ⭐ NUEVO PROYECTO 4 — SleepMind
  {
    title: 'SleepMind — AI Sleep Coach App',
    description:
      'A full AI-powered sleep optimization app using NestJS + React Native. Features include personalized sleep routines, session tracking, AI recommendations based on habits, and audio-guided sessions. Integrated Firebase auth, push notifications, analytics and adaptive UI.',
    tech: 'React, NestJS, Firebase, AI',
    color: 'linear-gradient(135deg, #6a00ff, #b800ff, #ff00c8)', // morado–magenta neon
  },

  // ⭐ NUEVO PROYECTO 5 — Store Locator (GPS + Real-time)
  {
    title: 'Real-Time Store Locator App',
    description:
      'Interactive map application that lets users view stores in real time, see distances, track movement, and navigate to the destination directly from the app. Includes GPS tracking, real-time WebSocket updates, and a clean mobile-first interface.',
    tech: 'React, Node.js, Maps API, WebSockets',
    color: 'linear-gradient(135deg, #00ffd5, #00ff88, #00ff3c)', // aqua–green neon
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            key={p.title}
          >
            {/* HEADER NEON */}
            <div className="project-header" style={{ background: p.color }} />

            <h3>{p.title}</h3>
            <p>{p.description}</p>

            {/* ⭐ TECH CON ÍCONOS */}
            <div className="project-tech-list">
              {p.tech.split(',').map((t) => {
                const tech = t.trim();
                return (
                  <div className="tech-pill" key={tech}>
                    <span className="tech-icon">{techIcons[tech]}</span>
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
