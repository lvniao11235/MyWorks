<template>
    <div class="a-function-settings-panel a-function-item-content-panel">
        
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data:function(){
        return {
        }
    },
    methods:{
        viewInfo(){
            this.adminEventBus.$emit("openNewTab", this.userUrl);
        }
    },
    computed:{
        ...mapState({
            userUrl:state=>state.admin.userUrl
        }),
    },
    inject:['adminEventBus'],
}
</script>

<style>
.a-function-settings-panel{
    height:100px;
}
</style>

