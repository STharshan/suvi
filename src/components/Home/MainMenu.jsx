



import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categories = [
  "Badges & Stickers",
  "Decoration Items & Perfume",
  "Oils & Filters",
  "vehicle parts and accessories",
  "Light & wires",
  "Sound & Electronic System",
];

const allItems = [
  {
    title: "Nutty Professor",
    category: "Waffles",
    fullprice: "£10.50",
    halfprice: "£8.50",
    image: "/Nutty Professor Waffle.jpg",
  },
  {
    title: "Chocoholic Dream",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Chocoholic Heaven Waffle.png",
  },
  {
    title: "Strawberry Heaven",
    category: "Waffles",
    fullprice: "£10.00",
    halfprice: "£8.00",
    image: "/Strawberry Heaven Waffle.jpg",
  },
  {
    title: "Waffle Mix n Match",
    category: "Waffles",
    fullprice: "£10.50",
    halfprice: "£8.50",
    image: "/Mix and Match Waffle-6.jpg",
  },
  {
    title: "Raspberry Heaven",
    category: "Waffles",
    fullprice: "£9.00",
    halfprice: "£7.00",
    image: "/Raspberry Heaven Waffle.jpg",
  },
  {
    title: "Banoffe Sensation",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Banoffee Waffle.jpg",
  },
  {
    title: "Kinder Surprise",
    category: "Waffles",
    fullprice: "£10.50",
    halfprice: "£8.50",
    image: "/Kinder Surprise Waffle.jpg",
  },
  {
    title: "Oreo Galore",
    category: "Waffles",
    fullprice: "£10.00",
    halfprice: "£8.00",
    image: "/Oreo Waffle.jpg",
  },
  {
    title: "Lotus Biscoff",
    category: "Waffles",
    fullprice: "£10.00",
    halfprice: "£8.00",
    image: "/Biscoff Waffle.jpg",
  },
  {
    title: "Minit Mania",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Mint Mania Waffle.jpg",
  },
  {
    title: "Strawbella",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Strawbella Waffle.jpg",
  },
  {
    title: "Lotus",
    category: "Brownies",
    fullprice: "£7.50",
    image: "/Lotus Brownie.jpg",
  },
  {
    title: "Ferrero Rocher",
    category: "Brownies",
    fullprice: "£8.50",
    image: "/Gluten Free Brownie.jpg",
  },
  {
    title: "Strawberry Heaven",
    category: "Brownies",
    fullprice: "£7.00",
    image: "/Strawberry Brownie.jpg",
  },
  {
    title: "Oreo",
    category: "Brownies",
    fullprice: "£7.50",
    image: "/Oreo Brownie.jpg",
  },
  {
    title: "Kinder",
    category: "Brownies",
    fullprice: "£8.00",
    image: "/Kinder Brownie.jpg",
  },
  {
    title: "Mint",
    category: "Brownies",
    fullprice: "£7.50",
    image: "/Mint Brownie.jpg",
  },
  {
    title: "Oreo",
    category: "Cookie Dough",
    fullprice: "£8.00",
    image: "/Oreo Cookie Dough.jpg",
  },
  {
    title: "Strawbeey Mania",
    category: "Cookie Dough",
    fullprice: "£7.50",
    image: "/Strawberry Mania Cookie Dough.jpg",
  },
  {
    title: "Kinder Lovers",
    category: "Cookie Dough",
    fullprice: "£8.00",
    image: "/Kinder Cookie Dough.jpg",
  },
  {
    title: "Nutty Sensation",
    category: "Cookie Dough",
    fullprice: "£8.50",
    image: "/Nutty Professor Cookie Dough.jpg",
  },
  {
    title: "Lotus",
    category: "Cookie Dough",
    fullprice: "£8.00",
    image: "/Lotus Milk Cake.jpg",
  },
  {
    title: "Milk Chocolate",
    category: "Milkshakes",
    fullprice: "£6.50",
    image: "/Milky Bar Milkshake.jpg",
  },
  {
    title: "White Chocolate",
    category: "Cookie Dough",
    fullprice: "£6.50",
    image: "/White Chocolate Cookie Dough.jpg",
  },
  {
    title: "Banoffee",
    category: "Crepes",
    fullprice: "£8.50",
    image: "/Banoffee Crepe.png",
  },
  {
    title: "Strawberry Sensation",
    category: "Crepes",
    fullprice: "£8.50",
    image: "/Strawberry Crepe.jpg",
  },
  {
    title: "Smartie",
    category: "Crepes",
    fullprice: "£8.50",
    image: "/Smartie Crepe.jpg",
  },
  {
    title: "Lotus",
    category: "Crepes",
    fullprice: "£9.00",
    image: "/Lotus Brownie.jpg",
  },
  {
    title: "White Kinder",
    category: "Crepes",
    fullprice: "£9.00",
    image: "/White Kinder Crepe.png",
  },
  {
    title: "Oreotastic",
    category: "Crepes",
    fullprice: "£8.00",
    image: "/Oreo Crepe.jpg",
  },
  {
    title: "Nutty Lover",
    category: "Crepes",
    fullprice: "£9.50",
    image: "/Nutty Professor Crepe.jpg",
  },
  {
    title: "Kinder",
    category: "Crepes",
    fullprice: "£9.00",
    image: "/Kinder Crepe.jpg",
  },
  {
    title: "Strawbella",
    category: "Crepes",
    fullprice: "£8.50",
    image: "/Strawberry Crepe.jpg",
  },
  {
    title: "Gelato in a tub or a cone",
    category: "Gelato In A Tub or A Cone",
    fullprice: "£8.50",
    halfprice: "£2.50",
    image: "/Dubai Strawberries.jpg",
  },
  {
    title: "Strawberry",
    category: "Sundaes",
    fullprice: "£7.50",
    image: "/Strawberry Sundae.jpg",
  },
  {
    title: "Biscoff",
    category: "Sundaes",
    fullprice: "£8.00",
    image: "/Biscoffe Sundae.jpg",
  },
  {
    title: "Oreo",
    category: "Sundaes",
    fullprice: "£8.00",
    image: "/Oreo Sundae.jpg",
  },
  {
    title: "Ferrero",
    category: "Sundaes",
    fullprice: "£8.00",
    image: "/Nutty Professor Sundae.jpg",
  },
  {
    title: "Chocolate Bar",
    category: "Milkshakes",
    fullprice: "£7.00",
    halfprice: "6.00",
    image: "/Twix Milkshake-14.jpg",
  },
  {
    title: "Raspberry Milkshake",
    category: "Milkshakes",
    fullprice: "£7.00",
    halfprice: "6.00",
    image: "/Raspberry Milkshake.jpg",
  },
  {
    title: "Nutella / Ferrero Rocher",
    category: "Milkshakes",
    fullprice: "£7.50",
    halfprice: "6.50",
    image: "/lotus.jpg",
  },
  {
    title: "Nutella Fudge Brownie",
    category: "Milkshakes",
    fullprice: "£9.00",
    image: "/Reeces Milkshake.png",
  },
];


// keep your items here (shortened for readability)
// ...

const MainMenu = () => {
  const [selected, setSelected] = useState("Waffles");

  const filtered =
    selected === "All"
      ? allItems
      : allItems.filter((item) => item.category === selected);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      id="menu"
      className="w-full bg-white dark:bg-black text-black dark:text-white scroll-m-20 py-20 px-6 transition-colors duration-300"
    >
      {/* Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#a45731] mb-4 tracking-wide">
          Main List
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore our indulgent range of vehicle parts and accessories, crafted with love
        </p>
      </div>

      {/* Categories */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-14"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition duration-300 ${
              selected === cat
                ? "bg-[#a45731] text-white border-[#a45731] shadow-md scale-105"
                : "bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-[#a45731] hover:text-white hover:border-[#a45731]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="relative bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-700 text-center shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-50% mx-auto  xl:mt-2 rounded-lg h-56 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#a45731] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.category}</p>
              <div className="space-y-1">
                <span className="block text-lg font-semibold text-[#a45731]">
                  Full: {item.fullprice}
                </span>
                {item.halfprice && (
                  <span className="block text-gray-700 dark:text-gray-300">
                    Half: {item.halfprice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainMenu;
