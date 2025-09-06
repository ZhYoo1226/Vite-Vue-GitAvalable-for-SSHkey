<template>
    <span>parent</span>
    <index :message="ms" :id="Id" @id-change="changeId" />
</template>

<script setup>
import index from './grid_index.vue'
import { ref } from 'vue'
let ms = ref('From Parent')
let Id = ref(1)
function changeId(newId) {
    Id.value = newId
}
</script>

<style lang="scss" scoped>

</style>