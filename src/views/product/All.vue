<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row :gutter="24">
        <el-col :span="6">
          <el-input
            placeholder="产品名称"
            v-model.trim="searchValue"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <el-select
            v-model="rate"
            placeholder="请选择利率"
            style="width: 100%"
          >
            <el-option label="3.8%" value="3.8">3.8 </el-option>
            <el-option label="3.9%" value="3.9">3.9 </el-option>
            <el-option label="4.1%" value="4.1">4.1 </el-option>
            <el-option label="4.3%" value="4.3">4.3 </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 100%"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="primary">重置</el-button>
          <span class="el-dropdown-link" @click="expand" v-if="!advanced">
            展开<i class="el-icon-arrow-down"></i>
          </span>
          <span class="el-dropdown-link" @click="expand" v-else>
            展开<i class="el-icon-arrow-up"></i>
          </span>
        </el-col>
      </el-row>
      <el-row class="mt" :gutter="24" v-show="advanced">
        <el-col :span="6">
          <el-input placeholder="产品类别" v-model.trim="type"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="最高分期数" v-model.trim="staging"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="状态" v-model.trim="status"></el-input>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="产品名称"></el-table-column>
        <el-table-column prop="rate" label="利率"></el-table-column>
        <el-table-column prop="date" label="开放日期"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.status == 1" effect="dark"
              >已启用</el-tag
            >
            <el-tag type="danger" v-else effect="dark">已禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="highest"
          label="最高分期数(月)"
        ></el-table-column>
        <el-table-column prop="number" label="申请客户数量"></el-table-column>
        <el-table-column prop="total" label="累计签约金额"></el-table-column>
        <el-table-column prop="average" label="件均"></el-table-column>
        <el-table-column prop="remark" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-if="scope.row.status == 2"
              type="primary"
              @click="handleEdit(scope.row)"
              >启用</el-button
            >
            <el-button
              size="mini"
              v-else
              type="danger"
              @click="handleDelete(scope.row)"
              >停用</el-button
            >
            <el-button
              size="mini"
              type="primary"
              @click="detail(scope.row.name)"
              >详情</el-button
            > </template
          >>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import breadcrumb from "@/mixins/breadCrumb.js";
import moment from "moment";
import { get } from "@/utils/http";

export default {
  mixins: [breadcrumb],
  data() {
    return {
      searchValue: "",
      rate: "",
      dateRange: "",
      type: "",
      staging: "",
      status: "",
      advanced: false,
      tableData: [],
    };
  },
  created() {
    this.list();
  },
  methods: {
    expand() {
      this.advanced = !this.advanced;
    },
    search() {
      console.log(this.dateRange);
      const startDate = moment(this.dateRange[0]).format("YYYY-MM-DD hh:mm:ss"); //后台需要格式化日期字符串
      console.log(startDate);
      //   post("/",{...this.form,startDate,endDate}).then()
    },
    list() {
      get("/productList").then((res) => {
        this.tableData = res.data.list;
        // this.total=res.data.total
      });
    },
    handleSelectionChange() {
      console.log(1);
    },
    handleEdit(row) {
      //发请求，更新数据
      console.log(row);
    },
    handleDelete(row) {
      //发请求，更新数据
      console.log(row);
    },
    detail(name) {
      //带参发请求，更新数据,跳转到详情页，放本地或路由，vuex刷新就丢失
      console.log(name);
      this.$router.push("/product/detail");
    },
  },
};
</script>

<style lang="less" scoped>
.el-dropdown-link {
  color: #409eff;
}
</style>