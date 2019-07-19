<template>
    <input class="a-form-text a-form-control" :type="type ? type:option.type" v-model="localvalue"
        :placeholder="placeholder ? placeholder:option.placeholder" :name="name ? name:option.name"/>
</template>

<script>
export default {
    props:["option", "value", "type", "placeholder", "name"],
    data:function(){
        return {
            localvalue:"",
        }
    },
    methods:{
    },
    watch:{
        value(val){
            this.localvalue = val;
        },
        localvalue(val){
            this.$emit("input", val);
        }
    },
    created(){
        this.localvalue = this.value;
    }
}
</script>

<style>

.a-form-text{
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

