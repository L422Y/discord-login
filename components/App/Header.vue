<template>
    <header>
        <div>
            Nuxt 3 Discord Login App
        </div>
        <nav>
            <ClientOnly>
                <div v-if="auth.user">
                    <button @click="auth.signOut()">Sign out</button>
                </div>
                <div v-else>
                  <button @click="useRouter().push('/login')">Sign In</button>
                </div>
            </ClientOnly>
        </nav>
    </header>
</template>
<script lang="ts" setup>
const passed = withDefaults(defineProps<{}>(), {})
const auth = useAuthStore()

</script>
<style lang="scss" scoped>
header {
  font-size: 1.2rem;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;

  nav {
    font-size: 0.9rem;
    font-weight: bolder;
    display: flex;
    align-content: center;
    align-items: center;
    max-width: 1280px;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
  }


}
</style>
