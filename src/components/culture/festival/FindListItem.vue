<template>
    <div>
        <b-card style="float:left; width:250px; height:350px" id="item">
            <img :src="data.사진" alt="" style=" width:100%; height:250px">
            <p>{{data.축제명}}</p>
        </b-card>
    </div>
</template>

<script>
export default {
    name:'FindListItem',
    props:{
        data:Object,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>

#item:hover{
    border: 2px solid black;
}
#item{
    margin-left: 2px;
}
</style>