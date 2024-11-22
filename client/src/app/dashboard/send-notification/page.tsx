'use client'

import NotificationForm from '@/components/NotificationForm/NotificationForm'
import SendNotificationHeader from '@/components/Headers/SendNotificationHeader'
import NotificaitonConfigDrawer from '@/components/NotificationConfigDrawer/NotificationConfigDrawer'
import { useState } from 'react'
import '@/components/NotificationForm/NotificationForm.css'

export default function Page() {
    let [isOpen, setIsOpen] = useState(true)
    return (
        <section className="relative flex min-h-screen flex-col overflow-hidden">
            <SendNotificationHeader isOpen={isOpen} setIsOpen={setIsOpen} />

            <div>
                <NotificaitonConfigDrawer isOpen={isOpen} />
            </div>

            <div className="flex min-h-screen w-full flex-row justify-center">
                <div
                    className={`mx-4 my-8 flex h-auto w-full flex-row justify-center sm:mx-6 sm:my-10 lg:mx-8 lg:my-12 ${isOpen ? 'formSlideIn' : 'formSlideOut'}`}
                >
                    <NotificationForm/>
                </div>
            </div>
        </section>
    )
}
