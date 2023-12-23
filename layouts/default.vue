<template>
    <AppHeader />
    <main>
        <NuxtPage/>
    </main>
</template>
<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth"

const auth = useAuthStore()
</script>
<style lang="scss" scoped>

</style>
