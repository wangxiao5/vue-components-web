<template>
  <div>
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <bread-crumb></bread-crumb>
    <el-card style="margin-top: 10px">
      <el-row>
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="8" style="text-align: right">
          <el-button type="primary" @click="add">新建角色</el-button>
          <el-button :disabled="!selected.length" @click="operate('启动')"
            >启动</el-button
          >
          <el-button :disabled="!selected.length" @click="operate('冻结')"
            >冻结</el-button
          >
          <el-button :disabled="!selected.length" @click="operate('删除')"
            >删除</el-button
          >
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-top: 10px">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="account" label="账户"> </el-table-column>
        <el-table-column prop="name" label="用户名"> </el-table-column>
        <el-table-column prop="character" label="角色"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
        <el-table-column prop="reason" label="创建原因"> </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            {{ scope.row.status == 1 ? "已启用" : "未启用" }}
            <!--scope.row能拿到该行数据    slot-scope是作用域插槽vue已废弃-->
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
            <el-button size="mini">{{
              scope.row.status == 1 ? "禁用" : "启用"
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <char-modal
      :visible="dialogVisible"
      @close="close"
      @reload="list"
    ></char-modal>
    <!-- 分页功能 -->
    <el-row>
      <el-card style="margin-top: 10px">
        <div class="block">
          <!-- <span class="demonstration">完整功能</span> -->
          <el-pagination
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </el-card>
    </el-row>
  </div>
</template>
{
  data:{},
  total:7767
}
{
  page:1,
  pageSize:10
}
<script>
// import breadcrumb from "@/mixins/breadCrumb.js";
import { get } from "@/utils/http";
import CharModal from "./CharModal.vue";
import { mapMutations, mapState } from "vuex";
import BreadCrumb from "../../components/BreadCrumb.vue";

export default {
  components: { CharModal, BreadCrumb },
  // mixins: [breadcrumb],
  data() {
    //如果混入文件中有与本文件中相同的变量名，以本文件为主，有相同方法或者其他，会合并到本文件中
    return {
      input3: "",
      tableData: [],
      selected: [],
      accountList: [],
      dialogVisible: false,
    };
  },
  created() {
    this.list();
  },
  computed: {
    ...mapState(["rowData"]),
  },
  methods: {
    list() {
      get("/all").then((res) => {
        //console.log(res);
        this.tableData = res.data.list;
      });
    },
    handleSelectionChange(selection) {
      console.log(selection);
      this.selected = selection;
      var arr = selection.map((item) => item.account);
      this.accountList = arr;
    },
    operate(type) {
      //console.log(type);
      //需发请求，改后台
      this.$notify({
        title: "操作提示",
        message: JSON.stringify(this.accountList) + type + "成功",
        type: "success",
      });
    },
    add() {
      this.dialogVisible = true;
      this.form = this.saveData({});
    },
    close() {
      this.dialogVisible = false;
    },
    ...mapMutations(["saveData"]),
    edit(row) {
      this.dialogVisible = true;
      this.saveData(row);
      //console.log(this.rowData);
    },
  },
};
</script>

<style lang="less" scoped>
</style>