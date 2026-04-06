import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Sparkles } from 'lucide-react';
export function About() {
  const features = [{
    icon: <Camera className="w-8 h-8 text-brand-red" />,
    title: 'Fotografi Profesional',
    desc: 'Menggunakan teknik pencahayaan dan komposisi yang terarah untuk menghasilkan foto yang berkualitas'
  }, {
    icon: <Film className="w-8 h-8 text-brand-red" />,
    title: 'Berbagai Layanan Foto dan video',
    desc: 'Melayani foto wisuda, keluarga, produk, dan dokumentasi berbagai acara.'
  }, {
    icon: <Sparkles className="w-8 h-8 text-brand-red" />,
    title: 'Hasil Visual Estetis',
    desc: 'Setiap foto dan video yang di proses dengan standar visual yang rapi agar terlihat lebih menarik dan siap digunakan.'
  }];
  return <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-red uppercase tracking-wide">
            About Us
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="w-full md:w-1/3 flex justify-center">
            <img src="/logomiraco.png" alt="MIRACO Logo Large" className="w-64 h-auto object-contain" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="w-full md:w-2/3">
            <p className="text-brand-red text-lg md:text-xl leading-relaxed font-medium text-justify">
              Miraco merupakan studio fotografi di Madiun yang berfokus pada
              pengambilan gambar dengan kualitas visual yang rapi dan estetis.
              Kami menyediakan berbagai layanan fotografi untuk mengabadikan
              momen penting dengan hasil profesional.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-50 rounded-full">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}