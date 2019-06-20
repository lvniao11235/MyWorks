<template>
  <div class="lv-nav-item" :class="{'selected':selected}" @click="openOrSelectedCard">
    <div class="lv-nav-item-img">
        <div :class="item.img"></div>
    </div>
    <div class="lv-nav-item-text">{{item.text}}</div>
  </div>
</template>

<script>
export default {
  props:['item'],
  components: {
  },
  data:function(){
    return {
      selected:false
    }
  },
  inject:['cardsEventBus'],
  methods:{
      openOrSelectedCard(){
          this.cardsEventBus.$emit('openOrSelectedCard', this.item);
      }, 
      openOrSelectedCardHandle(item){
        if(item.url == this.item.url){
          this.selected = true;
        } else {
          this.selected = false;
        }
      }
  },
  created(){
      this.cardsEventBus.$on('openOrSelectedCard', this.openOrSelectedCardHandle);
  }
}
</script>

<style>

    .lv-nav-item{
        text-align:center;
        font-size:14px;
        display:inline-block;
        color:#7a7e83;
    }

    .lv-nav-item.selected{
      color:#de2910;
    }

    .lv-nav-item .lv-nav-item-img div{
        width:27px;
        height:27px;
        font-size:20px;
        margin-top:3px;
    }
</style>
