<template>
    <div class="a-card-container">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <NavContainer></NavContainer>
    </div>
</template>

<script>
import NavContainer from './NavContainer';
import {mapMutations} from 'vuex';
export default {
    components:{
        NavContainer
    },
    watch:{
        $route(to){
            this.$store.commit("changeCurrentNav", to.fullPath);
        }
    },
    methods:{
        ...mapMutations["changeCurrentNav"],
    }
}
</script>

<style>
.a-card-container{
    position:relative;
    width:100%;
    height:100%;
}
</style>

