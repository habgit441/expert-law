const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/image/law.jpg')", // Ensure this image is in public/image/
          filter: 'brightness(0.3)',
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-black font-bold text-xl">SupremeLaw</div>
          <ul className="flex space-x-6 font-medium text-sm md:text-base text-black">
            {['Home', 'Service', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-blue-600 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-xl">
          Welcome to the Supreme Court
        </h1>
      </div>
    </div>
  );
};

export default Hero;
