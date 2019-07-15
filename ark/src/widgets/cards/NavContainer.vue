<template>
    <div class="a-nav-container a-row-no-pad-container a-col-no-pad-4" :class="'a-col-no-pad-' + navs.length">
        <div class="a-nav-item" @click="changeNav(nav)" :class="{'a-selected':currentNav == nav.url}" v-for="nav in navs" :key="nav.id">
            <div class="a-nav-item-icon" :class="nav.icon">
                <div class="a-nav-item-badge" v-if="nav.badge && nav.badge > 0">{{nav.badge}}</div>
            </div>
            <div class="a-nav-item-text">{{nav.text}}</div>
            
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    computed:{
        ...mapState({
            navs:state=>state.config.navs,
            currentNav:state=>state.config.currentNav,
        }),
    },
    methods:{
        ...mapMutations["changeCurrentNav"],
        changeNav(nav){
            this.$store.commit("changeCurrentNav", nav.url);
            this.$router.push(nav.url);
        }
    }
}
</script>

<style>
.a-nav-container{
    box-sizing:border-box;
    border-top:1px solid #c7c7c7;
    height:53px;
    position:absolute;
    bottom:0px;
    z-index:5px;
    width:100%;
}

.a-nav-item{
    text-align:center;
    color: rgb(122, 126, 131);
    
}

.a-nav-item.a-selected{
    color: rgb(0, 122, 255) !important;
}

.a-nav-item-icon{
    height:30px;
    line-height:30px !important;
    vertical-align:middle !important;
    font-size:22px !important;
    position:relative;
}

.a-nav-item-text{
    height:22px;
    line-height:22px !important;
    vertical-align:middle !important;
    font-size:10px;
    
}

.a-nav-item-badge{
    background-color: #f74c31;
    height:15px;
    padding:0px 3px;
    line-height:15px;
    vertical-align:middle;
    border-radius:7.5px;
    font-size:6px;
    position:absolute;
    right:0px;
    top:3px;
    color:#fff;
    margin-right:-10px;
}

</style>

