import { motion } from "framer-motion";
import { FaLeaf, FaHandHoldingHeart, FaGift } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf className="text-3xl text-yellow-700" />,
    title: "Eco-Friendly Yarn",
    description:
      "We use sustainable, cruelty-free yarn that's gentle on the planet and perfect for gifting.",
  },
  {
    icon: <FaHandHoldingHeart className="text-3xl text-yellow-700" />,
    title: "Handcrafted With Love",
    description:
      "Each flower is crocheted by hand, not machines — made with care, time, and passion.",
  },
  {
    icon: <FaGift className="text-3xl text-yellow-700" />,
    title: "Perfect for Gifting",
    description:
      "From birthdays to anniversaries, our bouquets are timeless gifts that never wilt.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotate: -2 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.3,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const WhyChoose = () => {
  return (
    <section
      id="feature"
      className="bg-yellow-50 py-24 px-4 sm:px-6 text-yellow-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Why People Fall in Love with 
          <span className="text-yellow-700"> BloomKnit ?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto text-yellow-800 mb-16"
        >
          Each product carries the warmth of human touch. Here’s what makes our crochet creations special:
        </motion.p>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 relative">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-yellow-100 border-4 border-yellow-300 rounded-2xl p-6 shadow-lg transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300 relative"
            >
             <motion.div
  whileHover={{ rotate: 360, scale: 0.8 }}
  className="flex items-center justify-center w-12 h-12 mb-4 mx-auto"
>
  {item.icon}
</motion.div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-yellow-800 text-base">{item.description}</p>

              {/* Stitch circle corner embellishments */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-700 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-700 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-700 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-700 rounded-full"></div>
            </motion.div>
            
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default WhyChoose;
