<template>
    <textarea class="a-form-textarea" :type="type ? type:option.type" v-model="localvalue"
        :placeholder="placeholder ? placeholder:option.placeholder" :name="name ? name:option.name">
    </textarea>
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

.a-form-textarea{
    outline:none;
    border:none;
    box-sizing:border-box;
    border:1px solid #c7c7c7;
    min-height:60px;
    line-height:20px;
    vertical-align:middle;
    border-radius:5px;
    padding:2px 5px;
    resize:none;
    
}
</style>

