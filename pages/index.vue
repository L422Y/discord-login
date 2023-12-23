<template>
    <div>
        <ClientOnly>
            <div v-if="auth.isLoggedIn && auth.user">
                <div class="fw-light text-lowercase">Welcome back, {{ auth.user?.email }}</div>
            </div>
        </ClientOnly>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth"

const passed = withDefaults(defineProps<{}>(), {})
const auth = useAuthStore()
</script>
<style lang="scss" scoped>

</style>
