<template>
    <span class="lv-form-select lv-skin-border-primary">
        <input class="lv-skin-form-primary" type="text" :value="value" @input="changed"/>
        <span class="lv-form-select-icon lv-skin-form-primary fa fa-angle-down"></span>
        <div class="lv-skin-border-primary"></div>
    </span>
</template>

<script>
export default{
    props:['value'],
    methods:{
        changed($event){
            this.$emit("input", $event.target.value);
        }
    }
}
</script>

<style>
.lv-form-select{
    position:relative;
    display:inline-block;
}
.lv-form-select input{
    padding:5px;
    outline:none;
    border:none;
    border:1px solid;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
}

.lv-form-select span{
    padding:5px;
    border:1px solid;
    border-left:none;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    display:inline-block;
    position:absolute;
}

.lv-form-select div{
    width:calc(100% - 12px);
    position:absolute;
    border:1px solid;
    padding:5px;
    top:calc(100% + 3px);
}
</style>