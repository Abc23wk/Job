<template>
  <div id="app">
    {{msg}}
    <vheader @showMsg="showMsg1" />
    {{guoluvqi | toint}}
    <div class="main">
      
      <div class="chunk_1">
        <div class="top">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部职位" name="first">
              <div class="bottom">
                <div class="job" v-for="item in 12" :key="item" @click.stop="wor">
                  <div class="pp">
                    <span class="work">Java开发工程师</span>
                    <span class="money">8k-12k</span>
                  </div>
                  <div class="ask">
                    <span>惠州-惠城区</span>|
                    <span>全职</span>|
                    <span>2-3年</span>|
                    <span>本科</span>
                  </div>
                  <div class="pp">
                    <el-popover placement="bottom" width="240" trigger="hover">
                      <el-form ref="form" :model="form" label-width="80px">
                        <el-button>刷新</el-button>
                        <el-button>下线</el-button>
                        <el-button>修改</el-button>
                      </el-form>
                      <el-button slot="reference" class="state" @click.stop="setcli">审核中</el-button>
                    </el-popover>
                    <span class="time">4天前</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="招聘中" name="second">
              <div class="bottom">
                <div class="job" v-for="item in 7" :key="item" @click.stop="wor">
                  <div class="pp">
                    <span class="work">Java开发工程师</span>
                    <span class="money">8k-12k</span>
                  </div>
                  <div class="ask">
                    <span>惠州-惠城区</span>|
                    <span>全职</span>|
                    <span>2-3年</span>|
                    <span>本科</span>
                  </div>
                  <div class="pp">
                    <el-popover placement="bottom" width="240" trigger="hover">
                      <el-form ref="form" :model="form" label-width="80px">
                        <el-button>刷新</el-button>
                        <el-button>下线</el-button>
                        <el-button>修改</el-button>
                      </el-form>
                      <el-button slot="reference" class="state">设置</el-button>
                    </el-popover>
                    <span class="time">4天前</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="未发布" name="fourth">
              <div class="bottom">
                <div class="job" v-for="item in 5" :key="item" @click.stop="wor">
                  <div class="pp">
                    <span class="work">Java开发工程师</span>
                    <span class="money">8k-12k</span>
                  </div>
                  <div class="ask">
                    <span>惠州-惠城区</span>|
                    <span>全职</span>|
                    <span>2-3年</span>|
                    <span>本科</span>
                  </div>
                  <div class="pp">
                    <el-popover placement="bottom" width="240" trigger="hover">
                      <el-form ref="form" :model="form" label-width="80px">
                        <el-button>发布</el-button>
                        <el-button>修改</el-button>
                        <el-button>删除</el-button>
                      </el-form>
                      <el-button slot="reference" class="state">设置</el-button>
                    </el-popover>
                    <span class="time">4天前</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="审核中" name="third">
              <div class="bottom">
                <div class="job" v-for="item in 2" :key="item" @click.stop="wor">
                  <div class="pp">
                    <span class="work">Java开发工程师</span>
                    <span class="money">8k-12k</span>
                  </div>
                  <div class="ask">
                    <span>惠州-惠城区</span>|
                    <span>全职</span>|
                    <span>2-3年</span>|
                    <span>本科</span>
                  </div>
                  <div class="pp">
                    <el-popover placement="bottom" width="240" trigger="hover">
                      <el-form ref="form" :model="form" label-width="80px">
                        <el-button>删除</el-button>
                      </el-form>
                      <el-button slot="reference" class="state">设置</el-button>
                    </el-popover>
                    <!-- <span class="state">审核中</span> -->
                    <span class="time">4天前</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="未过审" name="trial">
              <div class="bottom">
                <div class="job" v-for="item in 3" :key="item" @click.stop="wor">
                  <div class="pp">
                    <span class="work">Java开发工程师</span>
                    <span class="money">8k-12k</span>
                  </div>
                  <div class="ask">
                    <span>惠州-惠城区</span>|
                    <span>全职</span>|
                    <span>2-3年</span>|
                    <span>本科</span>
                  </div>
                  <div class="pp">
                    <el-popover placement="bottom" width="240" trigger="hover">
                      <el-form ref="form" :model="form" label-width="80px">
                        <el-button>修改</el-button>
                        <el-button>删除</el-button>
                      </el-form>
                      <el-button slot="reference" class="state">设置</el-button>
                    </el-popover>
                    <!-- <span class="state trial">未过审</span> -->
                    <span class="time">4天前</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="chunk_1">
        <div class="top1">
          <i class="el-icon-user-solid"></i>
          人才推荐
        </div>
        <div class="bottom">
          <div class="job" v-for="item in 7" :key="item">
            <router-link to="/resume" tag="li">
              <div class="pp">
                <span class="work">章鱼哥</span>
                <span>1小时前</span>
              </div>
              <div class="ask">
                <span>23岁</span>|
                <span>工作2年</span>|
                <span>8-11k</span>|
                <span>本科</span>
              </div>
              <div class="pp">
                <span class="left">在找 Java开发</span>
                <span class="site">惠州-惠城区</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    {{box}}
    <el-button @click="btn">点击</el-button>
    {{getbox2}}
    <el-button @click="confirmLogin">改变mutations</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
