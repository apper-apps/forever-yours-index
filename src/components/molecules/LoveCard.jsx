import React from 'react';
import { motion } from 'framer-motion';

const LoveCard = ({ message, index }) => {
  return (
    <motion.div
      className="flip-card h-48 interactive"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flip-card-inner h-full">
        {/* Front of card */}
        <div className="flip-card-front bg-gradient-to-br from-romantic-pink to-deep-pink flex items-center justify-center">
          <div className="text-center text-white p-6">
            <div className="text-4xl mb-4">{message.emoji}</div>
            <h3 className="text-lg font-semibold">Click to reveal</h3>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back bg-white flex items-center justify-center p-6">
          <div className="text-center">
            <div className="text-3xl mb-4">{message.emoji}</div>
            <p className="text-gray-800 font-medium leading-relaxed">{message.text}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoveCard;