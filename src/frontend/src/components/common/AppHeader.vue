<template>
  <header>
    <template v-if="isUserLogin">
      <a href="#contents" class="skip">본문바로가기</a>
      <header>
        <h1><a href="#a">네버랜드</a></h1>
        <h2 class="hide">대메뉴</h2>
        <nav class="lnb">
          <ul>
            <li><a href="#a"><span>홈</span></a></li>
            <li><a href="#a"><span>게시판</span></a></li>
            <li><a href="#a"><span>네버랜드</span></a></li>
            <li><a href="#a"><span>마이페이지</span></a></li>
            <li><a href="#a"><span>공지사항</span></a></li>
          </ul>
        </nav>
        <h2 class="hide">관련서비스</h2>
        <nav class="spot">
          <ul>
            <li><a href="#a">프로젝트소개</a></li>
            <li><a href="#a">프로필</a></li>
            <li><a href="#a" @click="logoutUser">로그아웃</a></li>
          </ul>
        </nav>
      </header>
    </template>
    <template v-else>

    </template>

  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>

/*.username {*/
/*  color: white;*/
/*}*/
/*header {*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  align-items: center;*/
/*  padding: 10px 20px;*/
/*  background-color: #927dfc;*/
/*  z-index: 2;*/
/*  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);*/
/*}*/
/*a {*/
/*  color: #dedede;*/
/*  font-size: 18px;*/
/*}*/
/*a.logo {*/
/*  font-size: 30px;*/
/*  font-weight: 900;*/
/*  color: white;*/
/*}*/
/*.logo > span {*/
/*  font-size: 14px;*/
/*  font-weight: normal;*/
/*}*/
/*.navigations a {*/
/*  margin-left: 10px;*/
/*}*/
/*.fixed {*/
/*  position: fixed;*/
/*  top: 0;*/
/*  width: 100%;*/
/*}*/
/*.logout-button {*/
/*  font-size: 14px;*/
/*}*/
/*a.router-link-exact-active {*/
/*  color: white;*/
/*  font-weight: bold;*/
/*}*/
</style>
