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
import Main from '../pages/pc/Main';
import PcLayout from '../pages/pc/Layout';
import PcForm from '../pages/pc/Form';
import PcTable from '../pages/pc/Table';
import PcDialog from '../pages/pc/Dialog';
import PcRichtext from '../pages/pc/Richtext';
import PcMarkdown from '../pages/pc/Markdown';
import PcChart from '../pages/pc/Chart';
import PcMail from '../pages/pc/Mail';
import PcNotify from '../pages/pc/Notify';
import PcTask from '../pages/pc/Task';
import PcUserInfo from '../pages/pc/UserInfo';
import PcLayout1 from '../pages/pc/Layout1';
import PcLayout2 from '../pages/pc/Layout2';
import PcLayout3 from '../pages/pc/Layout3';
import PcLayout4 from '../pages/pc/Layout4';
import PcLayout5 from '../pages/pc/Layout5';
import PcTable1 from '../pages/pc/Table1';
import PcDrag from '../pages/pc/Drag';
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/', redirect:'/mobile/home'
        },{
            path:'/mobile', redirect:'/mobile/home'
        },{
            path:'/pc', redirect:'/pc/main'
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
        },{
            path:'/pc/main', component:Main
        },{
            path:'/pc/layout', component:PcLayout
        },{
            path:'/pc/form', component:PcForm
        },{
            path:'/pc/table', component:PcTable
        },{
            path:'/pc/dialog', component:PcDialog
        },{
            path:'/pc/richtext', component:PcRichtext
        },{
            path:'/pc/markdown', component:PcMarkdown
        },{
            path:'/pc/chart', component:PcChart
        },{
            path:'/pc/mail', component:PcMail
        },{
            path:'/pc/notify', component:PcNotify
        },{
            path:'/pc/task', component:PcTask
        },{
            path:'/pc/userinfo', component:PcUserInfo
        },{
            path:'/pc/layout1', component:PcLayout1
        },{
            path:'/pc/layout2', component:PcLayout2
        },{
            path:'/pc/layout3', component:PcLayout3
        },{
            path:'/pc/layout4', component:PcLayout4
        },{
            path:'/pc/layout5', component:PcLayout5
        },{
            path:'/pc/drag', component:PcDrag
        },{
            path:'/pc/table1', component:PcTable1
        }
    ]
})