<template>
  <div class="lv-dialog">
    <component :is="dialogType" :option="option"></component>
  </div>
</template>

<script>
import SelectDialog from './SelectDialog';
import AlertDialog from './AlertDialog';
import TimePickerDialog from './TimePickerDialog';
import LoadDialog from './LoadDialog';
export default {
    props:['option'],
    components:{
        SelectDialog, AlertDialog, TimePickerDialog,LoadDialog
    },
    computed:{
        dialogType(){
            switch(this.option.type){
                case 'select': return SelectDialog;
                case 'alert' : return AlertDialog;
                case 'timepicker': return TimePickerDialog;
                case 'load' : return LoadDialog;
            }
            return null;
        }
    }
}
</script>

<style>
    
</style>
