<template>
  <div id="app">
    <component :is="which"></component>
    <a-dialog></a-dialog>
  </div>
</template>

<script>
import aDialog from './widgets/dialogs/aDialog';
import CardContainer from './widgets/cards/CardContainer';
import AdminContainer from './widgets/admin/AdminContainer';
export default {
  name: 'app',
  components: {
    aDialog, CardContainer, AdminContainer
  },
  computed:{
    which(){
      if(this.isMobile()){
        return CardContainer;
      } else {
        return AdminContainer;
      }
    }
  },
  methods:{
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  inject:["dialogEventBus", "adminEventBus"],
  created(){
    this.aDialog.init(this.dialogEventBus);
  },
  mounted(){
    if(this.isMobile()){
        this.$router.push("/mobile");
      } else {
        this.$router.push("/pc");
      }
  }
}
</script>

<style>
@font-face
{
  font-family: PingFangSC-Regular;
  src: url('./assets/fonts/PingFang SC Regular.ttf');
  font-weight:normal;
}
@font-face
{
  font-family: PingFangSC-Semibold;
  src: url('./assets/fonts/PingFang SC Regular.ttf');
  font-weight:bold;
}
*{
  padding:0px;
  margin:0px;
  font-family: PingFangSC-Regular,PingFangSC-Semibold, -apple-system-font,Helvetica Neue,sans-serif;
}

html, body, #app{
  position:relative;
  width:100%;
  height:100%;
}
</style>
