import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const MusicControls = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  // Note: In a real app, you'd use a proper music file
  // For demo purposes, we'll simulate music controls
  const toggleMusic = () => {
    if (isPlaying) {
      setIsPlaying(false);
      toast.info('Music paused 🎵');
    } else {
      setIsPlaying(true);
      toast.success('Playing "Perfect" by Ed Sheeran 🎵');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed top-8 right-8 z-40"
    >
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="sm"
        className="bg-white/80 backdrop-blur-sm border-romantic-pink/30 hover:bg-romantic-pink/10"
      >
        <ApperIcon 
          name={isPlaying ? "Pause" : "Play"} 
          className="w-4 h-4 mr-2" 
        />
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </Button>
    </motion.div>
  );
};

export default MusicControls;