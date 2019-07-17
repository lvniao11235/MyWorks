<template>
    <div class="a-dialog" v-show="show">
        <div class="a-dialog-mask"></div>
        <template v-for="option in options">
            <component :is="option.dialog" :option="option" :key="option.dialog.id"></component>
        </template>
        
    </div>
</template>

<script>
import WaitDialog from './WaitDialog';
import AlertDialog from './AlertDialog';
import ConfirmDialog from './ConfirmDialog';
import DatetimeDialog from './DatetimeDialog';
import FormDialog from './FormDialog';
export default {
    data:function(){
        return {
            show:false,
            options:[],
        }
    },
    components:{
        WaitDialog, AlertDialog, ConfirmDialog, DatetimeDialog,
        FormDialog
    },
    methods:{
        showDialogHandle(option){
            switch(option.type){
                case 'wait': {
                    option.dialog = WaitDialog; break;
                }
                case 'alert': {
                    option.dialog = AlertDialog; break;
                }
                case 'confirm': {
                    option.dialog = ConfirmDialog; break;
                }
                case 'datetime': {
                    option.dialog = DatetimeDialog; break;
                }
                case 'form':{
                    option.dialog = FormDialog; break;
                }
            }
            option.id = this.options.length;
            this.options.push(option);
            this.show = true;

        },
        hideDialogHandle(option){
            if(option && option.type == "all"){
                this.options = [];
            } else {
                this.options.pop();
            }
            if(this.options.length == 0){
                this.show = false;
            }
        }
    },
    inject:["dialogEventBus"],
    created(){
        this.dialogEventBus.$on("showDialog", this.showDialogHandle);
        this.dialogEventBus.$on("hideDialog", this.hideDialogHandle);
    }
}
</script>

<style>
.a-dialog, .a-dialog-mask{
    position:absolute;
    top:0;
    height:100%;
    width:100%;
    z-index:10000;
    overflow:hidden;
}

.a-dialog-mask{
    background-color:rgba(0, 0, 0, 0.6);
}
</style>

