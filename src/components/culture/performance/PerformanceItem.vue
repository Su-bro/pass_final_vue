<template>
    <div class="container" style="test-align:center">
        <button class="btn btn-outline-success" @click="moveToList">돌아가기</button>
        <div class="box1">
            <img :src="performanceitem.main_img" >
        </div>
        <div class="box2">
            <table class="table table-border" id="info">
                <tr>
                    <th>제목:</th>
                    <td>{{performanceitem.title}}</td>
                </tr>
                <tr>
                    <th>내용:</th>
                    <td>{{performanceitem.program}}</td>
                </tr>
                <tr>
                    <th>주최:</th>
                    <td>{{performanceitem.org_name}}</td>
                </tr>
                <tr>
                    <th>분류:</th>
                    <td>{{performanceitem.codename}}</td>
                </tr>
                <tr>
                    <th>시작일:</th>
                    <td>{{performanceitem.strtdate | moment('YYYY-MM-DD')}}</td>
                </tr>
                <tr>
                    <th>종료일:</th>
                    <td>{{performanceitem.end_date | moment('YYYY-MM-DD')}}</td>
                </tr>
                <tr>
                    <th>페이지 바로가기:</th>
                    <td><a :href="performanceitem.org_link">바로가기</a></td>
                </tr>
                
            </table>
            
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['performanceitem']),
    },
    
    methods:{
        moveToList(){
            this.$router.push("/Performance")
        }
    },
    data() {
        return {
            
        }
    },
    
}
</script>

<style>
.box1 {
  float:left; width:40%; height:600px;}
 .box2 {
  display:inline-block; width:59%; height:200px; margin-left:5px;}
table {font-size:100% ; height: 100%;}
th{
    width:20%;
}
tr{
    height: 20%;
}
</style>