import { H3Event } from "h3"

const sessionData: any = {}

export interface UserSession {
    user: SessionUser
}

export interface SessionUser {
    id: string
    username: string
    avatar: string
    discriminator: string
    public_flags: number
    premium_type: number
    flags: number
    banner: string
    accent_color: number
    global_name: string
    avatar_decoration_data: null
    banner_color: string
    mfa_enabled: boolean
    locale: string
    email: string
    verified: boolean
}

async function useUserSession(event: H3Event) {
    const session = await useSession<UserSession>(event, {
        password: "secret_password_to_encrypt_session_data",
    })
    Object.assign(session.data, sessionData[session.id!] || {})
    return session
}

export async function updateSessionData(event: H3Event, data: any) {
    const session = await useUserSession(event)
    sessionData[session.id!] = sessionData[session.id!] || {}
    Object.assign(sessionData[session.id!], data)
    return sessionData[session.id!] || {}
}

export async function deleteSession(event: H3Event) {
    const session = await useUserSession(event)
    delete sessionData[session.id!]
    return sessionData[session.id!] || {}
}

export const withSession = (handler: (event: H3Event, user: any) => Promise<any>) => {
    return async (event: H3Event) => {
        const session = await useUserSession(event)
        return await handler(event, session)
    }
}
