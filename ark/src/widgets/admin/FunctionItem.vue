<template>
    <div class="a-functions-item a-skin-fg-primary" :class="option.icon" :title="option.text">
        <div class="a-function-item-panel" ref="panel" :style="{'margin-left':marginLeft}">
            <div class="a-function-item-panel-container a-skin-border-primary" title="">
                <component :is="which()"></component>
            </div>
        </div>
    </div>
</template>

<script>
import FunctionSkinPanel from './FunctionSkinPanel';
export default{
    props:['option'],
    components:{
        FunctionSkinPanel
    },
    methods:{
        which(){
            switch(this.option.component){
                case 'skin': return FunctionSkinPanel;
            }
            return null;
        }
    },
    data:function(){
        return {
            marginLeft:0
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.marginLeft =  (this.$refs.panel.parentElement.clientWidth - 187 - 5) + "px";
        });
    },
}
</script>

<style>

.a-functions-item{
    width:30px;
    height:45px;
    text-align:center;
    font-size:25px !important;
    line-height:45px !important;
    vertical-align:middle;
}

.a-function-item-panel{
    display:none;
    position:relative;
    width:187px;
    z-index:10000;
}

.a-functions-item:hover .a-function-item-panel{
    display:block;
}

.a-function-item-pane{
    background-color:transparent;
}

.a-function-item-panel{
   padding-top:5px;
}

.a-function-item-panel-container{
    width:calc(100% - 2px);
    height:100%;
    background-color:#fff;
    border:1px solid;
    color:#000;
    text-align:left;
    font-size:14px;
    font-weight:normal;
    line-height:normal !important;

}

</style>