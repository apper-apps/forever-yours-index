import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimelineItem from '@/components/molecules/TimelineItem';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import { getTimelineEvents } from '@/services/api/timelineService';

const Timeline = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getTimelineEvents();
      setEvents(data);
    } catch (err) {
      setError('Failed to load our special moments');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadEvents} />;
  if (events.length === 0) return <Empty title="No moments yet" description="Our timeline is waiting for special moments to be added." />;

  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-br from-lavender-blush to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-gradient-to-r from-romantic-pink to-deep-pink bg-clip-text mb-6">
            Our Love Story Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every milestone in our journey together, from the first hello to this special day.
          </p>
        </motion.div>
        
        <div className="relative">
          {events.map((event, index) => (
            <TimelineItem 
              key={event.Id} 
              event={event} 
              index={index} 
              isLast={index === events.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;