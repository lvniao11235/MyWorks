import Vue from 'vue';
import VueRouter from 'vue-router';

import Basic from '../pages/Basic';
import Usage from '../pages/Usage';
import Info from '../pages/Info';
import Detail from '../pages/Detail';
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/', redirect:'/basic'
        },{
            path:'/basic', component:Basic, meta:{ keepAlive:true}
        },{
            path:'/usage', component:Usage, meta:{ keepAlive:true}
        },{
            path:'/info', component:Info, meta:{ keepAlive:true}
        },{
            path:'/detail', component:Detail
        }
    ]
})