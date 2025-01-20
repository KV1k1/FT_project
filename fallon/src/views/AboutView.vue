<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "AboutView",
})
</script>

<template>
  <div class="about">
    <div class="container">
      <div class="row d_flex">
        <div class="col-md-6">
          <div class="titlepage text_align_left">
            <h2>About Our Shop</h2>
            <p>
              Our shop has been dedicated to providing the finest and most established fish for over two decades.
              Our commitment to quality and sustainability has made us a trusted name among fish enthusiasts.
            </p>
            <p>
              <strong>Awards & Recognitions:</strong><br/>
              🏆 Best Seafood Provider 2023<br/>
              🏆 Excellence in Sustainability 2022<br/>
              🏆 Customer Favorite Award 2021
            </p>
            <router-link class="read_more" to="/blog">read our blog</router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="about_imgg">
            <figure><img src="../assets/images/s1.png" alt="About Us" /></figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about_imgg img{
  border: 5px solid #f22e15;
  border-radius: 25px

}
</style>
