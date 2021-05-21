import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BoardDetail from '@/components/board/BoardDetail.vue';
import CreateBoard from "@/components/board/CreateBoard.vue"
import ModifyBoard from "@/components/board/ModifyBoard.vue"
import Board from "@/views/Board.vue";
import BoardDelete from "@/components/board/BoardDelete.vue";
import LoginForm from "@/components/user/LoginForm.vue"
import ReigsterForm from "@/components/user/ReigsterForm.vue"
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
    path: '/ReigsterForm',
    name: 'ReigsterForm',
    component: ReigsterForm,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
