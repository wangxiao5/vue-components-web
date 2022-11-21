<template>
  <div>
    <bread-crumb></bread-crumb>
    <div class="block">
      <el-carousel height="300px" type="card">
        <el-carousel-item v-for="(item, index) in urls" :key="index">
          <el-image :src="item" fit="fill"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-card class="mt">
      <el-row>
        <el-col :span="8" class="welcome" :push="1">
          <p>欢迎您，{{ info }}</p>
          <p>樱花金融管理后台</p>
        </el-col>
        <el-col :span="8" :offset="8">
          <div class="item">
            <span>累计交易金额</span>
            <p>12090099</p>
          </div>
          <div class="item">
            <span>团队排名</span>
            <p>5/25</p>
          </div>
          <div class="item">
            <span>团队排名</span>
            <p>5/25</p>
          </div>
          <div class="clear"></div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-row :gutter="24">
        <el-col :span="8" class="box">
          <span>我的待办</span>
          <p>9个任务</p>
        </el-col>
        <el-col :span="8" class="box">
          <span>本周任务平均处理时间</span>
          <p>30分钟</p>
        </el-col>
        <el-col :span="8" class="box">
          <span>本周交易额</span>
          <p>50000</p>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-calendar>
        <template slot="dateCell" slot-scope="{ data }">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split("-").slice(1).join("-") }}
            {{ data.isSelected ? "✔️" : "" }}
          </p>
        </template>
      </el-calendar>
    </el-card>
  </div>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb.vue";

export default {
  components: { BreadCrumb },
  data() {
    return {
      info: sessionStorage.getItem("nickname"),
      urls: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
      ],
    };
  },

  created() {
    // this.breadList = this.$route.meta.bread || [];
  },
};
</script>

<style lang="less" scoped>
.welcome {
  p {
    margin-bottom: 10px;
    margin-left: 10px;
  }
}
.item {
  float: right;
  margin-right: 100px;
  span {
    font-size: 14px;
  }
  p {
    font-size: 20px;
    margin-top: 10px;
  }
}
.box {
  text-align: center;
  span {
    font-size: 14px;
  }
  p {
    font-size: 20px;
    margin-top: 10px;
  }
}
.block {
  width: 1200px;
  margin: 20px auto;
}
.is-selected {
  color: #1989fa;
}
</style>