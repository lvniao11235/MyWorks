import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import Meet from '../pages/Meet';
import Store from '../pages/Store';
import My from '../pages/My';
import Types from '../pages/Types';
import PersonalCenter from '../pages/PersonalCenter';
import ArticleDetail from '../pages/ArticleDetail';
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/', redirect:'/home'
        },{
            path:'/home', component:Home, meta:{ keepAlive:true}
        },{
            path:'/meet', component:Meet, meta:{ keepAlive:true}
        },{
            path:'/store', component:Store, meta:{ keepAlive:true}
        },{
            path:'/my', component:My, meta:{ keepAlive:true}
        },{
            path:'/types', component:Types
        },{
            path:'/personal', component:PersonalCenter
        },{
            path:'/article/:id', component:ArticleDetail
        }
    ]
})