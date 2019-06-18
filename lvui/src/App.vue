<template>
  <div id="app">
    <Cards :items="items"></Cards>
  </div>
</template>

<script>

import Cards from './components/cards/Cards';

export default {
  name: 'app',
  components: {
    Cards
  },
  data:function(){
    return{
      items:[
        {id:'1001', url:'/basic', img:'template.png', selectedimg:'template.png', text:'组件'},
        {id:'1002', url:'/usage', img:'template.png', selectedimg:'template.png', text:'使用'},
        {id:'1003', url:'/info', img:'template.png', selectedimg:'template.png', text:'信息'},
      ]
    }
  }
}
</script>

<style>
*{
  padding:0px;
  margin:0px;
  font-family:-apple-system-font,Helvetica Neue,sans-serif;
}

html, body, #app{
  position:relative;
  width:100%;
  height:100%;
  overflow:hidden;
}
</style>
