import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import Meet from '../pages/Meet';
import Store from '../pages/Store';
import My from '../pages/My';
import Types from '../pages/Types';
import News from '../pages/News';
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/', redirect:'/home'
        },{
            path:'/home', component:Home, meta:{ keepAlive:true},
            children:[
                {path:'type/:id', component:News, meta:{keepAlive:true}}
            ]
        },{
            path:'/meet', component:Meet, meta:{ keepAlive:true}
        },{
            path:'/store', component:Store, meta:{ keepAlive:true}
        },{
            path:'/my', component:My, meta:{ keepAlive:true}
        },{
            path:'/types', component:Types
        },
    ]
})