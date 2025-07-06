import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '@/components/atoms/Card';
import ApperIcon from '@/components/ApperIcon';

const TimelineItem = ({ event, index, isLast }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center mb-8 md:mb-12"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-romantic-pink to-deep-pink hidden md:block" />
      
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-romantic-pink rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />
      
      {/* Content */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-romantic-pink to-deep-pink rounded-full flex items-center justify-center">
              <ApperIcon name={event.icon} className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <span className="text-sm text-romantic-pink font-medium">{event.date}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default TimelineItem;