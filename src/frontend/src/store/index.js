import Vue from 'vue';
import Vuex from 'vuex';
import {
    getAuthFromCookie,
    getUserFromCookie,
    saveAuthToCookie,
    saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: getUserFromCookie() || '',
        token: getAuthFromCookie() || '',
    },
    getters: {
        isLogin(state) {
            return state.username !== '';
        },
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        },
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = '';
        },
    },
    actions: {
        async LOGIN({ commit }, userData) {
            const response = await loginUser(userData);
            const parser = JSON.parse(response.config.data);
            console.log(parser.nickname);
            // console.log(response.data.config);
            // console.log(this.state.token);
            // commit('setToken', response.data.token);
            commit('setToken', parser.password);
            commit('setUsername', parser.username);
            saveAuthToCookie(parser.password);
            // saveAuthToCookie(response.data.token);
            saveUserToCookie(parser.username);
            return response;
        },
    },
});
