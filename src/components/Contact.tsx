import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-text">
        If you're interested in working together, collaborating on a project, or simply want to
        reach out, feel free to contact me through any of the options below.
      </p>

      {/* 🔥 New dynamic container */}
      <motion.div
        className="contact-card enhanced"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* PRIMARY EMAIL */}
        <motion.div
          className="contact-row enhanced-row"
          whileHover={{ scale: 1.03, x: 5 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        >
          <FaEnvelope className="contact-icon enhanced-icon" />
          <div className="contact-info">
            <span className="contact-label">Primary Email: </span>
            <a href="mailto:ultrerass01@hotmail.com" className="contact-link">
              ultrerass01@hotmail.com
            </a>
          </div>
        </motion.div>

        {/* SECONDARY EMAIL */}
        <motion.div
          className="contact-row enhanced-row"
          whileHover={{ scale: 1.03, x: 5 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        >
          <FaEnvelope className="contact-icon enhanced-icon" />
          <div className="contact-info">
            <span className="contact-label">Secondary Email: </span>
            <a href="mailto:alexisultreras01@gmail.com" className="contact-link">
              alexisultreras01@gmail.com
            </a>
          </div>
        </motion.div>

        {/* PHONE */}
        <motion.div
          className="contact-row enhanced-row"
          whileHover={{ scale: 1.03, x: 5 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        >
          <FaPhone className="contact-icon enhanced-icon" />
          <div className="contact-info">
            <span className="contact-label">Phone Number: </span>
            <a href="tel:+523346329081" className="contact-link">
              +52 33 4632 9081
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
