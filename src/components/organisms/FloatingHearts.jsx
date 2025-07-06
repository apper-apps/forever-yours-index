import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        size: Math.random() * 20 + 15,
        opacity: Math.random() * 0.6 + 0.4,
        duration: Math.random() * 3 + 4,
      };
      return heart;
    };

    const interval = setInterval(() => {
      setHearts(prev => {
        const newHearts = [...prev, createHeart()];
        return newHearts.slice(-15); // Keep only last 15 hearts
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ 
              x: heart.x, 
              y: heart.y, 
              opacity: 0,
              scale: 0 
            }}
            animate={{ 
              x: heart.x + (Math.random() - 0.5) * 100,
              y: -100, 
              opacity: heart.opacity,
              scale: 1,
              rotate: Math.random() * 360
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: heart.duration,
              ease: "easeOut"
            }}
            className="absolute"
            style={{
              fontSize: `${heart.size}px`,
              color: '#FF69B4',
            }}
          >
            <ApperIcon name="Heart" className="w-6 h-6" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;