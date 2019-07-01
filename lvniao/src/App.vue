<template>
  <div id="app" class="lv-skin" :class="currentSkin">
    <AdminContainer>
      <DefaultLogo slot="logo"></DefaultLogo>
      <DefaultFunctions slot="functions">
        <div class="lv-function-container">
          <FunctionItem :icon="'fa fa-paint-brush'">
            <SkinPanel></SkinPanel>
          </FunctionItem>
          <FunctionItem :icon="'fa fa-envelope'">
            <MessagePanel></MessagePanel>
          </FunctionItem>
          <FunctionItem :icon="'fa fa-bell'">
            <NotificationPanel></NotificationPanel>
          </FunctionItem>
          <FunctionItem :icon="'fa fa-tasks'">
            <TaskPanel></TaskPanel>
          </FunctionItem>
          <FunctionItem :icon="'fa fa-user-circle-o'">
            <UserPanel></UserPanel>
          </FunctionItem>
          <FunctionItem :icon="'fa fa-gears'">
            <ConfigPanel></ConfigPanel>
          </FunctionItem>
        </div>
      </DefaultFunctions>
      <DefaultLeftSide slot="leftside"></DefaultLeftSide>
      <DefaultMainContainer slot="maincontainer"></DefaultMainContainer>
    </AdminContainer>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import AdminContainer from './widgets/skeleton/AdminContainer';
import DefaultLogo from './widgets/skeleton/DefaultLogo';
import DefaultFunctions from './widgets/skeleton/DefaultFunctions';
import DefaultLeftSide from './widgets/skeleton/DefaultLeftSide';
import DefaultMainContainer from './widgets/skeleton/DefaultMainContainer';
import FunctionItem from './widgets/skeleton/FunctionItem';
import MessagePanel from './pages/functionitems/MessagePanel';
import NotificationPanel from './pages/functionitems/NotificationPanel';
import TaskPanel from './pages/functionitems/TaskPanel';
import UserPanel from './pages/functionitems/UserPanel';
import ConfigPanel from './pages/functionitems/ConfigPanel';
import SkinPanel from './pages/functionitems/SkinPanel';
import './widgets/lv-skin.css';
export default {
  name: 'app',
  data:function(){
    return {
    }
  },
  computed:{
    ...mapState({
      currentSkin:state=>state.config.currentSkin
    })
  },
  components: {
    AdminContainer, DefaultLogo, DefaultFunctions, 
    DefaultLeftSide, DefaultMainContainer, FunctionItem,
    MessagePanel, NotificationPanel, TaskPanel, UserPanel, ConfigPanel, SkinPanel
  },
  methods:{
    ...mapMutations({
      changeSkin:"config/changeSkin"
    }),
    change(skin){
      this.$store.commit("changeSkin", skin);
    },
  },
  inject:['widgetEventBus'],
  mounted(){
    var _this = this;
    window.onresize = () => {
      return (()=>{
        _this.widgetEventBus.$emit("resize");
      })();
    };
    this.widgetEventBus.$emit("openNewTab", { id:1, icon:"fa fa-home", text:"主页", url:"/home"});
  }
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}

html, body, #app{
  position:relative;
  width:100%;
  height:100%;
  overflow:hidden;
}

.lv-widget{
  position:relative;
  height:100%;
  width:100%;
}

.lv-page{
  position:relative;
  background-color:#fff;
  width:calc(100% - 10px);
  height:calc(100% - 10px);
  padding:5px;
}

.lv-separator{
  width:100%;
  height:0px;
  border-bottom:1px solid #d5d5d6;
}

</style>
