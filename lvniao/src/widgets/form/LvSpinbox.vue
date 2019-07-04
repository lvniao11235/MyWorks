<template>
    <span class="lv-form-spinbox lv-skin-border-primary">
        <span class="lv-spinbox-minus fa fa-minus lv-skin-form-primary lv-skin-border-primary " @click="minusClick"></span>
        <input type="text" :value="value" class=" lv-skin-form-primary"/>
        <span class="lv-spinbox-plus fa fa-plus lv-skin-form-primary" @click="plusClick"></span>
    </span>
</template>

<script>
export default{
    props:["value"],
    methods:{
        plusClick(){
            this.$emit("input", this.value + 1);
        },
        minusClick(){
            if(this.value > 0){
                this.$emit("input", this.value - 1);
            }
        }
    }
}
</script>

<style>
.lv-form-spinbox{
    background-color:#fff;
}
.lv-form-spinbox > span{
    display:inline-block;
    font-size:14px !important;
    padding:6px 5px;
    background-color:#f5f7fa;
}

.lv-form-spinbox > span:first-child{
    border-right:1px solid;
}

.lv-form-spinbox > span:last-child{
    border-left:1px solid;
}

.lv-form-spinbox{
    border:1px solid;
    border-radius:5px;
    padding:5px 5px;
    background-color:#f5f7fa;
    overflow:hidden;
}

.lv-form-spinbox input{
    border:none;
    outline:none;
    width:50px;
    text-align:center;
    background-color:#fff;
    display:inline-block;
    font-size:14px;
    padding:5px;
}
</style>