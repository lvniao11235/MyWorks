import Vue from 'vue';
import Vuex from 'vuex';

import MobileModule from './mobile';
import AdminModule from './admin';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        mobile:MobileModule,
        admin:AdminModule
    }
})