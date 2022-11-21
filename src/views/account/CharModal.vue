<template>
  <div>
    <el-dialog :title="title" :visible="visible" width="30%" @close="close">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="角色" prop="character">
          <el-select
            v-model="form.character"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <el-option label="业务人员" value="1"></el-option>
            <el-option label="审核人员" value="2"></el-option>
            <el-option label="风控经理" value="3"></el-option>
            <el-option label="管理员" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item label="创建原因">
          <el-input type="textarea" v-model="form.reason"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["visible"],
  data() {
    return {
      title: "新建员工",
      form: {
        character: "",
        remark: "",
        reason: "",
      },
      rules: {
        character: [
          { required: true, message: "请选择角色", trigger: "change" },
        ],
        remark: [{ required: true, message: "请填写备注", trigger: "blur" }],
        reason: [{ required: true, message: "请填写原因", trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapState(["rowData"]),
  },
  watch: {
    visible() {
      const { character, remark, reason } = this.rowData;
      this.form = { character, remark, reason };
      if (character) {
        this.title = "编辑员工";
      } else {
        this.title = "新建员工";
      }
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    ok() {
      // this.$refs[form].validate((valid)=>{
      //   if(valid){
      //     //发请求
      //     post("add",this.form).then((res)=>{
      //       if(res.code==0){
      //         this.$emit("reload")                        //@reload="list"写在父组件中，父组件调用list
      //         this.close()
      //       }
      //     })
      //   }
      // })
      console.log("ok");
    },
  },
};
</script>

<style lang="less" scoped>
</style>