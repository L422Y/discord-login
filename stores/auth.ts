import { defineStore } from "pinia"
import type { Ref } from "vue"


export interface User {
    id: number
    name: string
    email: string
}

export const useAuthStore = defineStore("user", () => {

    const user: Ref<User | undefined> = ref()
    const error: Ref<any> = ref()
    const isLoggedIn = ref(false)
    const loggingIn = ref(false)

    const setUser = (user: any) => {
        user.value = user
        isLoggedIn.value = true
        loggingIn.value = false
    }

    const signOut = async () => {
        await $fetch("/api/v1/auth/me", {
            method: "DELETE",
        }).catch((error) => {
            error.value = error
        }).finally(() => {
            loggingIn.value = false
        })
        user.value = undefined
        isLoggedIn.value = false
        loggingIn.value = false
    }

    const signInWithDiscord = () => {
        let loginUrl = useRuntimeConfig().public.DISCORD_LOGIN_URL
        loggingIn.value = true // won't matter if not persisted via pinia plugin
        window.location.assign(loginUrl)
    }

    const confirmDiscordLogin = async (code: string) => {
        loggingIn.value = true
        const userInfo = await $fetch<any>("/api/v1/auth/discord", {
            method: "GET",
            params: {
                code: code
            }
        }).catch((error) => {
            error.value = error
            return {error}
        }).finally(() => {
            loggingIn.value = false
        })

        user.value = userInfo
        isLoggedIn.value = true
        loggingIn.value = false
    }

    const checkSession = async () => {
        await $fetch("/api/v1/auth/me")
            .then((response: any) => {
                if (response.user?.id) {
                    user.value = response.user
                    isLoggedIn.value = true
                    loggingIn.value = false
                }
            }).catch((error) => {
                error.value = error
            })
    }

    return {
        user,
        error,
        isLoggedIn,
        loggingIn,
        signInWithDiscord,
        confirmDiscordLogin,
        signOut,
        checkSession,
    }
})
