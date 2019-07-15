<template>
  <div id="app">
    <CardContainer></CardContainer>
    <a-dialog></a-dialog>
  </div>
</template>

<script>
import aDialog from './widgets/dialogs/aDialog';
import CardContainer from './widgets/cards/CardContainer';
export default {
  name: 'app',
  components: {
    aDialog, CardContainer
  },
  methods:{
  },
  inject:["dialogEventBus"],
  created(){
    this.aDialog.init(this.dialogEventBus);
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
