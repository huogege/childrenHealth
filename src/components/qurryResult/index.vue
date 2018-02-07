<template>
  <div class="qurryResult">
      <div class="container">
            <div class="head">
                <h2 class="title">基本信息</h2>              
                <ul>
                    <li>
                        <p class="key">姓名</p>
                        <p class="value">火火</p>
                    </li>
                     <li>
                        <p class="key">姓名</p>
                        <p class="value">火火</p>
                    </li>
                </ul>         
            </div>
            <div class="content">
                <h2 class="title">孕妇保健记录</h2>
                <div class="status">产前访视</div>
                <ul class="cell_content">
                    <div class="bottom_border">
                        <li class="cell">
                            <div class="circle">
                                <div class="left left_border">
                                    <div class="icon">1</div>
                                    <p class="word">第一次</p>
                                </div>
                            </div>
                            <div class="right">
                                <p class="time">访问日期: <span class="value">2018-02-07</span></p>
                                <p class="msg">总体评估:<span class="value">未见异常</span></p>
                            </div>
                        </li>    
                        <li class="cell">
                            <div class="circle">
                                <div class="left">
                                    <div class="icon">1</div>
                                    <p class="word">第一次</p>
                                </div>
                            </div>
                            <div class="right">
                                <p class="time">访问日期: <span class="value">2018-02-07</span></p>
                                <p class="msg">总体评估:<span class="value grren">未见异常</span></p>
                            </div>
                        </li>
                    </div>      
                </ul>
            </div>
      </div>
  </div>
</template>
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
                        line-height: 20px;  
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
            .grren{
                color:#12bc7e;
            }
            .gray{
                color:#cecece;
            }
            .yellow{
                color:#ffb931;
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
