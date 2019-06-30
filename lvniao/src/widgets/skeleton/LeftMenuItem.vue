<template>
    <div class="lv-admin-leftmenu-item " :class="selectedClass">
        <div class="lv-menuitem-title lv-skin-bg-deep" @click.stop="selectMenuItem">
            <div class="lv-menu-item-icon" :class="item.icon"></div>
            <div class="lv-menu-item-text lv-skin-bg-deep">
                {{item.text}}
                <!--<div class="lv-bubble">12</div>-->
            </div>
            <div class="lv-menu-item-arrow lv-skin-bg-deep fa" 
                v-if="item.items && item.items.length > 0" :class="arrowClass"></div>
            <LeftSubMenu :items="item.items" v-if="item.items && item.items.length > 0"></LeftSubMenu>
        </div>
        
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import LeftSubMenu from './LeftSubMenu';
export default{
    props:["item"],
    components:{
        LeftSubMenu
    },
    computed:{
        ...mapState({
            currentLeftMenuId:state=>state.config.currentLeftMenuId
        }),
        selectedClass(){
            if(this.currentLeftMenuId == this.item.id){
                return 'lv-skin-border-primary lv-selected';
            }
            return "";
        },
        arrowClass(){
            return this.currentLeftMenuId == this.item.id ? 'fa-angle-down':'fa-angle-left';
        }
    },
    methods:{
        ...mapMutations(['changeCurrentLeftMenuId']),
        selectMenuItem(){
            if(this.item.url && this.item.url.length > 0){
                this.widgetEventBus.$emit("openNewTab", this.item);
            }
            this.$store.commit("changeCurrentLeftMenuId", this.item.id);
        }
    },
    inject:['widgetEventBus'],
}
</script>

<style>
.lv-admin-leftmenu-item{
    border-left:2px solid transparent;
    width:197px;
}

.lv-fold .lv-admin-leftmenu-item{
    width:43px;
}
.lv-menuitem-title{
    font-weight:600;
    font-size:0px;
    line-height:44px !important;
    vertical-align:middle !important;
}

.lv-menuitem-title .lv-menu-item-icon,
.lv-menuitem-title .lv-menu-item-text,
.lv-menuitem-title .lv-menu-item-arrow{
    display:inline-block;
    font-size:20px;
}



.lv-menu-item-icon{
    width:43px;
    text-align:center;
}

.lv-menu-item-text{
    width:134px;
}
.lv-fold .lv-menu-item-text,
.lv-fold .lv-menu-item-arrow{
    display:none;
}

.lv-fold .lv-admin-leftmenu-item{
    height:44px !important;
}

.lv-fold .lv-menuitem-title:hover{
    position:relative !important;
    width:197px;
    z-index:10000;
}

.lv-fold .lv-menu-item-icon,
.lv-fold .lv-menu-item-text,
.lv-fold .lv-menu-item-arrow{
    float:left;
    height:44px !important;
    line-height:44px !important;
    vertical-align:middle !important;
}

.lv-fold .lv-admin-leftmenu-item:hover .lv-menu-item-text,
.lv-fold .lv-admin-leftmenu-item:hover .lv-menu-item-arrow{
    display:inline-block;

}

.lv-menu-item-arrow{
    width:20px;
}

.lv-menu-item-text .lv-bubble{
    height:14px;
    line-height:14px;
    margin:13px 5px;
    display:inline-block;
    padding:3px 5px;
    font-size:11px;
    color:#fff;
    background-color:#00a65a;
    border-radius:3px;
    float:right;
}

.lv-admin-leftmenu-item.lv-selected .lv-menuitem-title .lv-left-submenu{
    display:block;
}

.lv-fold .lv-admin-leftmenu-item.lv-selected .lv-menuitem-title .lv-left-submenu{
    display:none;
}

.lv-fold .lv-admin-leftmenu-item:hover .lv-left-submenu{
    position:absolute;
    display:block !important;
    left:44px;
    top:44px;
    width:143px;
    z-index:10001;
}

</style>