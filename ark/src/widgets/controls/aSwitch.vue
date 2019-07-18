<template>
    <span class="a-form-switch">
        <span class="a-from-switch-bg">
            <span class="a-form-switch-btn"  @click.stop="changeValue"
                :style="{float:localvalue?'left':'right'}"></span>
        </span>
    </span>
</template>

<script>
export default {
    props:["option", "value"],
    data:function(){
        return {
            localvalue:false
        }
    },
    methods:{
        changeValue(){
            this.localvalue = !this.localvalue;
            this.$emit("input", this.localvalue);
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
.a-form-switch{
    text-align:left;
    height:28px;
    position:relative;
}

.a-from-switch-bg{
    display:inline-block;
    height:100%;
    width:50px;
    border-radius:14px;
    background-color:#c7c7c7;
}

.a-form-switch-btn{
    display:inline-block;
    height:24px;
    width:24px;
    border-radius:12px;
    background-color:#fff;
    margin:2px;
}

</style>

