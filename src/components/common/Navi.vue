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
    <header class="header fixed fixed-desktop clearfix">
      <div class="container">
        <div class="row">
          <div class="col-md-auto hidden-md-down">
            <!-- header-first start -->
            <!-- ================ -->
            <div class="header-first clearfix">
              <!-- logo -->
              <div id="logo" class="logo">
                <a href="/"
                  ><img
                    id="logo_img"
                    src="@/resources/images/logo.jpg"
                    width="160"
                    alt="The SSAFY"
                    class="mt-3"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-lg-10 ml-auto">
            <div class="header-second clearfix">
              <div class="main-navigation main-navigation--mega-menu animated">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                  <div class="navbar-brand clearfix hidden-lg-up">
                    <!-- logo -->
                    <div id="logo-mobile" class="logo">
                      <a href="#"
                        ><img
                          id="logo-img-mobile"
                          src="@/resources/images/logo.jpg"
                          width="150"
                          alt="The SSAFY"
                      /></a>
                    </div>
                  </div>
                  <!-- header dropdown buttons -->
                  <div class="header-dropdown-buttons hidden-lg-up p-0 ml-auto mr-3">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn dropdown-toggle dropdown-toggle--no-caret"
                        id="header-drop-3"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fa fa-search"></i>
                      </button>
                      <ul
                        class="dropdown-menu dropdown-menu-right dropdown-animation"
                        aria-labelledby="header-drop-3"
                      >
                        <li>
                          <form role="search" class="search-box margin-clear">
                            <div class="form-group has-feedback">
                              <input type="text" class="form-control" placeholder="Search" />
                              <i class="fa fa-search form-control-feedback"></i>
                            </div>
                          </form>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- header dropdown buttons end -->
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-collapse-1"
                    aria-controls="navbar-collapse-1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul class="navbar-nav ml-xl-auto">
                      <b-dropdown split split-href="/Performance" text="문화 행사" class="m-2">
                        <b-dropdown-item href="/Performance">공연</b-dropdown-item>
                        <b-dropdown-item href="/Exhibition">전시</b-dropdown-item>
                        <b-dropdown-item href="/Festival">축제</b-dropdown-item>
                      </b-dropdown>
                      <li class="nav-item dropdown mega-menu mega-menu--wide">
                        <a
                          href="#"
                          class="nav-link"
                          id="first-dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          @click="moveBoard"
                          >게시판</a
                        >
                      </li>
                      <li class="nav-item dropdown mega-menu mega-menu--wide">
                        <a
                          href="#"
                          class="nav-link"
                          id="second-dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >문화지도</a
                        >
                      </li>
                      <!-- <c:if test="${userinfo eq null }"> -->
                      <!-- </c:if> -->
                      <!-- <c:if test="${userinfo ne null }"> -->

                      <li
                        class="nav-item dropdown mega-menu mega-menu--wide"
                        id="header_nav_item_add_interest"
                      >
                        <a
                          href="/"
                          class="nav-link"
                          id="third-dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >공지사항</a
                        >
                      </li>

                      <li class="nav-item dropdown mega-menu mega-menu--wide">
                        <a
                          href="/"
                          class="nav-link"
                          id="second-dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >홈</a
                        >
                      </li>

                      <!-- </c:if> -->
                    </ul>
                    <!-- main-menu end -->
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
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
    moveBoard() {
      this.$router.push({ name: 'Board' });
    },
    getLoginState(){
      return this.$store.state.login;
    }
  },
};
</script>

<style>
</style>
