<template>
    <div class="a-left-submenu a-skin-bg-shallow">
        <LeftSubMenuItem v-for="item in items" :key="item.id" :parentId="parentId" :item="item"></LeftSubMenuItem>
    </div>
</template>

<script>
import LeftSubMenuItem from './LeftSubMenuItem';
export default{
    props:['items', 'parentId'],
    components:{
        LeftSubMenuItem,
    }
}
</script>

<style>
.a-left-submenu{
 display:none;
 padding-left:20px;
}

.a-fold .a-left-submenu{
    padding-left:10px;
}


</style>