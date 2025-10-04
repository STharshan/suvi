import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true); // default dark mode

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#menu", label: "Menu" },
    { href: "/#hire", label: "Contact" },
    { href: "/#contact", label: "FindUs" }
  ];

  const closeMenu = () => setMenuOpen(false);

  // Handle theme toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black dark:bg-black text-white dark:text-white shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-30">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-25 w-40"
              src="/logo.png"
              alt="logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-10">
            {navLinks.map((link) => (
              <HashLink
                smooth
                key={link.label}
                to={link.href}
                className="hover:text-[#a45731] text-lg transition-colors duration-200 font-semibold"
              >
                {link.label}
              </HashLink>
            ))}
          </div>

          {/* Right side buttons (desktop) */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-md border border-[#a45731] text-[#a45731] hover:bg-[#a45731] hover:text-white transition"
              aria-label="Toggle theme"
            >
              {dark ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Order Button */}
            <a
              href="/#hire"
              className="flex items-center gap-2 bg-white dark:bg-white text-black dark:text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#a45731] hover:text-white transition-all duration-200 text-sm lg:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart size={18} />
              <span>Order Now</span>
            </a>
          </div>

          {/* Tablet Order Button - hide when mobile menu is open */}
          {!menuOpen && (
            <div className="hidden md:flex xl:hidden">
             
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            {/* Theme Toggle (mobile) */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-md border border-[#a45731] text-[#a45731] hover:bg-[#a45731] hover:text-white transition"
              aria-label="Toggle theme"
            >
              {dark ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:text-[#a45731] transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden">
          <div className="fixed top-16 lg:top-20 left-0 right-0 bg-black dark:bg-black border-t border-gray-800 z-50 transition-colors duration-300">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 hover:text-[#a45731] hover:bg-gray-900 dark:hover:bg-gray-100 rounded-md transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}

              {/* Order Button (mobile) */}
              <div className="pt-4 border-t border-gray-800 mt-4">
                <a
                  href="/#hire"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-white dark:bg-white text-black dark:text-black font-semibold px-4 py-3 rounded-md shadow-md hover:bg-[#a45731] hover:text-white transition-all duration-200 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart size={18} />
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
