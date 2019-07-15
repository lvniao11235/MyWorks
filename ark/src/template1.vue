<template>
    <div class="a-dialogs">
        <PageContainer :clazz="'a-card-fullpage'">
            <template>
                <CardHeader slot="header" :title="''" :hasBack="true"></CardHeader>
                <div slot="content">
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
    }
}
</script>

<style>


</style>