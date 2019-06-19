<template>
  <div class="lv-category">
    <div class="lv-category-item" v-for="item in items" :key="item.img">
        <img :src="item.img"/>
        <div>{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props:['items']
}
</script>

<style>
.lv-category{
    width:100%;
    font-size:0px;
    background-color:#fff;
}

.lv-category-item{
    width:20%;
    text-align:center;
    display:inline-block;
    margin-top:5px;
    margin-bottom:5px;
}

.lv-category-item > *{
    display:block;
    font-size:12px;
    color: rgb(102, 102, 102);
    margin-top:5px;
}

.lv-category-item img{
    width:65px;
    height:51px;
    margin:0 auto;
}


</style>
