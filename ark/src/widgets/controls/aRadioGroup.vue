<template>
    <span class="a-form-radio-group">
        <template v-for="item in option.items">
            <aRadio :option="item" :value="localvalue" :key="item.value" @input="changeValue"></aRadio>
        </template>
    </span>
</template>

<script>
import aRadio from './aRadio';
export default {
    props:["option", "value"],
    components:{
        aRadio
    },
    data:function(){
        return {
            localvalue:null
        }
    },
    methods:{
        changeValue(value){
            this.$emit("input", value);
        }
    },
    watch:{
        value(val){
            this.localvalue = val;
        }
    },
    created(){
        this.localvalue = this.value;
    }
}
</script>

<style>

.a-form-radio-group{
    text-align:left;
    display:inline-block;
}

</style>

