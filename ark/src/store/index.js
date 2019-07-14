import Vue from 'vue';
import Vuex from 'vuex';

import ConfigModule from './config';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        config:ConfigModule
    }
})