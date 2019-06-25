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
        {id:'1001', url:'/home', img:'fa fa-book', selectedimg:'template.png', text:'学习'},
        {id:'1002', url:'/meet', img:'fa fa-users', selectedimg:'template.png', text:'会议室'},
        {id:'1003', url:'/store', img:'fa fa-shopping-cart', selectedimg:'template.png', text:'积分商城'},
        {id:'1004', url:'/my', img:'fa fa-user', selectedimg:'template.png', text:'我的'},
      ]
    }
  },
  inject:['cardsEventBus'],
  mounted(){
    this.cardsEventBus.$emit('openOrSelectedCard', this.items[0]);
  }
}
</script>

<style>
*{
  padding:0px;
  margin:0px;
  font-family: -apple-system-font,Helvetica Neue,sans-serif;
}

html, body, #app{
  position:relative;
  width:100%;
  height:100%;
  overflow:hidden;
}

.lv-seperator{
  width:100%;
  height:0px;
  border-bottom:1px solid #d3d3d3;
}
</style>
