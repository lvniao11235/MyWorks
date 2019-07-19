import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/mobile/Home'
import Layout from '../pages/mobile/Layout';
import Interfaces from '../pages/mobile/Interfaces';
import Extend from '../pages/mobile/Extend';
import Template from '../pages/mobile/Template';
import Dialogs from '../pages/mobile/Dialogs';
import Forms from '../pages/mobile/Forms';
import Calendar from '../pages/mobile/Calendar';
import Text from '../pages/mobile/Text';
import Tables from '../pages/mobile/Tables';
import Refresh from '../pages/mobile/Refresh';
import Carousel from '../pages/mobile/Carousel';
import Timeaxis from '../pages/mobile/Timeaxis';
import Layout2 from '../pages/mobile/Layout2';
import Layout3 from '../pages/mobile/Layout3';
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/', redirect:'/mobile/home'
        },{
            path:'/mobile/home', component:Home, meta:{ keepAlive:true}
        },{
            path:'/mobile/interfaces', component:Interfaces, meta:{ keepAlive:true}
        },{
            path:'/mobile/extend', component:Extend, meta:{ keepAlive:true}
        },{
            path:'/mobile/template', component:Template, meta:{ keepAlive:true}
        },{
            path:'/mobile/layout', component:Layout
        },{
            path:'/mobile/dialogs', component:Dialogs
        },{
            path:'/mobile/forms', component:Forms
        },{
            path:'/mobile/calendar', component:Calendar
        },{
            path:'/mobile/text', component:Text
        },{
            path:'/mobile/tables', component:Tables
        },{
            path:'/mobile/refresh', component:Refresh
        },{
            path:'/mobile/carousel', component:Carousel
        },{
            path:'/mobile/timeaxis', component:Timeaxis
        },{
            path:'/mobile/layout2', component:Layout2 
        },{
            path:'/mobile/layout3', component:Layout3
        }
    ]
})