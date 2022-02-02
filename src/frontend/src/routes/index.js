import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

// history.pushState(null, document.title, "#back");
//
// window.onpopstate = function() {
// 	history.go(1);
// };

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/main',
		},
		{
			name: 'login',
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			name: 'join',
			path: '/join',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			name: 'main',
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/post/create',
			name: 'postAdd',
			component: () => import('@/views/PostAddPage.vue'),
		},
		{
			path: '/neverland',
			name: 'neverland',
			component: () => import('@/views/NeverlandPage.vue'),
		},
		{
			path: '/notice',
			name: 'notice',
			component: () => import('@/views/NoticePage.vue'),
		},
		{
			path: '/user/detail',
			name: 'userDetail',
			component: () => import('@/views/UserDetailPage.vue'),
		},
		{
			name: 'error',
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다');
		next('/login');
		return;
	}  else {
		next();
	}
	next();
});

export default router;