<template>
    <div class="a-form-dialog a-page-center">
        <DragContainer>
            <div class="a-form-dialog-container">
                <div class="a-form-dialog-title">
                    {{option.metaData.title}}
                    <div class="fa fa-close" @click.stop="close"></div>
                </div>
                <div class="a-row-container a-row-center"
                    v-for="elem in option.metaData.forms" :key="elem.name">
                    <span class="a-span-3">{{elem.label}}</span>
                    <input  class="a-span-7" :type="elem.type" 
                        :placeholder="elem.placeholder" v-model="data[elem.name]"
                        :name="elem.name"/>
                </div>
                <div class="a-confirm-btns">
                    <div class="a-confirm-ok" @click="ok">确定</div>
                    <div class="a-confirm-cancel" @click="cancel">取消</div>
                </div>
            </div>
        </DragContainer>
    </div>
</template>

<script>
import DragContainer from '../controls/DragContainer';
export default {
    props:["option"],
    computed:{

    },
    components:{
        DragContainer
    },
    data:function(){
        return {
            data:{}
        }
    },
    methods:{
        close(){
            this.aDialog.close();
        },
        ok(){
            if(this.option.callback){
                this.option.callback(this.data);
            }
        },
        cancel(){
            this.aDialog.close();
        }
    },
    mounted(){
        if(this.option.metaData && this.option.metaData.forms){
            for(var elem in this.option.metaData.forms){
                this.data[this.option.metaData.forms[elem].name] = null;
            }
        }
    }
}
</script>

<style>

.a-form-dialog{
    width:80%;
    
}


.a-form-dialog-container{
    width:100%;
    line-height:20px;
    vertical-align:middle !important;
    text-align:center;
    font-size:14px !important;
    color:#888888;
}
.a-form-dialog-title{
    border-bottom:1px solid #c7c7c7;
    position:relative;
    height:30px;
    line-height:30px !important;
    font-size:18px !important;
    text-align:center;
}

.a-form-dialog-title .fa-close{
    position:absolute;
    right:5px;
    top:0;
    bottom:0;
    display:table;
    margin:auto;
}

.a-form-dialog .a-confirm-btns{
    border-top:1px solid #c7c7c7;

}
</style>

