<template>
  <div class="lv-types">
    <Card ref="card" :cardClass="'lv-fullpage-card'">
        <div class="lv-types-title">全部频道</div>
        <div class="lv-selected-news">
          <div class="lv-news-type-modify-text">
            <span>我的频道，点击进入频道</span>
            <div>编辑</div>
          </div>
          <div class="lv-news-type-modify"
            v-for="type in newsTypes" :key="type.id"
            :class="{'selected':type.id == currentNewsType.id, 'fixed':type.fixed}">
              {{type.text}}
          </div>
        </div>
        <div class="lv-unselected-news">
          <div class="lv-news-type-modify-text">
            <span>更多频道，点击添加频道</span>
          </div>
          <div class="lv-news-type-modify"
            v-for="type in newsTypes" :key="type.id">
              {{type.text}}
          </div>
        </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import {mapState} from 'vuex';
export default {
    components:{
        Card
    },
    computed:{
      ...mapState({
        selectedNewsTypes: state=>state.config.selectedNewsTypes,
        newsTypes: state=>state.config.newsType,
        currentNewsType: state=>state.config.currentNewsType
      })
      
    },
    methods:{
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
