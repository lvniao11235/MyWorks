<template>
    <div class="lv-widget">
        <div style="width:100px;">
            <LvRadioGroup :checked="false" :items="[{value:true, label:'男'}, {value:false, label:'女'}]">
            </LvRadioGroup>
            <br/>
            <LvRadioGroup :checked="true" :items="[{value:true, label:'男'}, {value:false, label:'女'}]">
            </LvRadioGroup>
        </div>
        
    </div>
</template>

<script>
import LvRadioGroup from '../widgets/form/LvRadioGroup';
export default{
    components:{
        LvRadioGroup
    }
}
</script>

<style>
</style>