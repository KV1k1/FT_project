<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ty"
})
</script>

<template>
  <div class="thank-you-page">
    <div class="container">
      <div class="content">
        <h1 class="thank-you-title">Thank You!</h1>
        <p class="thank-you-message">
          Thank you for being interested in our shop. We will get back to you as soon as possible.
        </p>
        <p class="thank-you-details">
          In the meantime, feel free to browse our <router-link to="/fish">shop</router-link> or visit our <router-link to="/contact">contact page</router-link> for more information.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thank-you-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.container {
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
}

.thank-you-title {
  font-size: 2.5rem;
  color: #2d3e50;
  margin-bottom: 20px;
}

.thank-you-message {
  font-size: 1.2rem;
  color: #4a4a4a;
  margin-bottom: 20px;
}

.thank-you-details {
  font-size: 1rem;
  color: #7f8c8d;
}

a {
  color: #f22e15;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
