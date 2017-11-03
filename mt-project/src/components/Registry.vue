<template>
  <div id="registry-container" >
      <!-- 将图片还有输入信息显示在同一大行 -->
      <el-row>
        <el-col :span="12">
             <div class="background" >
             <img src="../assets/regisPic.jpg" class="background-img">
             </div>
        </el-col>

        <el-col :span="12">
             <div id="regisInput">
                        <el-form :model="register" :rules="registerRules" ref="register" >
                            <el-form-item prop="phoneNumber">
                                <!-- 父组件的数据需要通过 prop 才能下发到子组件中。子组件要显式地用 props 选项声明它预期的数据： -->
                                <el-input v-model="register.phoneNumber" placeholder="手机号" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item prop="nickName">
                                <el-input v-model="register.nickName" placeholder="昵称" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input v-model="register.password" placeholder="密码" type="password" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-row>
                                    <el-col :span="5">
                                        <!-- 设置 以下这行为不可改，其内容为用户选择 起提示作用 -->
                                         <el-input placeholder=" 性别"  :disabled="true"></el-input> 
                                    </el-col>
                                    <el-col :span="10">
                                          <el-radio class="radio" v-model="register.radio" label="1">男</el-radio>
                                          <el-radio class="radio" v-model="register.radio" label="2">女</el-radio>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-form-item>
                                <el-row>
                                    <el-col :span="5">
                                        <el-input placeholder="生日（选填）" :disabled="true"></el-input>
                                    </el-col>
                                    <el-col :span="14">
                                          <el-date-picker v-model="register.birthDay" type="date" placeholder="选择日期" > </el-date-picker>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                            <el-form-item prop="address">    
                                <el-input v-model="register.address" placeholder="地址"></el-input>
                            </el-form-item>
                            <!-- 注册 确认按钮 -->
                             <div class="regis-btn" style="margin-left:70%">
                                     <el-button type="primary"  @click="registerForm('register')">注册</el-button>
                                     <el-button @click="loginTip">返回</el-button>
                             </div>
                        </el-form>  
             </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    
    data:function(){
       //检测用户输入的手机号码是否为11位
        var checkPhoneNumber =(rule,value,callback)=>{
            var  reg = /^[0-9]+$/;
            if(value.length!=11||!value.match(reg)){
                callback(new Error('手机号码必须由11位数字组成'));
            }else{
                callback();
            }
        }; 
        //检测密码是否由数字和字母组成
        var checkWord = (rule, value, callback) => {  //rule,这种格式表示什么
                var reg = /^[a-zA-Z0-9]+$/;
                if (value.match(reg)) {
                    callback();
                } else {
                    callback(new Error('密码仅可由数字与字母组成'));
                }
            };
        return{
            register:{
                phoneNumber:'',
                nickName:'',
                password:'',
                address:'',
                radio:'1',
                birthDay:''
            },
            
            // 设置输入项有什么要求。eg:手机号、昵称、密码等 为必填项
            registerRules: {
                phoneNumber: [
                        { required: true, message: '请输入您的手机号码' }, //此处说明手机号为必填项
                        { validator: checkPhoneNumber, trigger: 'change' },
                        { validator:checkPhoneNumber,trigger:'blur'}  //有了此行code——输入的手机号码位数如果不符合条件，即使跳到别的输入框，仍会提示不符合条件
                       
                 ],
                 nickName:[
                     {required:true,message:"请输入您的昵称"},
                     { required:true,message:"请输入您的昵称",trigger:'blur'}
                 ],
                 password:[
                     {required:true,message:"请输入您的密码,密码仅能由数字和字母组成"},
                     { validator: checkWord, trigger: 'change' },
                     { validator: checkWord, trigger: 'blur' }
                 ],
             }
        }
    },
    methods:{
        // tip(){
        //     this.$message("恭喜您，注册成功！");  //此处需要增加逻辑判断，看前面信息是否输入完全。若输入不完整则不可提交
        // },
        loginTip(){
            this.$router.push({
                path: '/Login'
            })
        },

        /*registerForm(formName){
            const self=this;

            self.$refs[formName].validate((valid) => {  //这一行代码是什么意思，valid又是指什么
                if(valid){
                    this.$notify ({
                        message:"恭喜您，注册成功！"
                    })

                    this.$axios({
                        url:'/Registry',
                        method:'post',
                        baseURL: 'http://localhost:3030'+this.hostUrl,

                        data:{
                            phoneNumber: this.register.phoneNumber,
                            nickName:this.register.nickName,
                            password:this.register.password,
                            address:this.register.address,
                            gender:this.register.radio,
                            birthday:this.register.birthDay,
                        }
                    })
                }
            })
        }
     */   
    }
}
</script>

<style>

#registry-container{
    margin: 40px 40px 100px 40px;
    text-align:center;
    /* padding-left:100px;
    padding-top:50px; */
    padding:50px 150px 100px 30px;
    border:1px solid gray;
    border-radius:8px;
}
.background{
    float: left;
    margin-right: 10px;
}
.background-img{
    width:80%;     
}
.regisInput{
    float: left;
}
.regis-btn{
    padding-right:00%;
}
</style>

