<template>
  <div id="app">
    <navi />
    <router-view />
  </div>
</template>

<script>
import Navi from '@/components/common/Navi';
export default {
  name: 'home',
  components: {
    Navi,
  },
};
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i';
@import 'https://fonts.googleapis.com/css?family=Raleway:300,400,700';
@import 'https://fonts.googleapis.com/css?family=Pacifico';
@import 'https://fonts.googleapis.com/css?family=PT+Serif';
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
@import './resources/css/style.css';
@import './resources/css/typography-default.css';
@import './resources/css/skins/light_blue.css';
@import './resources/css/custom.css';
</style>
