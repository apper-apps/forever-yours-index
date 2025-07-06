import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WishForm from '@/components/molecules/WishForm';
import WishCard from '@/components/molecules/WishCard';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import { getBirthdayWishes, addBirthdayWish } from '@/services/api/wishService';

const BirthdayWishes = () => {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    loadWishes();
  }, []);

  const loadWishes = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getBirthdayWishes();
      setWishes(data);
    } catch (err) {
      setError('Failed to load birthday wishes');
    } finally {
      setLoading(false);
    }
  };

  const handleAddWish = async (newWish) => {
    try {
      await addBirthdayWish(newWish);
      setWishes(prev => [newWish, ...prev]);
    } catch (err) {
      setError('Failed to add birthday wish');
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadWishes} />;

  return (
    <section id="wishes" className="py-20 px-4 bg-gradient-to-br from-lavender-blush to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-gradient-to-r from-romantic-pink to-deep-pink bg-clip-text mb-6">
            Birthday Wishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leave a special birthday message for Kanishka and see what others have written to celebrate this special day.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Wish Form */}
          <div>
            <WishForm onAddWish={handleAddWish} />
          </div>
          
          {/* Wishes List */}
          <div>
            {wishes.length === 0 ? (
              <Empty 
                title="No wishes yet" 
                description="Be the first to leave a birthday wish for Kanishka!" 
              />
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-center text-gray-900 mb-8">
                  Birthday Messages ({wishes.length})
                </h3>
                {wishes.map((wish, index) => (
                  <WishCard key={wish.Id} wish={wish} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayWishes;