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
                {{ isLogin }}
                <div class="input-group" v-if="!isLogin">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="id"
                    v-model="userid"
                    @keyup.enter="checkValue"
                  />
                  <input
                    class="form-control"
                    type="password"
                    placeholder="pw"
                    v-model="password"
                    @keyup.enter="checkValue"
                  />
                  <button
                    id="header-top-drop-2"
                    type="button"
                    class="btn btn-default btn-sm"
                    data-toggle="dropdown"
                    @click="checkValue"
                  >
                    <i class="fa fa-lock"></i> Login
                  </button>
                  <button class="btn btn-default btn-sm" onclick="javascript:moveJoin();">
                    <i class="fa fa-user"> </i> Sign Up
                  </button>
                </div>
                <!-- 로그인상태 -->
                <div class="btn-group" v-if="isLogin">
                  <button type="button" class="btn btn-default btn-sm" id="logout" @click="logout">
                    <i class="fa fa-user"></i> Logout
                  </button>
                  <a href="/userinfo " class="btn btn-default btn-sm">
                    <i class="fa fa-user"></i> 회원정보
                  </a>
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
                      <li class="nav-item dropdown mega-menu mega-menu--wide">
                        <a
                          href="/"
                          class="nav-link"
                          id="first-dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >문화행사</a
                        >
                      </li>
                      <li class="nav-item dropdown mega-menu mega-menu--wide">
                        <a
                          href="/"
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
                          href="/CultureMap"
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
export default {
  data() {
    return {
      userid: '',
      password: '',
      isLogin: false,
    };
  },
  methods: {
    checkValue() {
      let err = true;
      let msg = '';
      !this.userid && ((msg = '아이디를 입력하세요'), (err = false));
      err && !this.password && ((msg = '패스워드를 입력하세요'), (err = false));

      if (!err) alert(msg);
      else this.login();
    },
    login() {
      console.log(this.userid + ' ' + this.password);
      if ((this.userid == 'ssafy') & (this.password == 'ssafy')) {
        this.isLogin = true;
        alert('로그인성공');
      } else {
        alert('로그인실패');
      }
    },
    logout: function () {
      alert('로그아웃');
      this.isLogin = false;
      this.$router.push('/').catch(() => {});
    },
    moveBoard() {
      this.$router.push({ name: 'Board' });
    },
  },
};
</script>

<style></style>
