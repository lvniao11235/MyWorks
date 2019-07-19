<template>
    <div class="a-page-refresh">
        <PageContainer :clazz="'a-card-fullpage'">
            <CardHeader slot="header" :title="'下拉刷新'" :hasBack="true"></CardHeader>
            <div slot="content">
            </div>
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
    }
}
</script>

<style>


</style>