<template>
    <div class="login-page">
        <ClientOnly>
            <button @click="auth.signInWithDiscord()">
                <span>Sign in with Discord</span>
                <small>(page callback)</small>
            </button>
            <button @click="auth.signInWithDiscord({using:'server'})">
                <span>Sign in with Discord</span>
                <small>(server endpoint callback)</small>
            </button>
        </ClientOnly>
    </div>
</template>
<script lang="ts" setup>
const passed = withDefaults(defineProps<{}>(), {})
const auth = useAuthStore()

</script>
<style lang="scss" scoped>
.login-page {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  button {
    font-size: 1.2rem;
    font-weight: bolder;
    display: grid;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 0.5rem;
    background-color: #7289da;
    gap: 0.5rem;

    small {
      font-size: 0.8rem;
      font-weight: normal;
      display: block;
      text-transform: uppercase;
    }
  }
}
</style>
