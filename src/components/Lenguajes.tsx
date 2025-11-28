import { motion } from 'framer-motion';
import { FaFlagUsa, FaFlag } from 'react-icons/fa';

export default function Languages() {
  return (
    <motion.section
      id="languages"
      className="languages"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="languages-title">Languages</h2>

      <div className="languages-grid">
        <motion.div
          className="language-card"
          whileHover={{ scale: 1.07 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <FaFlag className="language-icon" />
          <span className="language-name">Spanish</span>
          <p className="language-level">Native</p>
        </motion.div>

        <motion.div
          className="language-card"
          whileHover={{ scale: 1.07 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <FaFlagUsa className="language-icon" />
          <span className="language-name">English</span>
          <p className="language-level">Second Language</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
