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

button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #000;
    color: #fff;
    small {
        display: block;
    }
}
</style>
