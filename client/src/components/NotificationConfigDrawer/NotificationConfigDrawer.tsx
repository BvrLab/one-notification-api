'use client'

import { useState, useEffect } from 'react'

interface NotificationConfigDrawerProps {
    isOpen: boolean
}

export default function NotificationConfigDrawer({
    isOpen,
}: NotificationConfigDrawerProps) {
    const [shouldRender, setShouldRender] = useState(isOpen)
    const [channel, setChannel] = useState('Email')
    const [provider, setProvider] = useState('Gmail')
    const [topic, setTopic] = useState('General Notifications')

    useEffect(() => {
        if (isOpen) setShouldRender(true)
    }, [isOpen])

    const onAnimationEnd = () => {
        if (!isOpen) setShouldRender(false)
    }

    return (
        shouldRender && (
            <div
                className={`absolute right-0 h-full w-2/12 bg-teal-800 px-2 py-3 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onAnimationEnd={onAnimationEnd}
            >
                <h2 className="mb-4 p-1 text-lg font-semibold text-white">
                    Configure
                </h2>
                <div className="space-y-4">
                    <div className="rounded-lg p-1">
                        <label
                            htmlFor="channel"
                            className="mb-1 block text-sm text-gray-300"
                        >
                            Channel
                        </label>
                        <select
                            id="channel"
                            value={channel}
                            onChange={(e) => setChannel(e.target.value)}
                            className="w-full rounded-md bg-gray-800 p-1.5 text-white"
                        >
                            <option>Email</option>
                            <option>SMS</option>
                            <option>Push Notification</option>
                        </select>
                    </div>
                    <div className="rounded-lg p-1">
                        <label
                            htmlFor="provider"
                            className="mb-1 block text-sm text-gray-300"
                        >
                            Provider
                        </label>
                        <select
                            id="provider"
                            value={provider}
                            onChange={(e) => setProvider(e.target.value)}
                            className="w-full rounded-md bg-gray-800 p-1.5 text-white"
                        >
                            <option>Gmail</option>
                            <option>Yahoo</option>
                            <option>Outlook</option>
                        </select>
                    </div>
                    <div className="rounded-lg p-1">
                        <label
                            htmlFor="topic"
                            className="mb-1 block text-sm text-gray-300"
                        >
                            Subscription Topic
                        </label>
                        <select
                            id="topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="w-full rounded-md bg-gray-800 p-1.5 text-white"
                        >
                            <option>General Notifications</option>
                            <option>Product Updates</option>
                            <option>New Arrivals</option>
                        </select>
                    </div>
                </div>

                <div className="my-2 h-px w-full border-t bg-[#DCDEE4]"></div>

                <h2 className="mb-4 p-1 text-lg font-semibold text-white">
                    Advanced
                </h2>

                <div className="rounded-lg p-1">
                    <label
                        htmlFor="topic"
                        className="mb-1 block text-sm text-gray-300"
                    >
                        templates
                    </label>
                    <select
                        id="topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full rounded-md bg-gray-800 p-1.5 text-white"
                    >
                        <option>Onboarding 1</option>
                        <option>Warnning 1</option>
                        <option>Warnning 2</option>
                    </select>
                </div>
            </div>
        )
    )
}
