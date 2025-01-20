<script lang="ts">
import ContactForm from '@/components/ContactForm.vue';
import {defineComponent} from 'vue'


export default defineComponent({
  name: "ContactView",
  components: {ContactForm}
})
</script>

<template>
  <div class="contact">
    <div class="container">
      <div class="titlepage text_align_center">
        <h2>Contact Us</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <ContactForm />
        </div>
        <div class="col-md-6">
          <div class="map_img">
            <img src="../assets/images/map.png" alt="Map" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
