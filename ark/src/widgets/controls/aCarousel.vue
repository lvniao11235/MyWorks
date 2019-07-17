<template>
    <div class="a-carousel">
        <div class="a-carousel-items" ref="carousel">
            <slot></slot>
        </div>
        <div class="a-carousel-left" @click.stop="leftHandle"></div>
        <div class="a-carousel-right" @click.stop="rightHandle"></div>
        <div class="a-carousel-indexs" ref="indexs">
            <div class="a-carousel-index"
                v-for="item in items" :key="item"
                @click.stop="indexHandle(item)"
                :class="['a-carousel-index-'+item,
                    {'a-carousel-selected':currentIndex == item}]">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["direction", "seconds"],
    data:function(){
        return {
            currentIndex:0,
            oldIndex:0,
            length:0,
            items:[],
            timer:0,
        }
    },
    destroyed(){
        if(this.timer > 0){
            clearInterval(this.timer);
        }
    },
    methods:{
        startTimer(){
            if(this.timer > 0){
                clearInterval(this.timer);
            }
            var _seconds = this.seconds ? this.seconds : 5000;
            var _this = this;
            this.timer = setInterval(function(){
                _this.rightHandle();
            }, _seconds);
        },
        leftHandle(){
            this.startTimer();
            this.oldIndex = this.currentIndex;
            if(this.currentIndex == 0){
                this.currentIndex = this.length - 1;
            } else {
                this.currentIndex -= 1;
            }
            this.changeView();
        },
        rightHandle(){
            this.startTimer();
            this.oldIndex = this.currentIndex;
            if(this.currentIndex == this.length-1){
                this.currentIndex = 0;
            } else {
                this.currentIndex += 1;
            }
            this.changeView();
        },
        indexHandle(item){
            this.startTimer();
            this.oldIndex = this.currentIndex;
            this.currentIndex = item;
            this.changeView();
        },
        toLeft(){
            return this.direction == "vertical" ? 
                "a-carousel-moveup":"a-carousel-moveleft";
        },
        toClassLeft(){
            return this.direction == "vertical" ? 
                ".a-carousel-moveup":".a-carousel-moveleft";
        },
        toRight(){
            return this.direction == "vertical" ? 
                "a-carousel-movedown":"a-carousel-moveright";
        },
        toClassRight(){
            return this.direction == "vertical" ? 
                ".a-carousel-movedown":".a-carousel-moveright";
        },
        changeView(){
            if(this.oldIndex == this.currentIndex) return;
            this.$refs.carousel.querySelectorAll(this.toClassLeft())
                .forEach(x=>x.classList.remove(this.toLeft()));
            this.$refs.carousel.querySelectorAll(this.toClassRight())
                .forEach(x=>x.classList.remove(this.toRight()));
            this.$refs.carousel
                .querySelector(".a-carousel-item-"+this.currentIndex)
                .classList.add("a-carousel-selected");
            this.$refs.carousel
                .querySelector(".a-carousel-item-" + this.oldIndex)
                .classList.remove("a-carousel-selected");
            if(this.currentIndex == 0 && this.oldIndex == 5){
                this.$refs.carousel
                .querySelector(".a-carousel-item-" + this.oldIndex)
                .classList.add(this.toLeft());
                this.$refs.carousel
                .querySelector(".a-carousel-item-"+this.currentIndex)
                .classList.add(this.toLeft());
                return;
            }
            if(this.currentIndex == 5 && this.oldIndex == 0){
                this.$refs.carousel
                .querySelector(".a-carousel-item-" + this.oldIndex)
                .classList.add(this.toRight());
                this.$refs.carousel
                .querySelector(".a-carousel-item-"+this.currentIndex)
                .classList.add(this.toRight());
                return;
            }
            if(this.oldIndex < this.currentIndex){
                this.$refs.carousel
                .querySelector(".a-carousel-item-" + this.oldIndex)
                .classList.add(this.toLeft());
                this.$refs.carousel
                .querySelector(".a-carousel-item-"+this.currentIndex)
                .classList.add(this.toLeft());
            } else {
                this.$refs.carousel
                .querySelector(".a-carousel-item-" + this.oldIndex)
                .classList.add(this.toRight());
                this.$refs.carousel
                .querySelector(".a-carousel-item-"+this.currentIndex)
                .classList.add(this.toRight());
            }
        }
    },
    mounted(){
        this.length = this.$refs.carousel.children.length;
        for(var i=0; i<this.length; i++){
            this.$refs.carousel.children[i].classList.add("a-carousel-item");
            this.$refs.carousel.children[i].classList.add("a-carousel-item-" + i);
            this.items.push(i);
        }
        this.$refs.carousel
            .querySelector('.a-carousel-item-' + this.currentIndex)
            .classList.add("a-carousel-selected");
        this.$nextTick(function(){
            this.$refs.indexs
            .querySelector('.a-carousel-index-' + this.currentIndex)
            .classList.add("a-carousel-selected"); 
        });
        this.startTimer();
    }
}
</script>

