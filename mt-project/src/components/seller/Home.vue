<template>
  <div>
     
       <div class="add-container">
            <div class="pageSelect">
                    <el-dropdown @command="handleSelection">
                         <span class="el-dropdown-link">
                            店铺首页<i class="el-icon-caret-bottom el-icon--right"></i>
                         </span>
                         <el-dropdown-menu slot="dropdown">
                             <el-dropdown-item command="home" disabled>店铺首页</el-dropdown-item>
                             <el-dropdown-item command="addGoods">增加商品</el-dropdown-item>
                             <el-dropdown-item command="editGoods">商品编辑</el-dropdown-item>
                            <el-dropdown-item command="orderMsg">订单信息</el-dropdown-item>
                         </el-dropdown-menu>
                    </el-dropdown>
            </div>
    </div>
  </div>
</template>

<script>
export default {
    // data:function(){
       
    // },

    methods:{
        handleSelection(command){
            switch(command){
                case "addGoods":
                    this.$router.push({
                                path: '/seller/addGoods'
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
        }
    }
}
</script>

