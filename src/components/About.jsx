import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-yellow-50 py-24 px-4 sm:px-6 flex flex-col items-center overflow-hidden text-yellow-800"
    >
      {/* 🧶 Section Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-700 mb-10 underline decoration-wavy decoration-yellow-600 underline-offset-8">
        🌼 About 🌼  
      </h2>

      <div className="relative bg-yellow-100 rounded-xl p-1 sm:p-2 max-w-4xl w-full">
        <div className="border-[6px] border-dashed border-yellow-700 rounded-xl bg-yellow-50 p-8 sm:p-12 relative overflow-hidden">

          {/* 🎾 Thread/Yarn Balls Falling */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 w-6 h-6 rounded-full bg-yellow-700 shadow-lg"
              style={{ left: `${15 + i * 12}%` }}
              initial="initial"
              animate="animate"
              variants={{
                initial: { y: 0, opacity: 0 },
                animate: {
                  y: 220,
                  opacity: [0, 1, 1, 0],
                  transition: {
                    duration: 5 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  },
                },
              }}
            />
          ))}

          {/* ✨ About Text Content */}
          <div className="relative z-10 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-700">
              Made with Love, <br /> Stitched with Yarn 🧶
            </h3>
            <p className="text-lg sm:text-xl text-yellow-700 leading-relaxed">
              At <span className="font-semibold">BloomKnit</span>, each petal is hand-stitched —
              no machines, just heart and hooks. Our flowers are spun with emotion and delivered across India 🌸.
            </p>
            <ul className="mt-6 text-left sm:text-center text-yellow-800 list-disc list-inside space-y-2 text-base sm:text-lg">
  <li>🌸 100% hand-crocheted with care</li>
  <li>🚚 PAN India delivery</li>
  <li>💝 Custom bouquets for every occasion</li>
</ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
