<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from "@/stores/cart";
import type { Fish } from "@/stores/cart";
import BuyPopup from './BuyPopup.vue';

export default defineComponent({
  name: "FishItem",
  components: {
    BuyPopup
  },
  props: {
    fish: {
      type: Object as () => Fish,
      required: true,
    },
  },
  data() {
    return {
      isPopupVisible: false, // Refactored from `ref` to `data`
    };
  },
  methods: {
    buyFish() {
      const cartStore = useCartStore();
      cartStore.addToCart(this.fish);
      this.isPopupVisible = true; // Show popup
    },
    closePopup() {
      this.isPopupVisible = false; // Hide popup
    },
  },
})
</script>

<template>
  <div class="our_fishs_box text_align_center">
    <div class="ser_img">
      <figure>
        <img :src="fish.image" :alt="fish.name" />
      </figure>
    </div>
    <h3>{{ fish.name }}</h3>
    <strong>$<span>{{ fish.price }}</span></strong>
    <button class="read_more" @click="buyFish">Buy Now</button>

    <!-- Overlay Popup -->
    <BuyPopup
      :itemName="fish.name"
      :visible="isPopupVisible"
      @close="closePopup"
    />
  </div>
</template>

<style scoped>
.our_fishs_box {
  background: #1a1d22;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.our_fishs_box h3 {
  font-size: 25px;
  color: #fff;
  margin-top: 15px;
}
.our_fishs_box strong {
  font-size: 30px;
  color: #fff;
}
.ser_img img {
  border-radius: 10px;
  max-height: 400px;
  object-fit: cover;
}
.read_more {
  background: #f22e15;
  color: white;
  border: none;
  font-size: 17px;
  margin-top: 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
}
.read_more:hover {
  background: #ede0e0;
  color: #1a1d22;
}
</style>
