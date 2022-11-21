<template>
  <div>
    <el-card class="wrap">
      <div slot="header">
        <h2 class="title">汇洋金融后台管理系统</h2>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { post } from "@/utils/http.js";
import { setToken } from "@/utils/auth.js";

export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        token: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          // { pattern: /^\d+$/, message: "必须得是数字", trigger: "blur" },            //pattern放正则
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  //mock模拟后台数据接口
  methods: {
    login() {
      this.$refs["ruleForm"].validate((valid) => {
        //ref拿到DOM元素，validate主动调用表单验证
        //console.log(valid);
        if (valid) {
          //axios请求
          post("/login", {
            username: this.ruleForm.username, //该对象可以缩写为this.ruleForm,前提是变量名与后台一致
            password: this.ruleForm.password,
          })
            .then((res) => {
              //console.log(res);
              setToken(res.token);
              sessionStorage.setItem("nickname", res.nickname);

              this.$router.push("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 400px;
  margin: auto;
  margin-top: 200px;
  div {
    .title {
      text-align: center;
    }
  }
}
</style>