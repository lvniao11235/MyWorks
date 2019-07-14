<template>
    <div class="a-card-header">
        <div v-if="hasBack" class="a-back fa fa-angle-left" @click="back"></div>
        {{title}}
    </div>
</template>

<script>
export default {
    props:["title", "hasBack"],
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>

<style>
.a-card-header{
    height:46px;
    line-height:46px;
    vertical-align:middle;
    width:100%;
    background-color:#35495e;
    text-align:center;
    font-size:18px;
    color:#fff;
    position:relative;
}

.a-card-header .a-back{
    position:absolute;
    left:10px;
    height:46px;
    line-height:46px !important;
    vertical-align:middle !important; 
    font-size:30px !important;
}
</style>