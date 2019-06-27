import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Config from './config';
export default new Vuex.Store({
    modules:{
        config:Config
    }
})