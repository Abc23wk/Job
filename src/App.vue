<template>
  <div id="app">
    <!-- <vheader /> -->
    <!-- 路由动画 -->
    <transition :name="transitionName">
      <router-view class="Router" />
    </transition>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vfooter from "../src/components/Footer";
import lodinheader from "../src/components/Lodinghedaer";
import vheader from "../src/components/Header";
export default {
  name: "App",
  components: {
    vfooter,
    lodinheader,
    vheader
  },
  data() {
    return {
      transitionName: ""
    };
  },
  // 监听路由变化
  watch: {
    $route() {
      var isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else if (this.$router.isBack != null) {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  },
  mounted() {
    //路由切换返回顶部
    this.$router.afterEach((to, from) => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style lang="less" >
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eeeeee;
  .Router {
    // position: absolute;
    // width: 100%;

    transition: all ease 500ms;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
}
</style>
