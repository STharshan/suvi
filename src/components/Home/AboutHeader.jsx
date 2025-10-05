import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutHeader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-white dark:bg-black py-20 px-0 md:px-22 scroll-m-20 transition-colors duration-300"
      id="about"
    >
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <h2
          className="text-4xl lg:text-5xl font-bold text-[#a45731] text-center mb-6 tracking-wide"
          data-aos="fade-up"
        >
          Discover Our Story
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div data-aos="fade-right">
            <img
              src="about.png"
              alt="Discover our story"
              className="rounded-lg shadow-lg w-full h-120 object-cover"
            />
          </div>

          {/* Right Side - Story Text */}
          <div data-aos="fade-left" className="text-left space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              At <strong>Maruthady Travels & Moters</strong>, we specialize in providing high-quality vehicle parts and accessories designed 
              to keep your Vehicle running smoothly and safely. Whether you’re a professional mechanic, a fleet operator, or 
              a car enthusiast, we deliver the right parts you need at competitive prices.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
