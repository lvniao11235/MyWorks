<template>
    <div class="a-alert-dialog a-page-center">
        <div class="a-alert-title">{{this.option.title ? this.option.title:"提示"}}</div>
        <div class="a-alert-msg" v-html="this.option.msg"></div>
        <div class="a-separator"></div>
        <div class="a-confirm-btns">
            <div class="a-confirm-ok" @click="ok">确定</div>
            <div class="a-confirm-cancel" @click="cancel">取消</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['option'],
    methods:{
        ok(){
            if(this.option.okCallback){
                this.option.okCallback();
            } else {
                this.aDialog.close();
            }
        },
        cancel(){
            if(this.option.cancelCallback){
                this.option.cancelCallback();
            } else {
                this.aDialog.close();
            }
        }
    }
}
</script>

<style>
.a-confirm-btns{
    font-size:0px;
}
.a-confirm-ok{
    width:calc(50% - 1px);
    border-right:1px solid #c7c7c7;
}

.a-confirm-cancel{
    width:50%;
}

.a-confirm-ok, .a-confirm-cancel{
    display:inline-block;
    height:30px;
    line-height:30px;
    vertical-align:middle;
    text-align:center;
    color:#f90;
    font-size:18px;
    font-weight:bold;
}
</style>

