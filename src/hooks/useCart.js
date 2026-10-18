import { useCallback, useMemo, useReducer } from 'react';

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {string} [category]
 * @property {string} [color]
 * @property {string} [image]
 * @property {string} [description]
 */

/**
 * @typedef {Product & { quantity: number }} CartItem
 */

/**
 * @typedef {
 *   | { type: 'ADD_ITEM', product: Product }
 *   | { type: 'REMOVE_ITEM', productId: string }
 *   | { type: 'CLEAR_CART' }
 * } CartAction
 */

/**
 * Updates cart lines immutably in response to supported cart actions.
 *
 * @param {CartItem[]} state
 * @param {CartAction} action
 * @returns {CartItem[]}
 */
export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.find((item) => item.id === action.product.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...state, { ...action.product, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.productId);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

/**
 * Provides cart state, stable cart actions, and derived totals for a component tree.
 *
 * @returns {{
 *   cart: CartItem[],
 *   addToCart: (product: Product) => void,
 *   removeFromCart: (productId: string) => void,
 *   clearCart: () => void,
 *   cartTotal: number,
 *   itemCount: number
 * }}
 */
export function useCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Stable action references avoid needless child renders when these callbacks are props.
  const addToCart = useCallback((product) => {
    dispatch({ type: 'ADD_ITEM', product });
  }, []);

  const removeFromCart = useCallback((productId) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  const itemCount = useMemo(
    () => cart.reduce((count, item) => count + item.quantity, 0),
    [cart],
  );

  return { cart, addToCart, removeFromCart, clearCart, cartTotal, itemCount };
}
