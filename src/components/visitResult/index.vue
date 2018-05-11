<template>
  <div class="qurryResult">
      <div class="container">
            <div class="head">
                <h2 class="title">基本信息</h2>              
                <ul>
                    <li v-for="(item,index) in data" v-if="index !='附加信息' && index !='id'&& index !='个人id'&& index !='机构id'&& index !='原型id'&& index !='项目id'&& index !='服务id'">
                        <p class="key">{{index}}:</p>
                        <p class="value">{{item}}</p>
                    </li>
                </ul>         
            </div>
      </div>
  </div>
</template>
<script>
import fn from '../../common/js/index.js'
export default {
    data(){
        return{
           data:[]
        }
    },
    components:{
       
    },
    methods:{
     
    },  
    mounted(){;
        let sign = localStorage.getItem('sign');
        let index = localStorage.getItem('index');
        if(sign == 'before'){
            this.data = JSON.parse(localStorage.getItem('before'))[index];
        }else if(sign == 'befores'){
            this.data = JSON.parse(localStorage.getItem('befores'))[index];
        }else{
            this.data = JSON.parse(localStorage.getItem('after'))[index];
        }
        
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
                    border-bottom: 1px solid #eee;
                    .key{
                        float: left;
                        line-height: 40px;  
                    }
                    .value{
                        float: right;
                        line-height: 40px;
                    }
                }
            }
        }
    }
</style>
