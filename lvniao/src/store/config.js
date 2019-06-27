export default{
    state:{
        skin:"lv-skin-blue"
    },
    mutations:{
        changeSkin(currentState, skin){
            currentState.skin = skin;
        }
    }
}