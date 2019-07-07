<template>
    <span class="lv-form-select lv-skin-border-primary">
        <span class="lv-form-select-input">
            <span v-if="selectedLength" 
                @click="removeSelected(itemCollection[0])" 
                class="lv-form-select-item-selected lv-skin-form-primary lv-skin-border-primary">
                    {{selected.item.text}}
                </span>
            <span  v-if="selectedLength && multiple" @click="removeAllSelected"
                class="lv-form-select-item-selected lv-skin-form-primary lv-skin-border-primary">
                {{selectedLength}}
            </span>
        </span>
        <span class="lv-form-select-icon lv-skin-form-primary fa"
            :class="{'fa-angle-up':showPanel, 'fa-angle-down':!showPanel}" @click="togglePanel"></span>
        <div v-show="showPanel" class="lv-skin-border-primary lv-skin-form-primary lv-form-select-panel">
            <div class="lv-form-select-item" :class="{'lv-selected':item.selected}" 
                @click="selectItem(item)" v-for="item in itemCollection" :key="item.item.id">{{item.item.text}}</div>
        </div>
    </span>
</template>

<script>
export default{
    props:['value', 'items', 'multiple'],
    methods:{
        changed($event){
            this.$emit("input", $event.target.value);
        },
        selectItem(item){
            if(!this.multiple){
                this.itemCollection.forEach(x=>x.selected = false);
                this.showPanel = false;
                this.selectedLength = 0;
            }
            item.selected = !item.selected;
            if(item.selected){
                this.selectedLength++;
            } else {
                this.selectedLength--;
            }
            this.inputChange();
        },
        removeSelected(item){
            if(this.multiple){
                item.selected = false;
                this.selectedLength--;
                if(this.selectedLength == 0){
                    this.removeAllSelected();
                }
            } else {
                this.removeAllSelected();
            }
            
            this.inputChange();
        },
        removeAllSelected(){
            this.itemCollection.forEach(x=>x.selected = false);
            this.selectedLength = 0;
            this.$emit("input", []);
        },
        inputChange(){
            var values = [];
            this.itemCollection.forEach(x=>{
                if(x.selected){
                    values.push(x.item.value);
                }
            });
            this.$emit("input", values);
        },
        togglePanel(){
            this.showPanel = !this.showPanel;
        }
    },
    data:function(){
        return {
            itemCollection:[],
            selectedLength:0,
            showPanel:false,
        }
    },
    computed:{
        selected(){
            return this.itemCollection.find(x=>x.selected);
        }
    },
    created(){
        for(var i=0; i<this.items.length; i++){
            this.itemCollection.push({selected:false, item:this.items[i]});
        }
    }
}
</script>

<style>
.lv-form-select{
    position:relative;
    display:inline-block;
    border:1px solid;
    border-radius:5px;
    top:-2px;
}
.lv-form-select .lv-form-select-input{
    width:100px;
    outline:none;
    border:none;
    display:inline-block;
}

.lv-form-select .lv-form-select-icon{
    padding:5px;
    border-left:1px solid;
    height:100%;
    float:right;
}

.lv-form-select .lv-form-select-panel{
    width:calc(100% - 2px);
    position:absolute;
    border:1px solid;
    padding:5px 0px;
    top:calc(100% + 3px);
    background-color:#fff;
    z-index:10;
}


.lv-form-select .lv-form-select-item{
    padding:0px 5px;
}

.lv-form-select-item.lv-selected{
    background-color:red;
}

.lv-form-select-item-selected{
    padding:1px 5px;
    margin:1px 5px;
    border:1px solid;
    display:inline-block;
    font-size:8px;
    border-radius:5px;
}
</style>