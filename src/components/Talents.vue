<template>
  <div id="app">
    <vheader />
    <div class="main">
      <a href="#zyg">123</a>
      <div class="chunk_1">
        <div class="left">
          <div class="ask">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="发布时间">
                <el-radio-group v-model="form.resource1">
                  <el-radio label="24小时内"></el-radio>
                  <el-radio label="近三天"></el-radio>
                  <el-radio label="近一周"></el-radio>
                  <el-radio label="近一月"></el-radio>
                  <el-radio label="不限"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="工作经验">
                <el-radio-group v-model="form.resource2">
                  <el-radio label="无经验"></el-radio>
                  <el-radio label="1-3年"></el-radio>
                  <el-radio label="3-5年"></el-radio>
                  <el-radio label="5-10年"></el-radio>
                  <el-radio label="10年以上"></el-radio>
                  <el-radio label="不限"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="学历">
                <el-radio-group v-model="form.resource3">
                  <el-radio label="初中及以下"></el-radio>
                  <el-radio label="高中/中技/中专"></el-radio>
                  <el-radio label="大专"></el-radio>
                  <el-radio label="本科"></el-radio>
                  <el-radio label="硕士"></el-radio>
                  <el-radio label="博士"></el-radio>
                  <el-radio label="不限"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="年龄">
                <el-radio-group v-model="form.resource4">
                  <el-radio label="16-20岁"></el-radio>
                  <el-radio label="21-25岁"></el-radio>
                  <el-radio label="26-30岁"></el-radio>
                  <el-radio label="31-35岁"></el-radio>
                  <el-radio label="36-40岁"></el-radio>
                  <el-radio label="40岁以上"></el-radio>
                  <el-radio label="不限"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="form.resource5">
                  <el-radio label="男性"></el-radio>
                  <el-radio label="女性"></el-radio>
                  <el-radio label="不限"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="工作类型">
                <el-radio-group v-model="form.resource6">
                  <el-radio label="全职"></el-radio>
                  <el-radio label="兼职"></el-radio>
                  <el-radio label="实习"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">筛选</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="talents" id="zyg">
            <div v-for="item in 5" :key="item">
              <el-card shadow="hover" class="list">
                <div class="left-l">
                  <div class="name">
                    <span>章鱼哥</span>
                    <span>在找 php开发工程师</span>
                  </div>
                  <div class="ask-a">
                    <span>7-8k</span>|
                    <span>工作2年</span>|
                    <span>22岁</span>|
                    <span>惠州-惠城</span>
                  </div>
                  <div class="time">
                    <span>40分钟前 发布</span>
                  </div>
                </div>
                <div class="right-r">
                  <router-link to="resume" tag="li">查看简历</router-link>
                </div>
              </el-card>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="r-top">
            <el-card class="card" shadow="hover">
              <span>21</span>
              <span>待处理</span>
            </el-card>
            <el-card class="card" shadow="hover">
              <span>11</span>
              <span>有意向</span>
            </el-card>
            <el-card class="card" shadow="hover">
              <span>8</span>
              <span>发面邀</span>
            </el-card>
            <el-card class="card" shadow="hover">
              <span>2</span>
              <span>不合适</span>
            </el-card>
          </div>
          <div class="r-bottom">
            <div class="title">待处理</div>
            <div class="list" @click="gotoMenu" v-for="item in 8" :key="item">
              <div class="name">
                <span>章鱼哥 php开发工程师</span>
                <span>10分钟前</span>
              </div>
              <div class="phone">联系：13192846492</div>
              <div class="ask">
                <span>3年</span>|
                <span>本科</span>|
                <span>惠州市</span>|
                <span>6-8k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000" class="pagination"></el-pagination>
    </div>
    <top></top>
  </div>
</template>

<script>
const top = () => import("./Top");
const vheader = () => import("./Header");
export default {
  name: "App",
  components: {
    vheader,
    top
  },
  updatad(){
    document.querySelector("#zyg").scrollIntoView(true)
  },
  data() {
    return {
      phone: "",
      paswad: "",
      paswads: "",
      code: "",

      form: {
        resource1: "",
        resource2: "",
        resource3: "",
        resource4: "",
        resource5: "",
        resource6: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    gotoMenu() {
      this.$router.replace("/resume");
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
    margin: 0 auto;
    .pagination {
      margin: 20px 0;
    }
    .chunk_1 {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
      .left {
        width: 810px;
        .ask {
          background: #fff;
          margin-bottom: 20px;
          width: 100%;
          padding: 20px;
          .el-form-item {
            margin-bottom: 0;
            .el-form-item_content {
              text-align: left;
            }
          }
        }
        .list {
          li {
            list-style: none;
          }
          width: 100%;
          cursor: pointer;
          padding: 20px;
          background: #fff;
          margin-bottom: 10px;
          .left-l {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;

            // display: flex;
            // flex-direction: column;
            // justify-content: start;
            // align-items: flex-start;
            .name {
              font-weight: 600;
              font-size: 20px;
              span {
                margin-right: 10px;
              }
            }
            .ask-a {
              margin: 5px 0;
              span {
                margin: 0 10px;
              }
            }
          }
          .right-r {
            background: #13c2c2;
            height: 40px;
            width: 80px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            margin-right: 20px;
            font-size: 16px;
            cursor: pointer;
          }
        }
      }
      .right {
        .r-top {
          width: 300px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #fff;
          .card {
            margin: 10px;
            cursor: pointer;
            background: #eeeeee;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            &:hover {
              color: #409eff;
            }
            span {
              display: block;
              &:nth-child(1) {
                font-size: 40px;
                font-weight: 600;
              }
              &:nth-child(2) {
                font-size: 16px;
              }
            }
          }
        }
        .r-bottom {
          .title {
            margin: 30px 0 10px 0;
            font-size: 20px;
            font-weight: 600;
            color: #409eff;
          }
          .list {
            background: #fff;
            border-radius: 10px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 20px;
            cursor: pointer;
            .name {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              span {
                display: block;
                &:nth-child(1) {
                  font-weight: 600;
                  font-size: 18px;
                }
              }
            }
            .phone {
              margin: 10px 0;
            }
            .ask {
              span {
                margin: 0 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
