<template>
    <span class="a-form-checkbox a-form-control" @click.stop="changeValue">
        <span class="a-form-checkbox-icon fa" 
            :class="{'fa-check-square-o':value.indexOf(option.value) > -1, 'fa-square-o':value.indexOf(option.value) == -1}"></span>
        <span class="a-form-checkbox-label">{{option.text}}</span>
    </span>
</template>

<script>
export default {
    props:["option", "value"],
    methods:{
        changeValue(){
            if(this.value.indexOf(this.option.value) >= 0){
                this.$emit("input", {type:'remove', value:this.option.value});
            } else {
                this.$emit("input", {type:'add', value:this.option.value});
            }
            
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

