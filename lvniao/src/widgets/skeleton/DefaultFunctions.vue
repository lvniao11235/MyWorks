<template>
    <div class="lv-widget">
        <div class="lv-fold-btn lv-functions-item fa fa-bars" @click="fold"></div>
        <slot></slot>
    </div>
</template>

<script>
export default{
    data:function(){
        return {
            bfold:false
        }
    },
    methods:{
        fold(){
            this.bfold = !this.bfold;
            this.widgetEventBus.$emit("fold", this.bfold);
        }
    },
    inject:['widgetEventBus'],
    mounted(){
    }
}
</script>

<style>
.lv-functions-item{
    display:inline-block;
    float:left;
    width:32px;
}

.lv-function-container{
    float:right;
}

.lv-fold-btn{
    width:45px !important;
}

</style>