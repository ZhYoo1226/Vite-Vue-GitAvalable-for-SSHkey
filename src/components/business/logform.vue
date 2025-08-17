<template>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
        username
        <el-input v-model="input" style="width: 240px" placeholder="Please input" />
        <br />
        password
        <el-input v-model="input" style="width: 240px" type="password" placeholder="Please input password"
            show-password />

        <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>

            <el-button>取消</el-button>

        </el-form-item>
    </el-form>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ref } from 'vue'
import Loginview from './loginview.vue'

// do not use same name with ref
const form = reactive({
    name: '',
    password: '',
})

const input = ref('')

const onSubmit = () => {
    console.log('submit!')
}
</script>
