<template>
  <div>
    <template v-if="!this.$store.getters.isLogin">
      <SignupForm></SignupForm>
    </template>
    <template v-else>
      <h1>메인페이지</h1>
    </template>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: {
    SignupForm,
  },
};
</script>

<style></style>
