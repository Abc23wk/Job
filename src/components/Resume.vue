<template>
  <div id="app">
    <vheader />
    <div class="main">
      <el-page-header class="box-card" @back="goBack" content="人才搜索"></el-page-header>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-user"></i>基本信息
          </span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">性别 男性</div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-document"></i>求职意向
          </span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">求职职位 PHP开发工程师</div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-document"></i>军旅荣誉
          </span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">2018/09 优秀义务兵</div>
      </el-card>
      <el-form ref="form" :model="form" label-width="80px" class="form" style="display:none">
        <!-- <el-form-item label="工作经验"> -->
        <el-select v-model="form.zhgiwei" placeholder="下载简历至职位" class="dow" clearable>
          <el-option label="php开发工程师" value="value1"></el-option>
          <el-option label="java开发工程师" value="value2"></el-option>
          <el-option label="Python开发工程师" value="value3"></el-option>
        </el-select>
        <!-- </el-form-item> -->
        <el-button type="primary" @click="onSubmit">下载简历（本月剩余26次）</el-button>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-select v-model="form.state" placeholder="当前状态：未审核" clearable>
          <el-option label="有意向" value="yixian"></el-option>
          <el-option label="发面邀" value="yaoqin"></el-option>
          <el-option label="不合适" value="buheshi"></el-option>
        </el-select>
        <el-button type="primary" @click="onSubmit" class="dow">审批</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
const vheader = () => import("./Header");
export default {
  name: "App",
  components: {
    vheader
  },
  data() {
    return {
      form: {
        state: "",
        zhgiwei: ""
      }
    };
  },
  methods: {
    goBack() {
      this.$router.replace("/talents");
    },
    onSubmit() {
      console.log("下载简历");
    },
    dispose() {
      console.log("处理");
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eeeeee;
  .main {
    width: 1200px;
    margin: 20px auto;
    background: #ffffff;
    padding: 40px 0;
    li {
      list-style: none;
    }
    .box-card {
      width: 600px;
      margin: 0 auto 10px;
    }
    .form {
      width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      .dow {
        margin: 20px 0;
      }
    }
  }
}
</style>
