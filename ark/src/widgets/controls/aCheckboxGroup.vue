<template>
    <span class="a-form-check-group">
        <template v-for="item in option.items">
            <aCheckbox :option="item" :value="localvalue" :key="item.value" @input="changeValue"></aCheckbox>
        </template>
    </span>
</template>

<script>
import aCheckbox from './aCheckbox';
export default {
    props:["option", "value"],
    components:{
        aCheckbox
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

.a-form-check-group{
    text-align:left;
    display:inline-block;
}

</style>

