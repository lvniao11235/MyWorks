<template>
    <div class="lv-widget lv-form">
        <div>
            <span class="label">姓名</span><LvInput v-model="name"></LvInput>
        </div>
        {{name}}
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
        <div>
            <span class="label" >年龄</span><LvSlider v-model="age"></LvSlider>
        </div>
        <div>
            <span class="label" >籍贯</span><LvSelect v-model="native" :multiple='false' style="width:80%"
                :items="[{value:1, text:'陕西'},{value:2, text:'河南'}, {value:3, text:'四川'}]"></LvSelect>
        </div>
        <span v-for="f in native" :key="f">{{f}}</span>
         <div>
            <span class="label" >年龄</span><LvSlider v-model="age" :interval="true"></LvSlider>
        </div>
        <div>
            <span class="label">性别</span><LvSwitch v-model="gender"></LvSwitch>
        </div>
    </div>
</template>

<script>
import LvRadioGroup from '../widgets/form/LvRadioGroup';
import LvCheckboxGroup from '../widgets/form/LvCheckboxGroup';
import LvSpinbox from '../widgets/form/LvSpinbox';
import LvSlider from '../widgets/form/LvSlider';
import LvInput from '../widgets/form/LvInput';
import LvSelect from '../widgets/form/LvSelect';
import LvSwitch from '../widgets/form/LvSwitch';
export default{
    data:function(){
        return {
            gender:true,
            favorate:[1,3],
            age:30,
            name:'lvniao',
            native:[]
        }
    },
    components:{
        LvRadioGroup,LvCheckboxGroup, LvSpinbox, LvSlider,
        LvInput, LvSelect, LvSwitch
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
    padding:5px;
}
</style>