<template>
    <div class="root">
        <m_a>
            <template #main>

            </template>
            <template #aside>
                <RouterView />
            </template>
        </m_a>
    </div>

</template>

<script setup>
import m_a from '@common/layouts/main_aside.vue'
</script>

<style lang="scss" scoped>
html body {
    display: flex;
    flex-direction: column;
}
.root {
    width: 1200px;
}
</style>