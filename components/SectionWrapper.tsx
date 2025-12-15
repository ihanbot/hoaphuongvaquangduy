import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;