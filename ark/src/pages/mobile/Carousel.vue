<template>
    <div class="a-page-tables">
        <PageContainer :clazz="'a-card-fullpage'">
            <CardHeader slot="header" :title="'轮播'" :hasBack="true"></CardHeader>
            <div slot="content">
                <aCarousel style="height:200px;">
                    <template>
                        <img src="../../assets/carousel/1.jpg"/>
                        <img src="../../assets/carousel/2.jpg"/>
                        <img src="../../assets/carousel/3.jpg"/>
                        <img src="../../assets/carousel/4.jpg"/>
                        <img src="../../assets/carousel/5.jpg"/>
                        <img src="../../assets/carousel/6.jpg"/>
                    </template>
                </aCarousel>

                <aCarousel style="height:200px;margin-top:20px" :seconds="3000" :direction="'vertical'">
                    <template>
                        <img src="../../assets/carousel/1.jpg"/>
                        <img src="../../assets/carousel/2.jpg"/>
                        <img src="../../assets/carousel/3.jpg"/>
                        <img src="../../assets/carousel/4.jpg"/>
                        <img src="../../assets/carousel/5.jpg"/>
                        <img src="../../assets/carousel/6.jpg"/>
                    </template>
                </aCarousel>
            </div>
        </PageContainer>
    </div>
</template>

<script>
import PageContainer from '../../widgets/cards/PageContainer';
import CardHeader from '../../widgets/cards/CardHeader';
import aCarousel from '../../widgets/controls/aCarousel';
export default {
    components:{
        PageContainer, CardHeader, aCarousel
    },
    methods:{
    }
}
</script>

<style>
.a-page-tables .a-card-fullpage{
    background-color:#fff;
}

</style>