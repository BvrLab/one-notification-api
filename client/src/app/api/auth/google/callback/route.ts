import { createSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)

    const accessToken = searchParams.get('accessToken')
    const userId = searchParams.get('userId')
    const name = searchParams.get('name')

    if (!accessToken || !userId || !name)
        throw new Error('Google Ouath Failed!')

    await createSession({
        user: {
            id: userId,
            name: name,
        },
        accessToken,
    })

    redirect('/dashboard/send-notification')
}
