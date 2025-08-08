import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sunflower from "../assets/sunflower.png";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Throttled resize handler for performance
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;

  // Responsive positions
  const positions = isMobile
    ? [
        { top: "10%", left: "10%" },
        { bottom: "10%", right: "10%" },
        { top: "50%", left: "50%", translate: "-50%, -50%" },
      ]
    : [
        { top: "0", left: "0" },
        { top: "10%", right: "10%" },
        { bottom: "0", left: "0" },
        { bottom: "10%", right: "10%" },
        { top: "50%", left: "50%", translate: "-50%, -50%" },
        { top: "20%", left: "80%" },
        { bottom: "15%", right: "40%" },
      ];

  // Responsive sizes
  const sizes = isMobile
    ? ["w-36", "w-40", "w-48"]
    : isTablet
    ? ["w-40", "w-52", "w-60", "w-72", "w-80", "w-96", "w-[400px]"]
    : ["w-52", "w-64", "w-72", "w-80", "w-96", "w-[400px]", "w-[500px]"];

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-yellow-50 overflow-hidden"
    >
      {/* 🌻 Responsive Rotating Flowers */}
      {positions.map((pos, index) => (
        <motion.img
          key={index}
          src={sunflower}
          alt=""
          role="presentation"
          className={`absolute ${sizes[index] || "w-40"} opacity-20 pointer-events-none`}
          style={{
            ...pos,
            transform: pos.translate ? `translate(${pos.translate})` : "",
            zIndex: 0,
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 80 + index * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* 🌟 Hero Content */}
      <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.6 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  }}
  className="z-10 text-center px-4"
>
  {/* Title */}
  <motion.h1
    className="text-4xl sm:text-6xl font-extrabold text-yellow-800 leading-tight"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94], // smooth ease
        },
      },
    }}
  >
    Bloom with <span className="text-yellow-600">Love & Yarn</span>
  </motion.h1>

  {/* Subtext */}
  <motion.p
    className="mt-4 text-yellow-700 text-lg sm:text-xl max-w-xl mx-auto"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    }}
  >
    Handmade crochet flowers that brighten your day. Delivered PAN India.
  </motion.p>

  {/* Button */}
  <motion.button
    className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition duration-300"
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 22,
        },
      },
    }}
    whileHover={{
      scale: 1.07,
      boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)",
    }}
    whileTap={{ scale: 0.95 }}
  >
    Order Now 🌼
  </motion.button>
</motion.div>

    </section>
  );
};

export default Hero;
