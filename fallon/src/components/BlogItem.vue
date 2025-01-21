<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BlogItem",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  computed: {
    expandedDescription() {
      if (this.isExpanded) {
        return this.blog.description + ' ' + this.blog.fullContent;
      } else {
        return this.blog.description;
      }
    },
  },
  methods: {
    toggleReadMore() {
      this.isExpanded = !this.isExpanded;
    },
  },
})
</script>

<template>
  <div class="fist_sec">
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <div class="blog_box">
          <div class="fer text_align_left">
            <span>{{ blog.date }}</span>
          </div>
          <h3>{{ blog.title }}</h3>
          <p>{{ expandedDescription }}
            <strong> <button class="read_more_btn" @click="toggleReadMore">
            {{ isExpanded ? 'Show Less' : 'Read More' }}
            </button> </strong>
          </p>
          <strong>Post By : {{ blog.author }}</strong>
          <ul>
            <li><a href="javascript:void(0)">Like <img src="@/assets/images/li.png" alt="#" /></a></li>
            <li><a href="javascript:void(0)">Comment <img src="@/assets/images/com.png" alt="#" /></a></li>
            <li><a href="javascript:void(0)">Share <img src="@/assets/images/sh.png" alt="#" /></a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="blog_img">
          <figure><img :src="blog.image" alt="#" /></figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read_more_btn {
  margin-bottom: 10px;
  margin-left: 350px;
  padding: 10px;
  background: white;
  color: black;
  cursor: pointer;
  border-radius: 5px;
}

.read_more_btn:hover {
  background-color: #f22e15;
}
</style>
