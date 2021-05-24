import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BoardDetail from '@/components/board/BoardDetail.vue';
import CreateBoard from "@/components/board/CreateBoard.vue"
import ModifyBoard from "@/components/board/ModifyBoard.vue"
import Board from "@/views/Board.vue";
import MemberRegist from "@/views/MemberRegist.vue";
import BoardDelete from "@/components/board/BoardDelete.vue";
import LoginForm from "@/components/user/LoginForm.vue"
import UserInfo from "@/components/user/UserInfo.vue"
import RegisterForm from "@/components/user/RegisterForm.vue"
import Performance from "@/components/culture/performance/Performance.vue"
import PerformanceItem from "@/components/culture/performance/PerformanceItem.vue"
import ExhibitionItem from "@/components/culture/exhibition/ExhibitionItem.vue"
import Exhibition from "@/components/culture/exhibition/Exhibition.vue"
import Festival from "@/components/culture/festival/Festival.vue"
import FestivalItem from "@/components/culture/festival/FestivalItem.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Board',
    name: 'Board',
    component: Board,
  },
  {
    path: '/Board/:no',
    name: 'Board-view',
    component: BoardDetail,
  },
  {
    path: '/CreateBoard',
    name: 'CreateBoard',
    component: CreateBoard,
  },
  {
    path: '/delete/:no',
    name: 'BoardDelete',
    component: BoardDelete,
  },
  {
    path: '/modify/:no',
    name: 'ModifyBoard',
    component: ModifyBoard,
  },
  {
    path: '/LoginForm',
    name: 'LoginForm',
    component: LoginForm,
  },
  {
    path: '/MemberRegist',
    name: 'MemberRegist',
    component: MemberRegist,
  },
  {
    path: '/RegisterForm',
    name: 'RegisterForm',
    component: RegisterForm,
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: UserInfo,
  },
  {
    path: '/Performance',
    name: 'Performance',
    component: Performance,
  },
  {
    path: '/PerformanceItem',
    name: 'PerformanceItem',
    component: PerformanceItem,
  },
  {
    path: '/Exhibition',
    name: 'Exhibition',
    component: Exhibition,
  },
  {
    path: '/ExhibitionItem',
    name: 'ExhibitionItem',
    component: ExhibitionItem,
  },
  {
    path: '/Festival',
    name: 'Festival',
    component: Festival,
  },
  {
    path: '/FestivalItem',
    name: 'FestivalItem',
    component: FestivalItem,
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
