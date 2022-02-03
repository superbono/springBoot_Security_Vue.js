<template>
  <div class="contents" style="border: 1px solid #fff; width: 400px; opacity: .7;
                               height: 400px; margin: 4% auto; background: #fff; border-radius: 30px;">
    <div class="form-wrapper form-wrapper-sm" style="margin-top: -2%">
      <div style="text-align: center">
        <div class="loginTitle">
          <img src="@/assets/img/logo_black.png" style="width: 250px; height: 200px;">
        </div>
      </div>
<!--      <h1>회원 가입 페이지</h1>-->
      <form @submit.prevent="submitForm" class="form" style="text-align: center">
        <div style="margin-top: -45px;">
          <label for="username"></label>
          <input id="username" type="text" v-model="username" style="border: 1px solid #D1D5D8; width: 85%; height: 35px;
                                                                      background: #fff;" placeholder="이메일을 입력하세요" autofocus />
          <button type="button" @click="idChk">중복확인</button>
        </div>
        <div>
          <label for="password"></label>
          <input id="password" type="password" v-model="password" style="border: 1px solid #D1D5D8; width: 85%; height: 35px;
                                                                         background: #fff; margin-top: 10px;" placeholder="비밀번호를 입력하세요" />
        </div>
        <div>
          <label for="nickname"></label>
          <input id="nickname" type="text" v-model="nickname" style="border: 1px solid #D1D5D8; width: 85%; height: 35px;
                                                                         background: #fff; margin-top: 10px;" placeholder="닉네임을 입력하세요" />
          <p class="validation-text" style="margin-top: 8px; margin-right: 105px; font-size: 11px; color: brown">
                <span class="warning" v-if="!isUsernameValid && username">
                  올바른 형식이 아닙니다. 확인 후 다시 입력해주세요.
                </span>
          </p>
        </div>
    <!--    <button type="submit">회원 가입</button>-->
        <p style="font-size: 11px; margin-right: 180px; text-decoration: underline">
          <a @click="loginMove" style="cursor: pointer; color: #000; font-weight: bold ">가입하셨나요? 로그인하러 가기</a>
        </p>
        <div style="margin-top: 30px;">
          <button
              :disabled="!isUsernameValid || !password || !nickname"
              type="submit"
              class="btn"
              style="width: 340px; height: 42px; background: #fff; border: 1px solid #d0e1d4; margin-top: -5px; font-weight: bold;"
          >
            회원가입
          </button>
        </div>
        <div style="margin-top: 10px;">
          <button
              type="reset"
              class="btn"
              style="width: 340px; height: 42px; background: #fff; border: 1px solid #d0e1d4; margin-top: -5px; font-weight: bold;"
          >
            취소
          </button>
        </div>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';
import axios from "axios";

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async idChk() {
      const userName = document.getElementById("username").value;
      await axios.get('http://localhost:3000/api/idChk/?username='+userName)
           .then(function (res){
             console.log(res.status);
             if(res.status == 200) {
               alert('사용가능합니다.');
             }
             // if(res == true) {
             //   alert('사용할 수 없는 아이디');
             // }
           })
           .catch(function (err){
             // console.log(err);
             alert('이미 사용중입니다.');
           });
    },
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data.username);
      alert('회원가입이 완료되었습니다.');
      // this.logMessage = `${this.username}` +  "님이 가입되었습니다";
      this.initForm();
    },
    loginMove() {
      this.$router.push("/login");
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
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
