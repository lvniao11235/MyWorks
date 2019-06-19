<template>
  <div class="lv-hot-category">
    <div class="lv-hot-category-item">
        <div class="lv-hot-category-item-title" style="background-image:url(/hot/hot1.webp);">
        </div>
        <div class="lv-hot-category-item-left">
            <div></div>
            <img src="/hot/hot1-left.webp"/>
        </div>
        <div class="lv-hot-category-item-right">
            <img src="/hot/hot1-right.webp"/>
        </div>
    </div>
    <div class="lv-hot-category-item-seperator"></div>
    <div class="lv-hot-category-item">
        <div class="lv-hot-category-item-title" style="background-image:url(/hot/hot2.webp);">
        </div>
        <div class="lv-hot-category-item-left">
            <div>高颜值美物</div>
            <img src="/hot/hot2-left.webp"/>
        </div>
        <div class="lv-hot-category-item-right">
            <img src="/hot/hot2-right.webp"/>
        </div>
    </div>
    <div class="lv-hot-category-item">
        <div class="lv-hot-category-item-title" style="background-image:url(/hot/hot3.webp);">
        </div>
        <div class="lv-hot-category-item-left">
            <div>红人短视频</div>
            <img src="/hot/hot3-left.webp"/>
        </div>
        <div class="lv-hot-category-item-right">
            <img src="/hot/hot3-right.webp"/>
        </div>
    </div>
    <div class="lv-hot-category-item-seperator"></div>
    <div class="lv-hot-category-item">
        <div class="lv-hot-category-item-title" style="background-image:url(/hot/hot4.webp);">
        </div>
        <div class="lv-hot-category-item-left">
            <div>什么值得买</div>
            <img src="/hot/hot4-left.webp"/>
        </div>
        <div class="lv-hot-category-item-right">
            <img src="/hot/hot4-right.webp"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.lv-hot-category{
    margin-top:10px;
    margin-bottom:10px;
    height:240px;
    width:100%;
    background-color:#fff;
    font-size:0px;
}

.lv-hot-category-item{
    height:120px;
    width:calc(50% - 0.5px);
    background-color:#fff;
    float:left;
    position:relative;
}

.lv-hot-category-item-seperator{
    width:1px;
    height:120px;
    background-color:rgb(238, 238, 238);
    float:left;
}

.lv-hot-category-item-title{
    height:28px;
    width:100%;
    background-size:100% 100%;
    background-repeat:no-repeat;
}

.lv-hot-category-item-left{
    width:100px;
    display:inline-block;
}
.lv-hot-category-item-left img{
    width:64px;
    height:64px;
    margin-left:14px;
}

.lv-hot-category-item-left div{
    height:28px;
    font-size:13px;
    color:rgb(153,153,153);
    padding-left:10px;
}

.lv-hot-category-item-right{
    float:right;
    width:86px;
    height:100px;
    position:relative;
    margin-top:-10px;
    margin-right:10px;
    display:inline-block
}

.lv-hot-category-item-right img{
    width:86px;
    height:100px;
}
</style>
