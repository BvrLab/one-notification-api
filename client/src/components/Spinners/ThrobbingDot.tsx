import { ColorScheme, Size } from '@/components/constant'
import { clsx } from 'clsx'
import React from 'react'

interface ThrobbingDotProps {
    size?: Size
    color?: ColorScheme
    srText?: string
}

const sizeClasses = {
    xs: 'h-4 w-4',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-20 w-20',
    xl: 'h-24 w-24',
}

const ThrobbingDot = ({
    color = 'blue',
    size = 'lg',
    srText = 'Loading...',
}: ThrobbingDotProps) => {
    const common = clsx('rounded-full', `bg-${color}-600`, sizeClasses[size])

    return (
        <div className="flex items-center justify-center">
            <div className="relative inline-flex">
                <div className={common}></div>
                <div
                    className={`absolute left-0 top-0 animate-ping ${common}`}
                ></div>
                <div
                    className={`absolute left-0 top-0 animate-pulse ${common}`}
                ></div>
            </div>
            <span className="sr-only">{srText}</span>
        </div>
    )
}

export default ThrobbingDot
