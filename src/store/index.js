import Vue from "vue";
import Vuex from "vuex";
import http from '../util/http-common';
import createPersistedState from 'vuex-persistedstate';
import Performance from '@/DB/Performance.json'
import SeoulExhibition from '@/DB/SeoulExhibition.json'
import SeoulFestival from '@/DB/SeoulFestival.json'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    member:Object,
    boards: [],
    board: Object,
    boardPageNav: {},
    login: 1,
    word: "",
    key: "",
    performancedb: [],
    performanceitem: [],
    seoulexhibitiondb:[],
    seoulexhibitionitem:[],
    seoulfestivaldb:[],
    seoulfestivalitem:[],
  },
  mutations: {
    SET_BOARD_LIST(state, boards) {
      state.boards = boards;
      console.log(state.boards);
    },
    SET_BOARDPAGENAV(state, payload) {
      state.boardPageNav = payload;
    },
    LOGIN_MEMBER(state, member) {
      state.member = member;
      state.login = 2;
      console.log(state.member);
      
    },
    LOGOUT_MEMBER(state) {
      state.member = Object;
      state.login = 1;
    },
    SET_KEY(state, payload) {
      state.key = payload;
    },
    SET_WORD(state, payload) {
      state.word = payload;
    },
    SET_PERFORMANCE_DB(state, data) {
      state.performancedb = data;
    },

    SET_PERFORMANCE_ITEM_(state, data) {
      state.performanceitem = data;
      console.log(state.performanceitem);
    },
    SET_SeoulExhibition_DB(state, data) {
      state.seoulexhibitiondb = data;
    },
    SET_SeoulExhibition_ITEM(state, data) {
      state.seoulexhibitionitem = data;
      console.log(state.seoulexhibitionitem);
    },
    SET_SeoulFestival_DB(state, data) {
      state.seoulfestivaldb = data;
    },
    SET_SeoulFestival_ITEM(state, data) {
      state.seoulfestivalitem = data;
      console.log(state.seoulfestivalitem);
    }

  },
  getters: {
    boards(state) {
      return state.boards;
    },
    userInfo(state) {
      return state.userInfo;
    },
    member(state) {
      return state.member;
    },
    loginstate(state) {
      return state.login;
    },
    requestParams(state) {
      return {
        key: state.key,
        word: state.word,
        pg: state.boardPageNav.currentPage ?? 1,
      };
    },
    performanceItem(state) {
      return state.performaceitem;
    }

  },
  actions: {
    getBoardList({ commit }, params) {
      commit("SET_KEY", params.key);
      commit("SET_WORD", params.word);
      console.log(params);
      http
        .get('api/board/list', { params })
        .then(({ data }) => {
          console.log(data.list);
          commit('SET_BOARD_LIST', data.list);
          commit("SET_BOARDPAGENAV", data.navigation);
        })
        .catch(() => {
          alert('에러가 발생했습니다.');
        });
    },
    loginMember({ commit }, member) {
      console.log(member);
      http
            .post(`/api/mem/login`,member)
            .then(({ data }) => {
              console.log(data)
                let msg = "아이디와 비밀번호를 확인해주세요";
                
                if (data.resmsg=="로그인 성공") {
                  msg = "로그인 완료되었습니다.";
                  console.log(data.resValue);
                  commit('LOGIN_MEMBER', data.resValue);
              }
              alert(msg);
            })
            .catch(() => {
                console.log("???")
                alert('에러');
            });
    },
    modifyMember({ commit }, member) {
      http
        .post('/api/mem/modify',member)
        .then(({ data }) => {
          console.log(data)
            let msg = "정보 수정시 에러가 발생하였습니다.";
            
            if (data.resmsg=="회원정보수정 성공") {
              msg = "회원정보수정이 완료되었습니다. 다시 로그인 해주세요";
              console.log(data.resValue);
              commit("LOGOUT_MEMBER");
          }
          alert(msg);
        })
        .catch(() => {
            console.log("???")
            alert('에러');
        });
    },
    deleteMember({commit},userid) {
      if (confirm("탈퇴하시겠습니까??")) {
        http
          .post('/api/mem/delete', userid)
          .then(({ data }) => {
            console.log(data)
            let msg = "회원 탈퇴시 에러가 발생하였습니다.";
            
            if (data.resmsg == "회원탈퇴 성공") {
              msg = "회원탈퇴가 완료되었습니다. ";
              console.log(data.resValue);
              commit("LOGOUT_MEMBER");
            }
            alert(msg);
          })
          .catch(() => {
            console.log("???")
            alert('에러');
          });
      }
    },
    logout({ commit }) {
      console.log('로그아웃');
      commit("LOGOUT_MEMBER");
    },
    PerformanceDBInit({ commit }) {
      const res = Performance
      const data = res.data.map(d => ({
        org_name: d.org_name,
        org_link: d.org_link,
        main_img: d.main_img,
        strtdate: d.strtdate,
        end_date: d.end_date,
        title: d.title,
        program: d.program,
        codename: d.codename,
        place:d.place,
        
      }))
      commit('SET_PERFORMANCE_DB',data)
    },
    SetPerformance({ commit }, data) {
      console.log(data);
      commit('SET_PERFORMANCE_ITEM_', data);
    },
    SeoulExhibitionDBInit({ commit }) {
      const res = SeoulExhibition
      const data = res.data.map(d => ({
        dp_name: d.dp_name,
        dp_hompage: d.dp_hompage,
        dp_main_img: d.dp_main_img,
        dp_viewtime: d.dp_viewtime,
        dp_start: d.dp_start,
        dp_info: d.dp_info,
        dp_end: d.dp_end,
        dp_sponsor: d.dp_sponsor,
        dp_place:d.dp_place,
        
      }))
      commit('SET_SeoulExhibition_DB',data)
    },
    SetSeoulExhibition({ commit }, data) {
      console.log(data);
      commit('SET_SeoulExhibition_ITEM', data);
    },
    FestivalDBInit({ commit }) {
      const res = SeoulFestival
      const data = res.data.map(d => ({
        축제명: d.축제명,
        개최장소: d.개최장소,
        주관기관: d.주관기관,
        축제시작일자: d.축제시작일자,
        축제종료일자: d.축제종료일자,
        홈페이지주소: d.홈페이지주소,
        소재지도로명주소: d.소재지도로명주소,
        소재지지번주소: d.소재지지번주소,
        축제내용:d.축제내용,
        사진:d.사진,
        
      }))
      commit('SET_SeoulFestival_DB',data)
    },
    SetSeoulFestival({ commit }, data) {
      console.log(data);
      commit('SET_SeoulFestival_ITEM', data);
    }
  },
  modules: {},
  plugins: [createPersistedState()],

});
