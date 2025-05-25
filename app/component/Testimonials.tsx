"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonies = [
  {
    name: "Grace Ayoola",
    image: "/clients/grace.jpg",
    message: "Jago is simply the best! He handled my case with wisdom and confidence. I won!",
  },
  {
    name: "Mr. Okoro",
    image: "/clients/okoro.jpg",
    message: "After years of land dispute, Jago helped me reclaim my property. A true legal mind.",
  },
  {
    name: "Bisi Thomas",
    image: "/clients/bisi.jpg",
    message: "So professional and reliable. He always showed up prepared and calm in court.",
  },
  {
    name: "Tunde Kareem",
    image: "/clients/tunde.jpg",
    message: "Respectful, smart, and always on point. Jago gave me hope and delivered victory.",
  },
];

const Testimony = () => {
  return (
    <section id="service" className="bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          What My <span className="text-blue-600">Clients Say</span>
        </h2>
        <p className="text-gray-500 mt-2 text-lg">Real words. Real people. Real results.</p>
      </div>

      {/* Mobile - scrollable cards */}
      <div className="block lg:hidden">
        <motion.div
          className="flex gap-4 overflow-x-auto no-scrollbar px-1"
          initial={{ x: 0 }}
          animate={{ x: [-10, 0, -10] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 10,
            ease: "easeInOut",
          }}
        >
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className="w-[280px] bg-gray-50 rounded-xl shadow-md p-5 border border-blue-100 flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src={testimony.image}
                    alt={testimony.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-base font-semibold text-gray-800">{testimony.name}</h4>
              </div>
              <p className="text-gray-600 text-sm italic">"{testimony.message}"</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop - grid layout */}
      <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-8">
        {testimonies.map((testimony, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md p-6 border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
                <Image
                  src={testimony.image}
                  alt={testimony.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{testimony.name}</h4>
            </div>
            <p className="text-gray-600 text-base italic">"{testimony.message}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;
