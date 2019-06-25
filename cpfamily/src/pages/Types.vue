<template>
  <div class="lv-types">
    <Card ref="card" :cardClass="'lv-fullpage-card'">
        <div class="lv-types-title">全部频道</div>
        <div class="lv-selected-news">
          <div class="lv-news-type-modify-text">
            <span>我的频道，点击进入频道</span>
            <div @click="modifyTypes">{{stateButtonText}}</div>
          </div>
          <div class="lv-news-type-modify"
            v-for="type in selectedNewsTypes" :key="type.id" @click="removeTypes(type)"
            :class="{'selected':type.id == currentNewsType.id, 'fixed':type.fixed}">
              {{type.text}}
          </div>
        </div>
        <div class="lv-unselected-news">
          <div class="lv-news-type-modify-text">
            <span>更多频道，点击添加频道</span>
          </div>
          <div class="lv-news-type-modify"
            v-for="type in unselected" :key="type.id" @click="addTypes(type)">
              {{type.text}}
          </div>
        </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import {mapState, mapMutations, mapGetters} from 'vuex';
export default {
    data:function(){
      return {
        state: 0,   //0:未编辑，1：编辑
      }
    },
    components:{
        Card
    },
    computed:{
      ...mapState({
        selectedNewsTypes: state=>state.config.selectedNewsTypes,
        newsTypes: state=>state.config.newsType,
        currentNewsType: state=>state.config.currentNewsType,
        unselected:state=>state.config.unselected,
        addSelectedNewsTypes:state=>state.config.addSelectedNewsTypes,
        removeSelectedNewsTypes:state=>state.config.removeSelectedNewsTypes,
        addunselected:state=>state.config.addunselected,
        removeunselected:state=>state.config.removeunselected,
        BaseUrl:state=>state.config.BaseUrl,
      }),
      stateButtonText(){
        return this.state == 0 ? "编辑":"完成";
      }
    },
    methods:{
      ...mapMutations(['changeNewsType']),
      ...mapGetters(['getUnselectedNewsType']),
      modifyTypes(){
        if(this.state == 0){
          this.state = 1;
        } else {
          this.state = 0;
          this.$http.post(this.BaseUrl + "/home/SelectedTypeByUser", {userid:"abc", types:[1,2,3]});
        }
      },
      addTypes(type){
        if(this.state == 1){
          this.$store.commit('removeunselected', type);
          this.$store.commit('addSelectedNewsTypes', type);
        }
      },
      removeTypes(type){
        if(this.state == 1 && type.id != this.currentNewsType.id){
          this.$store.commit('removeSelectedNewsTypes', type);
          this.$store.commit('addunselected', type);
        }
      }
    },
    mounted(){
        this.$http.get(this.BaseUrl + "/home/getalltypes").then(function(resp){
             this.$store.commit('changeNewsType', resp.body);
        });
    }
}
</script>

<style>
  .lv-types-title{
    width:100%;
    font-size:18px;
    color:black;
    text-align:center;
    margin-top:20px;
  }

  .lv-news-type-modify{
    width:calc(25% - 20px);
    height:30px;
    line-height:30px;
    margin:10px;
    vertical-align:middle;
    background-color:#ddd;
    border-radius:5px;
    text-align:center;
    display:inline-block;
  }

  .lv-news-type-modify.selected{
    color:#de2910;
  }

  .lv-news-type-modify.fixed{
    background-color:#eee;
  }

  .lv-news-type-modify-text{
    height:40%;
    line-height:40px;
    vertical-align:middle;
    width:calc(100% - 20px);
    margin:10px;
    color:#aaa;
  }

  .lv-news-type-modify-text div{
    float:right;
    width:75px;
    height:30px;
    border:1px solid #de2910;
    text-align:center;
    border-radius:15px;
    margin-top:5px;
    line-height:30px;
    color:#de2910;
  }
</style>
