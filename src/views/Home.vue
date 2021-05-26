<template>
  <div class="home">
    <div
      class="banner dark-translucent-bg"
      style="
        background-image: url('https://www.halton.com/wp-content/uploads/2020/05/Concert_hall_rock_concert-1920x938.jpg');
        background-position: 50% 50%;
      "
    >
      <!-- breadcrumb end  -->
      <div class="container" style="height: 50">
        <div class="row justify-content-lg-center">
          <div class="col-lg-8 text-center pv-20">
            <h2 class="title">
              <strong>문 화 조 아 </strong>
            </h2>
            <div class="separator"></div>
            <p class="text-center" data-effect-delay="100">Moonhwa Joa</p>
          </div>
        </div>
      </div>
    </div>
    <!-- banner end -->

    <!--그냥 간지로 일단 했놨음 -->
    <p></p>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 1px 1px 2px #333"
      fade
      indicators
      img-width="800"
      img-height="100"
    >
      <b-carousel-slide
        img-src="https://dt40dm21pj8em.cloudfront.net/uploads/froala/file/6819/1569215127116.png"
      >
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://www.diyanar.com/wp-content/uploads/2019/05/wall-art-2852231_960_720.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        style="text: white"
        img-src="https://www.jejusi.go.kr/storage/files/buriburi/20190109/1547015439479_ee5fcd19758b43dda679430ad94db043.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
};
</script>
