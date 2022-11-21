<template>
  <div>
    <el-container>
      <el-aside>
        <nav-left></nav-left>
      </el-aside>
      <el-container>
        <el-header>
          <headers />
        </el-header>
        <el-main>
          <keep-alive>
            <!-- 页面缓存 -->
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Headers from "../components/Headers.vue";
import NavLeft from "../components/NavLeft.vue";

export default {
  components: {
    Headers,
    NavLeft,
  },
};

NavLeft;
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #001529;
  color: #333;
  line-height: 200px;
  height: 100vh; //vh(view height)
}

.el-main {
  background-color: #e9eef3;
  color: #333;

  height: 72vh;
}
</style>