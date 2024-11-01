import React from 'react'

import {
    Cog6ToothIcon,
    ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline'

import { NavigationOption } from '@/types'

type SideNavMenuProp = {
    navigations: NavigationOption[]
    actions: NavigationOption[]
}

function classNames(...classes: (string | undefined | false | null)[]): string {
    return classes.filter(Boolean).join(' ')
}

const SideNavMenu = ({ navigations, actions }: SideNavMenuProp) => {
    return (
        <>
            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-52 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-teal-950 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        {/* <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=white"
                            alt="One Notification"
                        /> */}
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigations.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-teal-900 text-white'
                                                        : 'text-indigo-200 hover:bg-teal-900 hover:text-white',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-white'
                                                            : 'text-indigo-200 group-hover:text-white',
                                                        'h-6 w-6 shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li className="mt-8">
                                <div className="text-xs font-semibold leading-6 text-indigo-200">
                                    Actions
                                </div>
                                <ul
                                    role="list"
                                    className="-mx-2 mt-2 space-y-1"
                                >
                                    {actions.map((action) => (
                                        <li key={action.name}>
                                            <a
                                                href={action.href}
                                                className={classNames(
                                                    action.current
                                                        ? 'bg-teal-900 text-white'
                                                        : 'text-indigo-200 hover:bg-teal-900 hover:text-white',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                                )}
                                            >
                                                <action.icon
                                                    className={classNames(
                                                        action.current
                                                            ? 'text-white'
                                                            : 'text-indigo-200 group-hover:text-white',
                                                        'h-6 w-6 shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {action.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li className="mt-auto">
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-teal-900 hover:text-white"
                                >
                                    <Cog6ToothIcon
                                        className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                                        aria-hidden="true"
                                    />
                                    Settings
                                </a>

                                <a
                                    href={"/api/auth/signout"}
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-teal-900 hover:text-white"
                                >
                                    <ArrowLeftStartOnRectangleIcon
                                        className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                                        aria-hidden="true"
                                    />
                                    Signout
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideNavMenu
