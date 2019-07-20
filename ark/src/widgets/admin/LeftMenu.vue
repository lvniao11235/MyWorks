<template>
    <div class="a-admin-leftmenu">
        <LeftMenuItem class="a-skin-fg-primary" v-for="item in leftMenu" :key="item.id" :parentId="item.id" :item="item"></LeftMenuItem>
    </div>
</template>

<script>
import LeftMenuItem from './LeftMenuItem';
import {mapState} from 'vuex';
export default{
    components:{
        LeftMenuItem
    },
    data:function(){
        return {
        }
    },
    computed:{
        ...mapState({
            leftMenu:state=>state.admin.leftMenu
        })
    }
}
</script>

<style>
</style>