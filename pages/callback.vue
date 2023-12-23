<template>
    <div v-if="auth.error">
        <div class="alert alert-danger">
            {{ auth.error.message }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { definePageMeta } from "#imports"
import { useAuthStore } from "~/stores/auth"

const auth = useAuthStore()

definePageMeta({
    layout: "empty",
})

if (auth.isLoggedIn) {
    void useRouter().push({path: "/", replace: true})
}


const code = useRoute().query.code as string
if (!code) {
    await useRouter().push({path: "/", replace: true})
}

watch(() => auth.isLoggedIn, (isLoggedIn) => {
    if (isLoggedIn) {
        void useRouter().push({path: "/", replace: true})
    }
}, {immediate: true})

await auth.confirmDiscordLogin(code)

</script>
<style lang="scss" scoped>

</style>
