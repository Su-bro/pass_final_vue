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
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="280"
    >
      <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10">
      </b-carousel-slide>
      <b-carousel-slide
        caption="Second Slide"
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://picsum.photos/1024/480/?image=22"
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
