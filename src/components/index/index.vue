<template>
  <div class="index">
    <div class="container">
        <div class="bmg">
            <img src="./bmg_1.png" alt="">
        </div>
        <div class="qurry">
            <router-link class="router_link" :to="{ path: 'GravidaQurry', query: {type:1}}">
                <div class="cell">
                    <div class=" icon icon_6"></div>
                    <div class="word border">孕保查询</div>
                </div>
            </router-link>
            <router-link class="router_link" :to="{ path: 'GravidaQurry', query: {type:2}}">
                <div class="cell">
                    <div class="icon icon_7"></div>
                    <div class="word">儿保查询</div>
                </div>
            </router-link>
        </div>
      <div class="tool">
        <div class="title">常用工具</div>
        <div class="wrapper">
            <div class="cell" @click="jump('http://www.zaichongqing.com/lj_portal/public/tool/html/index.html')">
                <div class="icon icon_9"></div>
                <div class="word">孕产期计算</div>
            </div>
            <div class="cell" @click="jump('http://www.zaichongqing.com/lj_portal/public/tool/html/safe_date.html')">
                <div class="icon icon_10"></div>
                <div class="word">安全期计算</div>
            </div>
            <div class="cell" @click="jump('http://www.zaichongqing.com/lj_portal/public/vaccineNew/jjindex.jsp')">
                <div class="icon icon_11"></div>
                <div class="word">疫苗接种助手</div>
            </div>
            <div class="cell" @click="jump('http://www.zaichongqing.com/lj_portal/public/tool/html/height_test.html')">
                <div class="icon icon_12"></div>
                <div class="word">儿童身高预测</div>
            </div>
        </div>
      </div>
      <div class="content">
          <List :type="1" :logo="logo1" :list="womenList" :titleName="'妇保健康知识'" :titleClass="'title_2'"></List>
          <List :type="2" :logo="logo2" :list="childList" :titleName="'儿保健康知识'" :titleClass="'title_1'"></List>
      </div>
    </div>
  </div>
</template>

<script>
import fn from '../../common/js/index.js'
import url from "../../common/js/url.js"
import list from "../list/index.vue"
const URL = url.url1;
export default {
    name: "Index",
    components:{
        List:list
    },
    data() {
        return {
            womenList:[],
            childList:[],
            logo1: 'this.src="' + require('./img1.png') + '"' ,             //避免找不到本地图片
            logo2: 'this.src="' + require('./img2.jpg') + '"'              //避免找不到本地图片
        };
    },
    methods:{
        jump(url){
            window.location.href = url;
        },
        request(type,callback){
            let _this = this;
            this.$http.post(URL + 'jkContentList',this.$qs.stringify({
                type:type,   //妇保
                page:1,
                num:4,
            }))
            .then(function(res){
                let response = res.data;

                if(response.rtnCode == "0000"){
                    if(response.data && response.data.list.list.length>0){
                       callback(response.data.list.list);     
                      
                    }
                }
            })           
        }
    },
    created(){
        let _this = this;
        _this.request(1,function(data){
           _this.womenList = data;         
        });
         _this.request(2,function(data){
           _this.childList = data;         
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../common/css/common.less";
.container {
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    .bmg {
        height: 198.5px;
        img {
        width: 375px;
        }
    }
  .qurry {
        display: flex;
        border-bottom: 1px solid #eee;
        background-color: #fff;
        .cell {
            flex: 1;
            display: flex;
            align-items: center;
            height: 74px;
            .icon {
                flex: 1;
                width: 42px;
                height: 42px;
                background-size: 42px 42px;
                background-repeat: no-repeat;
                background-position: center;
            }
            .word {
                flex: 1;
                font-size: 14px;
            }
            .icon_6 {
                background-image: url("./icon_6.png");
            }
            .icon_7 {
                background-image: url("./icon_7.png");
            }
            .border {
                height: 40px;
                border-right: 1px solid #eee;
                line-height: 40px;
            }
        }
        .router_link {
            flex: 1;
        }
    }
  .tool {
        background-color: #fff;
        padding-bottom: 25px;
        margin-bottom: 20px;
        .title {
        height: 30px;
        line-height: 30px;
        font-size: 11px;
        color: #6d6d6d;
        background-image: url("./icon_8.png");
        background-size: 10px 10px;
        background-repeat: no-repeat;
        background-position: 30px;
        text-indent: 50px;
        }
        .wrapper {
            display: flex;
            .cell {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                align-content: center;

                .icon {
                flex: 1;
                width: 30px;
                height: 30px;
                background-size: 30px 30px;
                background-repeat: no-repeat;
                background-position: center;
                margin-bottom: 10px;
                }
                .word {
                font-size: 12px;
                }
                .icon_9 {
                background-image: url("./icon_9.png");
                }
                .icon_10 {
                background-image: url("./icon_10.png");
                }
                .icon_11 {
                background-image: url("./icon_11.png");
                }
                .icon_12 {
                background-image: url("./icon_12.png");
                }
            }
        }
    }
    .content {
        background-color: #fff;
    }
}
</style>
