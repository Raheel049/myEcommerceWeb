import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <motion.div
        className={styles.spinner}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        Loading Products...
      </motion.p>
    </div>
  );
};

export default Loader;