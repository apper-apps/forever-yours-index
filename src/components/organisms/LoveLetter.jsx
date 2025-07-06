import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleOpenLetter = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowConfetti(true);
      toast.success('💖 A love letter just for you!', {
        position: "top-right",
        autoClose: 3000,
      });
      
      // Hide confetti after animation
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const letterContent = `My Dearest Kanishka,

On this special day, I want you to know how incredibly grateful I am to have you in my life. You are not just my girlfriend, but my best friend, my confidant, and my greatest source of joy.

Every day with you feels like a gift. Your smile can brighten even the darkest days, your laughter is music to my ears, and your love gives me strength to face any challenge. You have this amazing ability to make ordinary moments feel extraordinary just by being yourself.

I love how you care for everyone around you, how you light up when you talk about your dreams, and how you make me want to be a better person every single day. Your kindness, intelligence, and beautiful soul never cease to amaze me.

Today, as we celebrate another year of your wonderful life, I want you to know that my love for you grows stronger with each passing day. You deserve all the happiness, love, and beautiful moments this world has to offer.

Happy Birthday, my love. Thank you for being the most amazing part of my life.

Forever yours,
Aryan 💖`;

  return (
    <section id="letter" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-gradient-to-r from-romantic-pink to-deep-pink bg-clip-text mb-6">
            A Letter From My Heart
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I wrote something special just for you. Click the envelope to read my heartfelt message.
          </p>
        </motion.div>
        
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="envelope"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="envelope-animation"
              >
                <Card 
                  className="relative overflow-hidden cursor-pointer interactive bg-gradient-to-br from-romantic-pink to-deep-pink text-white"
                  onClick={handleOpenLetter}
                >
                  <div className="p-12 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mb-6"
                    >
                      <ApperIcon name="Mail" className="w-20 h-20 mx-auto" />
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Sealed with Love
                    </h3>
                    <p className="text-white/90 mb-6">
                      A special letter written just for you on your birthday
                    </p>
                    <Button variant="outline" className="bg-white text-romantic-pink border-white hover:bg-romantic-pink hover:text-white">
                      Open Letter
                    </Button>
                  </div>
                  
                  {/* Envelope decoration */}
                  <div className="absolute top-4 left-4 text-white/20 text-xl">💕</div>
                  <div className="absolute top-4 right-4 text-white/20 text-xl">💖</div>
                  <div className="absolute bottom-4 left-4 text-white/20 text-xl">💝</div>
                  <div className="absolute bottom-4 right-4 text-white/20 text-xl">💗</div>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="letter"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <Card className="p-8 bg-white shadow-2xl">
                  <div className="max-w-none">
                    <div className="text-center mb-8">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-4xl mb-4"
                      >
                        💌
                      </motion.div>
                      <h3 className="text-2xl font-display font-bold text-romantic-pink">
                        My Love Letter to You
                      </h3>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <div className="whitespace-pre-line text-gray-700 leading-relaxed font-medium">
                        {letterContent}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Confetti effect */}
          {showConfetti && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * 400 - 200,
                    y: -50,
                    scale: 0,
                    rotate: 0
                  }}
                  animate={{ 
                    x: Math.random() * 400 - 200,
                    y: 500,
                    scale: 1,
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 3,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                  className="absolute text-2xl"
                >
                  {['💖', '💕', '💝', '💗', '💘'][i % 5]}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;