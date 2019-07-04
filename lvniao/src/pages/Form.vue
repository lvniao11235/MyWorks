<template>
    <div class="lv-widget">
        <div>
            <LvRadioGroup :checked="value"
                :items="[{value:1, label:'1'}, {value:2, label:'2'}, {value:3, label:'3'}]"
                @changed="changed">
            </LvRadioGroup>
        </div>
        {{value}}
        <div>
            <LvCheckboxGroup :checked="favorate"
                :items="[{value:1, label:'足球'}, {value:2, label:'篮球'}, {value:3, label:'排球'}]"
                @changed="checkboxGroupChanged">
            </LvCheckboxGroup>
        </div>
        <span v-for="f in favorate" :key="f">{{f}}</span>
    </div>
</template>

<script>
import LvRadioGroup from '../widgets/form/LvRadioGroup';
import LvCheckboxGroup from '../widgets/form/LvCheckboxGroup';
export default{
    data:function(){
        return {
            value:1,
            favorate:[1,3]
        }
    },
    components:{
        LvRadioGroup,LvCheckboxGroup
    },
    methods:{
        changed(value){
            this.value = value;
        },
        checkboxGroupChanged(value){
            this.favorate = value;
        }
    }
}
</script>

<style>
</style>