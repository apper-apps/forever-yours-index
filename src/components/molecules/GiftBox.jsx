import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import Card from '@/components/atoms/Card';
import ApperIcon from '@/components/ApperIcon';

const GiftBox = ({ gift, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      toast.success(`You opened a gift! 🎁`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const renderContent = () => {
    switch (gift.type) {
      case 'image':
        return (
          <div className="text-center">
            <img 
              src={gift.content} 
              alt="Gift" 
              className="w-20 h-20 mx-auto mb-4 rounded-lg object-cover"
            />
            <p className="text-sm text-gray-600">{gift.message}</p>
          </div>
        );
      case 'emoji':
        return (
          <div className="text-center">
            <div className="text-6xl mb-4">{gift.content}</div>
            <p className="text-sm text-gray-600">{gift.message}</p>
          </div>
        );
      default:
        return (
          <div className="text-center">
            <div className="text-2xl mb-4">💝</div>
            <p className="text-sm text-gray-600 font-medium">{gift.content}</p>
            {gift.message && (
              <p className="text-xs text-gray-500 mt-2">{gift.message}</p>
            )}
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="gift-box"
    >
      <Card 
        className="h-64 cursor-pointer interactive overflow-hidden"
        onClick={handleOpen}
        hover={!isOpen}
      >
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="closed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-romantic-pink to-deep-pink text-white p-6"
              >
                <motion.div
                  className="gift-lid"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ApperIcon name="Gift" className="w-16 h-16 mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">Mystery Gift</h3>
                <p className="text-sm text-center text-white/80">Click to open your surprise!</p>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full flex items-center justify-center bg-white p-6"
              >
                <div className="w-full">
                  {renderContent()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};

export default GiftBox;