<template>
<div class="container-fluid"> 
     <div class="container" style="height:50">
        <div class="row justify-content-lg-center">
          <div class="col-lg-8 text-center pv-20">
            <h2 class="title">
              <strong>전 시 회</strong>
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
            :image="data.dp_main_img" 
            @click.native="click(data)"
            />
    </vueper-slides>


    <div class="search_bar container" style="text-align:center; margin-top:30px">
      <div style="display:inline-block" >
          <div style="float:left; margin-left:10px widh">
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
import FindListItem from '@/components/culture/exhibition/FindListItem.vue';
import 'vueperslides/dist/vueperslides.css'
  export default {
    components: { VueperSlides, VueperSlide, FindListItem },
    mounted(){
      this.init();
      this.finds=this.datas;
      this.temps=this.datas;
  },
  computed:{
      ...mapState({
          datas: 'seoulexhibitiondb' //#2
      })
  },
  methods:{
    ...mapActions({
    init: 'SeoulExhibitionDBInit' //#3
    }),
    click(data){
      this.$store.dispatch('SetSeoulExhibition',data);
      this.$router.push('ExhibitionItem');
    },
    search(){
      console.log("검색");
      this.finds=[];
      if(this.type2=="출품 작가"){
        for (const idx in this.temps) {
          // console.log(this.temps[idx].codename);
          if(this.temps[idx].dp_artist.includes(this.key)){
            this.finds.push(this.temps[idx]);
          }
        }
        console.log(this.finds);
      }else if(this.type2=="전시회명"){
        for (const idx in this.temps) {
          // console.log(this.temps[idx].title);
          // console.log(this.temps[idx].codename);
          if(this.temps[idx].dp_name.includes(this.key)){
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
          type2: null,
          key:null,
          finds:[],
          temps:[],
          options2: [
            { value: null, text: '검색 키워드' },
            { value: '출품 작가', text: '출품 작가' },
            { value: '전시회명', text: '전시회명' },
          ]
        }
      },
  }
  
</script>

<style>
</style>