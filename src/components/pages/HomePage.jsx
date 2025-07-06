import React from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import PhotoGallery from '@/components/organisms/PhotoGallery';
import Timeline from '@/components/organisms/Timeline';
import LoveCards from '@/components/organisms/LoveCards';
import GiftBoxes from '@/components/organisms/GiftBoxes';
import LoveLetter from '@/components/organisms/LoveLetter';
import BirthdayWishes from '@/components/organisms/BirthdayWishes';
import Footer from '@/components/organisms/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PhotoGallery />
      <Timeline />
      <LoveCards />
      <GiftBoxes />
      <LoveLetter />
      <BirthdayWishes />
      <Footer />
    </div>
  );
};

export default HomePage;