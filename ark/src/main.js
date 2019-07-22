import Vue from 'vue'
import App from './App.vue'
import "font-awesome/css/font-awesome.min.css";

import "./ark.css";
import dialog from './widgets/dialogs';
import router from './router';
import store from './store';
Vue.config.productionTip = false

Vue.prototype.aDialog = dialog.aDialog;

new Vue({
  render: h => h(App),
  router,
  store,
  provide:function(){
    return {
      dialogEventBus: new Vue(),
      adminEventBus:new Vue()
    }
  }
}).$mount('#app')
