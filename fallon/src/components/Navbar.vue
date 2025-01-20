<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Navbar"
})
</script>

<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row d_flex">
        <div class=" col-md-2 col-sm-3 logo_section">
          <div class="full">
            <div class="center-desk">
              <div class="logo">
                <router-link to="/"><img src="../assets/images/logo.png" alt="#" /></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-10 col-sm-9">
          <nav class="navigation navbar navbar-expand-md navbar-dark ">
            <button class="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample04">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/fish" class="nav-link">Fish</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/blog" class="nav-link">Blog</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/testimonial" class="nav-link">Testimonial</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link">Contact</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="col-md-2 d_none">
          <ul class="email text_align_right">
            <li><a href="Javascript:void(0)">Login <img src="../assets/images/use.png" alt="#"/></a></li>
            <li><router-link to="/cart"><img src="../assets/images/sho.png" alt="#"/></router-link>></li>
            <li><a href="Javascript:void(0)"><img src="../assets/images/sea.png" alt="#"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
