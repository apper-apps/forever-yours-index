import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PhotoCard from '@/components/molecules/PhotoCard';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import { getPhotos } from '@/services/api/photoService';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getPhotos();
      setPhotos(data);
    } catch (err) {
      setError('Failed to load our beautiful memories');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadPhotos} />;
  if (photos.length === 0) return <Empty title="No memories yet" description="Our photo gallery is waiting for beautiful moments to be captured." />;

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-gradient-to-r from-romantic-pink to-deep-pink bg-clip-text mb-6">
            Our Beautiful Memories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of our favorite moments together, each one a treasure in the story of our love.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <PhotoCard key={photo.Id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;