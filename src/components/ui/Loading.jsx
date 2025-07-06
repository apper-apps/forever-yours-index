import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center p-12 ${className}`}>
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-soft-pink border-t-romantic-pink rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="text-romantic-pink font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading magical moments...
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;