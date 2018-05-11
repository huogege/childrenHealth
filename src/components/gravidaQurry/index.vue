<template>
    <div class="qurry">
        <div class="container">
            <div class="img" v-show="type == 1">
                <img src="./bmg1.png" alt="">
            </div>
             <div class="img" v-show="type == 2">
                <img src="./bmg2.png" alt="">
            </div>
            <div class="content">
                <div class="wrapper1" v-show="wrapper1Show">
                     <div class="cell">
                        <span class="icon icon_1">您的姓名</span>
                        <input class="input" type="text" placeholder="请填写您的姓名" v-model="name" @change="checkName(name)">
                    </div>
                    <div class="cell">
                        <span class="icon icon_2">身份证号</span>
                        <input class="input" type="text" placeholder="请填写您的身份号码" v-model="cardno" @change="checkNo(cardno)">
                    </div>
                </div>   
                 <div class="wrapper2" v-show="wrapper2Show">
                        <div class="cell">
                            <p class="remindWord">系统将向您号码为：{{phone.substr(0, 3) + '****' + phone.substr(7)}}的手机发送验证码</p>
                            <span class="icon icon_4">&nbsp;&nbsp;</span>
                            <input class="input" type="text" placeholder="请输入验证码" v-model="identifyCode" style="width:100px;margin-left:0">
                            <input style="color:#00c853;padding: 5px;border-radius: 5px;" @click=" flag && postCode(phone)" v-model="countDown" type="button">
                        </div>
                </div>                     
            </div>  
            <div class="qurry_btn" @click="request" v-show="qurryShow">查询</div>
            <div class="qurry_btn" @click="nextDo" v-show="nextShow">下一步</div>
        </div>
  </div>
</template>
<script>    
import fn from '../../common/js/index.js'
import url from "../../common/js/url.js"
const URL = url.url2;
const URL2 = url.url1;
export default {
    data(){
        return{
            // name:'高云兰',
            // cardno:'510228196509145304',
            name:'',
            cardno:'',
            type:1,
            identifyCode:'',
            code:'',
            wrapper1Show:true,
            wrapper2Show:false,
            btnShow:true,
            phone:'',
            qurryShow:true,
            nextShow:false,
            countDown:'点击获取验证码',
            flag:true
        }
    },
    methods:{
        checkNo: function (value){ 
            if(!value || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(value)){
                alert("身份证号格式错误");
                this.cardno = "";
                return false;
            }
        },
        checkName:function(value){
            if(!(/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(value))){ 
                alert("您的输入有误，请重填"); 
                this.name = '';
                return false; 
            }
        },
        checkphone(value){
             if(!(/^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/.test(value))){ 
                alert("您的输入有误，请重填"); 
                this.phone = '';
                return false; 
            }
        },
        request(){
            var _this = this;
            if(this.name != '' && this.cardno != ''){
                this.$http.post(URL + 'grxx',this.$qs.stringify({
                    name:this.name,
                    cardno:this.cardno
                }))
                .then(function(res){
                    let response = res.data;
                    if(response.rtnCode == "0000"){
                        if(response.data && response.data.sd1etjk.length>0){
                            let data = response.data.sd1etjk[0];
                            localStorage.setItem('cardno',_this.cardno);
                            localStorage.setItem('name',_this.name);
                            localStorage.setItem('id',data.iD);

                            let phone = '';
                            if(data['本人电话'] != ""){
                                phone = data['本人电话'];
                            }else if(data['联系人电话']){
                                phone = data['联系人电话'];
                            }
                            if(phone != ""){
                                _this.wrapper1Show = false;
                                _this.wrapper2Show = true;
                                _this.qurryShow = false;
                                _this.nextShow = true;
                                _this.phone = phone;  
                                localStorage.setItem('phone',phone);                       
                            }else{
                                alert("您未还注册,无法访问！");
                            } 
                           
                        }else{
                             alert("您未还注册,无法访问！");
                        }
                    }
                })
            }
        },
        postCode(phone){
            let _this = this;
            this.$http.post(URL2 + 'sendCode',this.$qs.stringify({
                    phone:phone,
                }))
                .then(function(res){
                    let response = res.data;
                    if(response.rtnCode == "0000"){  
                        _this.code = response.data.code; 
                        _this.countDown = 60;
                        let timer = null;
                        _this.flag = false;
                        timer = setInterval(function(){
                                _this.countDown--;
                                if(_this.countDown == 0){
                                    clearInterval(timer);
                                    _this.countDown = '点击发送验证码';
                                    _this.flag = true;
                                }
                        },1000)
                    }
                })
        },
        time(o) {
            if (wait == 0) {
                o.removeAttribute("disabled");   
                o.value="免费获取验证码";
                wait = 60;
            } else {      
                o.setAttribute("disabled", true);
                o.value="重新发送(" + wait + ")";
                wait--;
                setTimeout(function() {
                    time(o)
                },1000)}
            },
        nextDo(){
            if(this.identifyCode == ""){
                alert("请输入验证码");
            }else if(this.identifyCode == this.code){
                if(this.type == 1){
                    this.$router.push({path:'/QurryResult', query: {}}); 
                }else{
                    this.$router.push({path:'/QurryResultChild', query: {}}); 
                }   
                
            }else{
                alert("请输入正确的验证码！")
            }
        }
    },
    created(){
        let type = fn.QueryString("type");
        if(type == 2){
            this.type = 2;
        }
    },

}
</script>

<style lang="less" scoped>
    .qurry{
        .container{
            .img{
                width: 375px;
                height:259px;
                img{
                    width: 375px;
                }
            }
            .content{
                padding-left: 15px;
                margin-bottom: 50px;
                .remindWord{
                    line-height: 50px;
                    color: #999;
                    border-bottom: 1px solid #999;
                    margin-right:18px;
                }
                .cell{
                    height: 70px;
                    line-height: 70px;
                    font-size: 14px;
                    border-bottom: 1px solid #eee;
                    &:last-child{
                        border: none;
                    }
                    .icon_1{
                        display: inline-block;
                        text-indent: 25px;
                        background-image: url('./icon_1.png');
                        background-size: 12.5px 14px;
                        background-repeat: no-repeat;
                        background-position: 0;
                    }
                    .icon_2{
                        display: inline-block;
                        text-indent: 25px;
                        background-image: url('./icon_2.png');
                        background-size: 13.5px 11.5px;
                        background-repeat: no-repeat;
                        background-position: 0;
                    }
                     .icon_3{
                        display: inline-block;
                        text-indent: 25px;
                        background-image: url('./icon_3.png');
                        background-size: 18.5px 18.5px;
                        background-repeat: no-repeat;
                        background-position: 0;
                    }
                     .icon_4{
                        display: inline-block;
                        text-indent: 12px;
                        background-image: url('./icon_4.png');
                        background-size: 18.5px 18.5px;
                        background-repeat: no-repeat;
                        background-position: 0;
                    }
                    .input{
                        width: 200px;
                        height: 40px;
                        margin-left: 20px;
                    }
                    
                }
            }  
            .qurry_btn{
                width: 100px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                color: #fff;
                background-color: #12bc7e;
                font-size: 15px;
                border-radius: 20px;
                margin: 0 auto;
            }
        }
    }
</style>
