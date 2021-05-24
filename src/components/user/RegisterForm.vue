<template>
  <div class="card bg-light">
    <article class="card-body mx-auto" style="width: 500px;">
	<h4 v-if="type == 'regist'" class="card-title mt-3 text-center">회원가입</h4>
	<h4 v-else class="card-title mt-3 text-center">회원 정보 수정</h4>
	<div>
	<div class="form-group input-group" >
		<div class="input-group-prepend">
		    <span class="input-group-text"> 이름</span>
		 </div>
        <input name="username" v-model="username" ref="username" class="form-control" placeholder="이름" type="text">
    </div> <!-- form-group// -->
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text" > 아이디 </span>
		 </div>
        <input v-if="type == 'regist'" name="userid" v-model="userid" ref="userid" class="form-control" placeholder="아이디" type="text">
        <input v-else name="userid" v-model="member.userid" ref="userid" class="form-control"  type="text" disabled>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> 이메일 </span>
		 </div>
        <input name="email" v-model="email" ref="email" class="form-control" placeholder="이메일" type="email">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> 주소 </span>
		 </div>
        <input name="address" v-model="address"  ref="address" class="form-control" placeholder="주소" type="email">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> 비밀번호 </span>
		</div>
        <input class="form-control" placeholder="비밀번호" type="password" ref="userpwd" v-model="userpwd">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> 비밀번호 확인 </span>
		</div>
        <input class="form-control" placeholder="비밀번호 확인" type="password" ref="pwdconfirm" v-model="pwdconfirm">
    </div> <!-- form-group// -->                                      
    <div class="form-group">
        <button v-if="type == 'regist'" type="submit" class="btn btn-primary btn-block" @click="checkValue">  회원가입  </button>
        <button v-else  type="submit" class="btn btn-primary btn-block" @click="checkValue">  회원수정  </button>
    </div> <!-- form-group// -->      
    <p class="text-center">Have an account? <a href="/LoginForm">Log In</a> </p>                                                                 
    </div>
    </article>
    </div> <!-- card.// -->
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
.divider-text {
    position: relative;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.divider-text span {
    padding: 7px;
    font-size: 12px;
    position: relative;   
    z-index: 2;
}
.divider-text:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #ddd;
    top: 55%;
    left: 0;
    z-index: 1;
}
.input-group-text{
	width: 120px;
}
.btn-facebook {
    background-color: #405D9D;
    color: #fff;
}
.btn-twitter {
    background-color: #42AEEC;
    color: #fff;
}
</style>