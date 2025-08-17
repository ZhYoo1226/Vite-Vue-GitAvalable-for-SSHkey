<template>
    <RouterLink :to="{name:'logform'}">
       <button>登录</button> 
    </RouterLink>
    <RouterLink :to="{name:'regform'}">
       <button>注册</button> 
    </RouterLink>
    
    <router-view></router-view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button{
    background-color: lightcoral;
}
</style>