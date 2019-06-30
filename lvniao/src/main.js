import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "font-awesome/css/font-awesome.min.css"
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  provide:function(){
    return {
      widgetEventBus:new Vue()
    }
    
  }
}).$mount('#app')
