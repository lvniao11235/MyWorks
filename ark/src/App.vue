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
*{
  padding:0px;
  margin:0px;
}

html, body, #app{
  position:relative;
  width:100%;
  height:100%;
}
</style>
