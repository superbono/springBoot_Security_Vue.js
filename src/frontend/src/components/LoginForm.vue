<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const response = await loginUser(userData);
        console.log(response);
        console.log('완료');
        this.logMessage = `${this.username}님, 환영합니다`;
        this.initForm();
      } catch (error) {
        console.log(error.response.data);
        this.logMessage = error.response.data;
        console.log('실패');
        // this.initForm();
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
