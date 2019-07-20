<template>
    <div class="a-left-submenu-item" style="line-height:30px;height:30px;">
        <div class="a-submenu-title" @click.stop="selectMenuItem">
            <div class="a-submenu-title-icon" :class="item.icon"></div>
            <div class="a-submenu-title-text">{{item.text}}</div>
        </div>
    </div>
</template>

<script>
export default{
    props:["item", 'parentId'],
    methods:{
        selectMenuItem(){
            if(this.item.url && this.item.url.length > 0){
                this.adminEventBus.$emit("openNewTab", this.item);
            }
            this.$store.commit("changeCurrentLeftMenuId", this.parentId);
        }
    },
    inject:['adminEventBus'],
}
</script>

<style>
    .a-submenu-title{
        display:inline-block;
        height:30px !important;
        lien-height:30px !important;
        vertical-align:middle !important;
        font-weight:normal !important;
        font-size:15px !important;
    }
    .a-submenu-title > div{
        display:inline-block;
        margin-right:10px;
    }
</style>