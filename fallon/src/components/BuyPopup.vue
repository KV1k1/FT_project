<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "BuyPopup",
  props: {
    itemName: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close'],
  methods: {
    closePopup() {
      this.$emit('close');
    },

  },
});
</script>

<template>
  <div v-if="visible" class="overlay">
    <div class="popup">
      <p>{{ itemName }} has been added to your cart.</p>
      <div class="buttons">
        <button class="continue" @click="closePopup">Continue Shopping</button>
        <router-link to="/cart">
          <button class="go-to-cart">Go to Cart</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.popup {
  background: #1a1d22;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.buttons {
  margin-top: 15px;
}
button {
  background: #f22e15;
  transition: ease-in all 0.2s;
  color: #fff;
  text-transform: uppercase;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px 10px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background: white;
  color: #1a1d22;
}

</style>
