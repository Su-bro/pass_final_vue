<template>
    <b-container>
        <b-row>
            <b-col cols="5">
                <img :src="seoulexhibitionitem.dp_main_img" >
            </b-col>
            
            <b-col cols="5">
                <table class="table table-border" id="info">
                    <tr>
                        <th>제목:</th>
                        <td>{{seoulexhibitionitem.dp_name}}</td>
                    </tr>
                    <tr>
                        <th>장소:</th>
                        <td>{{seoulexhibitionitem.dp_place}}</td>
                    </tr>
                    <tr>
                        <th>주최:</th>
                        <td>{{seoulexhibitionitem.dp_sponsor}}</td>
                    </tr>
                    <tr>
                        <th>시작일:</th>
                        <td>{{seoulexhibitionitem.dp_start | moment('YYYY-MM-DD')}}</td>
                    </tr>
                    <tr>
                        <th>종료일:</th>
                        <td>{{seoulexhibitionitem.dp_end | moment('YYYY-MM-DD')}}</td>
                    </tr>
                
                </table>
            </b-col>
        </b-row>
        <b-row>
            <p></p>
            <div class="col-lg-8 text-center pv-20 container" style="margin-top:15% width:100%">
                <h2 class="title">
                <strong>세부 내용</strong>
                <p v-html="seoulexhibitionitem.dp_info"></p>
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
        ...mapState(['seoulexhibitionitem']),
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