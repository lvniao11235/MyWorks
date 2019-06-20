import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../taobao/Home';
import Cart from '../taobao/Cart';
import Order from '../taobao/Order';
import My from '../taobao/My';
import More from '../taobao/More';
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/', redirect:'/home'
        },{
            path:'/home', component:Home, meta:{ keepAlive:true}
        },{
            path:'/cart', component:Cart, meta:{ keepAlive:true}
        },{
            path:'/order', component:Order, meta:{ keepAlive:true}
        },{
            path:'/my', component:My, meta:{ keepAlive:true}
        },{
            path:'/more', component:More, meta:{ keepAlive:true}
        }
    ]
})