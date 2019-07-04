<template>
    <span class="lv-form-checkbox-group">
        <LvCheckbox v-for="item in items" :key="item.value"
            :checked="value.indexOf(item.value) != -1" :value="item.value" :label="item.label"
            @click.stop="select(item)" @changed="change">
        </LvCheckbox>
    </span>
</template>

<script>
import LvCheckbox from './LvCheckbox';
export default{
    props:["checked", "items"],
    components:{
        LvCheckbox
    },
    data:function(){
        return {
            value:[],
        }
    },
    methods:{
        select(item){
            this.value = item.value;
        },
        change(flag, value){
            if(flag){
                this.value.push(value);
                this.value.sort();
            } else {
                this.value.splice(this.value.indexOf(value), 1);
            }
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