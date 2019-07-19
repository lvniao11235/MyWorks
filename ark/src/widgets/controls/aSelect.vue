<template>
    <span class="a-form-select a-form-control">
        <span class="a-from-select-values">
            <span v-if="values.length == 0">{{option.placeholder}}</span>
            <span class="a-from-select-value" v-for="item in values"
                :key="item.value">{{item.text}}
                <span class="fa fa-close" @click.stop="removeSelect(item)"></span>
            </span>
        </span>
        <span class="a-form-select-icon" @click="togglePanel">
            <span class="fa " 
                :class="{'fa-angle-down':!showPanel, 'fa-angle-up':showPanel}"></span>
        </span>
        <div class="a-form-select-panel" v-if="showPanel">
            <span class="a-form-select-item" v-for="item in option.items"
                :key="item.value" @click.stop="selectItem(item)">
                {{item.text}}
            </span>
        </div>
    </span>
</template>

<script>
export default {
    props:["option", "value"],
    components:{
    },
    data:function(){
        return {
            showPanel:false,
            values:[],
        }
    },
    methods:{
        togglePanel(){
            this.showPanel = !this.showPanel;
        },
        selectItem(item){
            if(this.option.multiply){
                var index = this.values.findIndex(x=>x.value == item.value);
                if(index == -1){
                    this.values.push(item);
                } else {
                    this.values.splice(index, 1);
                }
                
            } else {
                this.values = []
                this.values.push(item);
            }
        },
        removeSelect(item){
            var index = this.values.findIndex(x=>x.value == item.value);
            this.values.splice(index, 1);
        }
    },
    watch:{
        values(val){
            var temp = [];
            for(var i=0; i<val.length; i++){
                temp.push(val[i].value);
            }
            temp.sort();
            this.$emit("input", temp);
        },
        value(val){
            this.values = [];
            for(var i=0; i<val.length; i++){
                var item = this.option.items.find(x=>x.value == val[i]);
                if(item){
                    this.values.push(item);
                }
            }
        }
    },
    created(){
        this.values = [];
        for(var i=0; i<this.value.length; i++){
            var item = this.option.items.find(x=>x.value == this.value[i]);
            if(item){
                this.values.push(item);
            }
        }
    }
}
</script>

<style>

.a-form-select{
    outline:none;
    border:none;
    box-sizing:border-box;
    border:1px solid #c7c7c7;
    display:inline-block;
    line-height:28px;
    vertical-align:middle;
    border-radius:5px;
    padding:0px;
    padding-left:5px;
    text-align:left;
    position:relative;
    
}

.a-form-select .a-from-select-values{
    border:none;
    box-sizing:content-box;
    height:100%;
    width:calc(100% - 30px);
    border-radius:0px;
    position:relative;
    display:inline-block;
    border-right:1px solid #c7c7c7;
}

.a-form-select-icon{
    width:30px;
    height:100%;
    text-align:center;
    font-size:18px !important;
    vertical-align:middle;
}

.a-form-select-icon .fa{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    display:table;
    width:30px;
    text-align:center;
}

.a-from-select-value{
    display:inline-block;
    margin:5px;
    padding:2px;
    border-radius:5px;
    height:18px;
    border:1px solid #c7c7c7;
    margin:2px 3px;
    line-height:16px !important;
}

.a-form-select-panel{
    width:100%;
    max-height:100px;
    position:absolute;
    border:1px solid #c7c7c7;
    margin-left:-5px;
    margin-top:5px;
    background-color:#fff;
    overflow:scroll;
    line-height:18px;
    z-index:10000;
}

.a-form-select-item{
    display:inline-block;
    width:calc(100% - 10px);
    padding:2px 5px;
    height:18px;
    line-height:18px;
    font-size:14px;
}
</style>