<style>
.a-carousel{
    position:relative;
    width:100%;
    height:200px;
    overflow:hidden;
}
.a-carousel-item{
    width:100%;
    height:100%;
    position:absolute;
    z-index:5;
}

.a-carousel-selected{
    z-index:7 !important;
}

.a-carousel-left{
    z-index:9;
    position:absolute;
    top:0px;
    left:0px;
    bottom:0px;
    display:table;
    border-left:3px solid #fff;
    border-bottom:3px solid #fff;
    transform:rotate(45deg);
    margin:auto 10px;
    width:25px;
    height:25px;
}

.a-carousel-right{
    z-index:9;
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    display:table;
    border-right:3px solid #fff;
    border-top:3px solid #fff;
    transform:rotate(45deg);
    margin:auto 10px;
    width:25px;
    height:25px;
}

.a-carousel-indexs{
    z-index:9;
    position:absolute;
    bottom:0px;
    right:0px;
    left:0px;
    display:table;
    margin:10px auto;
    width:80%;
    text-align:center;
}

.a-carousel-index{
    display:inline-block;
    width:10px;
    height:10px;
    border-radius:5px;
    margin:2.5px;
    background-color:#fff;
}

.a-carousel-index.a-carousel-selected{
    width:20px !important;
}

@keyframes toleft
{
    from {margin-left: 0px;}
    to {margin-left: -100%;}
}

@keyframes fromright
{
    from {margin-left: 100%;}
    to {margin-left: 0;}
}

.a-carousel-moveleft{
    animation: toleft 2s;
    z-index:6;
}

.a-carousel-moveleft.a-carousel-selected{
    animation: fromright 2s !important;
}

@keyframes toright
{
    from {margin-left: 0px;}
    to {margin-left: 100%;}
}

@keyframes fromleft
{
    from {margin-left: -100%;}
    to {margin-left: 0;}
}

.a-carousel-moveright{
    animation: toright 2s;
    z-index:6;
}

.a-carousel-moveright.a-carousel-selected{
    animation: fromleft 2s;
}



@keyframes toup
{
    from {top: 0px;}
    to {top: -100%;}
}

@keyframes fromdown
{
    from {top: 100%;}
    to {top: 0px;}
}

.a-carousel-moveup{
    animation: toup 2s;
    z-index:6;
}

.a-carousel-moveup.a-carousel-selected{
    animation: fromdown 2s;
}

@keyframes todown
{
    from {top: 0px;}
    to {top: 100%;}
}

@keyframes fromup
{
    from {top: -100%;}
    to {top: 0;}
}

.a-carousel-movedown{
    animation: todown 2s;
    z-index:6;
}

.a-carousel-movedown.a-carousel-selected{
    animation: fromup 2s !important;
}
</style>

