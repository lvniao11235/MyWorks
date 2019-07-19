<template>
    <div class="a-layout">
        <PageContainer :clazz="'a-card-fullpage'">
            <template>
                <CardHeader slot="header" :title="'布局3'" :hasBack="true"></CardHeader>
                <div slot="content" style="padding-top:10px;">
                    <div class="a-auto-layout">
                        <template v-for="(row, rowindex) in rows">
                            <div class="a-auto-layout-row a-row-container"
                                :class="'a-col-no-pad-' + row.length" :key="rowindex">
                                <div class="a-auto-layout-item" 
                                    v-for="(item, colindex) in row" :key="colindex">
                                    <div class="a-row-container">
                                        <div class="block a-span-no-pad-3">
                                            <aLabel :text="rowindex + ',' + colindex"></aLabel>
                                        </div>
                                        <div class="block a-span-no-pad-7">
                                            <aText :option="{type:'text'}"></aText>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </template>
        </PageContainer>
    </div>
</template>
<script>
import PageContainer from '../widgets/cards/PageContainer';
import CardHeader from '../widgets/cards/CardHeader';
import aText from '../widgets/controls/aText';
import aLabel from '../widgets/controls/aLabel';
export default {
    components:{
        PageContainer, CardHeader, aText, aLabel
    },
    methods:{
    },
    data:function(){
        return {
            rows:[
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ]
        }
    }
}
</script>

<style>
.a-auto-layout .a-row-container .a-row-container{
    padding:0px;
}

.a-auto-layout .block{
    border-color:#c7c7c7;
}

.a-auto-layout>.a-row-container{
    padding-top:0;
    padding-bottom:0;
}

.a-auto-layout > .a-row-container .block{
    border-bottom:none;
}

.a-auto-layout > .a-auto-layout-row:last-child > .a-auto-layout-item > .a-row-container > .block{
    border-bottom:1px solid #c7c7c7 !important;
}

.a-auto-layout-item .block{
    border-right:none;
}

.a-auto-layout-row .a-auto-layout-item:last-child .block:last-child{
    border-right:1px solid #c7c7c7;
}

.a-auto-layout{
    padding-top:10px;
}

.a-auto-layout .a-form-control{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:5px;
    display:table;
    width:calc(100% - 10px);
    box-sizing:border-box;
}

.a-auto-layout .a-form-label{
    text-align:center;
    height:calc(100% - 10px);
    line-height:30px;
    vertical-align:middle;
}


</style>

