<template>
    <div class="lv-widget">
        <div style="width:150px;">
            <LvRadioGroup :checked="value"
                :items="[{value:1, label:'1'}, {value:2, label:'2'}, {value:3, label:'3'}]"
                @changed="changed">
            </LvRadioGroup>
        </div>
        {{value}}
    </div>
</template>

<script>
import LvRadioGroup from '../widgets/form/LvRadioGroup';
export default{
    data:function(){
        return {
            value:1
        }
    },
    components:{
        LvRadioGroup
    },
    methods:{
        changed(value){
            this.value = value;
        }
    }
}
</script>

<style>
</style>