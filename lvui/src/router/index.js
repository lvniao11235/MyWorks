import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../taobao/Home';
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/', redirect:'/home'
        },{
            path:'/home', component:Home, meta:{ keepAlive:true}
        }
    ]
})