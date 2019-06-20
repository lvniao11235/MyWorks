<template>
  <div class="lv-dialog">
    <component :is="dialogType" :option="option"></component>
  </div>
</template>

<script>
import SelectDialog from './SelectDialog';
import AlertDialog from './AlertDialog';
export default {
    props:['option'],
    components:{
        SelectDialog, AlertDialog
    },
    computed:{
        dialogType(){
            if(this.option.type === "select"){
                return SelectDialog;
            } else if(this.option.type === "alert"){
                return AlertDialog;
            } 
            return null;
        }
    }
}
</script>

<style>
    
</style>
