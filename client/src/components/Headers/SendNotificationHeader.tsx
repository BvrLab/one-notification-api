import React from 'react'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid'

interface SendNotificationHeaderProps {
    setIsOpen: (isOpen: boolean) => void
    isOpen: boolean
}

const SendNotificationHeader = ({
    setIsOpen,
    isOpen,
}: SendNotificationHeaderProps) => {
    return (
        <div className="flex h-16 w-full flex-row items-center border-teal-950 bg-teal-900 px-5 py-1">
            <div className="flex w-full items-center gap-2 pr-2">
                <span className="cursor-default font-bold text-white">
                    Send a notification
                </span>
            </div>

            <div className="flex w-full items-center justify-end">
                <button
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-lg bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Configure
                    <AdjustmentsHorizontalIcon
                        className="-mr-0.5 h-5 w-5"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </div>
    )
}

export default SendNotificationHeader
