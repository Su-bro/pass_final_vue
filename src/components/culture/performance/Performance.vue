<template>
<div class="container-fluid"> 
     <div class="container" style="height:50">
        <div class="row justify-content-lg-center">
          <div class="col-lg-8 text-center pv-20">
            <h2 class="title">
              <strong>공 연 </strong>
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
            :image="data.main_img" 
            @click.native="click(data)"
            />
    </vueper-slides>
    
    <div class="search_bar container" style="text-align:center; margin-top:30px">
      <div style="display:inline-block" >
          <div style="float:left; margin-left:10px">
            <b-form-select v-model="type1" :options="options1" ></b-form-select>
          </div>
          <div style="float:left; margin-left:10px">
            <b-form-select v-model="type2" :options="options2"></b-form-select>
          </div>
          <div style="float:left; margin-left:10px">
            <b-form-input v-model="key" placeholder="검색어를 입력하세요"></b-form-input>
          </div>
          
          <button type="button" style="float:left; margin-left:10px" class="btn btn-primary" @click.prevent="search">검색</button>     
         
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
import FindListItem from '@/components/culture/performance/FindListItem.vue';
import 'vueperslides/dist/vueperslides.css'
  export default {
    components: { VueperSlides, VueperSlide,FindListItem },
    mounted(){
      this.init();
      this.finds=this.datas;
      this.temps=this.datas;
      
    
  },
  afterMount(){
    
  },
  computed:{
      ...mapState({
          datas: 'performancedb', //#2
      })
      
  },
  methods:{
    ...mapActions({
    init: 'PerformanceDBInit' //#3
    }),
    click(data){
      this.$store.dispatch('SetPerformance',data);
      this.$router.push('PerformanceItem');
    },
    search(){
      console.log("검색");
      console.log(this.type1);
      this.finds=[];
      if(this.type2=="제목" && this.type1!=null){
        for (const idx in this.temps) {
          // console.log(this.temps[idx].codename);
          if(this.temps[idx].title.includes(this.key) && this.temps[idx].codename==this.type1){
            this.finds.push(this.temps[idx]);
          }
        }
        console.log(this.finds);
      }else if(this.type2=="내용" && this.type1!=null){
        for (const idx in this.temps) {
          // console.log(this.temps[idx].title);
          // console.log(this.temps[idx].codename);
          if(this.temps[idx].program.includes(this.key) && this.temps[idx].codename==this.type1){
            this.finds.push(this.temps[idx]);
          }
        }
      }else if(this.type1==null && this.type2!=null){
          console.log(this.type1);
            if(this.type2=="제목"){
            for (const idx in this.temps) {
              // console.log(this.temps[idx].codename);
              if(this.temps[idx].title.includes(this.key)){
                this.finds.push(this.temps[idx]);
              }
            }
            console.log(this.finds);
          }else if(this.type2=="내용"){
            for (const idx in this.temps) {
              // console.log(this.temps[idx].title);
              // console.log(this.temps[idx].codename);
              if(this.temps[idx].program.includes(this.key)){
                this.finds.push(this.temps[idx]);
              }
            }
          }
        
      }
      else{
        this.finds=this.datas;
      }
      
    },
  },
    data() {
      return {
        type1: null,
        type2: null,
        key:null,
        finds:[],
        temps:[],
        
        options1: [
          { value: null, text: '공연 종류' },
          { value: '클래식', text: '클래식' },
          { value: '연극', text: '연극' },
          { value: '국악', text: '국악'},
          { value: '콘서트', text: '콘서트'},
          { value: '무용', text: '무용'},
          { value: '뮤지컬/오페라', text: '뮤지컬/오페라'},

        ],
        options2: [
          { value: null, text: '검색 키워드' },
          { value: '제목', text: '제목' },
          { value: '내용', text: '내용' },
        ]
      }
    },
   
  }
</script>

<style>

</style>