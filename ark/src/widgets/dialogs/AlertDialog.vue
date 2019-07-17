<template>
    <div class="a-alert-dialog a-page-center" >
        <DragContainer>
            <div class="a-alert-dialog-container">
                <div class="a-alert-title">{{this.option.title ? this.option.title:"提示"}}</div>
                <div class="a-alert-msg" v-html="this.option.msg"></div>
                <div class="a-separator"></div>
                <div class="a-alert-ok" @click="ok">确定</div>
            </div>
        </DragContainer>
    </div>
</template>

<script>
import DragContainer from '../controls/DragContainer';
export default {
    props:["option"],
    created(){
    },
    components:{
        DragContainer
    },
    methods:{
        ok(){
            if(this.option.callback){
                this.option.callback();
            } else {
                this.aDialog.close();
            }
            
        }
    }
}
</script>

<style>
.a-alert-dialog{
    width:70%;
}

.a-alert-dialog-container{
    width:100%;
    text-align:center;
    color:#888888;
}

.a-alert-title{
    height:40px;
    line-height:40px;
    vertical-align:middle;
    font-size:20px;
    font-weight:bold;
    color:#000;
}

.a-alert-msg{
    line-height:25px;
    font-size:14px;
    vertical-align:middle;
    word-wrap:break-word;
    break-word:break-all;
    width:70%;
    margin:0 auto;

}

.a-alert-ok{
    height:30px;
    line-height:30px;
    vertical-align:middle;
    text-align:center;
    font-size:18px;
    font-weight:bold;
    color:#f90;
}

</style>

