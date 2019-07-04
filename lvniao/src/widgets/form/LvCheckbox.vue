<template>
    <span class="lv-form-checkbox">
        <span class="fa lv-skin-form-primary" :class="selectedClass"
            @click="selected"></span>
        <span class="lv-form-checkbox-label">{{label}}</span>
    </span>
</template>

<script>
export default{
    props:["checked", "value", "label"],
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