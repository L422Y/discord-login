import { withSession } from "~/server/utils/withSession"

export default eventHandler(withSession(async (event, session) => {
    if (!session.data) {
        return {
            status: 401,
            body: JSON.stringify({error: "unauthorized"}),
        }
    } else if (event.method === "DELETE") {
        return await deleteSession(event)
    } else if (event.method === "GET") {
        return await session.data
    }
}))
