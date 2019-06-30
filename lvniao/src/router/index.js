import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Chart from '../pages/Chart';
import Dialog from '../pages/Dialog';
import Form from '../pages/Form';
import Markdown from '../pages/Markdown';
import RichText from '../pages/RichText';
import Table from '../pages/Table';

export default new VueRouter({
    mode:"history",
    routes: [
        {path: "/", redirect: "/home"},
        {path: "/home", component: Home},
        {path: "/layout", component: Layout},
        {path: "/chart", component: Chart},
        {path: "/dialog", component: Dialog},
        {path: "/form", component: Form},
        {path: "/markdown", component: Markdown},
        {path: "/richtext", component: RichText},
        {path: "/table", component: Table},
    ]
})