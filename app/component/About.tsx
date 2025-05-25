"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-900 min-h-screen py-12 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex-shrink-0 group"
        >
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
            <Image
              src="/images/jago.png"
              alt="Jago Lawyer"
              width={256}
              height={256}
              className="object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500 opacity-20 blur-lg animate-pulse"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-blue-500">Me</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto lg:mx-0">
            I&apos;m <strong>Jago</strong>, an expert lawyer with years of experience. I’ve won many cases, representing clients across various legal fields.
            <br />
            My mission is to help you succeed in your case with confidence and clarity. Whether you're facing personal, business, or criminal legal issues, I’m here to stand by you and fight for your justice in court.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
