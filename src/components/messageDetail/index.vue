<template>
    <div class="messageDetail">
        <div class="container">
            <h1 class="title">{{title}}</h1>
            <p class="from">{{source}}</p>
             <img src="" alt="" :onerror="logo" style="width:350px;">
            <div class="content" v-html="content">  
              
            </div>
        </div>
    </div>
</template>
<script>
import fn from '../../common/js/index.js'
export default {
    data(){
        return{
            title:"",
            source:"",
            content:"",
            logo: 'this.src="' + require('./img1.png') + '"',
           
        }
    },
    created(){
        this.title = localStorage.getItem("title");
        this.source = localStorage.getItem("source");
        this.content = localStorage.getItem("content");
        let type = fn.QueryString("type");
        if(type == 2){
            this.logo = 'this.src="' + require('./img2.jpg') + '"';
        }
    }
}
</script>

<style lang="less" scoped>
.messageDetail{
    .container{
        padding: 20px 15px;
        .title{
            font-size: 20px;
            font-weight: 600;
            color: #575757;
        }
        .from{
            font-size: 12px;
            color: #a2a2a2;
            line-height: 40px;
        }
    }
}
</style>
