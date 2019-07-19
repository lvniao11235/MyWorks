<template>
    <div class="a-page-tables">
        <PageContainer :clazz="'a-card-fullpage'">
            <CardHeader slot="header" :title="'表格'" :hasBack="true"></CardHeader>
            <div slot="content">
                <div class="a-listview">
                    <div class="a-listview-item">
                        <span class="a-listview-item-left-icon fa fa-table"></span>
                        基本表格
                        <span class="a-listview-item-right-icon fa fa-angle-right"></span>
                    </div>
                </div>
                <div class="a-listview">
                    <div class="a-listview-item">
                        <span class="a-listview-item-left-icon fa fa-table"></span>
                        复杂表格
                        <span class="a-listview-item-right-icon fa fa-angle-right"></span>
                    </div>
                </div>
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
.a-page-tables .a-card-fullpage{
    background-color:#fff;
}

</style>