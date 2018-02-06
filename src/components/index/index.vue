<template>
  <div class="index">
    <div class="container">
        <div class="bmg">
            <img src="./bmg_1.png" alt="">
        </div>
        <div class="qurry">
            <div class="cell">
                <div class=" icon icon_6"></div>
                <div class="word border">孕保查询</div>
            </div>
            <router-link class="router_link" :to="{ path: 'GravidaQurry', query: {}}">
                <div class="cell">
                    <div class="icon icon_7"></div>
                    <div class="word">儿保查询</div>
                </div>
            </router-link>
        </div>
      <div class="tool">
        <div class="title">常用工具</div>
        <div class="wrapper">
            <div class="cell">
                <div class="icon icon_9"></div>
                <div class="word">孕产期计算</div>
            </div>
            <div class="cell">
                <div class="icon icon_10"></div>
                <div class="word">安全期计算</div>
            </div>
            <div class="cell">
                <div class="icon icon_11"></div>
                <div class="word">疫苗接种助手</div>
            </div>
            <div class="cell">
                <div class="icon icon_12"></div>
                <div class="word">儿童身高预测</div>
            </div>
        </div>
      </div>
      <div class="content">
        <div class="wrapper">
            <div class="title title_1">孕产妇健康<span class="more">...</span></div>
            <div class="main clearfix">
                <router-link :to="{ path: 'GravidaQurry', query: {}}">
                    <div class="cell">
                        <div class="img"><img src="./img1.png" alt=""></div>
                        <div class="word">文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                    </div>
                </router-link>
                <router-link :to="{ path: 'GravidaQurry', query: {}}">
                    <div class="cell">
                        <div class="img"><img src="./img1.png" alt=""></div>
                        <div class="word">文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                    </div>
                </router-link>
                <router-link :to="{ path: 'GravidaQurry', query: {}}">
                    <div class="cell">
                        <div class="img"><img src="./img1.png" alt=""></div>
                        <div class="word">文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                    </div>
                </router-link>
                <router-link :to="{ path: 'GravidaQurry', query: {}}">
                    <div class="cell">
                        <div class="img"><img src="./img1.png" alt=""></div>
                        <div class="word">文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                    </div>
                </router-link>
            </div>
        </div>
         <div class="wrapper">
            <div class="title title_2">儿童保健知识<span class="more">...</span></div>
            <div class="main clearfix">
                <router-link :to="{ path: 'GravidaQurry', query: {}}">
                    <div class="cell">
                        <div class="img"><img src="./img1.png" alt=""></div>
                        <div class="word">文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                    </div>
                </router-link>
                <router-link :to="{ path: 'GravidaQurry', query: {}}">
                    <div class="cell">
                        <div class="img"><img src="./img1.png" alt=""></div>
                        <div class="word">文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                    </div>
                </router-link>
                <router-link :to="{ path: 'GravidaQurry', query: {}}">
                    <div class="cell">
                        <div class="img"><img src="./img1.png" alt=""></div>
                        <div class="word">文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                    </div>
                </router-link>
                <router-link :to="{ path: 'GravidaQurry', query: {}}">
                    <div class="cell">
                        <div class="img"><img src="./img1.png" alt=""></div>
                        <div class="word">文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
                    </div>
                </router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
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
                        }
                    }
                    .word {
                        width: 140px;
                        line-height: 14px;
                        margin-top: 5px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>
