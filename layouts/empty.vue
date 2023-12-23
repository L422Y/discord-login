<template>
    <NuxtPage/>
</template>
<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth"
const auth = useAuthStore()
</script>
