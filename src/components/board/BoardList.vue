<template>
  <div class="container">
    
    <h1 class="underline">게시판</h1>
    
    <div v-if="boards.length" class="container">
      <div class="container-fluid ">
        <table id="board-list" class="table table-striped col-md-8" style="margin: 0 auto">
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

        <b-pagination
        v-model="boardPageNav.currentPage"
        :total-rows="boardPageNav.totalCount"
        :per-page="boardPageNav.naviSize"
        aria-controls="board_table"
        align="center"
        @page-click="pageMove"
          />
      </div>
      
      <div style="text-align: center">
        <button class="btn btn-outline-secondary" @click="CreateBoard">글쓰기</button>
      </div>
      
    </div>
    <div v-else class="text-center">게시글이 없습니다.</div>
  </div>
</template>

<script>
import BoardListItem from '@/components/board/BoardListItem.vue';
// import http from '@/util/http-common';
import { mapActions, mapState } from "vuex";
export default {
  name: 'boardList',
  data() {
    return {
          spp: 10,
          pg: 1,
          params:{},
          key:'',
          word:'',
        };
  },
  computed:{
      ...mapState(["boards", "boardPageNav", "key", "word", "login", "member"]),
  },
  created() {
    this.getdata();
  },
  components: {
    BoardListItem,
  },
   watch: {
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    $route: "getdata",
  },
  methods: {
    CreateBoard() {
      if(this.$store.state.login==1){
        alert("로그인 해주세요")
      }else{
        this.$router.push({ name: 'CreateBoard' });
      }
    },
    ...mapActions(["getBoardList"]),
    getdata() {
      this.getBoardList(this.$store.getters.requestParams);
      console.log(this.boards);
      console.log(this.boardPageNav.currentPage);
      console.log(this.boardPageNav.totalCount);
      console.log(this.boardPageNav.naviSize);
    },
    pageMove: function (button, page) {
      this.boardPageNav.currentPage = page;
      const params = { key: this.key, word: this.word, pg: page };
      this.getBoardList(params);
    },
   
  },
};
</script>

<style></style>
