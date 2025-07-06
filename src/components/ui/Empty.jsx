import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const Empty = ({ 
  title = 'No items found', 
  description = 'There are no items to display at the moment.',
  actionLabel,
  onAction,
  className = '' 
}) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-12 text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink to-deep-pink rounded-full flex items-center justify-center mb-6">
        <ApperIcon name="Heart" className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 max-w-md">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
};

export default Empty;