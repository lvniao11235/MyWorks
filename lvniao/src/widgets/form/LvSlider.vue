<template>
    <span class="lv-form-slider">
        <span class="lv-form-slider-outline">
            <span class="lv-form-slider-value lv-skin-bg-primary" :style="{width:value+'px'}">
            </span>
            <span class="lv-form-slider-btn lv-skin-border-primary"
                @mousedown.prevent="mousedownHandle($event)"></span>
        </span>
    </span>
</template>

<script>
export default{
    props:["value", "interval"],
    data:function(){
        return {
            mousedown:false,
            xpos:0,
            oldvalue:this.value
        }
    },
    methods:{
        mousedownHandle(e){
            if(e.button == 0){
                this.mousedown = true;
                this.xpos = e.clientX;
                var _this = this;
                document.onmouseup = ex => {
                    _this.mousedown = false;
                    document.onmouseup = null;
                    document.onmousemove = null;
                    this.xpos = ex.clientX;
                },
                
                document.onmousemove = ex => {
                    if(_this.mousedown){
                        var newvalue = _this.value + (ex.clientX - _this.xpos);
                        if(newvalue < 0){
                            newvalue = 0;
                        } else if(newvalue > 100){
                            newvalue = 100;
                        }
                        
                        if(_this.interval){
                            if(Math.abs(newvalue - _this.value) >= 10){
                                _this.xpos = ex.clientX;
                                newvalue = Math.floor(newvalue / 10) * 10;
                                if(Math.abs(newvalue - _this.oldvalue) >= 10 || newvalue < 10){
                                    _this.oldvalue = newvalue;
                                    _this.$emit("input", newvalue);
                                }
                            }
                        } else {
                            _this.xpos = ex.clientX;
                            _this.$emit("input", newvalue);
                        }
                        
                        
                    }
                }
            }
        },
        
    }
}
</script>

<style>
.lv-form-slider-outline{
    display:inline-block;
    width:100px;
    background-color:#e4e7ed;
    height:6px;
    border-radius:3px;
    position:relative;
}

.lv-form-slider-value{
    display:inline-block;
    height:6px;
    border-radius:3px;
    float:left;
}

.lv-form-slider-btn{
    position:absolute;
    top:-3px;
    margin-left:-5px;
    background-color:#fff;
    height:10px;
    width:10px;
    display:inline-block;
    border-radius:6px;
    border:1px solid;

}
</style>