import { tryDiscordAuth } from "~/server/utils/discord"

export default eventHandler(async (event) => {

    const code = getQuery(event).code as string

    if (!code) {
        await sendRedirect(event, "/login?error=no_code")
    }

    const authResponse = await tryDiscordAuth(event, code)

    if (!authResponse) {
        await sendRedirect(event, "/login?error=auth_failed")
    }

    await sendRedirect(event, "/?success=logged_in")

})
