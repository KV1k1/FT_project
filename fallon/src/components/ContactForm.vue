<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactForm',
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',

      errors: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },

    };

  },
  methods: {
    handleSubmit() {
      this.errors = {
        name: '',
        phone: '',
        email: '',
        message: ''
      };
      if (!this.name.trim()) {
        this.errors.name = 'Name is required.';
      }
      if (!this.phone.trim()) {
        this.errors.phone = 'Phone number is required.';
      }
      if (!this.email.trim()) {
        this.errors.email = 'Email is required.';
      }
      if (!this.message.trim()) {
        this.errors.message = 'Message is required.';
      }
      if (Object.keys(this.errors.name).length === 0 && Object.keys(this.errors.phone).length === 0 && Object.keys(this.errors.email).length === 0 && Object.keys(this.errors.message).length === 0) {
        this.$router.push('/ty');
      }
    },
  },
});
</script>

<template>
  <form @submit.prevent="handleSubmit" class="main_form">
    <div class="row">
      <div class="col-md-12">
        <input
          class="contactus"
          placeholder="Name"
          type="text"
          v-model="name"
        />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>
      <div class="col-md-12">
        <input
          class="contactus"
          placeholder="Phone"
          type="text"
          pattern="\d{10}"
          v-model="phone"
        />
        <p v-if="errors.phone" class="error">{{ errors.phone }}</p>
      </div>
      <div class="col-md-12">
        <input
          class="contactus"
          placeholder="Email"
          type="email"
          v-model="email"
        />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>
      <div class="col-md-12">
        <textarea
          class="textarea"
          placeholder="Message"
          v-model="message"
        ></textarea>
        <p v-if="errors.message" class="error">{{ errors.message }}</p>
      </div>
      <div class="col-md-12">
        <button class="send_btn" type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.error {
  color: red;
  font-size: 0.9rem;
}
</style>
