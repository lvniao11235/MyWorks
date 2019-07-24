<template>
    <div class="a-admin-page a-page-drag">
        <div class="block" draggable="true" ref="block" @ondrag="dragmove($event)"></div>
    </div>
</template>

<script>
export default{
    data:function(){
        return {
            oldx:0,
            oldy:0,
            left:0,
            top:0,
        }
    },
    methods:{
        dragstart($e){
            this.oldx = $e.clientX;
            this.oldy = $e.clientY;
        },
        dragmove($e){
            this.left += $e.clientX - this.oldx;
            this.top += $e.clientY - this.oldy;
            this.$refs.block.style.left = this.left + "px";
            this.$refs.block.style.top = this.top + "px";
            this.oldx = $e.clientX;
            this.oldy = $e.clientY;
        },
        dragend(){
            this.$refs.block.style.left = -1*this.left + "px";
            this.$refs.block.style.top = -1*this.top + "px";
        }
    },
    mounted(){
        this.$refs.block.ondrag = this.dragmove;
        this.$refs.block.ondragstart = this.dragstart;
        this.$refs.block.ondragend = this.dragend;
    }
}
</script>

<style>
.block{
    width:100px;
    height:100px;
    background-color:gray;
    position:absolute;
}
</style>