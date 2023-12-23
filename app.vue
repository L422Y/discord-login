<template>
    <NuxtLayout/>
</template>
<script lang="ts" setup>
import { useAuthStore } from "#imports"

useAuthStore().checkSession()
</script>
<style>
html {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background-color: #fff;

}
</style>
