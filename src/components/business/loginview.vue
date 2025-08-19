<template>
    <div v-if="!showbt">
        <button @click="createShowBT">探索！</button>
    </div>

    <div v-else>
        <RouterLink :to="{ name: 'logform' }">
            <button>登录</button>
        </RouterLink>
        <RouterLink :to="{ name: 'regform' }">
            <button>注册</button>
        </RouterLink>
        <RouterView />
    </div>

</template>

<script setup>
import { ref } from 'vue'
let showbt = ref(false)  //相当于value为空，响应式变量到模板里自动解包value
function createShowBT() {
    showbt.value = true
}
</script>

<style lang="scss" scoped>
button {
    background-color: lightcoral;
}
</style>