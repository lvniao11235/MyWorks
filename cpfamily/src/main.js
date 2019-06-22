import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'font-awesome/css/font-awesome.min.css';
import store from './store';
import  VueResource  from 'vue-resource'
Vue.use(VueResource) 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  provide:function(){
    return {
      cardsEventBus: new Vue(),
      cpfamilyEventBus: new Vue()
    }
  }
}).$mount('#app')