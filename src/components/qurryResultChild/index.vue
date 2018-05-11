<template>
  <div class="qurryResult">
      <div class="container">
            <div class="head">
                <h2 class="title">基本信息</h2>              
                <ul>
                    <li>
                        <p class="key">姓名</p>
                        <p class="value">{{name}}</p>
                    </li>
                    <li>
                        <p class="key">性别</p>
                       <p class="value" v-if="before.length>0">{{before[0]['性别']!="" ? before[0]['性别'] : '无数据'}}</p>
                    </li>
                    <li>
                        <p class="key">身份证号</p>
                        <p class="value">{{cardno}}</p>
                    </li>
                    <li>
                        <p class="key">家庭地址</p>
                        <p class="value" v-if="before.length>0">{{before[0]['家庭地址']!="" ? before[0]['家庭地址'] : '无数据'}}</p>
                    </li>
                    <li>
                        <p class="key">父亲姓名</p>
                        <p class="value" v-if="before.length>0">{{before[0]['父亲姓名']!="" ? before[0]['父亲姓名'] : '无数据'}}</p>
                    </li>
                     <li>
                        <p class="key">父亲电话</p>
                        <p class="value" v-if="before.length>0">{{before[0]['父亲联系电话']!="" ? before[0]['父亲联系电话'] : '无数据'}}</p>
                    </li>
                </ul>         
            </div>
            <div class="content">
                <h2 class="title">儿童保健记录</h2>
                <ul class="cell_content">
                    <div class="bottom_border">

                        <li class="cell" @click="jumpDetail(index,judeType(item),'before')" v-for="(item,index) in before">
                            <div class="circle">
                                <div class="left left_border">
                                    <div class="icon" :class="judeType(item) ? 'green greenBmg' : ''" style="fontSize:16px">新</div>
                                    <p class="word">新生儿</p>
                                </div>
                            </div>
                            <div class="right">
                                <p class="time">访问日期: <span class="value">{{judeType(item) ? item['随访日期'] : '待定'}}</span></p>
                                <p class="msg">总体评估:  <span class="value">{{judeType(item) ? item['总体评估异常'] : '未评估'}}</span></p>
                            </div>
                        </li>
                         <li class="cell" @click="jumpDetail(index,judeType(item),'befores')" v-for="(item,index) in befores" >
                            <div class="circle">
                                <div class="left left_border">
                                    <div class="icon" :class="judeType(item) ? 'green greenBmg' : ''" style="fontSize:16px">1-2</div>
                                    <p class="word">1到2岁</p>
                                </div>
                            </div>
                            <div class="right">
                                <p class="time">访问日期: <span class="value">{{judeType(item) ? item['随访日期'] : '待定'}}</span></p>
                                <p class="msg">总体评估:  <span class="value">{{judeType(item) ? item['总体评估异常'] : '未评估'}}</span></p>
                            </div>
                        </li>     
                         <li class="cell" @click="jumpDetail(index,judeType(item),'after')" v-for="(item,index) in after">
                            <div class="circle">
                                <div class="left left_border">
                                    <div class="icon" :class="judeType(item) ? 'green greenBmg' : ''" style="fontSize:16px">3-6</div>
                                    <p class="word">3到6岁</p>
                                </div>
                            </div>
                            <div class="right">
                                <p class="time">访问日期: <span class="value">{{judeType(item) ? item['随访日期'] : '待定'}}</span></p>
                                <p class="msg">总体评估:  <span class="value">{{judeType(item) ? item['总体评估异常'] : '未评估'}}</span></p>
                            </div>
                        </li>                                          
                    </div>      
                </ul>
            </div>
      </div>
  </div>
</template>
<script>
import fn from '../../common/js/index.js'
import url from "../../common/js/url.js"

