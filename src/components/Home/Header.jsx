import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS stylesheet

const Header = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for the animation
      once: true, // Ensures that the animation only triggers once
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative text-white text-center px-4 h-screen bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="object-cover w-full h-full"
          src="/vedio.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: "brightness(0.5)" }} // Reduced brightness
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Heading with caramel accent */}
        <h1
          className="text-5xl font-extrabold text-[#a45731]"
          data-aos="fade-up"
        >
          Welcome to
          <p className="text-white mt-5"><span className="font-extrabold">Maruthady</span></p>
          <p className="mt-5 font-extrabold">Travels & Stores</p>
        </h1>

      </div>
    </section>
  );
};

export default Header;
