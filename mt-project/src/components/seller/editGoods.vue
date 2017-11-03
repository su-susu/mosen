<template>
<div>
    <head>商品编辑信息</head>
    <body>
        <div id="editGoodsInfo">
            </br>
            <el-form :model="edit" :rules="editRules" ref="edit">
                <el-form-item prop="topic">
                    <el-col :span="4" :offset="1">
                        <div id="editTopic">
                            <el-button class="button">编辑商品标题</el-button>
                        </div>
                    </el-col>
                    <el-col :span="18" :offset="1">
                        <div class="input">
                            <el-input v-model="edit.topic" auto-complete="off" placeholder="请输入商品标题"></el-input>
                        </div>
                    </el-col>
                </el-form-item>

                <el-form-item prop="price">
                    <el-col :span="4" :offset="1">
                        <div id="editPrice">
                            <el-button class="button">编辑商品价格</el-button>
                        </div>
                    </el-col>
                    <el-col :span="18" :offset="1">
                        <div class="input">
                            <el-input v-model="edit.price" auto-complete="off" placeholder="请输入商品价格"></el-input>
                        </div>
                    </el-col>
                </el-form-item>

                <el-form-item >
                    <el-col :span="4" :offset="1">
                        <div id="editImg">
                            </br>

                            <el-button class="button">编辑图片</el-button>
                        </div>
                    </el-col>
                    <el-col :span="13" :offset="6">
                        <div class="upload">
                            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" 
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog v-model="dialogVisible" size="tiny">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </div>
                    </el-col>
                </el-form-item>


                </br>
                <el-form-item prop="desc">
                    <el-col :span="4" :offset="1">
                        <div id="editDesc">
                            <el-button class="button">编辑描述</el-button>
                        </div>
                    </el-col>
                    <el-col :span="18" :offset="1">
                        <div class="input">
                            <el-input v-model="edit.desc" auto-complete="off" 
                            type="textarea" :autosize="{ minRows: 1, maxRows: 4}" 
                            placeholder="请输入商品描述"></el-input>
                        
                        </div>
                    </el-col>
                </el-form-item>
                </br>
                </br>
                </br>
                <el-form-item>
                    <div id="con-Edit">
                        <el-col :span="5" :offset="19">
                            <el-button class="button">确认编辑</el-button>
                        </el-col>
                    </div>
                </el-form-item>
            </el-form>
       </div>
        <div id="back">
            <el-button class="button" type="primary">返回</el-button>
        </div>              
    </body>
</div>
</template>

<script>
export default {
    
    data:function() {
        //检测价格是否是数字
        var checkPrice = (rule, value, callback) => { 
                var reg = /^[0-9]+$/;
                if (value.match(reg)) {
                    callback();
                } else {
                    callback(new Error('仅可输入数字！'));
                }
            };
      return {
          //添加图片
        dialogImageUrl: '',
        dialogVisible: false, 
      edit:{
                topic:'',
                price:'',
                desc:''
            },
      editRules: {
                topic: [
                    { required: true, message: '商品标题不可为空' }, 
                    { required: true, message:"商品标题不可为空", trigger:'blur'}
                       
                 ],
                 price:[
                    { required: true, message:"商品价格不可为空" },
                    { validator: checkPrice, trigger: 'change' },
                    { validator: checkPrice, trigger:'blur'} 
                 ],
                 desc:[
                    { required: true, message:"商品描述不可为空" },
                    { required: true, message:"商品描述不可为空", trigger:'blur'},
                    {min:1, max:140, message:"字数在140字以内", trigger:'blur'}
                 ],
             }
        };
    },
    methods: {
        //实现图片上传功能
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        //实现路由跳转
        handleSelection(command){
            switch(command){
                case "home":
                    this.$router.push({
                                path: '/seller/home'
                    });     break;
        }
    }
}
}

</script>

<style>
    #editGoodsInfo{
        border-style: solid;
        border-color: gray;
        border-width:1px;
        width:800px;
        height:600px;
        margin:0 auto;
    }
    .input{
        width:570px;
        height:45px;
        padding-top:5px;
        margin-top:5px;
    }
    .button{
        width:120px;
        height:45px;
        margin-top:5px;
        margin-left:10px;
        padding-top:6px;
    }
    #back{
        margin-top:30px;
        margin-left:985px;
    }
</style>
