import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

interface HeroProps {
  onApplyClick: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  const slides = [
    {
      id: 1,
      title: 'Professional Loss Adjusters & Fraud Examiners',
      subtitle:
        'Led by Peter Langat, a Certified Fraud Examiner, ILAFE KENYA provides expert loss adjustment and fraud examination services across Kenya.',
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Expert Solutions Tailored for You',
      subtitle:
        'We ensure your claims are handled professionally and transparently, saving you time and money.',
      image:
        'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Your Trusted Partner in Loss Adjustment',
      subtitle:
        'With years of experience, our team ensures every case is evaluated thoroughly and fairly.',
      image:
        'https://images.unsplash.com/photo-1567113463730-77e3df20363c?w=500&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <div className="relative bg-blue-900 text-white h-screen">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="relative mt-36 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-4xl text-center font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-6 text-xl text-center ">{slide.subtitle}</p>
              {/* <div className="mt-10">
                <button
                  onClick={onApplyClick}
                  className="bg-blue-500 hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-semibold"
                >
                  Apply Now
                </button>
              </div> */}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-blue-900 opacity-50"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
