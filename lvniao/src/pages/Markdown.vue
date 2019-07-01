<template>
    <div class="lv-widget lv-page lv-markdown">
        <MarkDown></MarkDown>
        <button>content</button>
    </div>
</template>

<script>
import MarkDown from 'vue-meditor'
export default{
    components:{
        MarkDown
    }
}
</script>

<style>
.lv-markdown > .markdown{
    border:1px solid #ccc;
}

</style>