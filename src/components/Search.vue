<template>
  <div>
    <el-button>获取数据</el-button>
    {{getdata}}
    <el-button @click="pinlun1">获取数据</el-button>
    {{pinlun}}
  </div>
</template>

<script>
import api from "../common/passport_api";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      getdata: "",
      pinlun: [],
      aa: {
        a: 1,
        b: "25"
      }
    };
  },
  // 生命周期
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
    this.shuju();
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updatad() {
    console.log("updatad");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    async shuju() {
      let params = {
        keywords: "海阔天空"
      };
      let getdata = await api.login(params);
      this.$store.commit("somemutation", getdata);
      var hh = sessionStorage.getItem("key");
      this.getdata = hh;
    },

    async pinlun1() {
      let pl = {
        id: 186016,
        limit: 1
      };
      let pinlun = await api.pinlun(pl);
      console.log(pinlun);
    }
  }
};
</script>

<style lang="less" scoped>
</style>