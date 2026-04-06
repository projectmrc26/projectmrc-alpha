import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const heroImages = ["/herobg1.jpg", "/herobg2.jpg", "/herobg3.jpg", "/herobg4.jpg"];
const slideVariants = {
  enter: {
    x: '100%'
  },
  center: {
    x: 0
  },
  exit: {
    x: '-100%'
  }
};
export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);
  return <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Sliding Background Images - left to right */}
      <AnimatePresence initial={false}>
        <motion.div key={currentIndex} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }} className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
          backgroundImage: `url("${heroImages[currentIndex]}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} />
          {/* Red Overlay */}
          <div className="absolute inset-0 bg-brand-red/50 mix-blend-multiply" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto mt-20">
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="text-white font-script text-7xl md:text-9xl lg:text-[140px] leading-tight drop-shadow-lg mb-4">
          Welcome!
        </motion.h1>

        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut'
      }} className="text-white font-display text-xl md:text-3xl lg:text-4xl tracking-[0.3em] md:tracking-[0.5em] uppercase drop-shadow-md">
          Miraco Photo Studio
        </motion.h2>
      </div>

      {/* Interactive Carousel Dots */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-3 z-10">
        {heroImages.map((_, index) => <button key={index} onClick={() => goToSlide(index)} aria-label={`Go to slide ${index + 1}`} className={`transition-all duration-300 rounded-full cursor-pointer ${index === currentIndex ? 'w-10 h-3 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/80'}`} />)}
      </div>
    </section>;
}