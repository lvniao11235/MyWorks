<template>
  <div class="lv-dialog">
    <component :is="dialogType" :option="option"></component>
  </div>
</template>

<script>
import SelectDialog from './SelectDialog';
import AlertDialog from './AlertDialog';
import TimePickerDialog from './TimePickerDialog';
export default {
    props:['option'],
    components:{
        SelectDialog, AlertDialog, TimePickerDialog
    },
    computed:{
        dialogType(){
            switch(this.option.type){
                case 'select': return SelectDialog;
                case 'alert' : return AlertDialog;
                case 'timepicker': return TimePickerDialog;
            }
            return null;
        }
    }
}
</script>

<style>
    
</style>
