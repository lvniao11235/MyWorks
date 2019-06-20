<template>
  <div class="lv-card" :class="cardClass" ref="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
    props:['cardClass'],
    data: function(){
        return {
            scrollPos: 0
        }
    },
    methods:{
        resotreScrollPos(){
            this.$refs.container.scrollTo(0, this.scrollPos);
        },
        saveScrollPos(){
            this.scrollPos = this.$refs.container.scrollTop;
        },
    }
}
</script>

<style>
    .lv-card{
        width:100%;
        overflow:scroll;
        position:absolute;
        background-color:#f4f4f4;
    }

    .lv-main-card{
        height:calc(100% - 50px);
    }

    .lv-fullpage-card{
        height:100%;
        position:absolute;
        top:0px;
        z-index:10001;
        
    }
</style>
