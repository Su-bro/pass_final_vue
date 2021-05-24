<template>
    <b-container>
        <b-row>
            <b-col cols="5">
                <img :src="seoulfestivalitem.사진" style="width:100% height:100%">
            </b-col>
            
            <b-col cols="5">
                <table class="table table-border" id="info">
                    <tr>
                        <th>축제명:</th>
                        <td>{{seoulfestivalitem.축제명}}</td>
                    </tr>
                    <tr>
                        <th>개최장소:</th>
                        <td>{{seoulfestivalitem.개최장소}}</td>
                    </tr>
                    <tr>
                        <th>주최:</th>
                        <td>{{seoulfestivalitem.주관기관}}</td>
                    </tr>
                    <tr>
                        <th>시작일:</th>
                        <td>{{seoulfestivalitem.축제시작일자 | moment('YYYY-MM-DD')}}</td>
                    </tr>
                    <tr>
                        <th>종료일:</th>
                        <td>{{seoulfestivalitem.축제종료일자 | moment('YYYY-MM-DD')}}</td>
                    </tr>
                    <tr>
                    <th>페이지 바로가기:</th>
                    <td><a :href="seoulfestivalitem.홈페이지주소">바로가기</a></td>
                    </tr>
                </table>
            </b-col>
        </b-row>
        <b-row>
            <p></p>
            <div class="col-lg-8 text-center pv-20 container" style="margin-top:15% width:100%">
                <h2 class="title">
                <strong>세부 내용</strong>
                <p v-html="seoulfestivalitem.축제내용"></p>
                </h2>
                <div class="separator"></div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['seoulfestivalitem']),
    },
    

    data() {
        return {
            
        }
    },
    methods: {
    removeHTML(text) {
      text = text.replace(/<br\/>/ig, "\n");
      text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
      console.log(text);
      return text;
    }
  },
    
}
</script>

<style>
.box1 {
   width:40%; height:600px;}
 .box2 {
   width:59%; height:600px; margin-left:5px;}
table {font-size:20px ; height: 100%;}
th{
    width:20%;
}
tr{
    height: 20%;
}
</style>