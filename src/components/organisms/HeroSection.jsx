import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-blush via-white to-soft-pink" />
      
      <div ref={ref} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold text-transparent bg-gradient-to-r from-romantic-pink to-deep-pink bg-clip-text mb-6 glow-text"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 105, 180, 0.5)',
                '0 0 30px rgba(255, 105, 180, 0.8)',
                '0 0 20px rgba(255, 105, 180, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Happy Birthday
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-display font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My Love, Kanishka ❤️
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Every moment with you is a blessing worth celebrating. 
            Today, I want to show you just how much you mean to me.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-romantic-pink"
          >
            <div className="text-4xl">💖</div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-20 text-romantic-pink text-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        💕
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20 text-deep-pink text-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        💖
      </motion.div>
    </section>
  );
};

export default HeroSection;