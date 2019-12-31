<template>
  <div id="app">
    <vheader />
    <div class="main">
      <el-page-header class="box-card form" @back="goBack" content="首页"></el-page-header>
      <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="职位名称" clearable>
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="职位介绍">
          <el-input type="textarea" v-model="form.introduce" clearable></el-input>
        </el-form-item>
        <el-form-item label="薪资待遇">
          <el-input v-model="form.treatment" clearable></el-input>
        </el-form-item>
        <el-form-item label="上班地址">
          <div class="block">
            <el-cascader
              clearable
              v-model="value"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"
            ></el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.site" clearable></el-input>
        </el-form-item>
        <el-form-item label="工作经验">
          <el-select v-model="form.experience" placeholder="请选择工作经验要求" clearable>
            <el-option label="无经验" value="shanghai"></el-option>
            <el-option label="1-3年" value="beijing"></el-option>
            <el-option label="3-5年" value="beijing"></el-option>
            <el-option label="5-10年" value="beijing"></el-option>
            <el-option label="10年以上" value="beijing"></el-option>
            <el-option label="不限" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学历要求">
          <el-select v-model="form.education" placeholder="请选择学历要求" clearable>
            <el-option label="初中及以下" value="shanghai"></el-option>
            <el-option label="高中/中技/中专" value="beijing"></el-option>
            <el-option label="大专" value="beijing"></el-option>
            <el-option label="本科" value="beijing"></el-option>
            <el-option label="硕士" value="beijing"></el-option>
            <el-option label="博士" value="beijing"></el-option>
            <el-option label="不限" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位类型">
          <el-select v-model="form.genre" placeholder="请选择职位类型" clearable>
            <el-option label="全职" value="shanghai"></el-option>
            <el-option label="兼职" value="beijing"></el-option>
            <el-option label="实习" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位亮点">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="五险一金" name="type"></el-checkbox>
            <el-checkbox label="包住宿" name="type"></el-checkbox>
            <el-checkbox label="弹性工作" name="type"></el-checkbox>
            <el-checkbox label="绩效奖金" name="type"></el-checkbox>
            <el-checkbox label="年终奖金" name="type"></el-checkbox>
            <el-checkbox label="定期体检" name="type"></el-checkbox>
            <el-checkbox label="节日福利" name="type"></el-checkbox>
            <el-checkbox label="员工旅游" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布职位</el-button>
        </el-form-item>
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
        name: "", //职位名称
        experience: "", //经验
        type: [],
        introduce: "", //介绍
        treatment: "", //待遇
        site: "", //详细地址
        education: "", //学历
        genre: "" //职位类型
      },

      //   =====================================
      value: [], //地址
      options: [
        {
          value: "guandong",
          label: "广东省",
          children: [
            {
              value: "huizhou",
              label: "惠州市",
              children: [
                {
                  value: "huicheng",
                  label: "惠城区"
                },
                {
                  value: "huiyan",
                  label: "惠阳区"
                },
                {
                  value: "boluo",
                  label: "博罗县"
                },
                {
                  value: "kekong",
                  label: "惠东县"
                },
                {
                  value: "longmeng",
                  label: "龙门县"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleChange(value) {
      console.log(value);
    },
    goBack() {
      this.$router.replace("/");
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
      .box-card {
        margin-bottom: 20px;
        padding-left: 20px;
      }
    }

    .form {
      width: 600px;
      margin: 0 auto;
    }
  }
}
</style>
