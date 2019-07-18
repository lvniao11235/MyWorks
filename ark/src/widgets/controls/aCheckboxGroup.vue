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
            localvalue:[]
        }
    },
    methods:{
        changeValue(value){
            if(value.type == "add"){
                this.localvalue.push(value.value);
            } else {
                var index = this.localvalue.indexOf(value.value);
                this.localvalue.splice(index, 1);
            }
            this.$emit("input", this.localvalue);
        }
    },
    watch:{
        value(val){
            for(var i=0; i<val.length; i++){
                this.localvalue.push(val[i]);
            }
        }
    },
    created(){
        for(var i=0; i<this.value.length; i++){
            this.localvalue.push(this.value[i]);
        }
    }
}
</script>

<style>

.a-form-check-group{
    text-align:left;
    display:inline-block;
}

</style>

