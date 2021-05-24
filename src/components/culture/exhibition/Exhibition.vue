<template>
<div class="container-fluid"> 
     <div class="container" style="height:50">
        <div class="row justify-content-lg-center">
          <div class="col-lg-8 text-center pv-20">
            <h2 class="title">
              <strong>전 시회 </strong>
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


    
</div>

</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import{ mapActions, mapState } from 'vuex'
import 'vueperslides/dist/vueperslides.css'
  export default {
    components: { VueperSlides, VueperSlide },
    mounted(){
      this.init();
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
    }
  },
    data() {
      return {
        
      }
    },
   
  }
</script>

<style>

</style>