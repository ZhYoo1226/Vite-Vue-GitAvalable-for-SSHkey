<template>
  <div class="registration-form">
    <el-form :model="form" label-width="100px" style="max-width: 500px" :rules="rules" ref="formRef">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" show-password placeholder="请输入密码" />
        <div v-if="form.password" class="password-hint">
          当前长度: {{ form.password.length }} 位 (至少6位)
        </div>
      </el-form-item>

      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input v-model="form.confirmPassword" type="password" show-password placeholder="请再次输入密码" />
      </el-form-item>

      <el-form-item label="居住地" prop="region">
        <el-select v-model="form.region" placeholder="请选择居住地" style="width: 100%">
          <el-option label="上海" value="shanghai" />
          <el-option label="北京" value="beijing" />
          <el-option label="武汉" value="wuhan" />
          <el-option label="青岛" value="qingdao" />
          <el-option label="南京" value="nanjing" />
          <el-option label="厦门" value="xiamen" />
          <el-option label="黑龙江" value="heilongjiang" />
          <el-option label="乌鲁木齐" value="wulumuqi" />
          <el-option label="广州" value="guangzhou" />
          <el-option label="重庆" value="chongqing" />
          <el-option label="成都" value="chengdu" />
          <el-option label="浙江" value="zhejiang" />
        </el-select>
      </el-form-item>

      <el-form-item label="身份配置" prop="userType">
        <el-radio-group v-model="form.userType">
          <el-radio label="user">用户</el-radio>
          <el-radio label="admin">管理员</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
        <el-button @click="resetForm" style="margin-left: 10px">重置</el-button>
        <B></B>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import userAPI from '../../../api/user.js'
import type { Login } from '../../../types/user'
import { useRouter } from 'vue-router'
import B from '../buttons/B-form.vue'
// 表单引用
const formRef = ref<FormInstance>()

// 表单数据
const form = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  region: '',
  userType: ''
})

// 自定义验证规则
const validateConfirmPassword = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请确认密码'))
  } else if (value !== form.password) {
    callback(new Error('两次输入的密码不一致'))
  } else {
    callback()
  }
}

// 表单验证规则
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度应在3-20个字符之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码至少6位', trigger: 'blur' },
    { max: 20, message: '密码不超过20位', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    { validator: validateConfirmPassword, trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请选择居住地', trigger: 'change' }
  ],
  userType: [
    { required: true, message: '请选择身份配置', trigger: 'change' }
  ]
})

let router = useRouter()
// 提交表单
const onSubmit = async () => {
  if (!formRef.value) return

  try {
    const valid = await formRef.value.validate()
    if (valid) {
      // 这里可以添加实际的注册逻辑，如调用 API
      const regData: Login = {
        account: form.username,
        password: form.password
      }
    }
    const response = await userAPI.registerUser(regData)
    if (response) {
      ElMessage.success('注册成功!')
      router.push('/loginview/logform')
    }
  } catch (error) {
    console.log('验证失败:', error)
    ElMessage.error('注册失败')
  }
}

// 重置表单
const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()

  let user_list = userAPI.getAllUsers()
  user_list.then(data => {
    console.log("用户列表：", data)
  }).catch(error => {
    console.log("业务代码调用错误如下：", error)
  })
}
</script>

<style scoped>
.registration-form {
  padding: 20px;
}

.password-hint {
  font-size: 12px;
  color: pink;
  margin-top: 5px;
}
</style>