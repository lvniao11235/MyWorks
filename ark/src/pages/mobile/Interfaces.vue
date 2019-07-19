<template>
    <div class="a-interfaces">
        <PageContainer :clazz="'a-card-page'">
            <template>
                <CardHeader slot="header" :title="'接口'"></CardHeader>
                <div slot="content">
                    
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
    }
}
</script>

<style>

</style>

