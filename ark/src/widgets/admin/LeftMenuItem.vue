<template>
    <div class="a-admin-leftmenu-item " :class="selectedClass">
        <div class="a-menuitem-title a-skin-bg-dark" @click.stop="selectMenuItem">
            <div class="a-menu-item-icon" :class="item.icon"></div>
            <div class="a-menu-item-text a-skin-bg-dark">
                {{item.text}}
                <!--<div class="a-bubble">12</div>-->
            </div>
            <div class="a-menu-item-arrow a-skin-bg-dark fa" 
                v-if="item.items && item.items.length > 0" :class="arrowClass"></div>
            <LeftSubMenu :items="item.items" :parentId="parentId" v-if="item.items && item.items.length > 0"></LeftSubMenu>
        </div>
        
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import LeftSubMenu from './LeftSubMenu';
export default{
    props:["item", "parentId"],
    components:{
        LeftSubMenu
    },
    computed:{
        ...mapState({
            currentLeftMenuId:state=>state.admin.currentLeftMenuId
        }),
        selectedClass(){
            if(this.currentLeftMenuId == this.item.id){
                return 'a-skin-border-primary a-selected';
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
                this.adminEventBus.$emit("openNewTab", this.item);
            }
            this.$store.commit("changeCurrentLeftMenuId", this.parentId);
        }
    },
    inject:['adminEventBus'],
}
</script>

<style>
.a-admin-leftmenu-item{
    border-left:2px solid transparent;
    width:197px;
}

.a-fold .a-admin-leftmenu-item{
    width:43px;
}
.a-menuitem-title{
    font-weight:600;
    font-size:0px;
    line-height:44px !important;
    vertical-align:middle !important;
}

.a-menuitem-title .a-menu-item-icon,
.a-menuitem-title .a-menu-item-text,
.a-menuitem-title .a-menu-item-arrow{
    display:inline-block;
    font-size:20px;
}



.a-menu-item-icon{
    width:43px;
    text-align:center;
}

.a-menu-item-text{
    width:134px;
}
.a-fold .a-menu-item-text,
.a-fold .a-menu-item-arrow{
    display:none;
}

.a-fold .a-admin-leftmenu-item{
    height:44px !important;
}

.a-fold .a-menuitem-title:hover{
    position:relative !important;
    width:197px;
    z-index:10000;
}

.a-fold .a-menu-item-icon,
.a-fold .a-menu-item-text,
.a-fold .a-menu-item-arrow{
    float:left;
    height:44px !important;
    line-height:44px !important;
    vertical-align:middle !important;
}

.a-fold .a-admin-leftmenu-item:hover .a-menu-item-text,
.a-fold .a-admin-leftmenu-item:hover .a-menu-item-arrow{
    display:inline-block;

}

.a-menu-item-arrow{
    width:20px;
}

.a-menu-item-text .a-bubble{
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

.a-admin-leftmenu-item.a-selected .a-menuitem-title .a-left-submenu{
    display:block;
}

.a-fold .a-admin-leftmenu-item.a-selected .a-menuitem-title .a-left-submenu{
    display:none;
}

.a-fold .a-admin-leftmenu-item:hover .a-left-submenu{
    position:absolute;
    display:block !important;
    left:44px;
    top:44px;
    width:143px;
    z-index:10001;
}

</style>