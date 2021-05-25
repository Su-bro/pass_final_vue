<template>
  <div class="header-container">
    <div class="header-top dark">
      <div class="container">
        <div class="row">
          <div class="col-3 col-sm-6 col-lg-8">
            <div class="header-top-first clearfix"></div>
          </div>
          <!-- <c:if test="${userinfo eq null }">                                            -->
          <div class="col-9 col-sm-6 col-lg-4">
            <div id="header-top-second" class="clearfix">
              <div class="header-top-dropdown text-right">
                <!-- 로그아웃상태 -->
                
                <div class="btn-group" v-if="loginstate=='1'">
                  <button
                    type="button"
                    class="btn btn-default btn-sm"
                    @click="Login"
                  >
                    <i class="fa fa-lock"></i> Login
                  </button>
                  <button class="btn btn-default btn-sm" @click="Regist">
                    <i class="fa fa-user"> </i> Sign Up
                  </button>
                </div>
                <!-- 로그인상태 -->
                <div class="btn-group" v-else-if="loginstate=='2'">
                  <button type="button" class="btn btn-default btn-sm" id="logout" @click="logout">
                    <i class="fa fa-user"></i> Logout
                  </button>
                  <button class="btn btn-default btn-sm" @click="moveUserinfo">
                    <i class="fa fa-user"> </i> 회원 정보
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <b-navbar toggleable="lg" type="light" variant="faded">
    <b-navbar-brand href="/"> <img
                    id="logo_img"
                    src="@/resources/images/logo.jpg"
                    width="160"
                    alt="The SSAFY"
                    class="mt-3"
                    /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

      <b-nav-item href="/">홈</b-nav-item>
      <b-nav-item href="/CultureMap">문화지도</b-nav-item>
      <b-nav-item href="/Board">게시판</b-nav-item>
      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="문화행사" right>
         <b-dropdown-item href="/Performance">공연</b-dropdown-item>
        <b-dropdown-item href="/Exhibition">전시</b-dropdown-item>
        <b-dropdown-item href="/Festival">축제</b-dropdown-item>
      </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
 
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters(['loginstate']),
  },
  methods: {
    Login(){
      this.$router.push({name:"LoginForm"});
    },
    Regist(){
      this.$router.push({name:"MemberRegist"});
    },
    logout: function () {
      alert('로그아웃');
      this.$store.dispatch('logout');
      this.$router.push("/");
    },
    moveUserinfo(){
      this.$router.push({ name: 'userinfo' });
    },
    getLoginState(){
      return this.$store.state.login;
    }
  },
};
</script>

<style>

#navi {
  width: 55%;
}
</style>
