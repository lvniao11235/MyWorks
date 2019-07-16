<template>
    <div class="a-page-tables">
        <PageContainer :clazz="'a-card-fullpage'">
            <CardHeader slot="header" :title="'轮播'" :hasBack="true"></CardHeader>
            <div slot="content">
                <Carousel style="height:200px;">
                    <template>
                        <img src="../assets/carousel/1.jpg"/>
                        <img src="../assets/carousel/2.jpg"/>
                        <img src="../assets/carousel/3.jpg"/>
                        <img src="../assets/carousel/4.jpg"/>
                        <img src="../assets/carousel/5.jpg"/>
                        <img src="../assets/carousel/6.jpg"/>
                    </template>
                </Carousel>

                <Carousel style="height:200px;margin-top:20px" :seconds="3000" :direction="'vertical'">
                    <template>
                        <img src="../assets/carousel/1.jpg"/>
                        <img src="../assets/carousel/2.jpg"/>
                        <img src="../assets/carousel/3.jpg"/>
                        <img src="../assets/carousel/4.jpg"/>
                        <img src="../assets/carousel/5.jpg"/>
                        <img src="../assets/carousel/6.jpg"/>
                    </template>
                </Carousel>
            </div>
        </PageContainer>
    </div>
</template>

<script>
import PageContainer from '../widgets/cards/PageContainer';
import CardHeader from '../widgets/cards/CardHeader';
import Carousel from '../widgets/controls/Carousel';
export default {
    components:{
        PageContainer, CardHeader, Carousel
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