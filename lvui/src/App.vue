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
        {id:'1001', url:'/home', img:'home.svg', selectedimg:'template.png', text:'首页'},
        {id:'1002', url:'/usage', img:'cart.svg', selectedimg:'template.png', text:'购物车'},
        {id:'1003', url:'/info', img:'list.svg', selectedimg:'template.png', text:'订单列表'},
        {id:'1004', url:'/info', img:'user.svg', selectedimg:'template.png', text:'我的淘宝'},
        {id:'1005', url:'/info', img:'more.svg', selectedimg:'template.png', text:'更多'},
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
