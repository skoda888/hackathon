
// import { vuetify } from '@/plugins/vuetify';
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { router } from '@/routes/routes';
import { store } from '@/store/store';

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
