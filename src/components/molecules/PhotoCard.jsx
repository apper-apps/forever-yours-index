import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/atoms/Card';

const PhotoCard = ({ photo, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <Card className="overflow-hidden p-0 photo-hover">
        <div className="relative aspect-square">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-soft-pink to-romantic-pink animate-pulse" />
          )}
          
          {hasError ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-soft-pink to-romantic-pink text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">💕</span>
                </div>
                <p className="text-sm">Photo placeholder</p>
              </div>
            </div>
          ) : (
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-sm font-medium">{photo.caption}</p>
            <p className="text-white/80 text-xs mt-1">{photo.date}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PhotoCard;