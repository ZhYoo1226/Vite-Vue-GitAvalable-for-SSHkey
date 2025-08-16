<template>
    <RouterLink to="/log">登录 </RouterLink>
    <RouterLink to="/reg">注册</RouterLink>
    
    <router-view></router-view>
</template>

<script setup>
    import {useRoute,useRouter} from 'vue-router'
    const route = useRoute()
    // console.log(`LoginView页面的路由是'${route.path}'`)


</script>

<style lang="scss" scoped>

</style>       