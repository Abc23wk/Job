<template >
  <div class="content" :style="{height:hh+'px'}">
    <div class="w3layout-agileits">
      <h2>404</h2>
      <h3>Oops! Page Not Found</h3>
      <p>Something went wrong</p>
      <p>Go back to your home page or you may also refresh the page</p>
      <router-link to="/" replace>
        <i class="fa fa-angle-double-left" aria-hidden="true"></i>Return Home
      </router-link>
    </div>

    <div class="w3footeragile">
      <p>
        Copyright &copy;
       <router-link to="/" replace>军优会</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hh:''
    };
  },
  beforeMount() {
    this.hh = document.documentElement.clientHeight || document.body.clientHeight;
  }
};
</script>
<style lang="less" scoped>
.content {
  background: url("../assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  color: #fff;
  font-family: "Quicksand", sans-serif;
  text-align: center;
}

.content a {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  text-decoration: none;
}

.w3layout-agileits {
  margin: 0 auto;
 padding: 60px;
}

.w3layout-agileits p {
  font-size: 17px;
  color: #fff;
  letter-spacing: 1px;
  line-height: 28px;
  text-transform: capitalize;
}

.w3layout-agileits a {
  font-size: 1em;
  text-transform: uppercase;
  color: #fff;
  padding: 0.8em 2em;
  margin: 2em 0 0;
  letter-spacing: 1px;
  display: inline-block;
  background: #4caf50;
  border-top: 2px solid #fff;
  background: #3be8b0;
  background: #6a67ce;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -ms-border-radius: 30px;
  -moz-border-radius: 30px;
  -o-border-radius: 30px;
  -webkit-box-shadow: -1px 10px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 10px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 10px 18px -6px rgba(0, 0, 0, 0.75);
}

.w3layout-agileits a:hover {
  background: #e3aa01;
  border-top: 2px solid #fff;
}

i.fa.fa-angle-double-left {
  padding-right: 0.5em;
  font-size: 20px;
}

.w3footeragile {
  margin: 60px 0px 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.w3footeragile p a {
  color: #6a67ce;
  font-weight: 700;
}

.w3footeragile p {
  letter-spacing: 1px;
  color: #fff;
  font-size: 16px;
}

.w3footeragile p a:hover {
  color: #fff;
}

h2 {
  font-size: 150px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 2px 2px 2px rgba(16, 16, 16, 0.8);
}

span {
  font-weight: 700;
  color: #fff;
  margin: 0 5px;
}

h3 {
  font-size: 50px;
  color: #fff;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 0.5em;
}
</style>
