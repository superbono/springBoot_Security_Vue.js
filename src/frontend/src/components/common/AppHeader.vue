<template>
  <header>
    <template v-if="isUserLogin">
      <div>
        <b-navbar toggleable="lg" type="dark" style="background: #2C3E50; height: 70px;">
          <b-navbar-brand href="/main" style="margin-left: 8px;">
            <img src="@/assets/img/logo_white.png" style="width: 140px; height: 120px;">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">조회</b-nav-item>
              <b-nav-item href="#">작성</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

              <b-nav-item-dropdown right style="margin-left: 1000px;">
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">
                  <a href="javascript:;" @click="logoutUser" class="logout-button"
                     style="text-decoration: none; color: #000">
                    로그아웃
                  </a>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
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
