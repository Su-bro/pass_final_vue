<template>
  <div>
    <h1 class="underline">게시판</h1>

    <div v-if="boards.length">
      <b-row class="justify-content-md-center">
        <table id="board-list" class="table table-striped col-md-8">
          <colgroup>
            <col style="width: 5%" />
            <col style="width: 65%" />
            <col style="width: 20%" />
            <col style="width: 10%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성 날짜</th>
            </tr>
          </thead>
          <tbody>
            <board-list-item
              v-for="(board, index) in boards"
              :key="index"
              :no="board.no"
              :writer="board.writer"
              :title="board.title"
              :date="board.date"
            />
          </tbody>
        </table>
      </b-row>
      <div style="text-align: center">
        <button @click="CreateBoard">글쓰기</button>
      </div>
    </div>
    <div v-else class="text-center">게시글이 없습니다.</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BoardListItem from '@/components/board/BoardListItem.vue';
// import http from '@/util/http-common';

export default {
  name: 'boardList',
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('getBoardList');
  },
  components: {
    BoardListItem,
  },
  computed: {
    ...mapState(['boards']),
  },
  methods: {
    CreateBoard() {
      this.$router.push({ name: 'CreateBoard' });
    },
  },
};
</script>

<style></style>
