'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = ['Home', 'Service', 'About', 'Contact'];

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/image/law.jpg')",
          filter: 'brightness(0.3)',
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/image/Logo.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
            <div className="text-black font-bold text-xl">SupremeLaw</div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 font-medium text-sm md:text-base text-black">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-2xl cursor-pointer text-black" onClick={toggleNav}>
            {navOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {navOpen && (
          <ul className="md:hidden bg-white px-6 py-4 space-y-4 text-black font-medium shadow-md">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={toggleNav}
                  className="block hover:text-blue-600 cursor-pointer transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-xl">
          <Typewriter
            words={['Welcome to the Supreme Court', 'Justice, Integrity, Excellence']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
