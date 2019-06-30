<template>
    <div class="lv-left-submenu lv-skin-bg-shallow">
        <LeftSubMenuItem v-for="item in items" :key="item.id" :item="item"></LeftSubMenuItem>
    </div>
</template>

<script>
import LeftSubMenuItem from './LeftSubMenuItem';
export default{
    props:['items'],
    components:{
        LeftSubMenuItem,
    }
}
</script>

<style>
.lv-left-submenu{
 display:none;
 padding-left:20px;
}

.lv-fold .lv-left-submenu{
    padding-left:10px;
}


</style>