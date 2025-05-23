"use client";

import React from "react";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Land Dispute Victory",
    summary: "Successfully resolved a 5-year land ownership case, ensuring justice for the rightful owner.",
  },
  {
    title: "Corporate Fraud Defense",
    summary: "Defended a wrongly accused company and won the case with solid evidence presentation.",
  },
  {
    title: "Family Case Settlement",
    summary: "Handled a complex divorce and custody battle with a favorable outcome for the client.",
  },
];

const CaseHighlights = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Case <span className="text-blue-600">Highlights</span>
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          A few of the many cases I have successfully handled over the years.
        </p>
      </div>

      {/* Mobile: horizontal scroll */}
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
          {cases.map((item, index) => (
            <div
              key={index}
              className="w-[280px] bg-white border border-gray-200 shadow-lg p-6 rounded-lg flex-shrink-0"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.summary}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop: grid layout */}
      <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-8">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 shadow-lg p-6 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseHighlights;
