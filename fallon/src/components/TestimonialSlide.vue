<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: "TestimonialSlide",
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<template>
  <div class="carousel-item" :class="{ active: isActive }">
    <div class="container-fluid">
      <div class="carousel-caption relative">
        <div class="row d_flex">
          <div class="col-md-3">
            <div class="por_pic">
              <i><img :src="testimonial.image" alt="#" /></i>
            </div>
          </div>
          <div class="col-md-9">
            <div class="test_box text_align_left">
              <h4>
                {{ testimonial.name }}
                <img class="img_responsive" :src="testimonial.icon" alt="#" />
              </h4>
              <p>{{ testimonial.quote }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
