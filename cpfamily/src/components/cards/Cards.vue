<template>
  <div class="lv-cards">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div class="lv-cards-nav">
        <NavItem :style="{width:itemWidth}" v-for="item in items" :key="item.id" :item="item">
        </NavItem>
    </div>
    <div v-show="showDialog">
        <MaskCard></MaskCard>
        <Dialog :option="dialogOption"></Dialog>
    </div>
  </div>
</template>

<script>
import NavItem from './NavItem';
import MaskCard from './MaskCard';
import Dialog from '../dialogs/Dialog';
export default {
  props:['items'],
  data:function(){
      return {
          showDialog:false,
          dialogOption:{}
      }
  },
  components: {
      NavItem, MaskCard, Dialog
  },
  computed:{
      itemWidth(){
          return (1.0 * 100 / this.items.length) + '%';
      }
  },
  methods:{
      openOrSelectedCardHandle(item){
          this.$router.push(item.url);
      },
      showDialogHandle(option){
          this.showDialog = true;
          this.dialogOption = option;
      },
      hideDialogHandle(){
          this.showDialog = false;
          this.dialogOption = {};
      }
  },
  inject:['cardsEventBus'],
  created(){
      this.cardsEventBus.$on('openOrSelectedCard', this.openOrSelectedCardHandle);
      this.cardsEventBus.$on('showDialog', this.showDialogHandle);
      this.cardsEventBus.$on('hideDialog', this.hideDialogHandle);
  }
}
</script>

<style>
    .lv-cards{
        width:100%;
        height:100%;
        position:relative;
        overflow:hidden;
        background-color:#f4f5f6;
    }

    .lv-cards-nav{
        width:100%;
        height:50px;
        border-top:1px solid #c0bfc4;
        position:fixed;
        bottom:0px;
        z-index:10000;
        background-color:#f8f8f8;
        font-size:0px;
    }

    
</style>
