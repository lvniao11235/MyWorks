<template>
    <div class="a-admin-functions a-skin-bg-primary">
        <div class="a-fold-btn a-functions-item a-skin-fg-primary fa fa-bars" @click="fold"></div>
        <div class="a-function-items">
            <FunctionItem v-for="item in functions" :key="item.id" :option="item"></FunctionItem>
        </div>
    </div>
</template>

<script>
import FunctionItem from './FunctionItem';
import {mapState} from 'vuex';
export default{
    components:{
        FunctionItem
    },
    computed:{
        ...mapState({
            functions:state=>state.admin.functions
        }),
    },
    data:function(){
        return {
            bfold:false
        }
    },
    methods:{
        fold(){
            this.bfold = !this.bfold;
            this.adminEventBus.$emit("fold", this.bfold);
        }
    },
    inject:['adminEventBus'],
    mounted(){
    }
}
</script>

<style>
.a-functions-item{
    display:inline-block;
    float:left;
    width:32px;
}

.a-fold-btn{
    width:45px !important;
}

.a-admin-functions{
    font-size:28px !important;
    line-height:45px !important;
    vertical-align:middle;
}

.a-fold-btn{
    width:30px;
    height:45px;
    text-align:center;
    font-size:25px !important;
    line-height:45px !important;
    vertical-align:middle;
}

.a-function-items{
    float:right;
}
</style>