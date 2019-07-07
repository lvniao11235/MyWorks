<template>
    <span class="lv-form-switch" :class="{'lv-skin-bg-primary':value, 'lv-form-switch-false':!value}">
        <span class="lv-form-switch-btn"
            :class="{'lv-form-switch-btn-left':value, 'lv-form-switch-btn-right':!value}"
            @click="switchValue"></span>
    </span>
</template>

<script>
export default{
    props:['value'],
    methods:{
        switchValue(){
            this.$emit("input", !this.value);
        }
    }
}
</script>

<style>
.lv-form-switch{
    background-color:gray;
    display:inline-block;
    height:20px;
    width:40px;
    border-radius:10px;
    position:relative;
    top:5px;
}

.lv-form-switch-btn{
    display:inline-block;
    height:16px;
    width:16px;
    background-color:#fff;
    border-radius:8px;
    margin:2px;
}

.lv-form-switch-btn-left{
    float:left;
}

.lv-form-switch-btn-right{
    float:right;
}

.lv-form-switch-false{
    background-color:gray;
}
</style>