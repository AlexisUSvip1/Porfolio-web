import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiCss3,
  SiAngular,
  SiFlutter,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiTestinglibrary,
  SiJsonwebtokens,
} from 'react-icons/si';
import { FaBroom } from 'react-icons/fa'; // Clean Code icon (metafórico)

const skills = [
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'AngularJS', icon: <SiAngular /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'TDD', icon: <SiTestinglibrary /> },
  { name: 'Clean Code', icon: <FaBroom /> },
  { name: 'JWT', icon: <SiJsonwebtokens /> },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            whileHover={{ scale: 1.07 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
