import { withSession } from "~/server/utils/withSession"
import { tryDiscordAuth } from "~/server/utils/discord"

export default eventHandler(withSession(async (event, session) => {
    const code = getQuery(event).code as string
    return tryDiscordAuth(event, code)
}))

