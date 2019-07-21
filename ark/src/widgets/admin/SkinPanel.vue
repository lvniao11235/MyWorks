<template>
    <div class="a-function-skin-panel a-function-item-content-panel">
        <div class="a-row-container a-col-2">
            <div class="a-skin-item a-select-skin-green" title="绿色" @click="changeSkin('a-skin-green')">
                <div class="a-skin-border-primary a-select-skin-green">
                    <div class="a-skin-item-logo a-skin-bg-deep"></div>
                    <div class="a-skin-item-functions a-skin-bg-primary"></div>
                    <div class="a-skin-item-leftside a-skin-bg-dark"></div>
                    <div class="a-skin-item-content"></div>
                </div>
            </div>
            <div class="a-skin-item a-select-skin-blue"  title="蓝色" @click="changeSkin('a-skin-blue')">
                <div class="a-skin-border-primary a-select-skin-blue">
                    <div class="a-skin-item-logo a-skin-bg-deep"></div>
                    <div class="a-skin-item-functions a-skin-bg-primary"></div>
                    <div class="a-skin-item-leftside a-skin-bg-dark"></div>
                    <div class="a-skin-item-content"></div>
                </div>
            </div>
        </div>
        <div class="a-row-container a-col-2">
            <div class="a-skin-item a-select-skin-red" title="红色" @click="changeSkin('a-skin-red')">
                <div class="a-skin-border-primary a-select-skin-red">
                    <div class="a-skin-item-logo a-skin-bg-deep"></div>
                    <div class="a-skin-item-functions a-skin-bg-primary"></div>
                    <div class="a-skin-item-leftside a-skin-bg-dark"></div>
                    <div class="a-skin-item-content"></div>
                </div>
            </div>
            <div class="a-skin-item a-select-skin-yellow" title="黄色" @click="changeSkin('a-skin-yellow')">
                <div class="a-skin-border-primary a-select-skin-yellow">
                    <div class="a-skin-item-logo a-skin-bg-deep"></div>
                    <div class="a-skin-item-functions a-skin-bg-primary"></div>
                    <div class="a-skin-item-leftside a-skin-bg-dark"></div>
                    <div class="a-skin-item-content"></div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    methods:{
        ...mapMutations(['changeCurrentSkin']),
        changeSkin(skin){
            this.$store.commit("changeCurrentSkin", skin);
        }
    }
}
</script>

<style>

.a-skin-item{
    height:50px;
    font-size:0px;
}

.a-skin-item > div{
    border:1px solid;
}

.a-skin-item-logo{
    height:10px;
    width:20px;
    display:inline-block;
}

.a-skin-item-functions{
    width:calc(100% - 20px);
    height:10px;
    display:inline-block;
}

.a-skin-item-leftside{
    width:20px;
    height:40px;
    display:inline-block;
}

.a-skin-item-content{
    width:calc(100% - 20px);
    height:40px;
    display:inline-block;
}

</style>

