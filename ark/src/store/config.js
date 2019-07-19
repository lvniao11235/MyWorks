export default{
    state:{
        navs:[
            {id:1, text:"组件", icon:"fa fa-gears", badge:5, url:'/mobile/home'},
            {id:2, text:"接口", icon:"fa fa-cube", url:'/mobile/interfaces'},
            {id:3, text:"扩展", icon:"fa fa-puzzle-piece", url:'/mobile/extend'},
            {id:4, text:"模板", icon:"fa fa-object-group", url:'/mobile/template'}
        ],
        currentNav:'/home',
    },
    mutations:{
        changeCurrentNav(currentState, nav){
            currentState.currentNav = nav;
        }
    },
}