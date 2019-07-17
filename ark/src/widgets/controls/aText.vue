<template>
    <input class="a-text a-form-control" :type="option.type" 
        :placeholder="option.placeholder" :name="option.name" @input="change"/>
</template>

<script>
export default {
    props:["option"],
    methods:{
        change(e){
            this.$emit("input", e.target.value);
        }
    }
}
</script>

<style>

.a-text{
    outline:none;
    border:none;
    box-sizing:border-box;
    border:1px solid #c7c7c7;
    height:30px;
    line-height:28px;
    vertical-align:middle;
    border-radius:5px;
    padding:0px 5px;
    
}
</style>

