<template>
  <div class="lv-personal">
    <Card ref="card" :cardClass="'lv-fullpage-card'">
        <div class="lv-personal-head">
            <div @click="back" class="lv-personal-return fa fa-angle-left"></div>用户注册
        </div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-user-o"></div>
            <div class="lv-media-text">姓名</div> 
            <div class="lv-media-value"><input type="text" placeholder="请输入您的姓名" v-model="name"/></div>
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
            <div class="lv-media-value"><input type="text" placeholder="选填" v-model="partyname"/></div>
        </div>
        <div class="lv-seperator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-envelope-o"></div>
            <div class="lv-media-text">邮箱</div>
            <div class="lv-media-value"><input type="text" placeholder="请输入您的邮箱" v-model="email"/></div>
        </div>
        <div class="lv-seperator"></div>
        <div class="lv-media-list-item">
            <div class="lv-media-icon fa fa-mobile"></div>
            <div class="lv-media-text">手机号码</div>
            <div class="lv-media-value"><input type="text" placeholder="请输入手机号码"  v-model="phone"/></div>
        </div>
        <div class="lv-register-btn" @click="register">注册</div>
    </Card>
  </div>
</template>

<script>
import Card from '../components/cards/Card';
import {mapState,mapMutations} from 'vuex';
import moment from 'moment';
export default {
    data:function(){
        return {
            gender:true,
            birth:null,
            party:null,
            name:"",
            partyname:"",
            email:"",
            phone:""
        }
    },
    computed:{
        strGender(){
            return this.gender?"男":"女";
        },
        strBirth(){
            return this.birth != null ? moment(this.birth).format("YYYY-MM-DD"):"必填";
        },
        strParty(){
            return this.party != null ? moment(this.party).format("YYYY-MM-DD"):"选填";
        },
        ...mapState({
            BaseUrl:state=>state.config.BaseUrl,
        }),
    },
    components:{
        Card
    },
    methods:{
        ...mapMutations(['changeCurrentUser']),
        back(){
            this.$router.back();
        },
        selectGender(){
            this.cardsEventBus.$emit('showDialog', {
                type:'select', 
                position:"middle", 
                title:"性别", 
                items:[
                    {text:"男", value:true}, 
                    {text:"女", value:false}
                ],
                callback:this.selectGenderCallback});
        },
        selectGenderCallback(gender){
            this.gender = gender.value;
        },
        selectBirth(){
            this.cardsEventBus.$emit('showDialog', {
                type:'timepicker', 
                currentDate:this.birth,
                controlType:"date",
                callback:this.selectBirthCallback});
        },
        selectBirthCallback(date){
            this.birth = new Date(date);
        },
        selectParty(){
            this.cardsEventBus.$emit('showDialog', {
                type:'timepicker', 
                currentDate:this.party,
                controlType:"date",
                callback:this.selectPartyCallback});
        },
        selectPartyCallback(date){
            this.party = new Date(date);
        },
        register(){
            if(this.name == null || this.name.trim().length == 0){
                this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"请填写用户名称"});
                return;
            }
            if(this.birth == null){
                this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"请填写生日"});
                return;
            }
            if(this.email == null || this.email.trim().length == 0){
                this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"请填写邮箱"});
                return;
            }
            if(this.phone == null || this.phone.trim().length == 0){
                this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"请填写电话"});
                return;
            }
            this.cardsEventBus.$emit('showDialog', {type:'load'});
            var user = {
                OpenId:"123",
                Name:this.name,
                Gender:this.gender,
                BirthDay:moment(this.birth).format("YYYY-MM-DD"),
                PhoneNumber:this.phone,
                Email:this.email,
                Branch:this.partyname
            };
            if(this.party != null){
                user.JoinCpDay = moment(this.party).format("YYYY-MM-DD");
            }
            this.$http.post(this.BaseUrl + "/user/register", 
                {
                    user:user
                }).then(function(resp){
                    this.cardsEventBus.$emit('hideDialog');
                    var res = JSON.parse(resp.bodyText);
                    if(res == 1){
                        this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"注册成功"});
                        this.registerSuccess();
                    } else if(res == 0){
                        this.cardsEventBus.$emit('showDialog', {type:"alert",title:"用户注册", message:"注册失败"});
                    }
                });
        },
        registerSuccess(){
            this.cardsEventBus.$emit('showDialog', {type:'load'});
            this.$http.post(this.BaseUrl + "/user/getuser", 
                {id:2}).then(function(resp){
                    this.cardsEventBus.$emit('hideDialog');
                    var res = JSON.parse(resp.bodyText);
                    if(res == null){
                        this.$store.commit('changeCurrentUser', null);
                    } else {
                        this.$store.commit('changeCurrentUser', res);
                    }
                });
            this.$router.back();
        }
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

.lv-media-icon{
    width:30px;
    text-align:center;
}

.lv-register-btn{
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

.lv-media-list-item .lv-media-value input{
    outline:none;
    border:none;
    text-align:right;
    height:23px;
    line-height:23px;
    vertical-align:middle;
    color:#cccccc;
    font-size:17px;
    width:150px;
    border-bottom:1px solid transparent;
}

.lv-media-list-item .lv-media-value input:focus{
    border-bottom:1px solid #d3d3d3;
}

::-webkit-input-placeholder { color:#cccccc; }
::-moz-placeholder { color:#cccccc; } /* firefox 19+ */
:-ms-input-placeholder { color:#cccccc; } /* Internet Explorer 10+ */
:-moz-placeholder { color:#cccccc; } 
</style>
