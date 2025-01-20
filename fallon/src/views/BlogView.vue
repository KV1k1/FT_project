<script lang="ts">
import {defineComponent} from 'vue'
import BlogItem from "@/components/BlogItem.vue";
import blogim1 from '@/assets/images/blog_fish1.jpg';
import blogim2 from '@/assets/images/blog_fish2.jpg';

export default defineComponent({
  name: "BlogView",
  components: {BlogItem},
  data() {
    return {
      blogs: [
        {
          date: '12 March',
          title: 'Big River Feeder Fishing ...',
          description:
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...',
          fullContent:
            'This is the full content of the Big River Feeder Fishing blog post. It includes detailed information about the topic and provides in-depth insights.',
          author: 'Water Fish',
          image: blogim1,
        },
        {
          date: '12 March',
          title: 'Trent Barbel – Last Minute',
          description:
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...',
          fullContent:
            'This is the full content of the Trent Barbel – Last Minute blog post. It includes detailed information about the topic and provides in-depth insights.',
          author: 'Water Fish',
          image: blogim2,
        },
      ],
      additionalBlogs: [
        {
          date: '13 March',
          title: 'Night Fishing Adventures',
          description:
            'Discover the beauty and excitement of fishing at night. This blog provides insights into the techniques and joys of night fishing...',
          fullContent:
            'This blog post provides an in-depth look at night fishing techniques, the best spots, and the equipment needed for a successful night fishing trip.',
          author: 'Night Fisher',
          image: blogim1,
        },
        {
          date: '14 March',
          title: 'Bass Fishing Tips for Beginners',
          description:
            'A beginner’s guide to bass fishing, covering the essential tips and tricks to get you started on this exciting journey today...',
          fullContent:
            'This comprehensive guide includes tips for selecting the right equipment, understanding bass behavior, and mastering basic fishing techniques.',
          author: 'Expert Fisher',
          image: blogim2,
        },
      ],
      displayedCount: 2, // Initial number of blogs to display
    };
  },
  computed: {
    displayedBlogs() {
      return this.blogs.slice(0, this.displayedCount);
    },
    hasMoreBlogs() {
      return this.displayedCount < this.blogs.length + this.additionalBlogs.length;
    },
  },
  methods: {
    loadMoreBlogs() {
      const nextBlogs = this.additionalBlogs.splice(0, 2);
      this.blogs.push(...nextBlogs);
      this.displayedCount += nextBlogs.length;
    },
  },
})
</script>

<template>
  <div class="blog">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text_align_center">
            <h2>OUR BLOG</h2>
            <p>
              Majority have suffered alteration in some form, by injected humour, or randomised words
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12" v-for="(blog, index) in displayedBlogs" :key="index">
          <BlogItem :blog="blog" />
        </div>
      </div>
      <div class="col-md-12 text_align_center">
        <button
          class="read_more"
          v-if="hasMoreBlogs"
          @click="loadMoreBlogs"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
