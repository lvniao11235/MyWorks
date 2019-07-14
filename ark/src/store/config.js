export default{
    state:{
        navs:[
            {id:1, text:"组件", icon:"fa fa-gears", badge:5, url:'/home'},
            {id:2, text:"接口", icon:"fa fa-cube", url:'/interfaces'},
            {id:3, text:"扩展", icon:"fa fa-puzzle-piece", url:'/extend'},
            {id:4, text:"模板", icon:"fa fa-object-group", url:'/template'}
        ],
        currentNav:'/home',
    },
    mutations:{
        changeCurrentNav(currentState, nav){
            currentState.currentNav = nav;
        }
    },
}