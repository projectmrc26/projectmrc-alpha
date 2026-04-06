import React from 'react';
import { motion } from 'framer-motion';
export function Services() {
  const tabs = ['All Service', 'Foto Studio', 'Wedding', 'Foto Produk', 'Cetak Foto', 'Servis Kamera', 'Jual Kamera', 'Vidiograpy'];
  const services = [{
    title: 'Foto Studio',
    desc: 'Pemotretan di studio dengan pencahayaan profesional dan berbagai pilihan background. Cocok untuk foto personal, keluarga, wisuda, maupun couple.',
    price: 'Rp -',
    image: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Fotography dan Videography Outdoor',
    desc: 'Layanan pemotretan di lokasi luar ruangan dengan konsep natural dan suasana yang lebih bebas. Ideal untuk prewedding, personal branding, atau foto couple.',
    price: 'Rp -',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  return <section id="service" className="py-24 bg-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-wide">
            Our
            <br />
            Services
          </h2>
        </motion.div>

        {/* Tabs */}

        {/* Service Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="bg-[#b30000] rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-red-800/50">
              {/* Image Container */}
              <div className="w-full md:w-1/4 relative p-4 bg-white flex items-center justify-center">
                <img src={service.image} alt={service.title} className="w-full h-48 md:h-full object-cover rounded-lg" />
                <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
                  <img src="/logomiraco.png" alt="Logo" className="w-12 h-12 object-contain" />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-3/4 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4">
                  <span className="text-white font-bold text-xl">
                    {service.price}
                  </span>
                  <button className="bg-white text-brand-red font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-md whitespace-nowrap">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}