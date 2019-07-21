<template>
    <div class="a-admin-container a-skin" :class="[currentSkin, {'a-fold':fold}]">
        <div class="a-admin-head">
            <AdminLogo></AdminLogo>
            <FunctionContainer></FunctionContainer>
        </div>
        <AdminLeftSide></AdminLeftSide>
        <AdminContentContainer></AdminContentContainer>
    </div>
</template>

<script>
import FunctionContainer from './FunctionContainer';
import AdminLeftSide from './AdminLeftSide';
import AdminLogo from './AdminLogo';
import AdminContentContainer from './AdminContentContainer';
import {mapState} from 'vuex';
export default {
    components:{
        FunctionContainer, AdminLeftSide,
        AdminLogo, AdminContentContainer
    },
    data:function(){
        return {
            fold:false
        }
    },
    computed:{
        ...mapState({
            currentSkin:state=>state.admin.currentSkin
        }),
    },
    methods:{
        foldHandle(flag){
            this.fold = flag;
        }
    },
    inject:['adminEventBus'],
    mounted(){
        this.adminEventBus.$on("fold", this.foldHandle);
        var _this = this;
        window.onresize = () => {
            return (()=>{
                _this.$nextTick(function(){
                    _this.adminEventBus.$emit("resized");
                });
            })();
        };
    }
}
</script>

<style>
.a-admin-container{
    position:relative;
    height:100%;
    width:100%;
    background-color:#fff;
    font-size:0px;
    overflow:hidden;
}

.a-admin-head,
.a-admin-leftside,
.a-admin-content-container,
.a-admin-logo,
a-admin-functions{
    box-sizing:border-box;
    position:relative;;
    
}

.a-admin-head{
    height:46px;
    width:100%;
}

.a-admin-functions, .a-admin-logo{
    height:46px;
    float:left;
}

.a-admin-logo{
    font-size:28px;
    font-weight:bold;
    line-height:45px;
    vertical-align:middle;
    text-align:center;
}

.a-admin-functions{
}

.a-admin-leftside{
    float:left;
}

.a-admin-content-container{
    float:left;
}

.a-admin-page{
    width:100%;
    height:100%;
    position:relative;
    font-size:14px;
    overflow:scroll;
}

@media screen  and (min-width:760px){
    .a-admin-logo, .a-admin-leftside{
        width:200px;
        float:left;
    }

    .a-admin-functions, .a-admin-content-container{
        width:calc(100% - 200px);
        float:right;
    }

    .a-admin-leftside, .a-admin-content-container{
        height:calc(100% - 46px);
    }

    .a-admin-container.a-fold .a-admin-logo, 
    .a-admin-container.a-fold .a-admin-leftside{
        width:46px;
    }

    .a-admin-container.a-fold .a-admin-functions, 
    .a-admin-container.a-fold .a-admin-content-container{
        width:calc(100% - 46px);
    }
}

@media screen  and (max-width:760px){
    .a-admin-logo, .a-admin-functions{
        width:100%;
        float:left;
    }

    .a-admin-content-container{
        width:100%;
        float:right;
        position:absolute !important;
        top:92px;
    }

    .a-admin-leftside{
        position:absolute !important;
        z-index:10000;
        top:92px;
        width:46px;
        display:none;
    }
    .a-admin-leftside, .a-admin-content-container{
        height:calc(100% - 92px);
    }

    .a-fold .a-admin-leftside{
        display:block;
    }
}

.a-skin-green .a-skin-bg-primary{
    background-color:#00a65a;
}

.a-select-skin-green>.a-skin-bg-primary{
    background-color:#00a65a !important;
}

.a-skin-green .a-skin-border-primary{
    border-color:#00a65a
}

.a-select-skin-green>.a-skin-border-primary{
    border-color:#00a65a !important;
}

.a-skin-green .a-skin-bg-deep{
    background-color:#008d4c;
}

