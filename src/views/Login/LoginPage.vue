<template>
    <div class="loginview" v-if="!showbt">
        <RouterLink 
        :to="{name:'loginview'}">
            <button>探索！</button> 
        </RouterLink>
    </div>
    <div v-else>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import {computed} from 'vue'

const route = useRoute()
let showbt = computed(()=>{
    return route.name==='loginview'||route.name==='logform'||route.name==='regform'
})

</script>

<style lang="scss" scoped>
html body{
    display: flex;
    flex-direction: column;
}
button{
    background-color: bisque;
}
.loginview{
    margin:0 auto;
}
</style>