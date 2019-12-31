<template>
  <div id="app">
    <el-row class="headerall">
      <el-col :span="12" class="el-col">
        <img src="../../src/assets/logo.png" class="logo" alt />
      </el-col>
      <el-col :span="12" class="el-col"><span @click="tohome">进入网站首页</span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods:{
    tohome(){
      console.log("12313");
      this.$router.replace("/index");
    }
  }
};
</script>
<style lang="less" scoped>
#app {
  background: #ffffff;
  .headerall {
    width: 1200px;
    margin: 0 auto;
    .el-col{
      height: 70px;
      line-height: 70px;
      cursor: pointer;
    }
    .logo {
      height:70px ;
      width: 120px;
    }
  }
}
</style>
