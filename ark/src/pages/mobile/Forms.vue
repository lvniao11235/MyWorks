<template>
    <div class="a-forms">
        <PageContainer :clazz="'a-card-fullpage'">
            <template>
                <CardHeader slot="header" :title="'表单元素'" :hasBack="true"></CardHeader>
                <div slot="content" class="a-form">
                    <div class="a-row-container a-row-center" style="height:50px;">
                        <aLabel :text="'姓名'" class="a-span-3"></aLabel>
                        <aText :option="{type:'text'}" v-model="age" class="a-span-7"></aText>
                    </div>
                    <div class="a-row-container a-row-center" style="height:50px;">
                        <aLabel :text="'姓名'" class="a-span-3"></aLabel>
                        <aSlider :option="{min:18, max:100}" v-model="age" class="a-span-7"></aSlider>
                    </div>
                </div>
            </template>
            
        </PageContainer>
    </div>
</template>

<script>
import PageContainer from '../../widgets/cards/PageContainer';
import CardHeader from '../../widgets/cards/CardHeader';
import aLabel from '../../widgets/controls/aLabel';
import aText from '../../widgets/controls/aText';
import aSlider from '../../widgets/controls/aSlider';

export default {
    components:{
        PageContainer, CardHeader, aLabel, aText, aSlider
    },
    data:function(){
        return {
            age:0
        }
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

