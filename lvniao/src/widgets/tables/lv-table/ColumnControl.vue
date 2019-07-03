<template>
    <component :is="which" :value="value"/>
</template>

<script>
import CheckBoxControl from './tablecontrol/CheckBoxControl';
import LabelControl from './tablecontrol/LabelControl';
import ProgressControl from './tablecontrol/ProgressControl';
export default{
    props:["controlType", "value"],
    components:{
        CheckBoxControl,LabelControl, ProgressControl
    },
    computed:{
        which(){
            switch(this.controlType){
                case 'checkbox': return CheckBoxControl;
                case 'progress': return ProgressControl;
            }
            return LabelControl;
        }
    }
}
</script>

<style>
</style>