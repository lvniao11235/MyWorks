<template>
    <div class="a-wait-dialog a-page-center">
        <span class="fa fa-spinner"></span>
        <div class="a-wait-dialog-msg" v-if="hasMsg">{{option.msg}}</div>
    </div>
</template>

<script>
export default {
    props:["option"],
    computed:{
        hasMsg(){
            return this.option && this.option.msg && this.option.msg.length > 0;
        }
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
    border-radius:5px;
    background-color:#fff;
    z-index:10000;
    line-height:50px;
    vertical-align:middle !important;
    text-align:center;
    font-size:30px !important;
    color:#888888;
    border:1px solid #d5d5d6;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);

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