const URL = url.url2;
export default {
    data(){
        return{
            cardno:localStorage.getItem('cardno'),
            name:localStorage.getItem('name'),
            before:JSON.parse(localStorage.getItem('before')) ? JSON.parse(localStorage.getItem('before')) : [],
            befores:JSON.parse(localStorage.getItem('befores')) ? JSON.parse(localStorage.getItem('befores')) : [],
            after:JSON.parse(localStorage.getItem('after')) ? JSON.parse(localStorage.getItem('after')) :[],
            id:localStorage.getItem('id')
        }
    },
    components:{
       
    },
    methods:{
        change(pram){
            return unescape(pram);
        },
        judeType(pram){
           
            if(pram instanceof Object){      
                return true;
            }
        },
        request1(){                      //新生儿家庭访视
            let _this = this;
            this.$http.post(URL + 'sdxsejtfs',this.$qs.stringify({             
                id:'79D8CFFE-92A9-410A-B2B1-8D0CC03591A8'
                //id:this.id
            }))
            .then(function(res){
                let response = res.data;
                if(response.rtnCode == "0000"){
                    if(response.data && response.data.sdxsejtfs){
                       let sdxsejtfs = response.data.sdxsejtfs;
                        let length = sdxsejtfs.length;
                        for(let i = 0;i<1-length;i++){
                            sdxsejtfs.push('nothing');
                        }
                        _this.before = sdxsejtfs;
                       localStorage.setItem('before',JSON.stringify(sdxsejtfs));
                    }
                }
            })           
        },
        request2(){     //1-2岁健康检查
            let _this = this;
            this.$http.post(URL + 'sd12etjk',this.$qs.stringify({
                //id:'9DAA3AE7-0FEA-4AB0-B98C-A345AA4C5B9F'   
                id:this.id            
            }))
            .then(function(res){                
                let response = res.data;
                if(response.rtnCode == "0000"){
                    if(response.data && response.data.sd12etjk){
                        let sd12etjk = response.data.sd12etjk;
                       _this.befores = sd12etjk;  
                        localStorage.setItem('befores',JSON.stringify(sd12etjk));       
                    }
                }
            });           
        },
         request3(){                      //3-6岁健康检查
            let _this = this;
            this.$http.post(URL + 'sd36etjk',this.$qs.stringify({
                //id:'0C1D1EF3-75C8-4CC8-9BFE-A8D219215178'
                id:this.id
            }))
            .then(function(res){
                let response = res.data;
                if(response.rtnCode == "0000"){
                    if(response.data && response.data.sd36etjk.length>0){
                       let sd36etjk = response.data.sd36etjk;
                       _this.after = sd36etjk;  
                       localStorage.setItem('after',JSON.stringify(sd36etjk));                         
                    }
                }
            });           
        },
        jumpDetail(index,flag,sign){
            if(flag){
                this.$router.push({path:'/VisitResult', query: {}}); 
                localStorage.setItem('index',index);
                localStorage.setItem('sign',sign);
            }
        }
    },
    mounted(){;
        this.request1();
        this.request2();
        this.request3();
    }
}
</script>
<style lang="less" scoped>
    .container{
        background-color: #f3f3f3;
        color: #575757;
        .head{
            background-color: #fff;
            padding:10px 15px; 
            margin-bottom: 20px;
            .title{
                height: 37px;
                line-height: 37px;
                text-indent: 23px;
                background-image: url("./icon_4.png");
                background-size: 13px 14px;
                background-repeat: no-repeat;
                background-position: left;
            }
            ul{
                li{
                    overflow: hidden;
                    font-size: 15px;
                    .key{
                        float: left;
                        line-height: 30px;  
                    }
                    .value{
                        float: right;
                        line-height: 30px;
                    }
                }
            }
        }
        .content{
            background-color: #fff;
            .green{
                color:#12bc7e!important;
            }
            .greenBmg{
                background-image: url("./green.png")!important;
            }
            .gray{
                color:#cecece!important;
            }
            .yellow{
                color:#ffb931!important;
            }
            .title{
                height: 37px;
                line-height: 37px;
                text-align: center;
            }
             .status{
                    width: 85px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    color: #fff;
                    background-color: #ffb921;
                    font-size: 15px;
                    border-radius: 0 10px 10px 0;
                    margin-bottom: 5px;
                }
            .cell_content{
                padding-left: 25px;
                .bottom_border{
                    font-size: 15px;
                    border-left: 1px solid #cecece;
                    padding-left: 20px;
                    .cell{
                        display: flex;
                        height: 77px;
                        align-items: center;
                        border-bottom: 1px solid #cecece;
                        .circle::after{
                            content: "";
                            position: absolute;
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                            top: 17px;
                            right: 0px;
                            bottom: 0;
                            left: -24px;
                            background-color: #cecece;
                        }
                        .left{
                            flex: 1;
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                            .icon{
                                width: 33px;
                                height: 38px;
                                color: #cecece;
                                text-align: center;
                                line-height: 37px;
                                font-size: 20px;
                                margin-bottom: 5px;
                                background-image: url("./gray.png");
                                background-size: 32.5px 37px;
                                background-position: center;
                                background-repeat: no-repeat;
                            }
                            .word{
                                color:#cecece;
                                font-size: 10px;
                            }
                        }
                        .left_border::after{
                                content: "";
                                position: absolute;
                                width: 20px;
                                height: 50px;
                                top: 20px;
                                right: 0px;
                                bottom: 0;
                                left: -20px;
                                border-top: 1px solid #cecece;
                        }
                        .right{
                            flex: 3;
                            text-align: left;
                            text-indent: 50px;
                            font-size: 14px;
                            color: #575757;
                            .time{
                                line-height: 40px;
                                background-image: url("./icon_1.png");
                                background-size: 7.5px 13px;
                                background-position: 90%;
                                background-repeat: no-repeat;
                                .value{
                                    margin-left: 20px;
                                }
                            }
                            .msg{
                                line-height: 28px;
                                .value{
                                    margin-left: 20px;
                                }
                            }
                        }
                    }
                } 
            }
        }
    }
</style>
