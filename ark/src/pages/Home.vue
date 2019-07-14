<template>
    <div class="a-home">
        <PageContainer :clazz="'a-card-page'">
            <template>
                <CardHeader slot="header" :title="'组件'"></CardHeader>
                <div slot="content">
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div class="a-home-item" @click="routeTo('/layout')">
                            <div class="a-home-icon fa fa-th-large"></div>
                            <div class="a-home-text">布局</div>
                        </div>
                        <div class="a-home-item" @click="routeTo('/dialogs')">
                            <div class="a-home-icon fa fa-window-maximize"></div>
                            <div class="a-home-text">对话框</div>
                        </div>
                        <div class="a-home-item" @click="routeTo('/forms')">
                            <div class="a-home-icon fa fa-wpforms"></div>
                            <div class="a-home-text">表单元素</div>
                        </div>
                    </div>
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </template>
            
        </PageContainer>
    </div>
</template>

<script>
import PageContainer from '../widgets/cards/PageContainer';
import CardHeader from '../widgets/cards/CardHeader';
export default {
    components:{
        PageContainer, CardHeader
    },
    methods:{
        routeTo(url){
            this.$router.push(url);
        }
    }
}
</script>

<style>

.a-home .a-row-no-pad-container{
    height:100px;
}
.a-home .a-row-no-pad-container > div{
    border-right:1px solid #c7c7c7;
}

.a-home .a-row-no-pad-container > div:last-child{
    border-right:none;
}

.a-home .a-row-no-pad-container{
    border-bottom:1px solid #c7c7c7;
}

.a-home .a-row-no-pad-container:last-child{
    border-bottom:none;
}

.a-home-icon{
    height:60px;
    line-height:60px !important;
    vertical-align:middle !important;
    text-align:center !important;
    font-size:40px;
    width:100%;
    color:#04be02;
}

.a-home-text{
    height:39px;
    line-height:39px !important;
    vertical-align:middle !important;
    text-align:center;
    font-size:20px;
    color: rgb(122, 126, 131);
}
</style>

