import { useCart } from "../context/CartContext";
import { useState } from "react";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { items, history } = state;

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const validPromo = "SAVE10";

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === validPromo) {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxRate = 0.05;
  const tax = subtotal * taxRate;
  const discountAmount = subtotal * discount;
  const total = subtotal + tax - discountAmount;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
              <img
  src={item.img || "/placeholder.png"}
  alt={item.name}
  className="w-16 h-16 object-cover rounded"
/>

                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>₹{item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <>
          {/* Promo Code */}
          <div className="mt-6">
            <h3 className="font-semibold mb-1">🎁 Apply Promo Code</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter promo code"
                className="border px-3 py-1 rounded w-1/2"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                onClick={handleApplyPromo}
                className="px-4 py-1 bg-blue-500 text-white rounded"
              >
                Apply
              </button>
            </div>
            {discount > 0 && (
              <p className="text-green-600 mt-2">✅ Promo applied: {discount * 100}% off</p>
            )}
          </div>

          {/* Billing Summary */}
          <div className="mt-6 bg-gray-50 border p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold mb-2">🧾 Billing Summary</h3>
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (5%):</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-700">
                <span>Discount:</span>
                <span>- ₹{discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold mt-2 border-t pt-2">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button
              onClick={handleClearCart}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert("🧾 Proceeding to payment...")}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Pay with Razorpay
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
