<template>
    <div class="a-wait-dialog a-page-center">
        <DragContainer>
            <div class="a-wait-dialog-container">
                <span class="fa fa-spinner"></span>
                <div class="a-wait-dialog-msg" v-if="hasMsg">{{option.msg}}</div>
            </div>
        </DragContainer>
    </div>
</template>

<script>
import DragContainer from '../controls/DragContainer';
export default {
    props:["option"],
    computed:{
        hasMsg(){
            return this.option && this.option.msg && this.option.msg.length > 0;
        }
    },
    components:{
        DragContainer
    },
    created(){
        if(this.option.timeout){
            var _this = this;
            setTimeout(function(){
                if(_this.option.callback){
                    _this.option.callback();
                }
            }, _this.option.timeout);
        }
    }
}
</script>

<style>
.a-wait-dialog{
    width:50%;
    text-align:center;
    color:#888888;

}

.a-wait-dialog-container{
    width:100%;
}

@keyframes rotate{
    from{transform: rotate(0deg)}
    to{transform: rotate(359deg)}
}

.a-wait-dialog .fa{
    animation: rotate 3s linear infinite;
}

.a-wait-dialog-msg{
    width:80%;
    text-align:center;
    margin:0 auto;
    font-size:14px;
    line-height:22px;
    word-wrap:break-word;
    word-break:break-all
}
</style>

