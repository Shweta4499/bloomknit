import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();
  const items = state.items;
  console.log("Cart items:", items); // 👈 Add this line


  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = total * 0.05;
  const deliveryFee = 40;
  const grandTotal = total + tax + deliveryFee;

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">🛍️ Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="bg-gray-200 px-2 rounded"
                        onClick={() =>
                          dispatch({ type: "DECREMENT_QUANTITY", payload: item.id })
                        }
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button
                        className="bg-gray-200 px-2 rounded"
                        onClick={() =>
                          dispatch({ type: "INCREMENT_QUANTITY", payload: item.id })
                        }
                      >
                        +
                      </button>
                      <button
                        className="ml-3 text-red-500"
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                        }
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
          >
            Clear Cart
          </button>

          {/* 💳 Billing Section */}
          <div className="mt-10 bg-gray-100 rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4">🧾 Billing Details</h3>

            <div className="flex justify-between mb-2 text-gray-700">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between mb-2 text-gray-700">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="flex justify-between mb-2 text-gray-700">
              <span>Tax (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>

            <button
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              onClick={() => alert("Proceeding to checkout...")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
