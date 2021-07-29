<template>
  <div id="loginform">
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item
        prop="name"
        label="用户名"
        :rules="[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            type: 'string',
            message: '请输入正确的用户名',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="dynamicValidateForm.name" ></el-input>
      </el-form-item>
      <el-form-item
         
        label="密码"
          
        :rules="{
          required: true,
          message: '密码不能为空',
          trigger: 'blur',
        }"
      >
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        
        name: "",
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (true) {
          this.$router.push("/daohang");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    } 
  },
};
</script>

<style>
  .loginform {
    width: 500px;
    color: #44afca;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
</style>