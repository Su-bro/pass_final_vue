<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center">
        <table class="table table-bordered">
          <tr>
            <th style="width: 75px">번호</th>
            <td>{{ board.no }}</td>
            <th>날짜</th>
            <td>{{ board.date | moment('YYYY-MM-DD') }}</td>
          </tr>
          <tr>
            <th>글쓴이</th>
            <td>{{ board.writer }}</td>
            <th>제목</th>
            <td>{{ board.title }}</td>
          </tr>

          <tr>
            <td colspan="4" v-html="board.contents"></td>
          </tr>
        </table>
      </b-row>
      <b-row class="justify-content-md-center">
        <div class="text-center">
          <router-link to="/Board"><button class="btn btn-secondary">목록</button></router-link>
          <router-link :to="'/modify/' + board.no"
            ><button class="btn btn-secondary">수정</button></router-link
          >
          <router-link :to="'/delete/' + board.no"
            ><button class="btn btn-secondary">삭제</button></router-link
          >
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import http from '@/util/http-common';
export default {
  name: 'BoardDetail',
  data() {
    return {
      board: {},
    };
  },
  created() {
    const no = this.$route.params.no;
    console.log(no);
    http
      .get(`/api/board/${no}`)
      .then(({ data }) => {
        console.log(data);
        this.board = data;
      })
      .catch(() => {
        alert('실패');
      });
  },
};
</script>

<style></style>