const vheader = () => import("./Header");
import api from "../common/passport_api";
export default {
  name: "App",
  components: {
    vheader
  },
  data() {
    return {
      phone: "",
      paswad: "",
      paswads: "",
      code: "",
      guoluvqi: 32.63,
      form: {},

      activeName: "second",
      ceshi: {
        a: 1,
        b: "xia",
        c: {
          yi: "第一个",
          san: "123"
        }
      },
      msg: ""
    };
  },
  // 过滤器
  filters: {
    // 过滤器 处理方法
    toint(value) {
      return parseInt(value);
    }
  },
  computed: {
    ...mapState(["box"]),
    ...mapGetters(["getbox2"])
  },
  created() {
    let kk = this.$store.state.userinfo;
    console.log(JSON.stringify(kk));
  },
  updated() {},
  methods: {
    showMsg1(val) {
      this.msg = val;
    },

    ...mapActions(["getbox"]),
    ...mapMutations(["somemutation"]),
    // async confirmLogin() {
    //   let params = {
    //     keywords:"海阔天空"
    //   };
    //   let data = await api.login(params);
    //   console.log(data);
    // },
    confirmLogin() {
      // 存vuex
      // this.$store.commit("somemutation",this.ceshi)
      this.$router.replace("/search");
    },
    btn() {
      // 22就是要传的数据
      this.somemutation(22);
      // this.getbox();
    },
    // ===========================================================
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    wor() {
      this.$router.replace("/issue");
      console.log("123");
    },
    setcli(){
      console.log("00");
    }
  },
  mounted() {
    this.getbox("0000")
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
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
    li {
      list-style: none;
    }
    width: 1200px;
    margin: 0 auto;
    .chunk_1 {
      margin-bottom: 20px;
      min-height: 220px;
      .top1 {
        background: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        padding: 20px 0;
      }
      .bottom {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        .job {
          cursor: pointer;
          background: #fff;
          border-radius: 5px;
          padding: 20px;
          margin: 10px;
          .ask {
            text-align: left;
            margin: 10px 0;
            span {
              display: inline-block;
              margin-right: 5px;
              font-size: 16px;
            }
          }
          .pp {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            .el-form {
              display: flex;
              justify-content: center;
              border: 1px solid red;
            }
            .work {
              font-size: 20px;
              font-weight: 600;
            }
            .money {
              color: #fc8551;
              font-size: 20px;
            }
            span {
              display: inline-block;
            }
            .state {
              background: #47bb58;
              height: 30px;
              font-size: 14px;
              line-height: 30px;
              padding: 0 10px;
              border-radius: 15px;
              color: #fff;
              &.pass {
                background: #3b7ff5;
              }
              &.trial {
                background: red;
              }
            }
          }
        }
      }
    }
  }
}
</style>
