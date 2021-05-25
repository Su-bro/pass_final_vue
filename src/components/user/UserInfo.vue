<template>
  <div class="card bg-light">
    <article class="card-body mx-auto" style="width: 500px">
      <h4 class="card-title mt-3 text-center">회원 정보</h4>
      <div>
        <table class="table table-striped">
          <tr>
            <th>이름:</th>
            <td>{{ member.username }}</td>
          </tr>

          <tr>
            <th>아이디:</th>
            <td>{{ member.userid }}</td>
          </tr>

          <tr>
            <th>이메일:</th>
            <td>{{ member.email }}</td>
          </tr>

          <tr>
            <th>주소:</th>
            <td>{{ member.address }}</td>
          </tr>
        </table>
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
</style>
