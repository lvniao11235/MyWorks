<template>
    <div class="a-page-container" :class="clazz">
        <slot name="header"></slot>
        <slot name="content"></slot>
        
    </div>
</template>

<script>
export default {
    props:["clazz"]
}
</script>

<style>
.a-page-container{
    position:absolute;
    top:0px;
    box-sizing:border-box;
    width:100%;
    overflow:scroll;
    background-color:#f4f5f6;;
}

.a-card-page{
    height:calc(100% - 53px);
}

.a-card-fullpage{
    height:100%;
    z-index:6;
}

@keyframes moveleft
{
    from {margin-left: 100%;}
    to {margin-left: 0px;}
}

.a-page-container .a-move-to-left{
    animation: moveleft 1s;
    z-index:1001 !important;
}
</style>

