<template>
  <div class="loginWrapper">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style>
  @import "~/assets/common.css";
</style>
