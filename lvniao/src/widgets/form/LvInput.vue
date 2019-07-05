<template>
    <span class="lv-form-input lv-skin-border-primary">
        <input class="lv-skin-form-primary" type="text" :value="value" @input="changed"/>
    </span>
</template>

<script>
export default{
    props:['value'],
    methods:{
        changed($event){
            this.$emit("input", $event.target.value);
        }
    }
}
</script>

<style>
.lv-form-input input{
    padding:5px;
    outline:none;
    border:none;
    border:1px solid;
    border-radius:5px;
}
</style>