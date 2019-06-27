<template>
  <div id="app" class="lv-skin" :class="skin">
    <button @click="change('lv-skin-red')">red</button>
    <button @click="change('lv-skin-blue')">blue</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'app',
  data:function(){
    return {
    }
  },
  computed:{
    ...mapState({
      skin:state=>state.config.skin
    })
  },
  components: {
  },
  methods:{
    ...mapMutations({
      changeSkin:"config/changeSkin"
    }),
    change(skin){
      this.$store.commit("changeSkin", skin);
    }
  },
  inject:['widgetEventBus']
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
  font-family: -apple-system-font,Helvetica Neue,sans-serif;
}

html, body{
  position:relative;
  width:100%;
  height:100%;
}

.lv-widget{
  position:relative;
}

#app{
  width:100%;
  height:100%;
}

.lv-separator{
  width:100%;
  height:0px;
  border-bottom:1px solid #d5d5d6;
}
</style>
