<template>
  <div class="contents" style="border: 1px solid #fff; width: 400px; opacity: .7;
                               height: 400px; margin: 16% auto; background: #fff; border-radius: 30px;
                               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    <div class="form-wrapper form-wrapper-sm" style="margin-top: -2%">
      <div style="text-align: center">
        <div class="loginTitle">
          <img src="@/assets/img/logo_black.png" style="width: 250px; height: 200px;">
        </div>
      </div>
      <form @submit.prevent="submitForm" class="form" style="text-align: center">
        <div style="margin-top: -60px;">
          <label for="username"></label>
          <input id="username" type="text" v-model="username" style="border: 1px solid #000; border-radius: 5px; width: 70%; height: 35px;
                                                                      background: #fff;" placeholder="이메일을 입력하세요" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password"></label>
          <input id="password" type="password" v-model="password" style="border: 1px solid #000; border-radius: 5px; width: 70%; height: 35px;
                                                                         background: #fff; margin-top: -80px;" placeholder="비밀번호를 입력하세요" />
        </div>
        <div style="margin-top: 20px;">
          <button
              :disabled="!isUsernameValid || !password"
              type="submit"
              class="btn"
              style="width: 300px; height: 42px; background: #e1eff6; border: 1px solid #d0e1d4; margin-top: -5px;"
          >
            로그인
          </button>
          <button
              type="reset" style="width: 300px; height: 42px; background: #e1eff6; border: 1px solid #d0e1d4; margin-top: 5px;"
          >
            취소
          </button>
      </div>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
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
        const response = await this.$store.dispatch('LOGIN', userData);
        // await this.$store.dispatch('LOGIN', userData);
        // console.log(response.headers);
        console.log('완료');
        this.$router.push('/main');
        this.initForm();
      } catch (error) {
        // 에러 핸들링할 코드
        // console.log(error.response.data);
        alert("아이디와 비밀번호를 확인해주세요.")
        // this.logMessage = error.response.data;
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

<style>
  input::placeholder {
    font-size: 11px;
  }
  input[type=text],
  input[type=password]{
    width: 100%;
    padding: 12px 20px;
    /*margin: 8px 0;*/
    box-sizing: border-box;
  }
</style>
