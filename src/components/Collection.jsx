import { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const allProducts = [
  { id: 1, name: "Sunflower Delight", img: "/flowers/1.png", type: "Bouquet", price: 499 },
  { id: 2, name: "Rosy Romance", img: "/flowers/2.png", type: "Single Flower", price: 199 },
  { id: 3, name: "Lavender Charm", img: "/flowers/3.png", type: "Bouquet", price: 549 },
  { id: 4, name: "Daisy Whimsy", img: "/flowers/4.png", type: "Custom", price: 299 },
  { id: 5, name: "Pink Petals", img: "/flowers/5.png", type: "Single Flower", price: 249 },
  { id: 6, name: "Golden Blooms", img: "/flowers/6.png", type: "Bouquet", price: 699 },
];


const categories = ["All", "Bouquet", "Single Flower", "Custom"];

const Collection = () => {
  const [selected, setSelected] = useState("All");
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const filtered = selected === "All" ? allProducts : allProducts.filter(p => p.type === selected);

  return (
    <section id ="products"className="py-20 px-6 bg-yellow-50 text-yellow-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          🌸 Our Crochet Collection
        </motion.h2>
        <p className="text-lg mb-8">Handcrafted with love for every occasion.</p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full border ${
                selected === cat ? "bg-yellow-600 text-white" : "bg-white text-yellow-900"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-xl shadow hover:scale-[1.03] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.name} className="w-full h-48 object-contain" />
              <h3 className="font-semibold text-lg mt-3">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.type}</p>
              <p className="font-bold text-yellow-700 mt-1">₹{item.price}</p>

              <button
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: item });
                  navigate("/cart");
                }}
                className="mt-3 w-full bg-yellow-600 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
