import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateEvents = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    deliveryType: "",
    message: "",
  });

  const phoneNumberPattern = /^(?:\+94|0)[1-9]\d{8}$/; // SL format (+94 or 0)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone
    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      toast.error("Please enter a valid phone number (starting with +94 or 0).");
      return;
    }

    // WhatsApp message
    const message = `
📌 New Delivery Request:

👤 Name: ${formData.fullName}
📞 Phone: ${formData.phoneNumber}
📧 Email: ${formData.email}
🏠 Address: ${formData.address}
🚚 Delivery Type: ${formData.deliveryType}
📝 Message: ${formData.message || "N/A"}
    `;

    // Convert number to international format
    const whatsappNumber = "+94775001384"; // +94 (Sri Lanka)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    toast.success("Redirecting to WhatsApp...");
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      deliveryType: "",
      message: "",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <section
        className="bg-white dark:bg-black py-16 px-6 scroll-m-20 transition-colors duration-300"
        id="hire"
      >
        <div className="max-w-screen-md mx-auto">
          <div
            className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-900"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-[#a45731] mb-6 text-center">
              Place Your Delivery Order
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="text-[#a45731]">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Your Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="text-[#a45731]">
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Your Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-[#a45731]">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="text-[#a45731]">
                  Address*
                </label>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                  required
                />
              </div>

              {/* Delivery Type */}
              <div>
                <label htmlFor="deliveryType" className="text-[#a45731]">
                  Delivery Type*
                </label>
                <select
                  id="deliveryType"
                  name="deliveryType"
                  value={formData.deliveryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                  required
                >
                  <option value="">Select type</option>
                  <option value="Pickup">Direct Purshuse</option>
                  <option value="Standard">Cash on Delivery</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-[#a45731]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell About Your Order Details"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#a45731] text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-[#8f431d]"
              >
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateEvents;
