// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules:
        ["@pinia/nuxt"],
    devServer: {
        port: 3030
    },
    imports: {
        dirs: ["~/stores"]
    },
    runtimeConfig: {
        public: {
            DISCORD_APPLICATION_ID: process.env.NUXT_PUBLIC_DISCORD_APPLICATION_ID,
            DISCORD_PUBLIC_KEY: process.env.NUXT_PUBLIC_DISCORD_PUBLIC_KEY,
            DISCORD_CLIENT_ID: process.env.NUXT_PUBLIC_DISCORD_CLIENT_ID,
            DISCORD_LOGIN_URL: process.env.NUXT_PUBLIC_DISCORD_LOGIN_URL,
        },
        DISCORD_CLIENT_SECRET: process.env.NUXT_DISCORD_CLIENT_SECRET,
    }
})
