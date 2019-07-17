<template>
    <span class="a-form-radio" @click.stop="changeValue">
        <span class="a-form-radio-icon fa" 
            :class="{'fa-dot-circle-o':option.value == value, 'fa-circle-o':option.value != value}"></span>
        <span class="a-form-radio-label">{{option.text}}</span>
    </span>
</template>

<script>
export default {
    props:["option", "value"],
    methods:{
        changeValue(){
            if(this.value != this.option.value){
                this.$emit("input", this.option.value);
            }
        }
    },
}
</script>

<style>
.a-form-radio{
    display:inline-block;
    padding-right:5px;
}

.a-form-radio-icon{
    display:inline-block;
    margin-right:2px;
}
</style>

