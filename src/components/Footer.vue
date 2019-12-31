<template>
  <div id="app">
    <div class="topall">
      <div class="content">
        <el-row>
          <el-col :span="12">
            <el-col :span="6">
              <div class="grid-content bg-purple">关于</div>
              <p>企业介绍</p>
              <p>联系方式</p>
              <p>公司地址</p>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">帮助</div>
              <p>常见问题</p>
              <p>法律声明</p>
              <p>隐私声音</p>
            </el-col>
          </el-col>
          <el-col :span="12" class="right">
            <el-col :span="10" class="qiye">
              <img src="../../src/assets/logo.png" @click="toindex" class="logo" alt />
              <p>军优服务热线：000-0000-000</p>
              <p>工作日：9:30-17:30</p>
            </el-col>
            <el-col :span="8">
              <img src="../../src/assets/images/qr.png" class="qr" alt />
              <p>扫码关注更多</p>
            </el-col>
          </el-col>
        </el-row>
      </div>
    </div>

    <footer>Copyright © 2019 JUNYOUVIP.CN 军优会 版权所有</footer>
  </div>
</template>

<script>
export default {
  methods: {
    toindex() {
      this.$router.replace('/')
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.topall {
  background: #ffffff;
}
.content {
  background: #ffffff;
  padding: 20px 0;
  width: 1200px;
  margin: 0 auto;
  .bg-purple {
    padding-bottom: 10px;
    font-weight: 600;
  }
  p {
    color: #999;
    height: 30px;
    cursor: pointer;
  }
  .right {
    display: flex;
    justify-content: flex-end;
  }
  .qiye {
    text-align: left;
  }
  .qr {
    height: 100px;
    width: 100px;
  }
  .logo {
    height: 70px;
    width: 140px;
    display: block;
    cursor: pointer;
  }
}
footer {
  padding: 14px;
  text-align: center;
  font-size: 14px;
  color: #999;
}
</style>
