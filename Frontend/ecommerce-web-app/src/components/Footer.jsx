import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className={styles.footer}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        {/* Section 1: Brand Info */}
        <motion.div className={styles.section} variants={itemVariants}>
          <h2 className={styles.logo}>Shoply<span>.</span></h2>
          <p className={styles.description}>
            Your ultimate destination for tech, fashion, and lifestyle. High-quality products.
          </p>
          <div className={styles.socialIcons}>
            <motion.a href="#" whileHover={{ scale: 1.2 }}>
                <FontAwesomeIcon icon={faFacebookF} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}>
                <FontAwesomeIcon icon={faInstagram} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}>
                <FontAwesomeIcon icon={faTwitter} />
            </motion.a>
          </div>
        </motion.div>

        {/* Section 2: Quick Links */}
        <motion.div className={styles.section} variants={itemVariants}>
          <h3>Quick Links</h3>
          <ul>
            <motion.li whileHover={{ x: 5 }}><Link to="/">Home</Link></motion.li>
            <motion.li whileHover={{ x: 5 }}><Link to="/products">All Products</Link></motion.li>
            <motion.li whileHover={{ x: 5 }}><Link to="/cart">My Cart</Link></motion.li>
          </ul>
        </motion.div>

        {/* Section 3: Contact Info */}
        <motion.div className={styles.section} variants={itemVariants}>
          <h3>Contact Us</h3>
          <ul className={styles.contactList}>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} /> Kharadar, Karachi</li>
            <li><FontAwesomeIcon icon={faPhone} className={styles.icon} /> +92 305 8093023</li>
            <li><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> support@shoply.com</li>
          </ul>
        </motion.div>

        {/* Section 4: Newsletter */}
        <motion.div className={styles.section} variants={itemVariants}>
          <h3>Stay Updated</h3>
          <form className={styles.newsletter} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" />
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Join
            </motion.button>
          </form>
        </motion.div>

      </motion.div>

      <div className={styles.bottomBar}>
        <p>&copy; 2026 Shoply E-commerce. Built with for customers</p>
      </div>
    </footer>
  );
};

export default Footer;