<template>
    <div class="a-admin-container a-skin" :class="['a-skin-green', {'a-fold':fold}]">
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
                _this.adminEventBus.$emit("resize");
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

.a-skin-green .a-skin-border-primary{
    border-color:#00a65a;
}

.a-skin-green .a-skin-bg-deep{
    background-color:#008d4c;
}

.a-skin-green .a-skin-bg-dark{
    background-color:#222d32;
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

</style>

