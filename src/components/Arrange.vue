<template>
  <div id="app">
    <vheader />
    <div class="main">
      <div class="chunk">
        <div class="left">
          <div class="title">面试安排</div>
          <div class="all">
            <div class="job" v-for="item in 7" :key="item">
              <router-link to="/resume" tag="li">
                <div class="pp">
                  <span class="work">章鱼哥 | php开发工程师</span>
                </div>
                <div class="ask">
                  <span>对接人：</span>军优会
                </div>
                <div class="pp">
                  <span>面试时间：2019-12-21-11:00</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="title">我的面试官</div>
          <div class="list" v-for="item in 10" :key="item">
            <i class="el-icon-s-custom"></i>
            <div class="left">
              <div class="top">
                <span>面试官</span>
                <span>13192846492</span>
              </div>
              <div class="bot">华贸大厦1号楼2805中国军优</div>
            </div>

            <el-popover placement="top" width="400" trigger="hover">
              <el-form ref="form" label-width="80px">
                <el-form-item label="名称">
                  <el-input v-model="editor.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                  <el-input v-model="editor.phone" clearable></el-input>
                </el-form-item>
                <el-form-item label="地址">
                  <el-input v-model="editor.site" clearable></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">保存</el-button>
                  <el-button type="primary">取消</el-button>
                </el-form-item>
              </el-form>
              <el-button slot="reference" class="right">编辑</el-button>
            </el-popover>
          </div>
          <el-popover placement="top" width="400" trigger="click">
            <el-form ref="form" label-width="80px">
              <el-form-item label="名称">
                <el-input v-model="add.name" clearable></el-input>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="add.phone" clearable></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="add.site" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">添加</el-button>
                <el-button type="primary">取消</el-button>
              </el-form-item>
            </el-form>
            <el-button slot="reference" class="btn">添加面试官</el-button>
          </el-popover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const vheader = () => import("./Header");
// import vheader from "./Header";
export default {
  name: "App",
  components: {
    vheader
  },
  data() {
    return {
      activeName: "second",
      editor: {
        name: "",
        phone: "",
        site: ""
      },
      add: {
        name: "",
        phone: "",
        site: ""
      },
      form: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
    li {
      list-style: none;
    }
    .chunk {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      .left {
        text-align: left;
        width: 850px;
        .title {
          font-size: 20px;
          font-weight: 600;
          padding: 10px 0;
          text-align: center;
        }
        .all {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
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
              // display: flex;
              // justify-content: space-between;
              // align-items: center;
              // flex-direction: row;
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
      .right {
        width: 300px;
        .title {
          font-size: 20px;
          font-weight: 600;
          padding: 10px 0;
          margin-bottom: 10px;
        }
        .list {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          padding: 10px;
          border-bottom: 1px solid #999;
          &:last-child {
            border-bottom: 0;
          }
          i {
            display: block;
            margin-right: 5px;
          }
          .left {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
          }
          .right {
            font-size: 16px;
            width: 80px;
            cursor: pointer;
            &:hover {
              color: #3b7ff5;
            }
          }
        }
        .btn {
          background: red;
          text-align: center;
          color: #fff;
          padding: 10px;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
