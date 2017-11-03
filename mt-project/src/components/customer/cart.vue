<template>
  <div id="app">
    <head>
        <title>购物车</title>
    </head>
    <body>  
        <div> 
            <!--component-a></component-a>-->    
             <v-header></v-header>
        </div>
            <el-row>
            <div id="back">
                <el-col>
                    <el-button id="back" class="btn" type="primary">返回</el-button>
                </el-col>
                </div>
            </el-row>
        

        <div id="cart">
            <el-row>
                <el-checkbox v-model="checked">
                    <el-col :span="2" :offset="1"></el-col>
                </el-checkbox>
            </el-row>
        </div>
    </body>
  </div>
</template>
<script>
import header from '../../components/customer/header.vue';
    export default{
        methods:{             
        },/*
        cancel(){
            this.$router.push({
                path: '/customer/cart'
            });
        },
        },*/
        data:function(){
            return {

            }
        },
        components:{
           'v-header': header
        }   
}
</script>
<style>
.btn {
    text-align:center;
}
.el-tag{
    width:90px;
    height:40px;
    margin-left:345px;
    font-size:16px;
    padding:10px 10px 10px 10px;
    color:white;
    background:#20A0FF;
}
#cart{
    width:1000px;
    height: 700px;
    border-width:1px;
    border-style:solid;
    border-color:gray;
    margin:0 auto;
}
#back{
    width:160px;
    height:50px;
    margin-left:120px;
}
</style>