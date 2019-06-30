<template>
    <div class="lv-admin-leftmenu">
        <LeftMenuItem class="lv-skin-fg-primary" v-for="item in leftMenu" :key="item.id" :item="item"></LeftMenuItem>
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
            leftMenu:state=>state.config.leftMenu
        })
    }
}
</script>

<style>
</style>