<template>
    <div class="wrapper">
        <div class="title" :class="titleClass">{{titleName}}
            <router-link to="messageList"><span class="more">...</span></router-link>
        </div>
        <div class="main clearfix">
            <div class="cell" v-for="item in list"  @click="jumpDetail(item.title,item.source,item.content,type)">
                <div class="img"><img :src="item.photo!='' ? item.photo : ''" alt="" :onerror="logo"></div>
                <p class="word over_text_1">{{item.title}}</p>
            </div>
           
        </div>
    </div>
      
</template>

<script>
export default {
    data() {
        return {
          
        };
    },
    props:{
        list:{
            type:Array
        },
        titleClass:{
            type:String
        },
        titleName:{
            type:String
        },
        logo:{
            type:String
        },
        type:{
            type:String
        }

    },
    methods:{
        change(pram){
            return unescape(pram);
        },
        jumpDetail(title,source,content,type){
            localStorage.setItem("title",title);
            localStorage.setItem("source",source);
            localStorage.setItem("content",this.change(content));
            this.$router.push({path:'/messageDetail', query: {type:type}}); 
        },
        
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../common/css/common.less";

    .wrapper {
        margin-bottom: 20px;
        .title {
            position: relative;
            height: 40px;
            line-height: 40px;
            font-size: 11px;
            color: #6d6d6d;
            background-size: 10px 10px;
            background-repeat: no-repeat;
            background-position: 30px;
            text-indent: 50px;
            .more {
            position: absolute;
            top: -8px;
            right: 20px;
            font-size: 30px;
            color: #00a0a8;
            }
        }
        .title_1 {
            background-image: url("./icon_8.png");
        }
        .title_2 {
            background-image: url("./icon_14.png");
        }
        .main {
            .cell {
                width: 50%;
                float: left;
                display: flex;
                flex-direction: column;
                align-items: center;
                align-content: center;
                .img {
                    img {
                        width: 140px;
                        height: 120px;
                    }
                }
                .word {
                    width: 140px;
                    line-height: 20px;
                    
                    font-size: 12px;
                
                }
            }
        }
    }
    

</style>
