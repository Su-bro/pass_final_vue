<template>
  <div class="vue-tempalte container" style="width:35%">
        <form>
            <h3>로그인</h3>

            <div class="form-group">
                <label>아이디</label>
                <input type="text" v-model="userid" ref="userid" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>비밀번호</label>
                <input type="password" v-model="userpwd" ref="userpwd" class="form-control form-control-lg" />
            </div>

            <button type="button" @click="checkValue" class="btn btn-outline-primary btn-lg btn-block">로그인</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/">회원이 아니신가요?</router-link>
            </p>

        </form>
    </div>
</template>

<script>


export default {
   
    data() {
        return {
            userid:"",
            userpwd:"",
            flag:false,
            member:{}
        }
    },

    methods:{
        checkValue(){
            let err = true;
            let msg = "";
            !this.userid && ((msg = "id 입력해주세요"), (err = false), this.$refs.userid.focus());
            err && !this.userpwd && ((msg = "password 입력해주세요"), (err = false), this.$refs.userpwd.focus());
            if (!err) alert(msg);
            else this.login();
        },
        login(){
            this.member.userid=this.userid;
            this.member.userpwd=this.userpwd;
            console.log(this.memeber);
            this.$store.dispatch('loginMember',this.member);
            this.move();
            
        },
        
        move(){
      
            this.$router.push("/");

        }
    }
}
</script>

<style>

</style>