<template>
    <div class="a-home">
        <PageContainer :clazz="'a-card-page'">
            <template>
                <CardHeader slot="header" :title="'组件'"></CardHeader>
                <div slot="content">
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div class="a-home-item" @click="routeTo('/mobile/layout')">
                            <div class="a-home-icon fa fa-th-large"></div>
                            <div class="a-home-text">布局</div>
                        </div>
                        <div class="a-home-item" @click="routeTo('/mobile/layout2')">
                            <div class="a-home-icon fa fa-th-large"></div>
                            <div class="a-home-text">布局2</div>
                        </div>
                        <div class="a-home-item" @click="routeTo('/mobile/layout3')">
                            <div class="a-home-icon fa fa-th-large"></div>
                            <div class="a-home-text">布局3</div>
                        </div>
                    </div>
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div class="a-home-item" @click="routeTo('/mobile/calendar')">
                            <div class="a-home-icon fa fa-calendar"></div>
                            <div class="a-home-text">日历</div>
                        </div>
                        <div class="a-home-item" @click="routeTo('/mobile/text')">
                            <div class="a-home-icon fa fa-file-text-o"></div>
                            <div class="a-home-text">文本编辑器</div>
                        </div>
                        <div class="a-home-item" @click="routeTo('/mobile/tables')">
                            <div class="a-home-icon fa fa-table"></div>
                            <div class="a-home-text">表格</div>
                        </div>
                    </div>
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div class="a-home-item" @click="routeTo('/mobile/refresh')">
                            <div class="a-home-icon fa fa-refresh"></div>
                            <div class="a-home-text">下拉刷新</div>
                        </div>
                        <div class="a-home-item" @click="routeTo('/mobile/carousel')">
                            <div class="a-home-icon fa fa-picture-o"></div>
                            <div class="a-home-text">轮播</div>
                        </div>
                        <div class="a-home-item" @click="routeTo('/mobile/timeaxis')">
                            <div class="a-home-icon">
                                <img src="../../assets/icon/timeaxis.svg"/>
                            </div>
                            <div class="a-home-text">时间轴</div>
                        </div>
                    </div>
                    <div class="a-row-no-pad-container a-col-no-pad-3">
                        <div class="a-home-item" @click="routeTo('/mobile/forms')">
                            <div class="a-home-icon fa fa-wpforms"></div>
                            <div class="a-home-text">表单元素</div>
                        </div>
                        <div class="a-home-item" @click="routeTo('/mobile/dialogs')">
                            <div class="a-home-icon fa fa-window-maximize"></div>
                            <div class="a-home-text">对话框</div>
                        </div>
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
import PageContainer from '../../widgets/cards/PageContainer';
import CardHeader from '../../widgets/cards/CardHeader';
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

.a-home-icon img{
    width:42px;
    height:40px;
    margin-top:10px;
}

.a-home-icon img path{
    fill:red;
}
</style>

