<template>
    <div class="a-page-timeaxis">
        <PageContainer :clazz="'a-card-fullpage'">
            <CardHeader slot="header" :title="'时间轴'" :hasBack="true"></CardHeader>
            <div slot="content">
                <TimeAxis></TimeAxis>
            </div>
        </PageContainer>
    </div>
</template>

<script>
import PageContainer from '../../widgets/cards/PageContainer';
import CardHeader from '../../widgets/cards/CardHeader';
import TimeAxis from '../../widgets/controls/TimeAxis';
export default {
    components:{
        PageContainer, CardHeader, TimeAxis
    },
    methods:{
    }
}
</script>

<style>
.a-page-timeaxis .a-card-fullpage{
    background-color:#fff;
}

</style>