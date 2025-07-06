import React from 'react';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-gradient-to-r from-romantic-pink to-deep-pink text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-romantic-pink border-2 border-romantic-pink hover:bg-romantic-pink hover:text-white',
    outline: 'border-2 border-romantic-pink text-romantic-pink bg-transparent hover:bg-romantic-pink hover:text-white',
    ghost: 'text-romantic-pink hover:bg-romantic-pink hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  return (
    <motion.button
      ref={ref}
      className={`
        interactive font-medium rounded-full transition-all duration-300 
        ${variants[variant]} ${sizes[size]} ${className}
        hover:scale-105 active:scale-95 glow-pink
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;