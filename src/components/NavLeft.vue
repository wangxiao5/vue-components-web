<template>
  <div>
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
    >
      <h1 class="title">汇洋金融后台管理系统</h1>
      <menus v-for="(item, index) in menuData" :menu="item" :key="index" />
    </el-menu>
  </div>
</template>

<script>
import { get } from "@/utils/http";
import Menus from "./Menu.vue";

export default {
  data() {
    return {
      menuData: [],
    };
  },
  components: {
    Menus,
  },
  created() {
    get("/menu").then((res) => {
      //console.log(res);
      this.menuData = res.data;
    });
  },
};
</script>

<style lang="less" scoped>
.title {
  line-height: 50px;
  color: #fff;
  text-align: center;
}
</style>