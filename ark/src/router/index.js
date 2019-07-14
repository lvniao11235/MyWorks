import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home'
import Layout from '../pages/Layout';
import Interfaces from '../pages/Interfaces';
import Extend from '../pages/Extend';
import Template from '../pages/Template';
import Dialogs from '../pages/Dialogs';
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/', redirect:'/home'
        },{
            path:'/home', component:Home, meta:{ keepAlive:true}
        },{
            path:'/interfaces', component:Interfaces, meta:{ keepAlive:true}
        },{
            path:'/extend', component:Extend, meta:{ keepAlive:true}
        },{
            path:'/template', component:Template, meta:{ keepAlive:true}
        },{
            path:'/layout', component:Layout
        },{
            path:'/dialogs', component:Dialogs
        }
    ]
})