<script lang="ts">
import { defineComponent } from 'vue';
import im1 from '@/assets/images/banner_img.png'
import AboutView from "@/views/AboutView.vue";
import BlogView from "@/views/BlogView.vue";
import TestimonialView from "@/views/TestimonialView.vue";
import FishView from './FishView.vue';
export default defineComponent({
  name: 'HomeView',
  components: {BlogView, AboutView, TestimonialView, FishView},
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          title: 'Now Get every Fish Here',
          description: 'A reader will be distracted by the readable content of a page.',
          image: im1,
        },
        {
          title: 'Discover Fresh Fish Every Day',
          description: 'Explore a variety of fresh, humorous fish at amazing prices.',
          image: im1,
        },
        {
          title: 'Sustainable Seafood',
          description: 'Supporting sustainable fishing practices for a better tomorrow.',
          image: im1,
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
});
</script>

<template>
  <div class="carousel-container">
    <div class="carousel slide" data-ride="carousel">
      <!-- Slides -->
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-item"
          :class="{ active: index === currentSlide }"
        >
          <div class="container">
            <div class="row d_flex align-items-center">
              <div class="col-md-6 text-center">
                <div class="carousel-content">
                  <h1>{{ slide.title }}</h1>
                  <p>{{ slide.description }}</p>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <div class="carousel-image">
                  <img :src="slide.image" alt="Carousel Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="carousel-control-prev" href="#" role="button" @click="prevSlide">
        <i class="fa fa-angle-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#" role="button" @click="nextSlide">
        <i class="fa fa-angle-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

  <div class="container">
    <AboutView/>
    <FishView/>
    <BlogView/>
  </div>
  <!-- newsletter -->
  <div class="newsletter">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_left ">
            <h2>Our Newsletter</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <form class="form_newsl">
            <div class="row">
              <div class="col-md-8">
                <p>Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                  as necessary, making this the first true generator on the
                </p>
              </div>
              <div class="col-md-8">
                <input class="newsl" placeholder="Enter Your email address" type="text" name="Email">
              </div>
              <div class="col-md-4">
                <button class="subsci_btn">subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- end newsletter -->
</template>

<style scoped>
.carousel-container {
  width: 800px;
  height: 400px;
  left: 30%;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  position: relative;
}

.carousel-inner {
  width: 80%;
  margin: auto;
}

.carousel-item {
  display: none;
  transition: opacity 0.5s ease-in-out;
}

.carousel-item.active {
  display: flex;
}

.carousel-content h1 {
  font-size: 2rem;
  font-weight: bold;
}

.carousel-content p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.carousel-image img {
  height: 125px;
  border-radius: 10px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev {
  left: 20px;
}

.carousel-control-next {
  right: 20px;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: #f22e15;
  cursor: pointer;
}

.carousel-control-prev i,
.carousel-control-next i {
  font-size: 24px;
}
</style>
