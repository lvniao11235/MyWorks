<template>
    <div class="">
        <div style="padding-left:10px;">选择主题</div>
        <div class="lv-separator"></div>
        <div class="lv-skin-item lv-skin-blue" v-for="skin in skins" 
            :key="skin" :class="skinItmeClass(skin)" @click="changeSkin(skin)">
            <div class="lv-skin-item-logo"></div>
            <div class="lv-skin-item-functions"></div>
            <div class="lv-skin-item-leftside"></div>
            <div class="lv-skin-item-maincontainer"></div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default{
    data:function(){
        return {
        }
    },
    computed:{
        ...mapState({
            skins:state=>state.config.skins,
            currentSkin:state=>state.config.currentSkin,
        })
    },
    methods:{
        ...mapMutations(['changeCurrentSkin']),
        changeSkin(skin){
            this.$store.commit("changeCurrentSkin", skin);
        },
        skinItmeClass(skin){
            if(skin == this.currentSkin){
                return skin + " lv-selected";
            } else {
                return skin;
            }
        }
    }
}
</script>

<style>
    .lv-skin-item{
        background-color:#fff;
        border:1px solid #d2d2d2;
        width:81px;
        height:51px;
        margin:5px 3.5px;
        display:inline-block;
        padding:1px
    }

    .lv-skin-item.lv-selected{
        border-color:#5FB878;
    }
    .lv-skin-item > div{
        display:inline-block;
        font-size:0px;
        float:left;
    }

    .lv-skin-item-logo{
        width:20px;
        height:10px;
    }

    .lv-skin-item-functions{
        width:60px;
        height:10px;
    }

    .lv-skin-item-leftside{
        width:20px;
        height:40px;
    }

    .lv-skin-item-maincontainer{
        height:40px;
        width:60px;
        background-color:#f2f2f2;
    }
</style>