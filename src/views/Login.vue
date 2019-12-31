<template>
  <div id="app">
    <lodinheader />
    <div class="main">
      <div class="login">
        <div class="left">
          <img src="../assets/logo.png" alt />
        </div>
        <div class="right" v-if="log.reg">
          <h3>账号登录</h3>
          <el-input
            class="ipt"
            placeholder="请输入手机号码"
            v-model="log.phone"
            prefix-icon="el-icon-user"
            clearable
          ></el-input>
          <el-input
            v-if="str"
            class="ipt"
            clearable
            placeholder="请输入密码"
            v-model="log.paswad"
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
          <el-input
            class="ipt"
            v-else
            clearable
            placeholder="请输验证码"
            v-model="log.code"
            show-password
            prefix-icon="el-icon-lock"
          >
            <el-button
              slot="append"
              class="btncode"
              @click="sendMsg"
              :disabled="isDisabled"
            >{{buttonName}}</el-button>
          </el-input>
          <p>
            <span @click="paslogin">{{str==false?"密码登录":"短信登录"}}&nbsp;&nbsp;</span>
            <span v-if="str" @click="retrieve">|&nbsp;&nbsp;&nbsp;忘记密码？</span>
          </p>
          <div class="btn" @click="btnlog">登录</div>
          <p>
            还没有账号？
            <span @click="login">
              立即注册
              <i class="el-icon-video-play"></i>
            </span>
          </p>
        </div>
        <div class="right" v-else>
          <h3>找回密码</h3>
          <el-input
            class="ipt"
            placeholder="请输入手机号码"
            v-model="ret.phone"
            prefix-icon="el-icon-user"
            clearable
          ></el-input>
          <el-input
            class="ipt"
            placeholder="请输验证码"
            v-model="ret.code"
            prefix-icon="el-icon-user"
            clearable
          >
            <el-button
              slot="append"
              class="btncode"
              @click="sendMsg"
              :disabled="isDisabled"
            >{{buttonName}}</el-button>
          </el-input>
          <el-input
            class="ipt"
            placeholder="请输入新密码"
            v-model="ret.newpaswad"
            show-password
            prefix-icon="el-icon-user"
            clearable
          ></el-input>
          <el-input
            class="ipt"
            placeholder="请输入确认密码"
            v-model="ret.newpaswads"
            prefix-icon="el-icon-user"
            show-password
            clearable
          ></el-input>
          <el-button type="primary" class="button" @click="btnret">修改密码并登录</el-button>
          <el-button type="primary" class="button" @click="retrieve">返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lodinheader from "../components/Lodinghedaer";
export default {
  name: "App",
  components: {
    lodinheader
  },
  data() {
    return {
      buttonName: "发送短信",
      isDisabled: false,
      time: 9,
      reg: {
        phone: "",
        paswad: "",
        paswads: "",
        code: ""
      },
      log: {
        phone: "",
        paswad: "",
        code: "",
        reg: true
      },
      ret: {
        phone: "",
        newpaswad: "",
        newpaswads: "",
        code: ""
      },
      state: true,
      str: false
    };
  },
  methods: {
    login() {
      this.$router.replace('register')
    },
    paslogin() {
      this.str = !this.str;
    },
    retrieve() {
      this.log.reg = !this.log.reg;
    },
    sendMsg() {
      let _that = this;
      _that.isDisabled = true;
      let interval = window.setInterval(function() {
        _that.buttonName = _that.time + "s";
        --_that.time;
        if (_that.time < 0) {
          _that.buttonName = "重新发送";
          _that.time = 9;
          _that.isDisabled = false;
          window.clearInterval(interval);
        }
      }, 1000);
    },
    btnlog() {
      if (this.log.phone == "") {
        this.$notify({
          title: "警告",
          message: "请输入手机号",
          type: "warning"
        });
      } else if (this.str == true && this.log.paswad == "") {
        this.$notify({
          title: "警告",
          message: "请输入密码",
          type: "warning"
        });
      } else if (this.str == false && this.log.code == "") {
        this.$notify({
          title: "警告",
          message: "请输入验证码",
          type: "warning"
        });
      } else {
        this.$notify({
          title: "提示",
          message: "登录成功！",
          type: "success"
        });
        this.$router.replace('/')
      }
    },
    btnret() {
      console.log("修改并登录！");
      if (this.ret.phone == "") {
        this.$notify({
          title: "警告",
          message: "请输入手机号",
          type: "warning"
        });
      } else if (this.ret.code == "") {
        this.$notify({
          title: "警告",
          message: "请输入手机验证码",
          type: "warning"
        });
      }else if (this.ret.newpaswad == "") {
        this.$notify({
          title: "警告",
          message: "请输入新密码",
          type: "warning"
        });
      }else if (this.ret.newpaswads == "") {
        this.$notify({
          title: "警告",
          message: "请确认新密码",
          type: "warning"
        });
      }else if (this.ret.newpaswad !==this.ret.newpaswads) {
        this.$notify({
          title: "警告",
          message: "两次密码不一致，请重新输入！",
          type: "warning"
        });
      }else{
        this.$notify({
          title: "提示",
          message: "成功修改并登录！",
          type: "success"
        });
        this.$router.replace("/");
      }
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
    background-image: url("../assets/images/loginbg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    .register {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      width: 400px;
      margin: 0 auto;
      padding: 30px;
      background: #ffffff;
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        .ipt {
          width: 240px;
          margin: 8px 0;
        }
        .btn {
          color: #ffffff;
          background: #13c2c2;
          width: 200px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          cursor: pointer;
        }
      }
      .center {
        height: 200px;
        border-left: 1px solid #cccccc;
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 200px;
        .work {
          color: #13c2c2;
          cursor: pointer;
        }
        p {
          font-size: 12px;
        }
        .denlu {
          color: #13c2c2;
          cursor: pointer;
        }
      }
    }
    .login {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .left {
        width: 800px;
        height: 340px;
        img {
          height: 340px;
          width: 800px;
        }
      }
      .right {
        padding: 30px 0;
        width: 300px;
        background: #ffffff;
        .button {
          background: #13c2c2;
          border: 0;
        }
        h3 {
          padding: 0 0 20px 0;
          color: #13c2c2;
        }
        .ipt {
          width: 240px;
          margin: 8px 0;
          .btncode {
            color: #000;
          }
        }
        p {
          color: #999;
          font-size: 14px;
          cursor: pointer;
          span {
            color: #13c2c2;
          }
        }
        .btn {
          color: #ffffff;
          background: #13c2c2;
          width: 240px;
          margin: 20px auto;
          height: 40px;
          line-height: 40px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
