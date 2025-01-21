<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer"
})
</script>

<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <router-link to="/"><img src="../assets/images/logo_footer.png" alt="#"/></router-link>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="headimg_fooh3">
              <h3>LATEST POST</h3>
              <p>Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="headimg_fooh3">
              <h3>Opening time </h3>
              <ul class="opening">
                <li>Monday <span>13:00 - 22:00</span></li>
                <li>Tuesday <span>13:00 - 22:00</span></li>
                <li>Wednesday <span>13:00 - 22:00</span></li>
                <li>Thursday  <span>13:00 - 22:00</span></li>
                <li>Friday   <span>13:00 - 22:00</span></li>
                <li>Suturday   <span>13:00 - 22:00</span></li>
                <li>Suturday   <span>13:00 - 22:00</span></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="headimg_fooh3">
              <h3>Contact Us</h3>
              <ul class="conta">
                <li><i class="fa fa-phone" aria-hidden="true"></i>Call +01 1234567890</li>
                <li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="Javascript:void(0)"> demo@gmail.com</a></li>
              </ul>
              <ul class="social_icon text_align_left">
                <li><a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="https://www.twitter.com/"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p>© 2022 All Rights Reserved. Design by <a href="https://html.design/"> Free html Templates</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import "https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";
@import "https://unpkg.com/aos@2.3.1/dist/aos.css";
</style>
