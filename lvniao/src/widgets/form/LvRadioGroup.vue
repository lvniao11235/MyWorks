<template>
    <span class="lv-form-radio-group">
        <LvRadio v-for="item in items" :key="item.value"
            :disable="item.disable"
            :checked="value" :value="item.value" :label="item.label"
            @click.stop="select(item)" @changed="change">
        </LvRadio>
    </span>
</template>

<script>
import LvRadio from './LvRadio';
export default{
    props:["checked", "items"],
    components:{
        LvRadio
    },
    data:function(){
        return {
            value:false,
        }
    },
    methods:{
        select(item){
            this.value = item.value;
        },
        change(value){
            this.value = value;
            this.$emit("changed", this.value);
        }
    },
    created(){
        this.value = this.checked;
    },
    watch:{
        checked(checked){
            this.value = checked;
        }
    }
}
</script>

<style>
</style>