.a-select-skin-green>.a-skin-bg-deep{
    background-color:#008d4c !important;
}

.a-skin-green .a-skin-bg-dark{
    background-color:#222d32;
}

.a-select-skin-green>.a-skin-bg-dark{
    background-color:#222d32 !important;
}

.a-skin-green .a-skin-bg-shallow{
    background-color:#2c3b41;
}

.a-skin-green .a-skin-fg-primary{
    color:#fff;
}

.a-skin-green .a-skin-fg-selected{
    color:#00a65a
}

.a-skin-green .a-skin-fg-normal{
    color:#fff
}


.a-skin-blue .a-skin-bg-primary{
    background-color:#3c8dbc;
}

.a-select-skin-blue>.a-skin-bg-primary{
    background-color:#3c8dbc !important;
}

.a-skin-blue .a-skin-border-primary{
    border-color:#3c8dbc;
}

.a-select-skin-blue>.a-skin-border-primary{
    border-color:#3c8dbc !important;
}

.a-skin-blue .a-skin-bg-deep{
    background-color:#367fa9; 
}
 
.a-select-skin-blue>.a-skin-bg-deep{
    background-color:#367fa9 !important; 
}

.a-skin-blue .a-skin-bg-dark{
    background-color:#222d32;
}

.a-select-skin-blue>.a-skin-bg-dark{
    background-color:#222d32 !important;
}

.a-skin-blue .a-skin-bg-shallow{
    background-color:#2c3b41;
}

.a-skin-blue .a-skin-fg-primary{
    color:#fff;
}

.a-skin-blue .a-skin-fg-selected{
    color:#3c8dbc
}

.a-skin-blue .a-skin-fg-normal{
    color:#fff
}


.a-skin-red .a-skin-bg-primary{
    background-color:#dd4b39;
}

.a-select-skin-red>.a-skin-bg-primary{
    background-color:#dd4b39 !important;
}

.a-skin-red .a-skin-border-primary{
    border-color:#dd4b39;
}

.a-select-skin-red>.a-skin-border-primary{
    border-color:#dd4b39 !important;
}

.a-skin-red .a-skin-bg-deep{
    background-color:#d73925;
}

.a-select-skin-red>.a-skin-bg-deep{
    background-color:#d73925 !important;
}

.a-skin-red .a-skin-bg-dark{
    background-color:#222d32;
}

.a-select-skin-red>.a-skin-bg-dark{
    background-color:#222d32 !important;
}

.a-skin-red .a-skin-bg-shallow{
    background-color:#2c3b41;
}

.a-skin-red .a-skin-fg-primary{
    color:#fff;
}

.a-skin-red .a-skin-fg-selected{
    color:#dd4b39
}

.a-skin-red .a-skin-fg-normal{
    color:#fff
}


.a-skin-yellow .a-skin-bg-primary{
    background-color:#f39c12;
}

.a-select-skin-yellow>.a-skin-bg-primary{
    background-color:#f39c12 !important;
}

.a-skin-yellow .a-skin-border-primary{
    border-color:#f39c12;
}

.a-select-skin-yellow>.a-skin-border-primary{
    border-color:#f39c12 !important;
}

.a-skin-yellow .a-skin-bg-deep{
    background-color:#e08e0b;
}

.a-select-skin-yellow>.a-skin-bg-deep{
    background-color:#e08e0b !important;
}

.a-skin-yellow .a-skin-bg-dark{
    background-color:#222d32;
}

.a-select-skin-yellow>.a-skin-bg-dark{
    background-color:#222d32 !important;
}

.a-skin-yellow .a-skin-bg-shallow{
    background-color:#2c3b41;
}

.a-skin-yellow .a-skin-fg-primary{
    color:#fff;
}

.a-skin-yellow .a-skin-fg-selected{
    color:#f39c12
}

.a-skin-yellow .a-skin-fg-normal{
    color:#fff
}

</style>

