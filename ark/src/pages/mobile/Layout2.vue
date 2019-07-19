<template>
    <div class="a-layout">
        <PageContainer :clazz="'a-card-fullpage'">
            <template>
                <CardHeader slot="header" :title="'布局2'" :hasBack="true"></CardHeader>
                <div slot="content">
                    <div class="a-row-container a-col-no-pad-2">
                        <div style="border:1px solid black;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3"></div>
                                <div class="block a-span-no-pad-7"></div>
                            </div>
                        </div>
                        <div style="border:1px solid black; border-left:none;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3"></div>
                                <div class="block a-span-no-pad-7"></div>
                            </div>
                        </div>
                    </div>
                    <div class="a-row-container a-col-no-pad-3" style="padding-top:0px;padding-bottom:0px;">
                        <div style="border:1px solid black;" >
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3" style="border:none;border-right:1px solid black;"></div>
                                <div class="block a-span-no-pad-7"  style="border:none;"></div>
                            </div>
                        </div>
                        <div style="border:1px solid black; border-left:none;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3" style="border:none;border-right:1px solid black;"></div>
                                <div class="block a-span-no-pad-7"   style="border:none;"></div>
                            </div>
                        </div>
                        <div style="border:1px solid black; border-left:none;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3" style="border:none;border-right:1px solid black;"></div>
                                <div class="block a-span-no-pad-7"   style="border:none;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="a-row-container a-col-no-pad-3" style="padding-top:0px;padding-bottom:0px;">
                        <div style="border:1px solid black;border-top:none;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3" style="border:none;border-right:1px solid black;"></div>
                                <div class="block a-span-no-pad-7"  style="border:none;"></div>
                            </div>
                        </div>
                        <div style="border:1px solid black; border-left:none;border-top:none;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3" style="border:none;border-right:1px solid black;"></div>
                                <div class="block a-span-no-pad-7"   style="border:none;"></div>
                            </div>
                        </div>
                        <div style="border:1px solid black; border-left:none;border-top:none;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3" style="border:none;border-right:1px solid black;"></div>
                                <div class="block a-span-no-pad-7"   style="border:none;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="a-row-container a-col-no-pad-3" style="padding-top:0px;padding-bottom:0px;">
                        <div style="border:1px solid black;border-top:none;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3" style="border:none;border-right:1px solid black;"></div>
                                <div class="block a-span-no-pad-7"  style="border:none;"></div>
                            </div>
                        </div>
                        <div style="border:1px solid black; border-left:none;border-top:none;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3" style="border:none;border-right:1px solid black;"></div>
                                <div class="block a-span-no-pad-7"   style="border:none;"></div>
                            </div>
                        </div>
                        <div style="border:1px solid black; border-left:none;border-top:none;">
                            <div class="a-row-container">
                                <div class="block a-span-no-pad-3" style="border:none;border-right:1px solid black;"></div>
                                <div class="block a-span-no-pad-7"   style="border:none;"></div>
                            </div>
                        </div>
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
.a-row-container .a-row-container{
    padding:0px;
}
</style>

