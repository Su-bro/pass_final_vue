<template>
  <div class="card bg-light">
    <article class="card-body mx-auto" style="width: 500px">
      <h4 class="card-title mt-3 text-center">회원 정보</h4>
      <div class="container bootstrap snippets bootdey" >
        <div class="panel-body inf-content" >
        <div style="height:300px">
            <div class="table-responsive" style="height:300px">
            <table class="table table-user-information" >
                <tbody>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-asterisk text-primary"></span>
                                아이디                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            {{member.userid}}     
                        </td>
                    </tr>
                    <tr>    
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-user  text-primary"></span>    
                                이름                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            {{member.name}}     
                        </td>
                    </tr>
                   
                   
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-envelope text-primary"></span> 
                                이메일                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            {{member.email}}  
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                주소                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            {{member.address}}
                        </td>
                    </tr>
                                              
                </tbody>
            </table>
            </div>
        </div>
        </div>

        <div class="form-group" style="display: inline">
          <button type="submit" class="btn btn-outline-primary btn-block" @click="modifymember">
            정보 수정
          </button>
          <button type="submit" class="btn btn-outline-primary btn-block" @click="deletemember">
            회원 탈퇴
          </button>
        </div>
        <!-- form-group// -->
      </div>
    </article>
  </div>
  
  <!-- card.// -->
</template>

<script>
export default {
  data() {
    return {
      member: this.$store.state.member,
    };
  },
  methods: {
    modifymember() {
      this.$router.push('/RegisterForm');
    },
    deletemember() {
      this.$store.dispatch('deleteMember', this.member.userid);
      this.$router.push('/');
    },
  },
};
</script>

<style>
th {
  width: 100px;
}
 .inf-content{
    border:1px solid #DDDDDD;
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
    border-radius:10px;
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
}		
</style>
