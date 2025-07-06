import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
import Card from '@/components/atoms/Card';

const WishForm = ({ onAddWish }) => {
  const [formData, setFormData] = useState({
    author: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.author.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    const newWish = {
      Id: Date.now(),
      author: formData.author,
      message: formData.message,
      timestamp: Date.now(),
    };

    onAddWish(newWish);
    setFormData({ author: '', message: '' });
    toast.success('Your wish has been added! 💖');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="p-6 max-w-md mx-auto">
        <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">
          Leave a Birthday Wish
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="author"
            label="Your Name"
            placeholder="Enter your name"
            value={formData.author}
            onChange={handleChange}
          />
          
          <Textarea
            name="message"
            label="Your Message"
            placeholder="Write your birthday wish for Kanishka..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
          
          <Button type="submit" className="w-full">
            Send Wish 💝
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

export default WishForm;