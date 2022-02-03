<template>
  <div class="contents" style="border: 1px solid #fff; width: 400px; opacity: .7;
                               height: 400px; margin: 4% auto; background: #fff; border-radius: 30px;">
    <div class="form-wrapper form-wrapper-sm" style="margin-top: -2%">
      <div style="text-align: center">
        <div class="loginTitle">
          <img src="@/assets/img/logo_black.png" style="width: 250px; height: 200px;">
        </div>
      </div>
      <form @submit.prevent="submitForm" class="form" style="text-align: center">
        <div style="margin-top: -45px;">
          <label for="username"></label>
          <input id="username" type="text" v-model="username" style="border: 1px solid #D1D5D8; width: 85%; height: 35px;
                                                                      background: #fff;" placeholder="이메일을 입력하세요" autofocus />
        </div>
        <div>
          <label for="password"></label>
          <input id="password" type="password" v-model="password" style="border: 1px solid #D1D5D8; width: 85%; height: 35px;
                                                                         background: #fff; margin-top: 10px;" placeholder="비밀번호를 입력하세요" />
          <p class="validation-text" style="margin-top: 8px; margin-right: 25px; font-size: 13px; color: brown; font-weight: bold">
            <span class="warning" v-if="!isUsernameValid && username">
              올바른 형식이 아닙니다. 확인 후 다시 입력해주세요.
            </span>
            <span class="warning" v-else-if="!isPasswordValid && password">
              비밀번호는 8~16 영문, 숫자를 조합해주세요.
            </span>
          </p>
        </div>
        <p style="font-size: 11px; margin-right: -60px; margin-top: 15px; text-decoration: underline">
          <a @click="joinMove" style="cursor: pointer; color: #000;  font-weight: bold; font-size: 11px; margin-right: 60px;">아직 회원이 아니신가요? 회원가입 하러가기</a>
        </p>
        <div style="margin-top: 30px;">
          <button
              :disabled="!isUsernameValid || !password"
              @click="mainMove"
              type="submit"
              class="btn"
              style="width: 400px; height: 42px; background: #fff; border: 1px solid #d0e1d4; margin-top: -5px; font-weight: bold;"
          >
            로그인
          </button>
        </div>
        <div style="margin-top: 10px;">
          <button
              type="button"
              class="btn"
              style="width: 400px; height: 42px; background: #fff; border: 1px solid #d0e1d4;
                     margin-top: -5px; font-weight: bold; background: #3b5998; color: #fff"
              @click="oauthMove"
          >
            페이스북 아이디로 로그인
          </button>
        </div>
        <div style="margin-top: 10px;">
          <button
              type="button"
              class="btn"
              style="width: 400px; height: 42px; background: #fff; border: 1px solid #d0e1d4;
                     margin-top: -5px; font-weight: bold; background: #2DB400; color: #fff"
              @click="oauthMove"
          >
            네이버 아이디로 로그인
          </button>
        </div>
        <div style="margin-top: 10px;">
          <button
              type="button"
              class="btn"
              style="width: 400px; height: 42px; background: #E74C3C; border: 1px solid #d0e1d4;
                     margin-top: -5px; font-weight: bold; color: #fff"
              @click="oauthMove"
          >
            구글 아이디로 로그인
          </button>
<!--          <button-->
<!--              type="reset" style="width: 300px; height: 42px; background: #e1eff6; border: 1px solid #d0e1d4; margin-top: 5px;"-->
<!--          >-->
<!--            취소-->
<!--          </button>-->
      </div>
      </form>
<!--      <p class="log">{{ logMessage }}</p>-->
    </div>
  </div>
</template>

<script>
import {validateEmail, validatePassword} from '@/utils/validation';

export default {

  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
      submitFalse: false,
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
    isPasswordValid() {
      return validatePassword(this.password);
    },
  },
  methods: {
    async submitForm() {
      if(this.isUsernameValid && this.isPasswordValid) {
        this.submitFalse = true;
      }
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const response = await this.$store.dispatch('LOGIN', userData);
        this.mainMove();
        // await this.$store.dispatch('LOGIN', userData);
        // console.log(response.headers);
        console.log('완료');
        // alert('메인페이지로 이동합니다.');
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
    mainMove() {
      this.$router.push("/main");
    },
    joinMove() {
      this.$router.push("/join");
    },
    oauthMove() {
      alert('추후 개발 예정입니다.');
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
  button {
    cursor: pointer;
  }
</style>
