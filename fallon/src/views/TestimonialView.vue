<script lang="ts">
import TestimonialSlide from '@/components/TestimonialSlide.vue';
import { defineComponent } from 'vue';

import tesim1 from '@/assets/images/test2.png';
import tesim2 from '@/assets/images/te2.png';

export default defineComponent({
  name: "TestimonialView",
  components: {
    TestimonialSlide,
  },
  data() {
    return {
      currentSlide: 0,
      testimonials: [
        {
          name: "Jonising",
          image: tesim1,
          quote: "Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
          icon: tesim2,
        },
        {
          name: "A",
          image: tesim1,
          quote: "Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
          icon: tesim2,
        },
        {
          name: "B",
          image: tesim1,
          quote: "Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
          icon: tesim2,
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
    },
  },
});
</script>

<template>
  <div class="customers">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="titlepage text_align_center">
            <h2>Testimonial</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="carousel slide customers_banner" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                v-for="(testimonial, index) in testimonials"
                :key="index"
                :class="{ active: index === currentSlide }"
                @click="currentSlide = index"
              ></li>
            </ol>
            <div class="carousel-inner">
              <TestimonialSlide
                v-for="(testimonial, index) in testimonials"
                :key="index"
                :testimonial="testimonial"
                :isActive="index === currentSlide"
              />
            </div>
            <a class="carousel-control-prev" href="#" role="button" @click="prevSlide">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#" role="button" @click="nextSlide">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-control-prev, .carousel-control-next {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.29);
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-control-prev i, .carousel-control-next i {
  font-size: 24px;
}

.carousel-control-prev:hover, .carousel-control-next:hover {
  background-color: #f22e15;
  cursor: pointer;
}
</style>
