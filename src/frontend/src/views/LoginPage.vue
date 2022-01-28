<template>
  <div>
    <template v-if="!this.$store.getters.isLogin">
    <div class="loginWrapper">
      <LoginForm></LoginForm>
    </div>
    </template>
    <template v-else>
      <h1>메인페이지</h1>
    </template>
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
