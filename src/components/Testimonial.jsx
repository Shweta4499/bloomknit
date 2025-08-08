import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Customer",
    text: "Absolutely loved the crochet bouquet I received! So detailed and adorable 💛",
    flower: "/flowers/2.png",
  },
  {
    name: "Aarav Mehta",
    role: "Customer",
    text: "Gifting BloomKnit flowers was the best decision! It stays forever 🌻",
    flower: "/flowers/3.png",
  },
  {
    name: "Neha Patil",
    role: "Repeat Buyer",
    text: "Beautifully handcrafted! I ordered twice and will order again 🧵",
    flower: "/flowers/1.png",
  },
];

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="bg-yellow-50 py-24 px-6 text-yellow-900 overflow-hidden border-t-4 border-dotted border-yellow-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-6 font-handwritten"
        >
          💬 What Our Customers Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-xl mx-auto text-yellow-800 mb-16"
        >
          Hear from the wonderful people who’ve received and loved our BloomKnit creations.
        </motion.p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white border border-yellow-200 rounded-2xl shadow-lg p-6 relative overflow-hidden"
            >
              <img
                src={t.flower}
                alt="flower"
                className="absolute w-16 h-16 opacity-20 top-3 right-3 rotate-12"
              />
              <p className="text-yellow-800 italic mb-4">“{t.text}”</p>
              <h4 className="font-bold">{t.name}</h4>
              <p className="text-sm text-yellow-600">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
