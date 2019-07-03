<template>
    <span class="lv-form-radio">
        <input type="radio" ref="radio" @input="change" v-model="model" :value="value"/><span class="lv-form-radio-label">{{label}}</span>
    </span>
</template>

<script>
export default{
    props:["checked", "value", "label"],
    data:function(){
        return {
            model:false,
        }
    },
    methods:{
        change(){
            this.$emit("changed", this.$refs.radio.checked);
        }
    },
    created(){
        this.model = this.checked;
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
</style>