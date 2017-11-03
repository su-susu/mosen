<template>
    <div class="container">
        <el-row>
            <el-col :span="12" :offset="2">
                 <div class="pageSelect">
                     <el-button>
                    <el-dropdown @command="handleSelection">
                         <span class="el-dropdown-link">
                            增加商品<i class="el-icon-caret-bottom el-icon--right"></i>
                         </span>
                         <el-dropdown-menu slot="dropdown">
                             <el-dropdown-item command="home">店铺首页</el-dropdown-item>
                             <el-dropdown-item command="addGoods" disabled>增加商品</el-dropdown-item>
                             <el-dropdown-item command="editGoods">商品编辑</el-dropdown-item>
                            <el-dropdown-item command="orderMsg">订单信息</el-dropdown-item>
                         </el-dropdown-menu>
                    </el-dropdown>
                     </el-button>
                 </div>
            </el-col>

            <el-col :span="12" :offset="6">
                 <div class="add-container">
                    <el-form  :model="add" :rules="addRules" ref="add" >
                        <el-row>
                            <el-col :span="4"  class="tag"> 添加商品标题 </el-col>
                             <el-col :span="18":offset="1">
                                   <el-form-item prop="goodsTitle">
                                             <el-input v-model="add.goodsTitle" placeholder="请输入商品标题" auto-complete="off"></el-input>
                                    </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                             <el-col :span="4"  class="tag">  商品价格 </el-col>
                             <el-col :span="18" :offset="1">
                                     <el-form-item prop="goodsPrice">
                                        <el-input v-model="add.goodsPrice" placeholder="请输入商品价格" auto-complete="off"></el-input>
                                     </el-form-item>
                             </el-col>
                        </el-row>     
                           <!-- 本地上传图片，有待修改 -->
                           <el-row>
                               <el-col :span="4"  class="tag">添加图片</el-col>
                               <el-col :span="18":offset="1"> 
                                   <el-form-item prop="pic">
                                          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                                                 <i class="el-icon-plus"></i>
                                          </el-upload>
                                          <el-dialog v-model="add.dialogVisible" size="tiny">
                                                  <img width="100%" :src="add.dialogImageUrl" alt>    
                                          </el-dialog>
                                   </el-form-item>
                               </el-col>
                           </el-row>

                            <el-row>
                                <el-col :span="4"  class="tag">添加描述</el-col>
                                <el-col :span="18" :offset="1">
                                    <el-form-item prop="desc">
                                        <!-- :span="18" :offset="1" -->
                                          <el-col >
                                                 <div class="input">
                                                      <el-input v-model="add.desc" auto-complete="off" type="textarea" :autosize="{ minRows: 1, maxRows: 4}" placeholder="请输入商品描述"></el-input>
                                                </div>
                                          </el-col>                                                    
                                      </el-form-item>
                                </el-col>
                            </el-row>

                            <div class="confirmBtn" style="margin-left:90%">
                                  <el-button type="primary"  @click="addConfirm('add')">确认</el-button> 
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
        var checkPrice =(rule,value,callback)=>{
             var reg = /^[0-9]+$/;
                if (value.match(reg)) {
                    callback();
                } else {
                    callback(new Error('价格仅可由数字构成！'));
                }
            };
       
        return{
            add:{
                 goodsTitle:'',
                 goodsPrice:'',
                  dialogImageUrl: '',
                 dialogVisible: false,
                 desc:''
            },

         addRules: {
                goodsTitle: [
                        { required: true, message: '请输入商品名称！' }, 
                 ],
                 goodsPrice: [
                     {required: true,message:"请输入商品价格！"},
                     { validator:checkPrice,message:"请正确输入商品价格，仅可输入数字！",trigger:'blur'},
                     { validator:checkPrice,message:"请正确输入商品价格，仅可输入数字！",trigger:'change'}
                 ]
            }
        }
    },

    methods:{
        handleSelection(command){
            switch(command){
                case "home":
                    this.$router.push({
                                path: '/seller/home'
                    });     break;
                case "editGoods":
                    this.$router.push({
                        path: '/seller/editGoods'
                    });break;
                case "orderMsg":
                    this.$router.push({
                        path: '/seller/orderMsg'
                    });break;
            }
        },
        // 实现照片上传
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
        addConfirm(formName){
            const self=this;

            self.$refs[formName].validate((valid) => {  //这一行代码是什么意思，valid又是指什么
                if(valid){
                    this.$notify ({
                        message:"增加商品成功！"
                    })

                    this.$axios({
                        url:'/seller/addGoods',
                        method:'post',
                        baseURL: 'http://localhost:3030'+this.hostUrl,

                        // data:{
                         
                        // }
                    })
                }
            })
        }
    }
}
</script>

<style>
.add-container{
    border: 1px dotted gray;
    width:100%;
   padding:50px 100px 50px 50px;
 
}
    .tag{
        text-align: left;
    }
</style>
