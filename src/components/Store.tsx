import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
export function Store() {
  const products = [{
    name: 'Sony a6400',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Canon 500D',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Canon 1200D',
    image: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  return <section id="store" className="py-24 relative overflow-hidden bg-white">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
        <div className="transform -rotate-12 scale-150 flex flex-col gap-8">
          <span className="text-8xl md:text-[200px] font-display font-bold text-transparent" style={{
          WebkitTextStroke: '2px #e60000'
        }}>
            STORE STORE STORE
          </span>
          <span className="text-8xl md:text-[200px] font-display font-bold text-transparent" style={{
          WebkitTextStroke: '2px #e60000'
        }}>
            STORE STORE STORE
          </span>
          <span className="text-8xl md:text-[200px] font-display font-bold text-transparent" style={{
          WebkitTextStroke: '2px #e60000'
        }}>
            STORE STORE STORE
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-display font-bold text-brand-red uppercase tracking-wide">
            STORE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }} className="bg-white rounded-[40px] border-4 border-brand-red p-8 flex flex-col items-center shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border-4 border-gray-100 shadow-inner">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-display text-gray-800 text-center leading-tight">
                {product.name.split(' ').map((word, i) => <Fragment key={i}>
                    {word}
                    {i === 0 && <br />}
                  </Fragment>)}
              </h3>
            </motion.div>)}
        </div>

        <div className="flex justify-center">
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="bg-brand-red text-white font-bold text-xl py-4 px-16 rounded-full shadow-lg hover:bg-red-700 transition-colors">
            MORE
          </motion.button>
        </div>
      </div>
    </section>;
}