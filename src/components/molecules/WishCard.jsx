import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/atoms/Card';
import ApperIcon from '@/components/ApperIcon';

const WishCard = ({ wish, index }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-romantic-pink to-deep-pink rounded-full flex items-center justify-center">
            <ApperIcon name="Heart" className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">{wish.author}</h4>
              <span className="text-xs text-gray-500">{formatDate(wish.timestamp)}</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{wish.message}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default WishCard;