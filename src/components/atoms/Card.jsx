import React from 'react';
import { motion } from 'framer-motion';

const Card = React.forwardRef(({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}, ref) => {
  return (
    <motion.div
      ref={ref}
      className={`
        bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20
        ${hover ? 'hover:shadow-2xl hover:scale-105' : ''}
        transition-all duration-300 ${className}
      `}
      whileHover={hover ? { scale: 1.05 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;