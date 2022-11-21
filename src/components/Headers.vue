<template>
  <div class="wrap">
    <div class="head">
      <el-dropdown @command="fn">
        <span class="el-dropdown-link">
          欢迎您，{{ info }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">修改密码</el-dropdown-item>
          <el-dropdown-item command="c">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <p class="date">
      今天是你在阿里的第
      <span class="tips">{{ days }}</span
      >天
    </p>
    <div class="clear"></div>
  </div>
</template>

<script>
import { removeToken } from "@/utils/auth.js";
import { get } from "@/utils/http.js";
export default {
  data() {
    return {
      info: sessionStorage.getItem("nickname"),
      time: "",
    };
  },
  methods: {
    fn(command) {
      if (command === "c") {
        removeToken();
        this.$router.push("/login");
      }
    },
  },
  created() {
    get("/in").then((res) => {
      this.time = res.time;
    });
  },
  computed: {
    days() {
      let target = new Date(this.time);
      let now = new Date();
      let ms = now - target;
      return Math.floor(ms / 1000 / 60 / 60 / 24);
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  line-height: 60px;
}
.head {
  float: right;
}
.date {
  float: right;
  margin-right: 50px;
  .tips {
    font-size: 24px;
    color: #40a9ff;
  }
}
</style>