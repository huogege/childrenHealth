<template>
  <div class="qurry">
        <div class="container">
            <div class="img">
                <img src="./bmg.png" alt="">
            </div>
            <div class="content">
                <div class="cell">
                    <span class="icon icon_1">您的姓名</span>
                    <input class="input" type="text" placeholder="请填写您的姓名">
                </div>
                <div class="cell">
                    <span class="icon icon_2">身份证号</span>
                    <input class="input" type="text" placeholder="请填写您的身份号码">
                </div>
            </div>  
            <div class="qurry_btn">
                <router-link :to="{path:'QurryResult'}">查询</router-link>
            </div>
        </div>
  </div>
</template>
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
