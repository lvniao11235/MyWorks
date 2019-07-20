<template>
    <div class="a-layout">
        <PageContainer :clazz="'a-card-fullpage'">
            <template>
                <CardHeader slot="header" :title="'布局'" :hasBack="true"></CardHeader>
                <div  slot="content">
                    <div class="a-row-container a-col-1">
                        <div class="block"></div>
                    </div>
                    <div class="a-row-container a-col-2">
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="a-row-no-pad-container a-col-no-pad-2">
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="a-row-container a-col-3 a-row-center">
                        <span style="background-color:gray;height:20px;">1</span>
                        <div class="block"></div>
                        <div class="block" style="height:60px;"></div>
                    </div>
                    <div class="a-row-container a-col-4" >
                        <span style="background-color:gray;height:20px;">1</span>
                        <div class="block"></div>
                        <div class="block" style="height:60px;"></div>
                        <div class="block"></div>
                    </div>
                    <div class="a-row-container a-col-5">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="a-row-container a-col-6">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="a-row-container a-col-7">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="a-row-container a-col-8">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="a-row-container a-col-9">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="a-row-container a-col-10">
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                        <div class="block"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-1"></div>
                        <div class="block a-span-9"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-2"></div>
                        <div class="block a-span-8"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-3"></div>
                        <div class="block a-span-7"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-4"></div>
                        <div class="block a-span-6"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-5"></div>
                        <div class="block a-span-5"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-6"></div>
                        <div class="block a-span-4"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-7"></div>
                        <div class="block a-span-3"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-8"></div>
                        <div class="block a-span-2"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-9"></div>
                        <div class="block a-span-1"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-10"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-2"></div>
                        <div class="block a-span-2"></div>
                        <div class="block a-span-6"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-4"></div>
                        <div class="block a-span-2"></div>
                        <div class="block a-span-4"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-3"></div>
                        <div class="block a-span-3"></div>
                        <div class="block a-span-3"></div>
                        <div class="block a-span-1"></div>
                    </div>
                    <div class="a-row-container">
                        <div class="block a-span-1"></div>
                        <div class="block a-span-2"></div>
                        <div class="block a-span-3"></div>
                        <div class="block a-span-4"></div>
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
    }
}
</script>

<style>
.block{
    height:40px;
    background-color:gray;
    position:relative;
}
</style>

