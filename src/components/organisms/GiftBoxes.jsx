import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GiftBox from '@/components/molecules/GiftBox';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import { getGiftBoxes } from '@/services/api/giftService';

const GiftBoxes = () => {
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    loadGifts();
  }, []);

  const loadGifts = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getGiftBoxes();
      setGifts(data);
    } catch (err) {
      setError('Failed to load gift boxes');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadGifts} />;
  if (gifts.length === 0) return <Empty title="No gifts yet" description="The gift collection is waiting to be filled with surprises." />;

  return (
    <section id="gifts" className="py-20 px-4 bg-gradient-to-br from-white to-lavender-blush">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-gradient-to-r from-romantic-pink to-deep-pink bg-clip-text mb-6">
            Virtual Gift Boxes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on each gift box to discover the special surprises I have for you on your birthday.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <GiftBox key={gift.Id} gift={gift} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftBoxes;