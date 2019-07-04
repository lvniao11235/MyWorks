<template>
    <span class="lv-form-radio lv-skin-border-primary" 
        :class="{'lv-form-disable':disable}">
        <span class="lv-form-radio-input fa lv-skin-form-primary" :class="selectedClass"
            @click="selected"></span>
        <span class="lv-form-radio-label lv-skin-form-primary">{{label}}</span>
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
            return this.bselected ? "fa-dot-circle-o":"fa-circle-o";
        },
    },
    methods:{
        
        selected(){
            if(this.disable) return;
            this.bselected = true;
            this.$emit("changed", this.value);
        }
    },
    created(){
        
        this.bselected = this.checked == this.value;
    },
    watch:{
        checked(checked){
            
            this.bselected = checked == this.value;
        }
    }
}
</script>

<style>
.lv-form-radio{
    display:inline-block;
    padding:5px;
}

.lv-form-radio > *{
    display:inline-block;
}

.lv-form-radio-label{
    margin-left:5px;
}

.lv-form-disable .lv-form-radio-input,
.lv-form-disable .lv-form-radio-label,
.lv-form-disable .lv-form-checkbox-input,
.lv-form-disable .lv-form-checkbox-label
{
    color:#c0c4cc !important;
    border-top-color:#c0c4cc !important;
    border-bottom-color:#c0c4cc !important;
}
</style>