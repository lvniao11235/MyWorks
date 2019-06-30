<template>
    <div class="lv-widget lv-admin-container" :class="{'lv-fold':fold}">
        <div  class="lv-admin-logo lv-skin-bg-dark lv-skin-fg-primary">
            <slot name="logo"></slot>
        </div>
        <div  class="lv-admin-functions lv-skin-bg-primary lv-skin-fg-primary">
            <slot name="functions"></slot>
        </div>
        <div  class="lv-admin-leftside lv-skin-bg-deep">
            <slot name="leftside"></slot>
        </div>
        <div  class="lv-admin-maincontainer">
            <slot name="maincontainer"></slot>
        </div>
    </div>
</template>

<script>
export default{
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
    inject:['widgetEventBus'],
    mounted(){
        this.widgetEventBus.$on("fold", this.foldHandle);
    }
}
</script>

<style>
.lv-admin-container{
    position:relative;
    width:100%;
    height:100%;
    font-size:0px;
}

.lv-admin-container > div{
    font-size:14px;
    position:relative;
}

.lv-admin-logo, .lv-admin-functions, .lv-admin-functions .lv-functions-item{
    height:46px;
    line-height:46px !important;
    vertical-align:middle !important;
    font-size:18px !important;
    text-align:center;
}

.lv-admin-maincontainer{
    background-color:#ecf0f5 !important;
}

@media screen  and (min-width:760px){
    .lv-admin-logo, .lv-admin-leftside{
        width:200px;
        float:left;
    }

    .lv-admin-functions, .lv-admin-maincontainer{
        width:calc(100% - 200px);
        float:right;
    }

    .lv-admin-leftside, .lv-admin-maincontainer{
        height:calc(100% - 46px);
    }

    .lv-admin-container.lv-fold .lv-admin-logo, 
    .lv-admin-container.lv-fold .lv-admin-leftside{
        width:46px;
    }

    .lv-admin-container.lv-fold .lv-admin-functions, 
    .lv-admin-container.lv-fold .lv-admin-maincontainer{
        width:calc(100% - 46px);
    }
}

@media screen  and (max-width:760px){
    .lv-admin-logo, .lv-admin-functions{
        width:100%;
        float:left;
    }

    .lv-admin-maincontainer{
        width:100%;
        float:right;
        position:absolute !important;
        top:92px;
    }

    .lv-admin-leftside{
        position:absolute !important;
        z-index:10000;
        top:92px;
        width:46px;
        display:none;
    }
    .lv-admin-leftside, .lv-admin-maincontainer{
        height:calc(100% - 92px);
    }

    .lv-fold .lv-admin-leftside{
        display:block;
    }
}
</style>