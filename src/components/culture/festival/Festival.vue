<template>
<div class="container-fluid"> 
     <div class="container" style="height:50">
        <div class="row justify-content-lg-center">
          <div class="col-lg-8 text-center pv-20">
            <h2 class="title">
              <strong>축 제</strong>
            </h2>
            <div class="separator"></div>
            
          </div>
        </div>
    </div>
    <vueper-slides
        style="width:70%"
        class="shadow container"
        :visible-slides="6"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
            <vueper-slide 
            v-for="(data,index) in datas" 
            :key="index"
            :image="data.사진" 
            @click.native="click(data)"
            />
    </vueper-slides>

    <div class="search_bar container" style="text-align:center; margin-top:30px">
      <div style="display:inline-block" >
          <div style="float:left; margin-left:10px">
            <b-form-select v-model="type2" :options="options2"></b-form-select>
          </div>
          <div style="float:left; margin-left:10px">
            <b-form-input v-model="key" placeholder="검색어를 입력하세요"></b-form-input>
          </div>
          
           <div> 
            <button type="button" style="margin-left:10px" class="btn btn-outline-primary" @click.prevent="search">검색</button>     
            <button type="button" style="margin-left:10px" class="btn btn-outline-primary" @click.prevent="getList">모든 목록</button>     
          </div>
        </div>
    </div>
    
    
          

    <div class="container">
         <b-card-group>  
          <find-list-item
          v-for="(data, index) in this.finds" :key="index"
          :data='data'
          @click.native="click(data)"
          />
        </b-card-group>
    </div>



    
</div>

</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import{ mapActions, mapState } from 'vuex'
import FindListItem from '@/components/culture/festival/FindListItem.vue';
import 'vueperslides/dist/vueperslides.css'
  export default {
    components: { VueperSlides, VueperSlide,FindListItem },
    mounted(){
      this.init();
      this.finds=this.datas;
      this.temps=this.datas;
  },
  computed:{
      ...mapState({
          datas: 'seoulfestivaldb' //#2
      })
  },
  methods:{
    ...mapActions({
    init: 'FestivalDBInit' //#3
    }),
    click(data){
      this.$store.dispatch('SetSeoulFestival',data);
      this.$router.push('FestivalItem');
    },
    search(){
      console.log("검색");
      this.finds=[];
      if(this.type2=="축제명"){
        for (const idx in this.temps) {
          // console.log(this.temps[idx].codename);
          if(this.temps[idx].축제명.includes(this.key)){
            this.finds.push(this.temps[idx]);
          }
        }
        console.log(this.finds);
      }else if(this.type2=="주소"){
        for (const idx in this.temps) {
          // console.log(this.temps[idx].title);
          // console.log(this.temps[idx].codename);
          if(this.temps[idx].소재지도로명주소.includes(this.key)){
            this.finds.push(this.temps[idx]);
          }
        }
      }else{
        this.finds=this.datas;
      }
      

    },
    getList(){
      this.finds=this.datas;
    }
  },
    data() {
      return {
        type1: null,
        type2: null,
        key:null,
        finds:[],
        temps:[],
        options2: [
          { value: null, text: '검색 키워드' },
          { value: '축제명', text: '축제명' },
          { value: '주소', text: '주소' },
        ]
      }
    },
   
  }
</script>

<style>

</style>