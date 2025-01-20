<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/cart.ts';

export default defineComponent({
  name: 'CartView',
  data() {
    const cartStore = useCartStore();
    return { cartStore };
  },
});
</script>

<template>
  <div class="cart-view">
    <h1>Your Cart</h1>
    <ul>
      <li v-for="item in cartStore.cart" :key="item.name" class="cart-item">
        <span> <img :src="item.image" :alt="item.name" /> </span>
        <span>{{ item.name }}</span>
        <span>$ {{ item.price }} x {{ item.quantity }}</span>
        <button class="quantity-btn" @click="cartStore.increaseQuantity(item.name)">+</button>
        <button class="quantity-btn" @click="cartStore.decreaseQuantity(item.name)">-</button>
        <button class="remove-btn" @click="cartStore.removeFromCart(item.name)">Remove</button>
      </li>
    </ul>
    <p class="cart-total">Total: ${{ cartStore.totalPrice }}</p>
  </div>
</template>

<style scoped>
.cart-view {
  padding: 20px;
  background: #1a1d22;
  color: white;
  border-radius: 10px;
}
.cart-view h1 {
  font-size: 24px;
  text-align: center;
}
.cart-item {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  border: 1px solid #f22e15;
  border-radius: 25px;
}
.quantity-btn, .remove-btn {
  background: #f22e15;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
}
.quantity-btn:hover, .remove-btn:hover {
  background: #ff4444;
}
.cart-total {
  font-size: 18px;
  text-align: left;
  margin-top: 20px;
  padding: 50px;
}
img {
  height: 250px;
  border-radius: 20px;
}
</style>
