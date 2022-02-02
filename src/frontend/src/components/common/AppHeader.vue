<template>
  <header>
    <template v-if="isUserLogin">
      <a href="#contents" class="skip">본문바로가기</a>
      <header>
        <h1><span>네버랜드</span></h1>
        <h2 class="hide">대메뉴</h2>
        <nav class="lnb">
          <ul>
<!--            <li><a href="/main"><span>홈</span></a></li>-->
<!--            <li><a href="/post/create"><span>게시판</span></a></li>-->
<!--            <li><a href="/neverland"><span>네버랜드</span></a></li>-->
            <li><a @click="moveHome"><span>홈</span></a></li>
            <li><a @click="moveBoard"><span>게시판</span></a></li>
            <li><a @click="moveNeverland"><span>네버랜드</span></a></li>
            <li><a @click="moveUser"><span>마이페이지</span></a></li>
            <li><a @click="moveNotice"><span>공지사항</span></a></li>
          </ul>
        </nav>
        <h2 class="hide">관련서비스</h2>
        <nav class="spot">
          <ul>
            <li><a @click="moveProject">프로젝트소개</a></li>
            <li><a @click="moveUser">프로필</a></li>
            <li><a href="#a" @click="logoutUser">로그아웃</a></li>
          </ul>
        </nav>
      </header>
    </template>
    <template v-else>
      <a href="#contents" class="skip">본문바로가기</a>
      <header>
        <h1><span>네버랜드</span></h1>
        <h2 class="hide">대메뉴</h2>
        <nav class="lnb">
          <ul>
            <li><a @click="moveHome"><span>홈</span></a></li>
<!--            <li><a href="#a"><span>게시판</span></a></li>-->
            <li><a @click="moveNeverland"><span>네버랜드</span></a></li>
<!--            <li><a href="#a"><span>마이페이지</span></a></li>-->
            <li><a @click="moveNotice"><span>공지사항</span></a></li>
          </ul>
        </nav>
        <h2 class="hide">관련서비스</h2>
        <nav class="spot">
          <ul>
            <li><a href="/join" >회원가입</a></li>
            <li><a href="/login">로그인</a></li>
            <li><a @click="moveProject">프로젝트소개</a></li>
          </ul>
        </nav>
      </header>
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
    moveHome() {
      this.$router.push('/');
    },
    moveUser() {
      this.$router.push('/user/detail');
    },
    moveNeverland() {
      this.$router.push('/neverland');
    },
    moveBoard() {
      this.$router.push('/post/create');
    },
    moveNotice() {
      this.$router.push('/notice');
    },
    moveProject() {
      this.$router.push('/project');
    },
    logoutUser() {
      if(confirm('로그아웃 하시겠습니까?')) {
        alert('로그아웃 되었습니다.');
        this.$store.commit('clearUsername');
        this.$store.commit('clearToken');
        deleteCookie('til_auth');
        deleteCookie('til_user');
        this.$router.push('/main');
        this.isUserLogin();
      }
    },
  },
};
</script>

<style scoped>
.lnb ul > li > a {
  cursor: pointer;
}
.spot ul > li > a {
  cursor: pointer;
  color: #000;
}
</style>
