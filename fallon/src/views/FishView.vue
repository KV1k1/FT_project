<script lang="ts">
import { defineComponent } from 'vue';
import FishImage1 from '@/assets/images/our_fish1.jpg';
import FishImage2 from '@/assets/images/our_fish2.jpg';
import FishImage3 from '@/assets/images/our_fish3.jpg';
import FishImage4 from '@/assets/images/our_fish4.jpg';
import FishList from '@/components/FishList.vue';

export default defineComponent({
  name: "FishView",
  components: { FishList },
  data() {
    return {
      fishList: [
        { name: 'Gabor-szuts', price: 200, image: FishImage1 },
        { name: 'Fighting-fish', price: 300, image: FishImage2 },
        { name: 'Isolated-fish', price: 400, image: FishImage3 },
        { name: 'Tropical-fish', price: 500, image: FishImage4 },
      ],
    };
  },
});
</script>

<template>
  <div class="our_fishs">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_center">
            <h2>Our Fish</h2>
            <p>
              Majority have suffered alteration in some form, by injected humour, or randomised words.
            </p>
          </div>
        </div>
      </div>
      <FishList :fishList="fishList" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1170px;
  margin: auto;
}
.titlepage h2 {
  font-size: 40px;
  color: #fff;
}
.titlepage p {
  font-size: 17px;
  color: #fff;
  line-height: 1.8;
}
</style>
