export default{
    state:{
        newsType:[
            {id:'1', text:'会议', fixed:true, url:'/home/type/1'},
            {id:'2', text:'要闻', fixed:true, url:'/home/type/2'},
            {id:'3', text:'新思想', fixed:true, url:'/home/type/3'},
            {id:'4', text:'综合', fixed:true, url:'/home/type/4'},
            {id:'5', text:'快闪', fixed:true, url:'/home/type/5'},
            {id:'6', text:'会议1', fixed:false, url:'/home/type'},
            {id:'7', text:'要闻1', fixed:false, url:'/home/type'},
            {id:'8', text:'新思想1', fixed:false, url:'/home/type'},
            {id:'9', text:'综合1', fixed:false, url:'/home/type'},
            {id:'10', text:'快闪1', fixed:false, url:'/home/type'},
        ],
        selectedNewsTypes:[
            {id:'1', text:'会议', fixed:true, url:'/home/type/1'},
            {id:'2', text:'要闻', fixed:true, url:'/home/type/2'},
            {id:'3', text:'新思想', fixed:true, url:'/home/type/3'},
            {id:'4', text:'综合', fixed:true, url:'/home/type/4'},
            {id:'5', text:'快闪', fixed:true, url:'/home/type/5'},
        ],
        currentNewsType: {id:'1', text:'会议', fixed:true, url:'/home/type/1'}
    },
    mutations:{
        changeCurrentNewsType(currentState, type){
            currentState.currentNewsType = type;
        }
    }
}