<template>
    <div class="lv-widget lv-dialog-container" v-if="showDialog">
        <component :options="options" :is="whichDialog"></component>
    </div>
</template>

<script>
import AlertDialog from './AlertDialog';

export default{
    props:["id"],
    data:function(){
        return {
            options:{},
            showDialog:false,
        }
    },
    components:{
        AlertDialog
    },
    computed:{
        whichDialog(){
            return AlertDialog;
        }
    },
    methods:{
        showDialogHandle(options){
            if(this.isMyMsg(options)){
                this.options = options;
                this.showDialog = true;
            }
        },
        hideDialogHandle(options){
            if(this.isMyMsg(options)){
                this.showDialog = false;
            }
        },
        isMyMsg(options){
            if(!options.id){
                return true;
            }
            if(options.id == this.id){
                return true;
            }
            return false;
        }
    },
    inject:['widgetEventBus'],
    created(){
        this.widgetEventBus.$on("showDialog", this.showDialogHandle);
        this.widgetEventBus.$on("hideDialog", this.hideDialogHandle);
    }
}
</script>

<style>
.lv-dialog-container{
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.6);
    position:absolute !important;
    top:0px;
    z-index:10000;
}

.lv-dialog{
    background-color:#fff;
}
.lv-middle-dialog{
    position:absolute !important;
    width:300px !important;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
    display:table;
    border-radius:3px;
    box-shadow:1px 1px 50px rgba(0, 0, 0, 0.3);
}

.lv-bottom-dialog{
    position:absolute !important;
    bottom:0;
    width:100% !important;
}

.lv-top-dialog{
    position:absolute !important;
    top:0;
    width:100% !important;
}

</style>