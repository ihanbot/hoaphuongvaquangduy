import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-[85vh] overflow-hidden bg-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="hero.jpg.JPG" 
          alt="Hoa Phượng & Quang Duy" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="uppercase tracking-[0.2em] text-xs mb-4 opacity-90 font-sans">
            Wedding Invitation
          </p>
          <h1 className="font-serif text-6xl md:text-7xl leading-tight mb-4 drop-shadow-lg">
            Hoa Phượng<br />
            <span className="text-4xl align-middle mx-2">&</span><br />
            Quang Duy
          </h1>
          <div className="w-12 h-[1px] bg-white/70 mx-auto my-6" />
          <div className="font-serif text-2xl tracking-widest">
            31 · 12 · 2025
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;