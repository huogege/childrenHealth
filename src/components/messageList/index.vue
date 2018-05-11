<template>
    <div class="messageList">
        <div class="container">
            <div class="head">
                <div class="cell" :class="womenShow == true ? 'active' : ''" @click="selectWomen">妇幼健康知识</div>
                <div class="cell" :class="childShow == true ? 'active' : ''" @click="selectChild">儿保健康知识</div>
            </div>
            <div class="content">
                <Scroll 
                class="wrapper"
                ref="scroll"
                :pullup="true"
                :data="womenList"
                @scrollToEnd="requestWomen(pageW)"
                v-show="womenShow"
                >
                <ul class="wrapper-content">
                    <router-link to=""></router-link>
                    <div class="cell" v-for="item in womenList" @click="jumpDetail(item.title,item.source,item.content,1)">
                        <div class="img">
                            <img :src="item.photo!='' ? item.photo : ''" alt="" :onerror="logo">
                        </div>
                        <div class="word">
                            <h2 class="title">{{item.title}}<span style="margin-left:10px;color:#08c3a2">查看</span></h2>
                            
                            <!-- <p class="section over_text_4" v-html="change(item.content)"></p> -->
                        </div>
                    </div>
                </ul>
                </Scroll>
                <Scroll 
                class="wrapper"
                ref="scroll"
                :pullup="true"
                :data="childList"
                @scrollToEnd="requestChild(pageC)"
                v-show="childShow"
                >
                <ul class="wrapper-content">
                    <div class="cell" v-for="item in childList" @click="jumpDetail(item.title,item.source,item.content,2)">
                        <div class="img">
                            <img :src="item.photo!='' ? item.photo : ''" alt="" :onerror="logo2">
                        </div>
                        <div class="word">
                            <h2 class="title">{{item.title}}<span style="margin-left:10px;color:#08c3a2">查看</span></h2>
                            <!-- <div class="section" v-html="change(item.content)"></div> -->
                        </div>
                    </div>
                </ul>
                </Scroll>
            </div>
        </div>
    </div>
</template>
<script>
import fn from '../../common/js/index.js'
import url from "../../common/js/url.js"
import myScroll from "../../components/scroll/index.vue";
const URL = url.url1;
export default {
    data(){
        return{
            womenShow:true,
            childShow:false,
            logo: 'this.src="' + require('./img1.png') + '"',
            logo2: 'this.src="' + require('./img2.jpg') + '"',
            womenList:[],
            childList:[],
            pageW:1,
            pageC:1
        }
    },
    components:{
        Scroll:myScroll
    },
    methods:{
        change(pram){
            return unescape(pram);
        },
        requestWomen(page){
            let _this = this;
            this.$http.post(URL + 'jkContentList',this.$qs.stringify({
                type:1,   //妇保
                page:page,
                num:4,
            }))
            .then(function(res){
                let response = res.data;
                if(response.rtnCode == "0000"){
                    if(response.data && response.data.list.list.length>0){
                       _this.womenList = _this.womenList.concat(response.data.list.list); 
                       _this.pageW+=1;    
                    }
                }
            })           
        },
         requestChild(page){
            let _this = this;
            this.$http.post(URL + 'jkContentList',this.$qs.stringify({
                type:2,   //妇保
                page:page,
                num:4,
            }))
            .then(function(res){
                let response = res.data;
                if(response.rtnCode == "0000"){
                    if(response.data && response.data.list.list.length>0){
                       _this.childList = _this.childList.concat(response.data.list.list); 
                       _this.pageC+=1;    
                    }
                }
            })           
        },
        selectWomen(){
            this.womenShow = true;
            this.childShow = false;
        },
        selectChild(){
            this.womenShow = false;
            this.childShow = true;
        },
         jumpDetail(title,source,content,type){
            localStorage.setItem("title",title);
            localStorage.setItem("source",source);
            localStorage.setItem("content",this.change(content));
            this.$router.push({path:'/messageDetail', query: {type:type}}); 
        },
    },
    created(){
         let _this = this;
        _this.requestWomen(1);
        _this.requestChild(1);
    }
}
</script>
<style lang="less" scoped>
@import "../../common/css/common.less";
.container{
    color: #575757;
    .head{
        display: flex;
        border-bottom: 1px solid #ccc;
        .cell{
            flex:1;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
        }
        .active{
            color: #08c3a2;
            border-bottom: 1px solid #08c3a2;
        }
    }
    .content{
        .wrapper{
            width: 100%;
            background-color: #f1f1f1;
            position: absolute;
            top: 42px;
            bottom: 0;
            left: 0;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            // padding-right: 20px;
        }
        .cell{
            background-color: #fff;
            padding: 15px;
            margin-bottom: 15px;
            &:last-child{
                margin: 0;
            }
            .img{
                width: 350px;
                height: 230px;
                img{
                    width: 350px;
                }
            }
            .word{
                .title{
                    font-size: 17px;
                    line-height: 45px;
                    font-weight: 600;
                }
                .section{
                    font-size: 14px;
                    line-height: 20px;
                }
            }
        }
    }
}
</style>

