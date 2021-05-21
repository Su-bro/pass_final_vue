<template>
  <div class="container-md" id="loginForm" style="width:30%">
    <form width="35%"> 
        <label for="inputEmail" class="visually-hidden">ID</label> 
        <input type="userid" id="userid" v-model="userid" class="form-control" placeholder="ID" required autofocus> 
        <label for="inputPassword" class="visually-hidden">Password</label> 
        <input type="userpwd" v-model="userpwd" id="userpwd" class="form-control" placeholder="Password" required> 
        <button class="w-100 btn btn-lg btn btn-outline-success" @click="checkValue">로그인</button> 
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p> 
    </form>
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
    data() {
        return {
            userid:"",
            userpwd:"",
            LoginUser:{}
        }
    },

    methods:{
        checkValue(){
            let err = true;
            let msg = "";
            !this.userid && ((msg = "id 입력해주세요"), (err = false), this.$refs.userid.focus());
            err && !this.userpwd && ((msg = "password 입력해주세요"), (err = false), this.$refs.userpwd.focus());
            this.LoginUser.userid=this.userid;
            this.LoginUser.userpwd=this.userpwd;
            if (!err) alert(msg);
            else this.login();
        },
        login(){
            http
            .post(`/api/mem/login`,{
                userid:this.userid,
                userpwd:this.userpwd
            })
            .then(({ data }) => {
                let msg = "아이디와 비밀번호를 확인해주세요";
                
                if (data.resmsg=="로그인 성공") {
                    msg = "로그인 완료되었습니다.";
                    
                    this.LoginUser.userid=this.userid;
                    this.LoginUser.userpwd=this.userpwd;
                    this.$store.dispatch({
                        type:'setUserInfo',
                        userid: this.userid,
                        userpwd: this.userpwd,
                    });
                    alert(msg);

                    this.moveMain();
                       
                }
                else{
                    alert(msg);
                }
            })
            .catch(() => {
                alert('에러');
            });

            
        },
        moveMain(){
            this.$router.push("/");
        },
    }
}
</script>

<style>

</style>