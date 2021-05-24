import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueMoment from 'vue-moment'
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.component(VueCarousel.name, VueCarousel);

Vue.use(BootstrapVue)
// Set up FontAwesome 
faLibrary.add(faHome, faSearch, faPlus)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(vueMoment)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
