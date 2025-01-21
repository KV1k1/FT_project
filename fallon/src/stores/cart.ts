import { defineStore } from 'pinia';

export type Fish = {
  name: string;
  price: number;
  image: string;
};

export type CartItem = Fish & { quantity: number };

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[],
  }),
  getters: {
    totalPrice(state): number {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  actions: {
    addToCart(fish: Fish) {
      const existingItem = this.cart.find((item) => item.name === fish.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...fish, quantity: 1 });
      }
    },
    removeFromCart(fishName: string) {
      this.cart = this.cart.filter((item) => item.name !== fishName);
    },
    increaseQuantity(fishName: string) {
      const item = this.cart.find((item) => item.name === fishName);
      if (item) item.quantity++;
    },
    decreaseQuantity(fishName: string) {
      const item = this.cart.find((item) => item.name === fishName);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(fishName);
        }
      }
    },
  },
});
