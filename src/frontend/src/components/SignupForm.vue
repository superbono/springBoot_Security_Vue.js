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
                                                                      background: #fff;" autofocus placeholder="이메일을 입력해주세요." />
          <button type="button" @click="idChk" style="margin-left: 9px;width: 48px; height: 35px; border-radius: 3px; background: #fff; border: 1px solid #949394; font-size: 11px;">중복확인</button>
          <template v-if="duplicateId == true && username != ''">
            <div class="idLog" style="margin-right: 240px; color: #2DB400; margin-top: 4px; font-size: 12px;">{{ idChkMsg }}</div>
          </template>
          <template v-else-if="duplicateId == false && username != ''">
            <div class="idLog" style="margin-right: 240px; color: #AF4D4D; margin-top: 4px; font-size: 12px;">{{ idChkMsg }}</div>
          </template>
          <template v-else-if="!isUsernameValid && username != ''">
            <div class="idLog" style="margin-right: 240px; color: #AF4D4D; margin-top: 4px; font-size: 12px;"></div>
          </template>
          <template v-else>
            <div class="idLog" style="margin-right: 240px; color: #AF4D4D; margin-top: 4px; font-size: 12px;"></div>
          </template>
        </div>
        <div>
          <label for="password"></label>
          <input id="password" type="password" v-model="password" style="border: 1px solid #D1D5D8; width: 85%; height: 35px; margin-right: 55px;
                                                                         background: #fff; margin-top: 10px;" placeholder="비밀번호를 입력해주세요." />
          <template v-if="password == ''">
            <div class="pwLog" style="margin-right: 240px; color: #AF4D4D; margin-top: 4px; font-size: 12px;"></div>
          </template>
        </div>
        <div>
          <label for="nickname"></label>
          <input id="nickname" type="text" v-model="nickname" style="border: 1px solid #D1D5D8; width: 85%; height: 35px;
                                                                         background: #fff; margin-top: 10px;" placeholder="닉네임을 입력해주세요." />
          <button type="button" @click="nickChk" style="margin-left: 9px;width: 48px; height: 35px; border-radius: 3px; background: #fff; border: 1px solid #949394; font-size: 11px;">중복확인</button>
          <template v-if="duplicateNick == true && nickname != ''">
            <div class="nickLog" style="margin-right: 240px; color: #2DB400; margin-top: 4px; font-size: 12px;">{{ nickChkMsg }}</div>
          </template>
          <template v-else-if="duplicateNick == false && nickname != ''">
            <div class="nickLog" style="margin-right: 240px; color: #AF4D4D; margin-top: 4px; font-size: 12px;">{{ nickChkMsg }}</div>
          </template>
          <template v-else-if="!isNicknameValid && nickname != ''">
            <div class="idLog" style="margin-right: 240px; color: #AF4D4D; margin-top: 4px; font-size: 12px;"></div>
          </template>
          <template v-else>
            <div class="idLog" style="margin-right: 240px; color: #AF4D4D; margin-top: 4px; font-size: 12px;"></div>
          </template>
          <p class="validation-text" style="margin-top: 20px; margin-right: 105px; font-weight: bold; font-size: 13px; color: #AF4D4D; margin-left: 10px;">
                <span class="warning" v-if="!isUsernameValid && username">
                  올바른 형식이 아닙니다. 확인 후 다시 입력해주세요.
                </span>
                <span class="warning" v-else-if="!isPasswordValid && password">
                  비밀번호는 8~16 영문, 숫자를 조합해주세요.
                </span>
                <span class="warning" v-else-if="!isNicknameValid && nickname">
                  두글자 이상 한글, 영문으로 닉네임을 입력해주세요.
                </span>
          </p>
        </div>
    <!--    <button type="submit">회원 가입</button>-->
        <p style="font-size: 11px; margin-right: -40px; margin-top: 15px; text-decoration: underline">
          <a @click="loginMove" style="cursor: pointer; color: #000; font-weight: bold; font-size: 11px; margin-right: 60px;">가입하셨나요? 로그인하러 가기</a>
        </p>
        <div style="margin-top: 30px;">
          <button
              :disabled="!isUsernameValid || !password || !nickname"
              type="submit"
              class="btn"
              style="width: 400px; height: 42px; background: #fff; border: 1px solid #d0e1d4; margin-top: -5px; font-weight: bold;"
          >
            회원가입
          </button>
        </div>
        <div style="margin-top: 10px;">
          <button
              type="reset"
              class="btn"
              style="width: 400px; height: 42px; background: #fff; border: 1px solid #d0e1d4; margin-top: -5px; font-weight: bold;"
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
import { registerUser, idChkUser, nickChkUser } from '@/api/auth';
import { validateEmail, validatePassword, validateNickname } from '@/utils/validation';
import axios from "axios";

