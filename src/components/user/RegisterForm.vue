<template>
  <div class="wrapper fadeInDown">
  <div id="formContent" style="width: 550px;">
    <!-- Tabs Titles -->
	<h4 v-if="type == 'regist'" class="card-title mt-3 text-center">회원가입</h4>
   <h4 v-else class="card-title mt-3 text-center">회원 정보 수정</h4>

    <!-- Icon -->
    <div class="fadeIn first container" style="text-align:center;">
      <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png" id="icon" alt="User Icon" style="width:70px; height:70px; margin : auto;"/>
    </div>

    <!-- Login Form -->
    <form>
      <input style="text-align:left" type="text" id="login" v-model="username" ref="username" class="fadeIn second" name="login" placeholder="이름">
      <input style="text-align:left" v-if="type == 'regist'" type="text" id="login" v-model="userid" ref="userid" class="fadeIn second" name="login" placeholder="아이디 ">
      <input style="text-align:left" v-else type="text" id="login" v-model="member.userid" ref="userid" class="fadeIn second" disabled>
      <input style="text-align:left" type="email" id="login" v-model="email" ref="email" class="fadeIn second" name="login" placeholder="이메일 ">
      <input style="text-align:left" type="address" id="login" v-model="address" ref="address" class="fadeIn second" name="login" placeholder="주소">
      <input style="text-align:left" type="password" id="login" v-model="userpwd" ref="userpwd" class="fadeIn second" name="login" placeholder="비밀번호">
      <input style="text-align:left" type="password" id="password" v-model="pwdconfirm" ref="pwdconfirm" class="fadeIn third" name="login" placeholder="비밀번호 확인">
      <input v-if="type == 'regist'" type="submit" @click.prevent="checkValue" class="fadeIn fourth" value="회원 가입">
      <input v-else type="submit" @click.prevent="checkValue" class="fadeIn fourth" value="회원 수정">
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="/LoginForm">회원이신가요?</a>
    </div>

  </div>
</div>
</template>

<script>
import http from "@/util/http-common";
import { mapGetters } from 'vuex';

export default {
	name:"RegisterForm",

	props: {
    	type: { type: String }
  	},
	data() {
		return {
			username:"",
			userid:"",
			email:"",
			address:"",
			userpwd:"",
			pwdconfirm:"",
			Member:this.$store.state.member,
		}
	},
	computed:{
		...mapGetters(['member'])
	},
	methods:{
		checkValue() {
			let err = true;
			let msg = "";
			if(this.type=="regist"){
				!this.username && ((msg = "이름을 입력해주세요"), (err = false), this.$refs.username.focus());
				err && !this.userid && ((msg = "아이디 입력해주세요"), (err = false), this.$refs.userid.focus());
				err && !this.email && ((msg = "이메일 입력해주세요"), (err = false), this.$refs.email.focus());
				err && !this.address && ((msg = "주소를 입력해주세요"), (err = false), this.$refs.address.focus());
				err && !this.userpwd && ((msg = "비밀번호를 입력해주세요"), (err = false), this.$refs.userpwd.focus());
				err && !this.pwdconfirm && ((msg = "비밀번호 확인을 입력해주세요"), (err = false), this.$refs.pwdconfirm.focus());
			}
			else{
				!this.username && ((msg = "이름을 입력해주세요"), (err = false), this.$refs.username.focus());
				err && !this.email && ((msg = "이메일 입력해주세요"), (err = false), this.$refs.email.focus());
				err && !this.address && ((msg = "주소를 입력해주세요"), (err = false), this.$refs.address.focus());
				err && !this.userpwd && ((msg = "비밀번호를 입력해주세요"), (err = false), this.$refs.userpwd.focus());
				err && !this.pwdconfirm && ((msg = "비밀번호 확인을 입력해주세요"), (err = false), this.$refs.pwdconfirm.focus());
			}
			if(this.userpwd!=this.pwdconfirm){
				err=false;
				msg="비밀번호가 일치하지 않습니다."
			}

			if (!err) alert(msg);
			else this.type == "regist" ? this.registMember() : this.modifymember();
		},
		registMember(){
					http
				.post("/api/mem/register", {
				username: this.username,
					userid: this.userid,
					email: this.email,
					address: this.address,
					userpwd: this.userpwd,
				})
				.then(({ data }) => {
				let msg = "동일한 아이디가 있습니다.";
				
				if (data.resmsg=="회원가입 성공") {
					msg = "회원가입이 완료되었습니다.";
					alert(msg);
					this.moveMain();
				}else{
					alert(msg)
				}
        });
    	},
		modifymember(){
			this.$store.dispatch("modifyMember", {
					username: this.username,
					userid: this.Member.userid,
					email: this.email,
					address: this.address,
					userpwd: this.userpwd,
				})
			this.moveMain();
		},
		moveMain(){
			this.$router.push("/");
		}
	}

}
</script>

<style>
a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
}



/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 95%;
  max-width: 550px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}



/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}



/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

#login,#password {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

#login:focus,#password:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

#login:placeholder,#password:placeholder {
  color: #cccccc;
}



/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}



/* OTHERS */

*:focus {
    outline: none;
} 

#icon {
  width:60%;
}
</style>