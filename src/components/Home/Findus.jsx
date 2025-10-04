import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const FindUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="py-16 px-4 bg-white dark:bg-black text-black dark:text-white scroll-m-20 transition-colors duration-300"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-[#a45731] text-center"
          data-aos="fade-up"
        >
          Contact Us
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Details Card */}
          <div
            className="bg-[#8B4513] text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

              <p className="mb-5">
                <span className="font-semibold">Address:</span> <br />
                <a
                  href="https://maps.app.goo.gl/9d6Yyp1i51TVRsdo8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-gray-200 transition"
                >
                  <FiMapPin className="mt-1" />
                 Sothivembedi Lane,
                  <br />
                  Manipay
                  <br />
                  Jaffna
                </a>
              </p>

              <p className="mb-5">
                <span className="font-semibold">Phone:</span> <br />
                <a
                  href="tel:+94775001384"
                  className="flex items-center gap-2 hover:text-gray-200 transition"
                >
                  <FiPhone />
                  0775001384
                </a>
              </p>

              <p className="mb-5">
                <span className="font-semibold">Email:</span> <br />
                <a
                  href="mailto:chocoholicsdesserts@gmail.com"
                  className="flex items-center gap-2 hover:text-gray-200 transition"
                >
                  <FiMail />
                  suvirthan@gmail.com
                </a>
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6 flex justify-center">
              <a
                href="#hire"
                className="bg-white text-[#8B4513] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-black hover:text-white transition"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div
            className="rounded-2xl overflow-hidden shadow-xl w-full h-[440px]"
            data-aos="fade-left"
          >
            <iframe
              title="Google Map - Maruthady Travel & Stores, Sothivembedi Lane, Manipay, Jaffna"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d701.6503521606503!2d79.99339493283351!3d9.72071050587052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssothivembedilane%20manipay!5e0!3m2!1sen!2slk!4v1759597472839!5m2!1sen!2slk"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
