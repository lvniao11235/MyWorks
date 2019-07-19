<template>
    <span class="a-form-slider a-form-control" ref="slider">
        <span class="a-form-slider-bar" :style="{width:localValue+'px'}"></span>
        <span class="a-form-slider-btn"
            @touchstart.stop.prevent="touchstart"
            @touchmove.stop.prevent="touchmove"
            @mousedown.prevent="mousedownHandle($event)"></span>
    </span>
</template>

<script>
export default {
    props:["option", "value"],
    data:function(){
        return {
            xpos:0,
            mousedown:false,
            localValue:0,
            pagex:0,
            min:0,
            max:100,
        }
    },
    watch:{
        value(val){
            this.localValue = (val - this.min) * Math.floor(this.$refs.slider.clientWidth) / 
                Math.abs(this.max-this.min);
        },
        /*
        localValue(val){
            this.$emit("input", Math.floor(val * Math.abs(this.max-this.min) / 
                Math.floor(this.$refs.slider.clientWidth)) + this.min);
        }
        */
    },
    mounted(){
        if(this.option.min){
            this.min = this.option.min;
        }
        if(this.option.max){
            this.max = this.option.max;
        }
        this.localValue = (this.value - this.min) * Math.floor(this.$refs.slider.clientWidth) / 
                Math.abs(this.max-this.min);
    },
    methods:{
        touchstart(e){
            this.pagex = e.touches[0].pageX;
        },
        touchmove(e){
            this.localValue += e.touches[0].pageX - this.pagex;
            if(this.localValue < 0){
                this.localValue = 0;
            } else if(this.localValue > this.$refs.slider.clientWidth){
                this.localValue = this.$refs.slider.clientWidth;
            }
            this.pagex = e.touches[0].pageX;
            this.$emit("input", Math.floor(this.localValue * Math.abs(this.max-this.min) / 
                        Math.floor(this.$refs.slider.clientWidth)) + this.min);
        },
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
                        var newvalue = _this.localValue + (ex.clientX - _this.xpos);
                        if(newvalue < 0){
                            newvalue = 0;
                        } else if(newvalue > _this.$refs.slider.clientWidth){
                            newvalue = _this.$refs.slider.clientWidth;
                        }
                    }
                    _this.xpos = ex.clientX;
                    _this.localValue = newvalue;
                    this.$emit("input", Math.floor(this.localValue * Math.abs(this.max-this.min) / 
                        Math.floor(this.$refs.slider.clientWidth)) + this.min);
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
}

.a-form-slider-bar, .a-form-slider-btn{
    display:inline-block;
}

.a-form-slider-bar{
    height:10px;
    border-radius:5px;
    background-color:#409eff;
    float:left;
}

.a-form-slider-btn{
    height:14px;
    width:14px;
    border:1px solid #c7c7c7;
    background-color:#fff;
    border-radius:7.5px;
    top:-2.5px;
    margin-left:-7.5px;
    position:absolute;
}

</style>