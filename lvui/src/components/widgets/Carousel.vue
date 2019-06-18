<template>
  <div class="lv-carousel" @mousemove="stopTimer" @mouseleave="startTimer">
    <div class="lv-carousel-item" v-for="(item, index) in items" 
        :key="item" :class="{'lv-carousel-selected':index===currentIndex}">
        <img :src="item"/>
    </div>
    <div class="lv-carousel-indexs">
        <div class="lv-carousel-index" v-for="(item, index) in items" 
            :key="item" :class="{'lv-carousel-selected':index===currentIndex}"></div>
    </div>
    <div class="lv-carousel-left" @click="moveToLeft"></div>
    <div class="lv-carousel-right" @click="moveToRight"></div>
  </div>
</template>

<script>
export default {
    props:["items"],
    data:function(){
        return {
            currentIndex:0,
            timer:null
        }
    },
    methods:{
        stopTimer(){
            if(this.timer != null){
                clearInterval(this.timer);
                this.timer = null;
            }
        },
        startTimer(){
            var _this = this;
            this.timer = setInterval(function(){
                _this.currentIndex = (_this.currentIndex+1) % _this.items.length;
            }, 5000);
        },
        moveToLeft(){
            this.stopTimer();
            if(this.currentIndex == 0){
                this.currentIndex = this.items.length-1;
            } else {
                this.currentIndex = this.currentIndex -1;
            }
            this.startTimer();
        },
        moveToRight(){
            this.stopTimer();
            if(this.currentIndex == this.items.length-1){
                this.currentIndex = 0;
            } else {
                this.currentIndex = this.currentIndex +1;
            }
            this.startTimer();
        }
    },
    mounted(){
        this.startTimer();
    }
}
</script>

<style>
.lv-carousel{
    width:100%;
    position:relative;
    overflow:hidden;
}

.lv-carousel-item, .lv-carousel-item > *{
    width:100%;
    height:100%;
    position:absolute;
    top:0px;
}

.lv-carousel-selected{
    z-index:1000;
}

.lv-carousel-index{
    width:10px;
    height:10px;
    border-radius:5px;
    background-color:rgba(255,255,255,0.3);
    display:inline-block;
    margin:3px;
}

.lv-carousel-index.lv-carousel-selected{
    background-color:rgb(255, 80, 0);
}

.lv-carousel-indexs{
    position:absolute;
    bottom:10px;
    z-index:10001;
    text-align:center;
    width:100%;

}

.lv-carousel-left{
    border-left:3px solid;
    border-bottom:3px solid;
    border-color:rgba(255,255,255,0.3);
    height:20px;
    width:20px;
    z-index:10001;
    position:absolute;
    left:10px;
    top:50%;
    margin-top:-13px;
    transform:rotate(45deg);
}

.lv-carousel-right{
    border-top:3px solid;
    border-right:3px solid;
    border-color:rgba(255,255,255,0.3);
    height:20px;
    width:20px;
    z-index:10001;
    position:absolute;
    right:10px;
    top:50%;
    margin-top:-13px;
    transform:rotate(45deg);
}
</style>
