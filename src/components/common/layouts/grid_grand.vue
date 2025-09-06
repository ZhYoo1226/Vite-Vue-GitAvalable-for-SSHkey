<template>
    <div>grand</div>
    <RouterView/>
</template>

<script setup>
import {ref , provide} from 'vue'
let grand_data = ref('From grand')

function changeData(string1) {
    grand_data.value = string1
}

// 函数在使用的时候不加()，那就不是调用，而是在引用“函数”这个对象的索引值。
provide('data',grand_data)
provide('changeData',changeData)
</script>

<style lang="scss" scoped>
</style>