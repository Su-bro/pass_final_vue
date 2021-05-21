<template>
  <div class="regist">
    <h1 class="underline">글쓰기</h1>
    <div class="regist_form">
        <label for="title">작성자</label>
        <input type="text" id="writer" name="writer" v-model="writer" ref="writer" /><br />
        <label for="title">제목</label>
        <input type="text" id="title" name="title" v-model="title" ref="title" /><br />
        <label for="contents">내용</label><br />
        <textarea id="contents" name="contents" v-model="contents" ref="contents" cols="35" rows="5"></textarea><br />
        <button v-if="type == 'create'" @click="checkValue">등록</button>
        <button v-else @click="checkValue">수정</button>
        <button @click="moveList">목록</button>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "writeform",
  props: {
    type: { type: String }
  },
  data() {
    return {
      no:"",
      title: "",
      writer: "",
      contents: "",
      board:{},
    };
  },
  created() {
    const no = this.$route.params.no;
      this.writer="로그인 한 유저";
    if (this.type === "modify") {
      http.get(`/api/board/`+no).then(({ data }) => {
        this.board=data;
        console.log(this.board);
      });
    }
  },
  methods: {
    checkValue() {
      let err = true;
      let msg = "";
      !this.title && ((msg = "title 입력해주세요"), (err = false), this.$refs.title.focus());
      err && !this.contents && ((msg = "contents 입력해주세요"), (err = false), this.$refs.contents.focus());
      

      if (!err) alert(msg);
      else this.type == "create" ? this.insertBoard() : this.modifyBoard();
    },
    insertBoard() {
      http
        .post("/api/board/insert", {
          title: this.title,
          writer: this.writer,
          contents: this.contents
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          
          if (data.resmsg=="입력 성공") {
            msg = "등록이 완료되었습니다.";
          }
        
          alert(msg);
          this.moveList();
        });
    },
    modifyBoard() {
      http
      .put(`/api/board/modify`,{
        no:this.board.no,
        title:this.title,
        writer : this.writer,
        contents : this.contents,
      })
      .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          
          if (data.resmsg=="수정 성공") {
            msg = "수정이 완료되었습니다.";
          }
        
          alert(msg);
          this.moveList();
        });
    },
    moveList() {
      this.$router.push("/board");
    }
  }
};
</script>

<style scoped>
.regist {
  padding: 10px;
}
.regist_form {
  text-align: left;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
input,
textarea,
.view {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
</style>
