import React from 'react';
import { motion } from 'framer-motion';
import { Star, MoreVertical } from 'lucide-react';
export function Testimonials() {
  const reviews = [{
    name: 'Luhur Sekhuti',
    meta: 'Local Guide • 275 reviews • 911 photos',
    rating: 5,
    time: 'a year ago',
    text: 'Kalau bikin pas foto selalu ke sini, cetak cepet, pelayanan nya baik. Cetak bisa online kirim file via WA, transfer beres tinggal ambil. Hasil foto bagus, request doft atau mengkilap dilayani. Yg jaga counter sip semua pelayanan nya. Harga bersaing. Yg agak susah parkir mobil aja pas jam sibuk, krn tempatnya sebelahan sama toko oleh2 jadi ya ramai. Kalau butuh foto mendadak ke sini aja, sat set...',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }, {
    name: 'trio android',
    meta: 'Local Guide • 347 reviews • 2,860 photos',
    rating: 4,
    time: 'a year ago',
    text: 'Salah satu studio foto yang bisa dibilang legend di Kota Madiun. Layanan mereka cukup lengkap, mulai dari pas foto hingga pemotretan acara pernikahan maupun acara-acara lainnya. Hasil fotonya memuaskan, untuk pas foto editan nya bagus dan rapi. Staff sangat ramah dan informatif. Sangat berpengalaman dan cukup jelas saat mengarahkan. Untuk harga masih relatif terjangkau mengingat hasilnya juga sebanding.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }, {
    name: 'Mokhammad Yance Febrianto',
    meta: '4 reviews',
    rating: 5,
    time: '4 months ago',
    text: 'Pelayanan bagus dan cepat . Tersedia juga kemeja putih, jas hitam, dan dasi untuk yang mau foto buat keperluan ijazah . Hasilnya bagus dan murah meriah ...',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }];
  return <section id="testimonial" className="py-24 bg-[#b30000] relative overflow-hidden">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
        <div className="transform rotate-12 scale-150 flex flex-col gap-8">
          <span className="text-8xl md:text-[200px] font-display font-bold text-black">
            MIRACO
          </span>
          <span className="text-8xl md:text-[200px] font-display font-bold text-black">
            MIRACO
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
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-wide">
            Testimonials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* First two reviews side by side */}
          {reviews.slice(0, 2).map((review, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }} className="bg-white rounded-xl p-6 shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">{review.meta}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} />)}
                </div>
                <span className="text-xs text-gray-500">{review.time}</span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
              </p>
            </motion.div>)}

          {/* Third review and Quotes icon */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }} className="bg-white rounded-xl p-6 shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    {reviews[2].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {reviews[2].name}
                    </h4>
                    <p className="text-xs text-gray-500">{reviews[2].meta}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className={i < reviews[2].rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} />)}
                </div>
                <span className="text-xs text-gray-500">{reviews[2].time}</span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {reviews[2].text}
              </p>
            </motion.div>

            <div className="flex justify-center md:justify-end pr-8">
              <span className="text-[200px] leading-none font-display text-white drop-shadow-xl" style={{
              fontFamily: 'Georgia, serif'
            }}>
                ”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}