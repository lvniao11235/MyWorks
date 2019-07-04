<template>
    <span class="lv-form-checkbox lv-skin-border-primary"  :class="{'lv-form-disable':disable}">
        <span class="fa lv-skin-form-primary lv-form-checkbox-input" :class="selectedClass"
            @click="selected"></span>
        <span class="lv-form-checkbox-label lv-skin-form-primary">{{label}}</span>
    </span>
</template>

<script>
export default{
    props:["checked", "value", "label", "disable"],
    data:function(){
        return {
            
            bselected:false
        }
    },
    computed:{
        selectedClass(){
            
            return this.bselected ? "fa-check-square-o":"fa-square-o";
        }
    },
    methods:{
        
        selected(){
            if(this.disable) return;
            this.bselected = !this.bselected;
            this.$emit("changed", this.bselected, this.value);
        }
    },
    created(){
        
        this.bselected = this.checked;
    },
    watch:{
        checked(checked){
            
            this.bselected = checked;
        }
    }
}
</script>

<style>
.lv-form-checkbox{
    display:inline-block;
    padding:5px;
}

.lv-form-checkbox > *{
    display:inline-block;
}

.lv-form-checkbox-label{
    margin-left:5px;
}
</style>