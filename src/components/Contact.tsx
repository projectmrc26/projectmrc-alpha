import React from 'react';
import { motion } from 'framer-motion';
export function Contact() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-10 w-96 h-96 bg-gray-200 rounded-lg transform -rotate-12 opacity-50"></div>
        <div className="absolute -left-10 top-20 w-96 h-96 bg-gray-300 rounded-lg transform -rotate-6 opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Form Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="w-full md:w-1/2 bg-[#4a4a4a] rounded-2xl p-8 md:p-10 shadow-2xl">
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white text-center mb-8 uppercase tracking-wider">
              Contact Miraco Studio
            </h3>

            <form className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <label className="w-full md:w-24 text-white font-medium text-lg">
                  Name
                </label>
                <input
                  type="text"
                  className="flex-1 w-full bg-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red" />
                
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <label className="w-full md:w-24 text-white font-medium text-lg">
                  Email
                </label>
                <input
                  type="email"
                  className="flex-1 w-full bg-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red" />
                
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <label className="w-full md:w-24 text-white font-medium text-lg">
                  Message
                </label>
                <input
                  type="text"
                  className="flex-1 w-full bg-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-red" />
                
              </div>
            </form>

            <div className="mt-8 text-center"></div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="text-white font-bold text-xl py-4 px-16 rounded-full shadow-lg hover:bg-red-700 transition-colors bg-[#B6B6B6]">
                
                Submit
              </motion.button>
            </div>
          </motion.div>

          {/* Icon/Illustration */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="w-full md:w-1/3 flex justify-center">
            
            <div className="relative w-64 h-64">
              {/* Abstract Person Icon representing reading/contact */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-brand-dark fill-current">
                
                <circle cx="100" cy="60" r="40" />
                <path d="M20,190 C20,130 60,110 100,110 C140,110 180,130 180,190 L20,190 Z" />
                {/* Book/Message shape cut out */}
                <path d="M60,190 L100,150 L140,190 Z" fill="white" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}