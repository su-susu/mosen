
<template>
<!-- 顶 (Group) -->
    <div id="header">
        <el-row><div class="group-bg">
            </br>          
            <!--welcome-->
            <el-col :span="6" :offset="2">
                <div id="welcome">
                    <p><span>Welcome to MoreThings!</span></p>
                </div>
            </el-col>

            <!--首页-->

            <el-col :span="4">
                <div class="btn">
                    <el-button type="text" @click="home">首页</el-button>
                </div>
            </el-col>
            <!--登陆-->
            <el-col :span="4">
                <div class="btn">
                    <el-button type="text" @click="logIn">登陆</el-button>
                </div>
            </el-col>
            <!--购物车-->
            <el-col :span="4">
                <div class="btn">
                    <el-button type="text" @click="craft">购物车</el-button>
                </div>
            </el-col>
            <!--我的-->
            <el-col :span="4">
                <div class="btn">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            我的<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="order">订单</el-dropdown-item>
                            <el-dropdown-item command="info">个人信息</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col> 
             </div>     
        </el-row>
    </div>
</template>
<script>
    export default {
        methods:{
            home(){
                this.$router.push({
                    path: '/customer/cHome'
                });
            },
            logIn(){
                this.$router.push({
                    path: '/Login'
                });
            },
            craft(){
                this.$router.push({
                    path: '/customer/cart'
                });
            },
            handleCommand(command) {
                switch(command){
                    case "info":
                    this.$router.push({
                        path: '/customer/info'
                    }); break;
                    case "order":
                    this.$router.push({
                        path: '/customer/order'
                    }); break;
                }

            }
        },
        data(){
            return{
                checked:true
            }
        }
    }
</script>
        
<style>
 .group-bg {
    background:		#F0F8FF;
    margin:0 auto;
    top:0px;
    width:1280px;
    height:90px;
}
#welcome {
    color:gray;
}
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
</style>
        