<template>
    <span class="a-form-slider">
        <span class="a-form-slider-bar" :style="{width:value+'px'}"></span>
        <span class="a-form-slider-btn" @mousedown.prevent="mousedownHandle($event)"></span>
    </span>
</template>

<script>
export default {
    props:["value"],
    data:function(){
        return {
            xpos:0,
            mousedown:false
        }
    },
    methods:{
        mousedownHandle(e){
            if(e.button == 0){
                this.mousedown = true;
                this.xpos = e.clientX;
                var _this = this;
                document.onmouseup = function(){
                    _this.mousedown = false;
                    document.onmouseup = null;
                    document.onmousemove = null;
                },
                document.onmousemove = ex => {
                    if(_this.mousedown){
                        var newvalue = _this.value + (ex.clientX - _this.xpos);
                        if(newvalue < 0){
                            newvalue = 0;
                        } else if(newvalue > 100){
                            newvalue = 100;
                        }
                    }
                    _this.xpos = ex.clientX;
                    _this.$emit("input", newvalue);
                }
            }
        }
    }
}
</script>

<style>

.a-form-slider{
    display:inline-block;
    height:10px;
    background-color:#c7c7c7;
    position:relative;
    text-align:left;
    border-radius:5px;
    margin-left:10px;
    margin-right:10px;
    width:calc(70% - 7.5px) !important;
}

.a-form-slider-bar, .a-form-slider-btn{
    display:inline-block;
}

.a-form-slider-bar{
    height:10px;
    border-radius:5px;
    background-color:green;
    float:left;
}

.a-form-slider-btn{
    height:14px;
    width:14px;
    border:1px solid #c7c7c7;
    background-color:#fff;
    border-radius:7.5px;
    top:-2.5px;
    position:absolute;
    margin-left:-7.5px;
}

</style>