<template>
    <div class="a-drag-dialog" ref="dragDialog" 
        @touchstart="touchstart"
        @touchmove="touchmove"
        @mousedown="mousedownHandle($event)">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            xpos:0,
            ypos:0,
            mousedown:false,
            pagex:0,
            pagey:0,
        }
    },
    methods:{
        touchstart(e){
            this.pagex = e.touches[0].pageX;
            this.pagey = e.touches[0].pageY;
        },
        touchmove(e){
            var deltax = e.touches[0].pageX - this.pagex;
            var deltay = e.touches[0].pageY - this.pagey;
            var offsetx = this.$refs.dragDialog.offsetLeft;
            var offsety = this.$refs.dragDialog.offsetTop;
            this.$refs.dragDialog.style.margin="0px";
            this.$refs.dragDialog.style.display="block";
            this.$refs.dragDialog.style.width="auto";
            this.$refs.dragDialog.style.height="auto";
            this.$refs.dragDialog.style.top = (offsety + deltay) + "px";
            this.$refs.dragDialog.style.left = (offsetx + deltax) + "px";
            this.pagex = e.touches[0].pageX;
            this.pagey = e.touches[0].pageY;
        },
        mousedownHandle(e){
            if(e.button == 0){
                this.mousedown = true;
                this.xpos = e.clientX;
                this.ypos = e.clientY;
                var _this = this;
                document.onmouseup = function(){
                    document.onmouseup = null;
                    document.onmousemove = null;
                    _this.mousedown = false;
                    
                },
                document.onmousemove = ex => {
                    try{
                        if(_this.mousedown){
                            var deltax = ex.clientX - _this.xpos;
                            var deltay = ex.clientY - _this.ypos;
                            var offsetx = _this.$refs.dragDialog.offsetLeft;
                            var offsety = _this.$refs.dragDialog.offsetTop;
                            _this.$refs.dragDialog.style.margin="0px";
                            _this.$refs.dragDialog.style.display="block";
                            _this.$refs.dragDialog.style.width="auto";
                            _this.$refs.dragDialog.style.height="auto";
                            _this.$refs.dragDialog.style.top = (offsety + deltay) + "px";
                            _this.$refs.dragDialog.style.left = (offsetx + deltax) + "px";
                            _this.xpos = ex.clientX;
                            _this.ypos = ex.clientY;
                        }
                    } catch{
                        _this.mousedown = false;
                        document.onmouseup = null;
                        document.onmousemove = null;
                    }
                    
                }
            }
        },
    }
}
</script>

<style>

.a-drag-dialog{
    position:relative;
    border-radius:5px;
    background-color:#fff;
    z-index:10000;
    border:1px solid #d5d5d6;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
}

</style>

