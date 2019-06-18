<template>
  <div>
    
    <Card ref="card" :cardClass="'lv-main-card'">
        <div>
            <Header :title="'lv-ui'"></Header>
            <button @click="showdialog">{{language}}</button>
            <button @click="showalertdialog">alert</button>
        </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import Header from './Header';

export default {
    components:{
        Card, Header
    },
    data:function(){
        return{
            language:'中文'
        }
    },
    inject:['cardsEventBus'],
    methods:{
        openNewPage(){
           this.$router.push('/detail'); 
        },
        showdialog(){
            var _this = this;
            this.cardsEventBus.$emit('showDialog', {
                type:'select', title:'language', items:[
                    {text:'english', value:'1'},
                    {text:'中文', value:'2'}
                ], callback:_this.changeLanguage
            });
        },
        changeLanguage(language){
            this.language = language.text;
        },
        showalertdialog(){
            this.cardsEventBus.$emit('showDialog', {
                type:'alert', title:'alert', 
                message:"附件打开拉萨附近打算离开房间附件打开拉萨附近打算离开房间附件打开拉萨附近打算离开房间附件打开拉萨附近打算离开房间"
            });
        }
    },
    activated(){
        this.$refs.card.resotreScrollPos();
    },
    beforeRouteLeave(to, from, next){
        this.$refs.card.saveScrollPos();
        next();
    }
}
</script>

<style>
</style>
