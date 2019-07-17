<template>
    <span class="a-form-checkbox" @click.stop="changeValue">
        <span class="a-form-checkbox-icon fa" 
            :class="{'fa-check-square-o':option.value == value, 'fa-square-o':option.value != value}"></span>
        <span class="a-form-checkbox-label">{{option.text}}</span>
    </span>
</template>

<script>
export default {
    props:["option", "value"],
    methods:{
        changeValue(){
            this.$emit("input", this.option.value);
        }
    },
}
</script>

<style>
.a-form-checkbox{
    display:inline-block;
    padding-right:5px;
}

.a-form-checkbox-icon{
    display:inline-block;
    margin-right:2px;
}
</style>

