import { getSession } from '@/lib/session'
import NotificationForm from '../../components/NotificationForm/NotificationForm'

import SideNavMenu from '@/components/SideNavMenu/SideNavMenu'

export default async function Page() {
    const session = await getSession()
    return (
        <div className="bg-white">
            <p>Hello, {session?.user.name}!</p>
        </div>

        // <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
        //   {/* <NotificationForm /> */}
        // </main>

        // <>
        //     <SideNavMenu />
        // </>
    )
}
