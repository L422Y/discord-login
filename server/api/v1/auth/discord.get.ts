import { updateSessionData, withSession } from "~/server/utils/withSession"

function ensureSettings() {
    if (!process.env.NUXT_PUBLIC_DISCORD_CLIENT_ID) throw new Error("NUXT_PUBLIC_DISCORD_CLIENT_ID is not defined")
    if (!process.env.NUXT_PUBLIC_DISCORD_LOGIN_URL) throw new Error("NUXT_PUBLIC_DISCORD_LOGIN_URL is not defined")
    if (!process.env.NUXT_PUBLIC_DISCORD_PUBLIC_KEY) throw new Error("NUXT_PUBLIC_DISCORD_PUBLIC_KEY is not defined")
    if (!process.env.NUXT_PUBLIC_DISCORD_APPLICATION_ID) throw new Error("NUXT_PUBLIC_DISCORD_APPLICATION_ID is not defined")
    if (!process.env.NUXT_DISCORD_CLIENT_SECRET) throw new Error("NUXT_DISCORD_CLIENT_SECRET is not defined")
}

ensureSettings()

export default eventHandler(withSession(async (event, session) => {
    const code = getQuery(event).code as string
    return getToken(code).then(async (authResponse: any) => {
        const accessToken = authResponse.access_token
        return getUserInfo(accessToken)
            .then(async (userInfo: any) => {
                const update = await updateSessionData(event, {user: userInfo})
                console.log("update", update)
                return userInfo
            }).catch((error) => {
                throw createError({
                    status: 500,
                    message: error.message,
                })
            })
    })
}))


const getToken = async (code: string) => {
    ensureSettings()

    const params = new URLSearchParams({
        "client_id": process.env.NUXT_PUBLIC_DISCORD_CLIENT_ID!,
        "client_secret": process.env.NUXT_DISCORD_CLIENT_SECRET!,
        "grant_type": "client_credentials",
        "code": code,
        "redirect_uri": process.env.NUXT_PUBLIC_DISCORD_CALLBACK_URI!,
        "scope": "identify email"
    })

    return await $fetch(`https://discord.com/api/oauth2/token`, {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: params.toString(),
    }).then((response) => {
        return response
    }).catch((error) => {
        throw createError({
            status: 500,
            message: error.message,
        })
    })


}

const getUserInfo = async (accessToken: string) => {
    try {
        const response = await $fetch("https://discord.com/api/users/@me", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        return response  // Contains user info
    } catch (error) {
        console.error("Error getting user info:", error)
        throw error
    }
}
