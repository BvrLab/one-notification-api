'use client'
import Image from 'next/image'
import NotificationForm from '../components/NotificationForm/NotificationForm'
import SideNavMenu from '@/components/SideNavMenu/SideNavMenu'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        // This will now correctly run only on the client side
        if (typeof window !== 'undefined') {
            router.replace('/auth')
        }
    }, [router])

    return null
    // <main className="flex min-h-screen flex-col items-center bg-gray-900">

    //     <div className="mt-40">
    //         <Link
    //             className="m-auto mx-2 rounded-md bg-teal-900 px-6 py-3 text-base font-semibold text-white outline-none hover:bg-teal-800"
    //             href="/dashboard/send-notification"
    //         >
    //             DEMO: Direct to dashbord/send-notification
    //         </Link>

    //         <div className="mx-2 mt-5 rounded-md bg-teal-900 px-6 py-3 text-base font-semibold text-white outline-none hover:bg-teal-800">
    //             <Link
    //                 className="m-auto mx-2 rounded-md bg-teal-900 px-6 py-3 text-base font-semibold text-white outline-none hover:bg-teal-800"
    //                 href="/auth"
    //             >
    //                 Login Page
    //             </Link>
    //         </div>
    //     </div>

    // </main>
}
