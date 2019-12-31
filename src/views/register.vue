<template>
  <div id="app">
    <lodinheader />
    <div class="main">
      <div class="register">
        <div class="left">
          <el-input
            class="ipt"
            placeholder="请输入手机号码"
            v-model="reg.phone"
            prefix-icon="el-icon-user"
            clearable
          ></el-input>
          <el-input
            class="ipt"
            clearable
            placeholder="请输入密码"
            v-model="reg.paswad"
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
          <el-input
            class="ipt"
            clearable
            placeholder="请确认密码"
            v-model="reg.paswads"
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
          <el-input
            class="ipt"
            placeholder="请输验证码"
            v-model="reg.code"
            prefix-icon="el-icon-house"
            clearable
          >
            <el-button
              slot="append"
              class="btncode"
              @click="sendMsg"
              :disabled="isDisabled"
            >{{buttonName}}</el-button>
          </el-input>
          <div class="btn" @click="btnreg">立即注册</div>
        </div>
        <div class="center"></div>
        <div class="right">
          <div class="work" @click="totalents">
            我要招人
            <i class="el-icon-caret-right"></i>
          </div>
          <div>
            <p>已有账号</p>
            <span class="denlu" @click="login">
              直接登录
              <i class="el-icon-caret-right"></i>
            </span>
          </div>
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
      this.$router.replace('login')
    },
    totalents(){
      this.$router.replace("/talents")
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
    btnreg() {
      if (this.state == true && this.reg.phone == "") {
        this.$notify({
          title: "警告",
          message: "请输入手机号",
          type: "warning"
        });
      } else if (this.state == true && this.reg.paswad == "") {
        this.$notify({
          title: "警告",
          message: "请输入密码",
          type: "warning"
        });
      } else if (this.state == true && this.reg.paswads == "") {
        this.$notify({
          title: "警告",
          message: "请输入确认密码",
          type: "warning"
        });
      } else if (this.state == true && this.reg.paswads !== this.reg.paswad) {
        this.$notify({
          title: "警告",
          message: "两次密码不一致，请重新输入",
          type: "warning"
        });
      } else if (this.state == true && this.reg.code == "") {
        this.$notify({
          title: "警告",
          message: "请输入手机验证码",
          type: "warning"
        });
      } else {
        this.$notify({
          title: "提示",
          message: "注册成功！",
          type: "success"
        });
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
  }
}
</style>