export default {
  data() {
    return {
      // form values
      idChkMsg: '',
      nickChkMsg: '',
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
      duplicateId: false,
      duplicateNick: false,
    };
  },
  methods: {
    // async idChk() {
    //   const userName = document.getElementById("username").value;
    //   let duplicate = false;
    //   let dupli = this.duplicate;
    //   await axios.get('http://localhost:3000/api/idChk/?username='+userName)
    //        .then(function (res){
    //          console.log(res.status);
    //          if(res.status == 200) {
    //            console.log('사용가능');
    //            dupli = true;
    //            console.log(duplicate);
    //          }
    //        })
    //        .catch(function (err){
    //          // console.log(err);
    //          duplicate = false;
    //          console.log('이미 사용중');
    //          console.log(duplicate);
    //        });
    // },
    async idChk() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      console.log(userData.username);
      try {
      const res = await idChkUser(userData.username);
      console.log(res);
      console.log(res.status);
        if(!this.isUsernameValid) {
          this.idChkMsg = '가입할 수 없는 이메일입니다.';
          this.duplicateId = false;
        } else {
          this.idChkMsg = '사용가능한 이메일입니다.';
          this.duplicateId = true;
        }
      } catch (e) {
        this.duplicateId = false;
        this.idChkMsg = '사용중인 이메일입니다.';
      }
    },
    async nickChk() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      console.log(userData.nickname);
      try {
        const res = await nickChkUser(userData.nickname);
        console.log(res);
        console.log(res.status);
        this.nickChkMsg = '사용가능한 닉네임입니다.';
        this.duplicateNick = true;
      } catch (e) {
        this.duplicateNick = false;
        this.nickChkMsg = '사용중인 닉네임입니다.';
      }
    },
    // async nickChk() {
    //   const nickName = document.getElementById("nickname").value;
    //   let duplicate = false;
    //   await axios.get('http://localhost:3000/api/nickChk/?nickname='+nickName)
    //       .then(function (res){
    //         console.log(res.status);
    //         if(res.status == 200) {
    //           duplicate = true;
    //           console.log('사용가능');
    //           console.log(duplicate);
    //         }
    //       })
    //       .catch(function (err){
    //         // console.log(err);
    //         duplicate = false;
    //         console.log('이미 사용중');
    //         console.log(duplicate);
    //         // alert('이미 사용중입니다.');
    //       });
    // },
    async submitForm() {
      if(this.duplicateId == true && this.duplicateNick == true) {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        const {data} = await registerUser(userData);
        console.log(data.username);
        alert('회원가입이 완료되었습니다.');
        this.idChkMsg = '';
        this.nickChkMsg = '';
        // this.logMessage = `${this.username}` +  "님이 가입되었습니다";
        this.initForm();
      } else {
        alert('중복확인을 진행해주세요.');
        this.idChkMsg = '';
        this.nickChkMsg = '';
        this.initForm();
      }
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
    isPasswordValid() {
      return validatePassword(this.password);
    },
    isNicknameValid() {
      return validateNickname(this.nickname);
    }
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
    /*padding: 12px 20px;*/
    /*margin: 8px 0;*/
    box-sizing: border-box;
  }
</style>
