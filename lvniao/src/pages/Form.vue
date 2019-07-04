<template>
    <div class="lv-widget lv-form">
        <div>
            <span class="label">性别</span><LvRadioGroup class="lv-form-border" :checked="gender"
                :items="[{value:true, label:'男'}, {value:false, label:'女'}]"
                @changed="changed">
            </LvRadioGroup>
        </div>
        {{gender}}
        <div>
            <span class="label">爱好</span><LvCheckboxGroup class="lv-form-border" :checked="favorate"
                :items="[{value:1, label:'足球'}, {value:2, label:'篮球', disable:true}, {value:3, label:'排球'}]"
                @changed="checkboxGroupChanged">
            </LvCheckboxGroup>
        </div>
        <span v-for="f in favorate" :key="f">{{f}}</span>
        <div>
            <span class="label" >年龄</span><LvSpinbox v-model="age"></LvSpinbox>
        </div>
        {{age}}
    </div>
</template>

<script>
import LvRadioGroup from '../widgets/form/LvRadioGroup';
import LvCheckboxGroup from '../widgets/form/LvCheckboxGroup';
import LvSpinbox from '../widgets/form/LvSpinbox';
export default{
    data:function(){
        return {
            gender:true,
            favorate:[1,3],
            age:10
        }
    },
    components:{
        LvRadioGroup,LvCheckboxGroup, LvSpinbox
    },
    methods:{
        changed(gender){
            this.gender = gender;
        },
        checkboxGroupChanged(value){
            this.favorate = value;
        }
    }
}
</script>

<style>
.lv-form{
    padding:5px;
}

.lv-form .label{
    width:50px;
    display:inline-block;
    text-align:center;
}
</style>