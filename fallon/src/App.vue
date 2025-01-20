<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";
</script>

<template>
    <div id="app">
      <navbar/>

      <RouterView/>
      <Footer/>
  </div>
</template>

<style scoped>

</style>
