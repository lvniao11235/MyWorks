<template>
  <div class="lv-page-header">
    <div class="lv-page-header-container">
        <div class="lv-page-header-back" @click="back"></div>
        <span class="lv-page-header-title">{{title}}</span>
    </div>
    <div class="lv-page-header-placeholde">
    </div>
  </div>
</template>

<script>
export default {
    props:['title'],
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>

<style>
.lv-page-header-container{
    width:100%;
    height:40px;
    background-color:#35495e;
    position:fixed;
    top:0px;
    text-align:center;
}

.lv-page-header-placeholde{
    width:100%;
    height:40px;
}

.lv-page-header-back{
    border-left: 1px solid; 
    border-bottom: 1px solid;
    border-color:white;
    width: 15px; height: 15px;
    margin-left:10px;
    margin-top:13px;
    transform: rotate(45deg);
    float:left;
}

.lv-page-header-title{
    height:40px;
    line-height:40px;
    vertical-align:middle;
    font-size:18px;
    font-weight:400;
    color:#fff;
    margin-left:-35px;
}
</style>
