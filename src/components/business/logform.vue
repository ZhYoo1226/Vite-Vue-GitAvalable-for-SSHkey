<template>
    <div class="login-form">
        <el-form :model="form" label-width="100px" style="max-width: 500px" :rules="rules" ref="formRef">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名" />
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" show-password placeholder="请输入密码" />
            </el-form-item>

            <el-form-item>
                <el-checkbox v-model="form.rememberMe">记住我</el-checkbox>
            </el-form-item>


            <el-form-item>
                <div class="button-group">
                    <el-button type="primary" @click="onSubmit" :loading="loading" style="flex: 1; margin-right: 10px">
                        登录
                    </el-button>
                    <el-button @click="resetForm" style="flex: 1">
                        重置
                    </el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

// 表单引用
const formRef = ref<FormInstance>()
const loading = ref(false)

// 表单数据
const form = reactive({
    username: '',
    password: '',
    rememberMe: false
})

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
    ]
})

// 提交表单
const onSubmit = async () => {
    if (!formRef.value) return

    try {
        loading.value = true
        const valid = await formRef.value.validate()

        if (valid) {
            console.log('登录表单数据:', form)
            ElMessage.success('登录成功!')

            // 这里可以添加实际的登录逻辑，如调用 API
            // await loginAPI(form.username, form.password)

            // 如果需要记住用户，可以保存到 localStorage
            if (form.rememberMe) {
                localStorage.setItem('rememberedUser', form.username)
            } else {
                localStorage.removeItem('rememberedUser')
            }
        }
    } catch (error) {
        console.log('验证失败:', error)
        ElMessage.error('请检查用户名和密码')
    } finally {
        loading.value = false
    }
}

// 重置表单
const resetForm = () => {
    if (!formRef.value) return
    formRef.value.resetFields()
}

// 页面加载时恢复记住的用户名
import { onMounted } from 'vue'
onMounted(() => {
    const rememberedUser = localStorage.getItem('rememberedUser')
    if (rememberedUser) {
        form.username = rememberedUser
        form.rememberMe = true
    }
})
</script>

<style scoped>
.login-form {
    padding: 20px;
}

.button-group {
    display: flex;
    width: 60%;
    gap: 2px;
}
</style>