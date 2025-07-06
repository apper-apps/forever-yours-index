import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ApperIcon from '@/components/ApperIcon';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <footer className="py-20 px-4 bg-gradient-to-br from-romantic-pink to-deep-pink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-pink/90 to-deep-pink/90" />
      
      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-8"
          >
            💖
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Forever Yours, Aryan
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Thank you for being the most amazing person in my life. 
            Every day with you is a gift, and I can't wait to create 
            more beautiful memories together.
          </p>
          
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="text-3xl"
            >
              💕
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="text-3xl"
            >
              💖
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="text-3xl"
            >
              💝
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
              className="text-3xl"
            >
              💗
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/20 pt-8"
        >
          <p className="text-white/60 text-sm">
            Made with ❤️ for the most wonderful person in the world
          </p>
        </motion.div>
      </div>
      
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <ApperIcon name="Heart" className="w-6 h-6" />
          </motion.div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;