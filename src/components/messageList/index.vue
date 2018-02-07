<template>
  <div class="messageList">
      <div class="container">
          <div class="head">
              <div class="cell active">妇幼健康知识</div>
              <div class="cell">儿保健康知识</div>
          </div>
          <div class="content">
            <Scroll
            class="wraaper"
            ref="scroll"
            :pullup="true"
            >
            <ul class="wrapper-content">
                <div class="cell">
                    <div class="img">
                        <img src="./img1.png" alt="">
                    </div>
                    <div class="word">
                        <h2 class="title">孕妇要不要传防护服？</h2>
                        <p class="section">最近，央视新闻频道制作播出的《“防辐射服防辐射”谎言？》节目让防辐射问题再一次成为公众关注的话题最近，央视新闻频道制作播出的《“防辐射服防辐射”谎言？》节目让防辐射问题再一次成为公众关注的话题</p>
                    </div>
                </div>
                <div class="cell">
                    <div class="img">
                        <img src="./img1.png" alt="">
                    </div>
                    <div class="word">
                        <h2 class="title">孕妇要不要传防护服？</h2>
                        <p class="section">最近，央视新闻频道制作播出的《“防辐射服防辐射”谎言？》节目让防辐射问题再一次成为公众关注的话题最近，央视新闻频道制作播出的《“防辐射服防辐射”谎言？》节目让防辐射问题再一次成为公众关注的话题</p>
                    </div>
                </div>
                <div class="cell">
                    <div class="img">
                        <img src="./img1.png" alt="">
                    </div>
                    <div class="word">
                        <h2 class="title">孕妇要不要传防护服？</h2>
                        <p class="section">最近，央视新闻频道制作播出的《“防辐射服防辐射”谎言？》节目让防辐射问题再一次成为公众关注的话题最近，央视新闻频道制作播出的《“防辐射服防辐射”谎言？》节目让防辐射问题再一次成为公众关注的话题</p>
                    </div>
                </div>
            </ul>
            </Scroll>
          </div>
      </div>
  </div>
</template>
<script>
import Scroll from "better-scroll";
export default {
    data(){
        return{}
    },
    comments:{
        Scroll:Scroll
    }
}
</script>
<style lang="less" scoped>
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
        background-color: #f1f1f1;
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

