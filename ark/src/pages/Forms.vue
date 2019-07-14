<template>
    <div class="a-forms">
        <PageContainer :clazz="'a-card-fullpage'">
            <template>
                <CardHeader slot="header" :title="'表单元素'" :hasBack="true"></CardHeader>
                <div slot="content" class="a-form">
                    <div class="a-row-container a-row-center" style="height:50px;">
                        <aLabel :value="'姓名'" class="a-span-3"></aLabel>
                        <aText class="a-span-7"></aText>
                    </div>
                </div>
            </template>
            
        </PageContainer>
    </div>
</template>

<script>
import PageContainer from '../widgets/cards/PageContainer';
import CardHeader from '../widgets/cards/CardHeader';
import aLabel from '../widgets/controls/aLabel';
import aText from '../widgets/controls/aText';
export default {
    components:{
        PageContainer, CardHeader, aLabel, aText
    },
    methods:{
    }
}
</script>

<style>
.a-forms .a-card-fullpage{
    background-color:#fff !important;
}
</style>

