<template>
    <div class="lv-functions-item" :class="icon">
        <div class="lv-function-item-panel" ref="panel" :style="{'margin-left':marginLeft}">
            <div class="lv-function-item-panel-container">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['icon', 'content'],
    data:function(){
        return {
            marginLeft:0
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.marginLeft =  (this.$refs.panel.parentElement.clientWidth - 280 - 5) + "px";
        });
    },
}
</script>

<style>

.lv-function-item-panel{
    display:none;
    position:relative;
    width:280px;
    z-index:10000;
}

.lv-functions-item:hover .lv-function-item-panel{
    display:block;
}

.lv-function-item-pane{
    background-color:transparent;
}

.lv-function-item-panel{
   padding-top:5px;
}

.lv-function-item-panel-container{
    width:calc(100% - 2px);
    height:100%;
    background-color:#fff;
    border:1px solid #d2d2d2;
    color:#000;
    text-align:left;
    font-size:14px;
    font-weight:normal;
    padding:10px 0px;
    line-height:normal !important;

}

</style>