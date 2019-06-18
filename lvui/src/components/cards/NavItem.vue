<template>
  <div class="lv-nav-item" @click="openOrSelectedCard">
    <div class="lv-nav-item-img">
        <img :src="item.img"/>
    </div>
    <div class="lv-nav-item-text">{{item.text}}</div>
  </div>
</template>

<script>
export default {
  props:['item'],
  components: {
  },
  inject:['cardsEventBus'],
  methods:{
      openOrSelectedCard(){
          this.cardsEventBus.$emit('openOrSelectedCard', this.item);
      }
  }
}
</script>

<style>
    .lv-nav-item{
        text-align:center;
        font-size:10px;
        display:inline-block;
        color:#7a7e83;
    }

    .lv-nav-item .lv-nav-item-img img{
        width:27px;
        height:27px;
    }
</style>
