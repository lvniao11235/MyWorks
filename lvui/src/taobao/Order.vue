<template>
  <div class="lv-order">
    <Card ref="card" :cardClass="'lv-main-card'">
      <div class="lv-order-types">
        <div class="lv-order-type selected"><span>全部</span></div>
        <div class="lv-order-type"><span>待付款</span></div>
        <div class="lv-order-type"><span>代发货</span></div>
        <div class="lv-order-type"><span>待收货</span></div>
        <div class="lv-order-type"><span>待评价</span></div>
      </div>
      <div class="lv-order-search">
        <input type="text" placeholder="搜索全部订单"/>
        <div>搜索</div>
      </div>
      <div class="lv-order-item">
      </div>
      <div class="lv-order-item">
      </div>
      <div class="lv-order-item">
      </div>
      <div class="lv-order-item">
      </div>
      <div class="lv-order-item">
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
export default {
    components:{
        Card
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
.lv-order .lv-main-card{
  background-color:#f5f5f5;
}
.lv-order-types{
  width:100%;
  height:40px;
  background-color:#fff;
  font-size:0px;
}

.lv-order-type{
  width:20%;
  height:40px;
  
  text-align:center;
  display:inline-block;
  font-size:14px;
}

.lv-order-type span{
  display:inline-block;
  height:38px;
  line-height:38px;
  vertical-align:middle;
  
}

.lv-order-type.selected span{
  color:rgb(255, 80, 0);
  border-bottom:2px solid rgb(255, 80, 0);
}

.lv-order-search{
  width:calc(100% - 20px);
  height:26px;
  margin:10px;
}

.lv-order-search input{
  width:calc(100% - 110px);
  height:26px;
  float:left;
  border:none;
  outline:none;
  border-radius:13px;
  padding-left:25px;
  background-image:url(/find-black.svg);
  background-size:20px 20px;
  background-repeat:no-repeat;
  background-position:5px center;
  font-size:14px;
}

.lv-order-search div{
  width:75px;
  height:26px;
  line-height:26px;
  vertical-align:middle;
  border-radius:13px;
  background-color:#ff5000;
  color:#fff;
  float:right;
  text-align:center;
}

.lv-order-item{
  width:calc(100% - 20px);
  height:100px;
  margin:10px;
  background-color:#fff;
  border-radius:12px;
}
</style>
