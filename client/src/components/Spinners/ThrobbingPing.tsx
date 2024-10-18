import { ColorScheme, Size } from '@/components/constant'
import React from 'react'
import { clsx } from 'clsx'

interface ThrobbingPingProps {
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

const ThrobbingPing = ({
    color = 'blue',
    size = 'lg',
    srText = 'Loading...',
}: ThrobbingPingProps) => {
    const classes = clsx(
        'animate-ping',
        'rounded-full',
        `bg-${color}-600`,
        sizeClasses[size]
    )
    return (
        <div className="flex items-center justify-center">
            <div className={classes}></div>
            <span className="sr-only">{srText}</span>
        </div>
    )
}

export default ThrobbingPing
