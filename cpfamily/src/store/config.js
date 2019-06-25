export default{
    state:{
        BaseUrl:"http://10.0.0.2",
        WeiChatID:"",
        newsType:[],
        selectedNewsTypes:[],
        unselected:[],
        currentNewsType: {id:'1', text:'全部'},
        currentUser:null
    },
    mutations:{
        changeCurrentUser(currentState, type){
            currentState.currentUser = type;
        },
        changeCurrentNewsType(currentState, type){
            currentState.currentNewsType = type;
        },
        changeSelectedNewsTypes(currentState, types){
            currentState.selectedNewsTypes = types;
        },
        addSelectedNewsTypes(currentState, type){
            var item = currentState.selectedNewsTypes.find(x => x.id == type.id);
            if(!item){
                currentState.selectedNewsTypes.push(type);
            }
        },
        removeSelectedNewsTypes(currentState, type){
            var item = currentState.selectedNewsTypes.find(x => x.id == type.id);
            if(item){
                currentState.selectedNewsTypes.splice(currentState.selectedNewsTypes.indexOf(item), 1);
            }
        },
        addunselected(currentState, type){
            var item = currentState.unselected.find(x => x.id == type.id);
            if(!item){
                currentState.unselected.push(type);
            }
        },
        removeunselected(currentState, type){
            var item = currentState.unselected.find(x => x.id == type.id);
            if(item){
                currentState.unselected.splice(currentState.unselected.indexOf(item), 1);
            }
        },
        changeNewsType(currentState, types){
            currentState.newsType = types;
            currentState.unselected = [];
            if(currentState.selectedNewsTypes.length > 0){
                currentState.newsType.forEach(x=>{
                    if(!currentState.selectedNewsTypes.find(y=>y.id == x.id)){
                        currentState.unselected.push(x);
                    }
                })
            } else {
                currentState.newsType.forEach(x=>currentState.unselected.push(x));
            }
        },
    },
}