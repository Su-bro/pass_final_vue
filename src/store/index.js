import Vue from "vue";
import Vuex from "vuex";
import http from '../util/http-common';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    boards: [],
    board: Object,
  },
  mutations: {
    SET_BOARD_LIST(state, boards) {
      state.boards = boards;
      console.log(state.boards);
    },
    SET_USER_INFO(state, userInfo) {
      console.log(userInfo);
      state.userInfo = userInfo;
    }
  },
  getters: {
    boards(state) {
      return state.boards;
    },
    userInfo(state) {
      return state.userInfo;
    }

  },
  actions: {
    getBoardList({ commit }) {
      http
        .get('api/board/list')
        .then(({ data }) => {
          commit('SET_BOARD_LIST', data);
        })
        .catch(() => {
          alert('에러가 발생했습니다.');
        });
    },
    setUserInfo({ commit },UserInfo) {
      commit('SET_USER_INFO', UserInfo);
    },
  },
  modules: {},
});
