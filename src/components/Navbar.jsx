import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "feature", label: "Why Choose Us" },
  { id: "products", label: "Our Collection" },
  { id: "testimonial", label: "Customer Reviews" },
  { id: "contact", label: "Get in Touch" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // ✅ Get cart state
  const { state } = useCart();

  // ✅ Calculate total count of items
  const totalCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  // Detect scroll position for header background and active section
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      const buffer = 120;
      for (let section of navLinks) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (y + buffer >= top && y + buffer < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        scrolled ? "bg-white shadow" : "bg-yellow-100"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ scale: 1 }}
          animate={{ scale: scrolled ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 text-yellow-700 font-bold text-2xl"
        >
          <img src="/sunflower.png" alt="Logo" className="w-6 h-6" />
          Crochets      </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-yellow-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hover:text-yellow-600 transition ${
                activeSection === link.id
                  ? "text-yellow-900 font-semibold underline"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Cart Icon */}
        <a href="/cart" className="relative text-yellow-700 ml-4">
          <FaShoppingCart size={24} />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalCount}
            </span>
          )}
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-700 text-3xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white text-yellow-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`hover:text-yellow-600 transition ${
                activeSection === link.id
                  ? "text-yellow-900 font-semibold underline"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
