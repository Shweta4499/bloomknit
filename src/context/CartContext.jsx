import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  history: JSON.parse(localStorage.getItem("cartHistory")) || [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const index = state.items.findIndex((i) => i.id === action.payload.id);

      let newItems;
      if (index !== -1) {
        newItems = [...state.items];
        newItems[index].quantity += 1;
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      // Add to history if not already there
      const isInHistory = state.history.some(
        (i) => i.id === action.payload.id
      );
      const newHistory = isInHistory
        ? state.history
        : [...state.history, action.payload];

      // Save both items and history to localStorage
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      localStorage.setItem("cartHistory", JSON.stringify(newHistory));

      return {
        ...state,
        items: newItems,
        history: newHistory,
      };
    }

    case "INCREMENT_QUANTITY": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, items: updatedItems };
    }

    case "DECREMENT_QUANTITY": {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return { ...state, items: updatedItems };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
    localStorage.setItem("cartHistory", JSON.stringify(state.history));
  }, [state.items, state.history]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
