<template>
  <div class="lv-personal">
    <Card ref="card" :cardClass="'lv-fullpage-card'">
        <div class="lv-personal-head">
            <div @click="back" class="lv-personal-return fa fa-angle-left"></div>个人信息
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-user-o"></div>
            <div class="lv-media-text">姓名</div> 
            <div class="lv-media-value">
                <span v-show="!modifyState">{{currentUser.Name}}</span>
                <input v-show="modifyState" type="text" placeholder="请输入您的姓名" v-model="currentUser.Name"/>
            </div>
        </div>
        <div class="lv-seperator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-venus-mars"></div>
            <div class="lv-media-text">性别</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value" @click="selectGender">{{strGender}}</div>
        </div>
        <div class="lv-seperator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-calendar"></div>
            <div class="lv-media-text">出生日期</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value" @click="selectBirth">{{strBirth}}</div>
        </div>
        <div class="lv-seperator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-calendar"></div>
            <div class="lv-media-text">入党日期</div> 
            <div class="lv-media-arrow fa fa-angle-right"></div> 
            <div class="lv-media-value" @click="selectParty">{{strParty}}</div>
        </div>
        <div class="lv-seperator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-users"></div>
            <div class="lv-media-text">党支部</div>
            <div class="lv-media-value">
                <span v-show="!modifyState">{{strPartyName}}</span>
                <input v-show="modifyState"  type="text" placeholder="选填" v-model="currentUser.Branch"/>
            </div>
        </div>
        <div class="lv-seperator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-envelope-o"></div>
            <div class="lv-media-text">邮箱</div>
            <div class="lv-media-value">
                <span v-show="!modifyState">{{currentUser.Email}}</span>
                <input v-show="modifyState" type="text" placeholder="请输入您的邮箱" v-model="currentUser.Email"/>
            </div>
        </div>
        <div class="lv-seperator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-mobile"></div>
            <div class="lv-media-text">手机号码</div>
            <div class="lv-media-value">
                <span v-show="!modifyState">{{currentUser.PhoneNumber}}</span>
                <input v-show="modifyState" type="text" placeholder="请输入手机号码"  v-model="currentUser.PhoneNumber"/>
            </div>
        </div>
        <div class="lv-personal-modify-btn" @click="modify">{{strBtn}}</div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import moment from 'moment';
import {mapState, mapMutations} from 'vuex';
export default {
    data:function(){
        return {
            birth: new Date(2019, 9, 1),
            party: new Date(2018, 8, 1),
            modifyState:false
        }
    },
    computed:{
        ...mapState({
            currentUser: state=>state.config.currentUser,
            BaseUrl:state=>state.config.BaseUrl,
        }),
        strBirth(){
            return this.currentUser.BirthDay != null ? moment(this.currentUser.BirthDay).format("YYYY-MM-DD"):"必填";
        },
        strParty(){
            return this.currentUser.JoinCPDay != null ? moment(this.currentUser.JoinCPDay).format("YYYY-MM-DD"):"选填";
        },
        strBtn(){
            return this.modifyState ? "完成":"修改";
        },
        strGender(){
            return this.currentUser.Gender?"男":"女";
        },
        strPartyName(){
            return this.currentUser.Branch != null && this.currentUser.Branch.trim().length > 0 ? this.currentUser.Branch:"选填";
        }
    },
    components:{
        Card
    },
    methods:{
        ...mapMutations(['changeCurrentUser']),
        back(){
            this.$router.back();
        },
        selectBirth(){
            if(this.modifyState){
                this.cardsEventBus.$emit('showDialog', {
                    type:'timepicker', currentDate:moment(this.currentUser.BirthDay, 'YYYY-MM-DD HH:mm:ss').valueOf(),
                    callback:this.changeBirthdayCallback
                });
            }
        },
        changeBirthdayCallback(date){
            this.currentUser.BirthDay = moment(date).format('YYYY-MM-DD');
        },
        selectParty(){
            if(this.modifyState){
                this.cardsEventBus.$emit('showDialog', {
                    type:'timepicker', currentDate:moment(this.currentUser.JoinCPDay, 'YYYY-MM-DD HH:mm:ss').valueOf(),
                    callback:this.changePartydayCallback
                });
            }
        },
        changePartydayCallback(date){
            this.currentUser.JoinCPDay = moment(date).format('YYYY-MM-DD');
        },
        modify(){
            if(this.modifyState){
                this.modifyState = false;
                
                if(this.currentUser.Name == null || this.currentUser.Name.trim().length == 0){
                    this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"请填写用户名称"});
                    return;
                }
                if(this.currentUser.BirthDay == null){
                    this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"请填写生日"});
                    return;
                }
                if(this.currentUser.Email == null || this.currentUser.Email.trim().length == 0){
                    this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"请填写邮箱"});
                    return;
                }
                if(this.currentUser.PhoneNumber == null || this.currentUser.PhoneNumber.trim().length == 0){
                    this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"请填写电话"});
                    return;
                }
                this.$store.commit('changeCurrentUser', this.currentUser);
                this.cardsEventBus.$emit('showDialog', {type:'load'});
                var user = this.currentUser;
                this.$http.post(this.BaseUrl + "/user/register", 
                    {
                        user:user
                    }).then(function(resp){
                        this.cardsEventBus.$emit('hideDialog');
                        var res = JSON.parse(resp.bodyText);
                        if(res == 1){
                            this.cardsEventBus.$emit('showDialog', {type:"alert",title:"修改用户信息", message:"修改成功"});
                            this.registerSuccess();
                        } else if(res == 0){
                            this.cardsEventBus.$emit('showDialog', {type:"alert",title:"修改用户信息", message:"修改失败"});
                            this.getUser();
                        }
                    });
            } else {
                this.modifyState = true;
            }
        },
        getUser(){
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
        },
        selectGender(){
            if(this.modifyState){
                this.cardsEventBus.$emit('showDialog', {
                    type:'select', 
                    position:"middle", 
                    title:"性别", 
                    items:[
                        {text:"男", value:true}, 
                        {text:"女", value:false}
                    ],
                    callback:this.selectGenderCallback});
            }
            
        },
        selectGenderCallback(gender){
            this.currentUser.Gender = gender.value;
        },
    },
    inject:['cardsEventBus'],
}
</script>

<style>
.lv-personal .lv-fullpage-card{
    background-color:#fff !important;
}
.lv-personal-head{
    width:100%;
    height:44px;
    text-align:center;
    line-height:44px !important;
    vertical-align:middle !important;
    color:#fff;
    background-color:#db3445;
    font-size:17px !important;
}

.lv-personal-return{
    float:left;
    color:#FEFFFE;
    height:44px;
    text-align:center;
    line-height:44px !important;
    vertical-align:middle !important;
    font-size:30px !important;
    width:30px;
}

.lv-personal-modify-btn{
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
