<template>
  <div>
    <div class="spinner-border"></div>
    <div class="spinner-border"></div>
    삭 제 중
    <div class="spinner-border"></div>
    <div class="spinner-border"></div>
  </div>
</template>

<script>
import http from '@/util/http-common';
export default {
  created() {
    const userid = this.$store.getters.userid;
    const no = this.$route.params.no;
    console.log('delete_userid: ' + userid);
    console.log('delete_no: ' + no);
    http
      .delete(`/api/board/${no}`)
      .then(({ data }) => {
        alert(data.resmsg);
        this.$router.push('/Board');
      })
      .catch(() => {
        alert('삭제실패');
      });
  },
};
</script>

<style></style>
