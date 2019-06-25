<template>
  <div class="lv-my">
    <Card ref="card" :cardClass="'lv-main-card'">
        <div v-show="showRegister">
            <div class="lv-my-head">泾彩党建</div>
            <img class="lv-unregister-img" src="register.png"/>
            <div class="lv-unregister-tip">您尚未注册！点击注册吧</div>
            <div class="lv-unregister-btn" @click="register">注册</div>
        </div>
        <div v-show="!showRegister">
            <div class="lv-my-head">个人中心</div>
            <div class="lv-my-infos">
                <div class="lv-my-img">
                    <img style="width:62px;height:62px;border-radius:31px" :src="img"/>
                </div>
                <div class="lv-my-info">
                    <div class="lv-my-name">{{Name}}</div>
                    <div class="lv-my-point">{{Score}}</div>
                </div>
                <div class="lv-my-sign">
                    已签到
                </div>
            </div>
            <div class="lv-my-sepearator"></div>
            <div class="lv-media-list-item" @click="openPersonalCenter">
                <div class="lv-media-icon fa fa-address-card"></div>
                <div class="lv-media-text">个人信息</div> 
                <div class="lv-media-arrow fa fa-angle-right"></div> 
            </div>
            <div class="lv-media-list-item-sepearator"></div>
            <div class="lv-media-list-item" @click="openMyEvent">
                <div class="lv-media-icon fa fa-users"></div>
                <div class="lv-media-text">参与的活动</div> 
                <div class="lv-media-arrow fa fa-angle-right"></div> 
            </div>
        </div>
        
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import {mapState, mapMutations} from 'vuex';
export default {
    components:{
        Card
    },
    computed:{
        ...mapState({
            currentUser: state=>state.config.currentUser,
            BaseUrl:state=>state.config.BaseUrl,
        }),
        showRegister(){
            return this.currentUser == null;
        },
        Name(){
            return this.currentUser != null ? this.currentUser.Name:"unknown";
        },
        Score(){
            return this.currentUser != null ? this.currentUser.Score:0;
        },
        img(){
            return this.currentUser != null ? this.currentUser.HeadImgURL:"unknown";
        }
    },
    methods:{
        ...mapMutations(['changeCurrentUser']),
        openPersonalCenter(){
            this.$router.push("/personal");
        },
        register(){
            this.$router.push("/register");
        },
        openMyEvent(){
            this.$router.push("/myevents");
        }
    },
    activated(){
        this.$refs.card.resotreScrollPos();
    },
    beforeRouteLeave(to, from, next){
        this.$refs.card.saveScrollPos();
        next();
    },
    inject:['cardsEventBus'],
    mounted(){
        this.cardsEventBus.$emit('showDialog', {type:'load'});
        this.$http.post(this.BaseUrl + "/user/getuser", 
            {id:1}).then(function(resp){
                this.cardsEventBus.$emit('hideDialog');
                var res = JSON.parse(resp.bodyText);
                if(res == null){
                    this.$store.commit('changeCurrentUser', null);
                } else {
                    this.$store.commit('changeCurrentUser', res);
                }
            });
    }
}
</script>

<style>
.lv-my .lv-main-card{
    background-color:#fff !important;
}
.lv-my-head{
    width:100%;
    height:44px;
    text-align:center;
    line-height:44px;
    vertical-align:middle;
    color:#fff;
    background-color:#db3445;
}

.lv-my-infos{
    width:100%;
    height:120px;
    background-color:#db3445;
}

.lv-my-img{
    width:62px;
    height:62px;
    border-radius:31px;
    margin:29px 17px;
    float:left;
    background-color:#fff;
}

.lv-my-info{
    width:62px;
    height:62px;
    margin:38px 0px;
    float:left;
}

.lv-my-name{
    height:24px;
    line-height:24px;
    vertical-align:middle;
    font-size:17px;
    color:#fefffe;
}

.lv-my-point{
    height:17px;
    line-height:17px;
    vertical-align:middle;
    font-size:12px;
    color:#ffffff;
    background-image:url(/diamonds.svg);
    background-repeat:no-repeat;
    background-position:left center;
    background-size:17px 17px;
    padding-left:20px;
    margin-top:5px;
}

.lv-my-sign{
    width:75px;
    height:25px;
    line-height:25px;
    vertical-align:middle;
    font-size:12px;
    color:#ffffff;
    margin:48px 13px;
    float:right;
    border:1px solid #fefefe;
    border-radius:3px;
    text-align:center;
}

.lv-my-sepearator{
    width:100%;
    height:15px;
    background-color:#eaeaea;
}

.lv-media-list-item{
    padding:15px;
}
.lv-media-list-item div{
    height:23px;
    line-height:23px !important;
    vertical-align:middle !important;
    display:inline-block;
    font-size:17px !important;
}

.lv-media-list-item .lv-media-icon{
    color:#d93344;
    margin-right:20px;
}

.lv-media-list-item .lv-media-text{
    
    color:#333333;
}

.lv-media-list-item .lv-media-value{
    float:right;
    color:#cccccc;
    margin-right:5px;
}

.lv-media-list-item .lv-media-arrow{
    float:right;
    color:#cccccc;
}

.lv-media-list-item-sepearator{
    width:100%;
    height:0px;
    border-bottom:1px solid #d3d3d3;
}

.lv-unregister-img{
    width:127px;
    height:106px;
    display:block;
    margin:89px auto;
    margin-bottom:0px;
}

.lv-unregister-tip{
    text-align:center;
    font-size:17px;
    color:#333333;
    height:56px;
    line-height:56px;
    vertical-align:middle;
    margin-top:30px;
}

.lv-unregister-btn{
    width:60%;
    height:50px;
    line-height:49px;
    vertical-align:middle;
    text-align:center;
    color:#fff;
    background-color:#db3445;
    margin:30px auto;
    border-radius:25px;
}
</style>
