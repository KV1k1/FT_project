<script lang="ts">
import { defineComponent } from 'vue';
import FishItem from './FishItem.vue';
import type { Fish } from "@/stores/cart";

export default defineComponent({
  name: "FishList",
  components: { FishItem },
  props: {
    fishList: {
      type: Array as () => Fish[],
      required: true,
    },
    itemsPerSlide: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    totalSlides(): number {
      return Math.ceil((this.fishList?.length || 0) / this.itemsPerSlide);
    },
    visibleFish(): Fish[] {
      const start = this.currentSlide * this.itemsPerSlide;
      return this.fishList?.slice(start, start + this.itemsPerSlide) || [];
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.totalSlides - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.totalSlides - 1;
      }
    },
  },
})
</script>

<template>
  <div class="carousel">
    <div class="carousel-track-container">
      <div class="carousel-track">
        <FishItem
          v-for="(fish, index) in visibleFish"
          :key="index"
          :fish="fish"
        />
      </div>
    </div>
    <button class="carousel-button left" @click="prevSlide">‹</button>
    <button class="carousel-button right" @click="nextSlide">›</button>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}
.carousel-track-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.carousel-track {
  display: flex;
  gap: 20px;
}
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #f22e15;
  color: white;
  border: none;
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.carousel-button.left {
  left: 10px;
}
.carousel-button.right {
  right: 10px;
}
.carousel-button:hover {
  background-color: #ff4444;
}
</style>
