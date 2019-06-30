<template>
    <div class="lv-left-submenu-item" style="line-height:30px;height:30px;">
        <div class="lv-submenu-title" @click.stop="selectMenuItem">
            <div class="lv-submenu-title-icon" :class="item.icon"></div>
            <div class="lv-submenu-title-text">{{item.text}}</div>
        </div>
    </div>
</template>

<script>
export default{
    props:["item"],
    methods:{
        selectMenuItem(){
            if(this.item.url && this.item.url.length > 0){
                this.widgetEventBus.$emit("openNewTab", this.item);
            }
        }
    },
    inject:['widgetEventBus'],
}
</script>

<style>
    .lv-submenu-title{
        display:inline-block;
        height:30px !important;
        lien-height:30px !important;
        vertical-align:middle !important;
        font-weight:normal !important;
        font-size:15px !important;
    }
    .lv-submenu-title > div{
        display:inline-block;
        margin-right:10px;
    }
</style>