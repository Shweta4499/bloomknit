import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-yellow-50 py-24 px-6 text-yellow-900 border-t-4 border-dotted border-yellow-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl mb-4 font-handwritten tracking-wide"
        >
          💌 Let's Create Something Beautiful
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-lg text-yellow-800 mb-12 max-w-2xl mx-auto"
        >
          Whether you want a custom bouquet or a unique gift idea, we're here to make it special. Reach out to us! 🌷
        </motion.p>

        {/* Contact Form */}
        <form
          className="bg-white p-8 rounded-3xl shadow-xl border border-yellow-200 text-left max-w-2xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-5">
            <label className="block text-sm font-medium text-yellow-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-yellow-700 mb-1">Email or Instagram</label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="@yourhandle or your@email.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-yellow-700 mb-1">Message or Custom Order</label>
            <textarea
              className="w-full p-3 rounded-xl border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="4"
              placeholder="Tell us what you'd love! Colors, occasion, flower types..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl w-full transition duration-300"
          >
            📩 Send Your Request
          </button>
        </form>

        {/* Social Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://wa.me/91xxxxxxxxxx"
            target="_blank"
            className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            💬 Chat on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/maya_florals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            📸 DM on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
