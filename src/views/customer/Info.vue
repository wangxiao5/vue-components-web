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
          <el-input v-model="input1" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="6">
          <el-select
            v-model="value"
            placeholder="请选择学历"
            style="width: 100%"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input v-model="input2" placeholder="请输入手机号"></el-input>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-button type="primary">+新建客户</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column prop="num" label="客户编号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="phone" label="手机号"> </el-table-column>
        <el-table-column prop="idnum" label="身份证号"> </el-table-column>
        <el-table-column prop="edu" label="学历"> </el-table-column>
        <el-table-column prop="job" label="职业" width="100"> </el-table-column>
        <el-table-column prop="address" label="住址"> </el-table-column>
        <el-table-column prop="married" label="婚姻状况"> </el-table-column>
        <el-table-column label="操作" width="220">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-button size="mini" type="danger">删除</el-button>
            <el-button size="mini">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import breadcrumb from "@/mixins/breadCrumb.js";

export default {
  mixins: [breadcrumb],
  data() {
    return {
      input1: "",
      input2: "",
      options: [
        {
          value: "选项1",
          label: "博士",
        },
        {
          value: "选项2",
          label: "硕士",
        },
        {
          value: "选项3",
          label: "学士",
        },
        {
          value: "选项4",
          label: "高中",
        },
        {
          value: "选项5",
          label: "初中",
        },
      ],
      value: "",
      tableData: [
        {
          num: 1001,
          name: "王小虎",
          phone: 1988900000,
          idnum: 11029399004900993,
          edu: "初中",
          job: "司机",
          address: "上海市普陀区金沙江路 1518 弄",
          married: "已婚",
        },
        {
          num: 1002,
          name: "王小虎",
          phone: 1988900000,
          idnum: 11029399004900993,
          edu: "初中",
          job: "司机",
          address: "上海市普陀区金沙江路 1518 弄",
          married: "已婚",
        },
        {
          num: 1003,
          name: "王小虎",
          phone: 1988900000,
          idnum: 11029399004900993,
          edu: "初中",
          job: "司机",
          address: "上海市普陀区金沙江路 1518 弄",
          married: "已婚",
        },
        {
          num: 1004,
          name: "王小虎",
          phone: 1988900000,
          idnum: 11029399004900993,
          edu: "初中",
          job: "司机",
          address: "上海市普陀区金沙江路 1518 弄",
          married: "已婚",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>