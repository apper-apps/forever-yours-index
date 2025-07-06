import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LoveCard from '@/components/molecules/LoveCard';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import { getLoveMessages } from '@/services/api/loveService';

const LoveCards = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getLoveMessages();
      setMessages(data);
    } catch (err) {
      setError('Failed to load love messages');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadMessages} />;
  if (messages.length === 0) return <Empty title="No messages yet" description="The love messages collection is waiting to be filled with sweet words." />;

  return (
    <section id="love-cards" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-gradient-to-r from-romantic-pink to-deep-pink bg-clip-text mb-6">
            Things I Love About You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hover over each card to discover all the wonderful things that make you so special to me.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {messages.map((message, index) => (
            <LoveCard key={message.Id} message={message} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveCards;