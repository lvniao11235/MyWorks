<template>
  <div class="lv-banner">
    <div class="lv-banner-left"></div>
    <div class="lv-banner-texts">
        <div>
            <span class="lv-banner-hot">热门</span>
            <span class="lv-banner-text">855旗舰刷新性价：512G降1200</span>
        </div>
        <div>
            <span class="lv-banner-hot">精华</span>
            <span class="lv-banner-text">为什么每次打开门，狗狗总是很激动？</span>
        </div>
    </div>
    <div class="lv-banner-right"><div></div></div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.lv-banner{
    width:100%;
    height:64px;
    background-color:#fff;
}

.lv-banner-left{
    width:37px;
    height:37px;
    background-image:url(/banner/banner-left.webp);
    background-size:100% 100%;
    float:left;
    margin-top:13px;
    margin-left:13px;
}

.lv-banner-right{
    width:90px;
    height:64px;
    background-image:url(/banner/banner-right.png);
    background-size:100% 100%;
    float:right;
}

.lv-banner-right div{
    width:90px;
    height:64px;
    background-image:url(/banner/banner-mask.png);
    background-size:100% 100%;
}

.lv-banner-texts{
    font-size:12px;
    width:(100% - 140px);
    height:64px;
    float:left;
    padding-top:12px;
    margin-left:10px;
    color:rgb(51,51,51);
}

.lv-banner-texts > div{
    height:20px;
    line-height:20px;
    vertical-align:middle;

}


.lv-banner-texts .lv-banner-hot{
    display: block-inline;
    width: 30px;
    height: 14px;
    text-align:center;
    color: rgb(230, 10, 31);
    border: 1px solid rgb(230, 10, 31);
    border-radius:3px;
    margin-right:5px;
}
</style>
