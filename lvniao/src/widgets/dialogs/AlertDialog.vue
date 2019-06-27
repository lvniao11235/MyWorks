<template>
    <div class="lv-widget lv-dialog lv-middle-dialog lv-alert-dialog">
        <div class="lv-dialog-title">{{options.title}}</div>
        <div class="lv-separator"></div>
        <div class="lv-alter-content">
            {{options.content}}
        </div>
        <div class="lv-separator"></div>
        <div class="lv-alert-btns" @click="ok">
        确定
        </div>
    </div>
</template>

<script>
export default{
    props:["options"],
    data:function(){
        return {
            timer:null
        }
    },
    methods:{
        ok:function(){
            this.widgetEventBus.$emit("hideDialog", this.options);
            if(this.options.callback){
                this.options.callback();
            }
            if(this.timer != null){
                clearTimeout(this.timer);
            }
        }
    },
    inject:['widgetEventBus'],
    mounted(){
        if(this.options.during){
            var _this = this;
            this.timer = setTimeout(function(){
                _this.widgetEventBus.$emit("hideDialog", _this.options);
                if(_this.options.callback){
                    _this.options.callback();
                }
            }, this.options.during);
        }
    }
}
</script>

<style>

.lv-alert-dialog{
}

.lv-dialog-title{
    width:100%;
    height:40px;
    line-height:40px;
    vertical-align:middle;
    text-align:center;
    color:#000;
    font-size:18px;
}
.lv-alert-btns{
    width:100%;
    height:48px;
    line-height:48px;
    vertical-align:middle;
    text-align:center;
    color:#f90;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
}

.lv-alter-content{
    padding:10px 20px;
    width:calc(100% - 40px);
    word-wrap:break-word;
    word-break:break-all;
    text-wrap:unrestricted;
    line-height:30px;
    font-size:15px;
    color:#999;
    text-align:center;
}
</style>