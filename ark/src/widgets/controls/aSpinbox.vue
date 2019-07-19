<template>
    <span class="a-form-spinbox a-form-control" ref="slider">
        <span class="a-form-spinbox-container">
            <span class="a-form-spinbox-btn fa fa-minus" @click.stop="minus"></span>
            <span class="a-form-spinbox-value">{{localValue}}</span>
            <span class="a-form-spinbox-btn fa fa-plus" @click.stop="plus"></span>
        </span>
    </span>
</template>

<script>
export default {
    props:["option", "value"],
    data:function(){
        return {
            localValue:0,
            min:0,
            max:100,
        }
    },
    watch:{
        value(val){
            this.localValue = val;
        },
    },
    created(){
        this.localValue = this.value;
        if(this.option.min){
            this.min = this.option.min;
        }
        if(this.option.max){
            this.max = this.option.max;
        }
    },
    methods:{
        minus(){
            this.localValue -= 1;
            if(this.localValue < this.min){
                this.localValue = this.min;
            }
            this.$emit("input", this.localValue);
        },
        plus(){
            this.localValue += 1;
            if(this.localValue > this.max){
                this.localValue = this.max;
            }
            this.$emit("input", this.localValue);
        },
    }
}
</script>

<style>
.a-form-spinbox{
    text-align:left;
}
.a-form-spinbox-container{
    width:72px;
    height:20px;
    border:1px solid #c7c7c7;
    box-sizing:border-box;
    line-height:18px !important;
    vertical-align:middle;
    text-align:center;
    display:inline-block;
    padding:0px;
    border-radius:5px;
    overflow:hidden;
}

.a-form-spinbox-btn{
    width:20px;
    height:18px;
    background-color:#c7c7c7;
    color:#fff;
    box-sizing:border-box;
    float:left;
    line-height:18px !important;
    vertical-align:middle;
}

.a-form-spinbox-value{
    display:inline-block;
    width:30px;
    box-sizing:border-box;
    float:left;
}

</style>