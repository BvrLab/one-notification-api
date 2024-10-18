import { ColorScheme, Size } from '@/components/constant'
import React from 'react'
import { clsx } from 'clsx'

interface SpinnerProps {
    variant?: 'dashed' | 'solid'
    size?: Size
    color?: ColorScheme
    srText?: string
}

const sizeClasses = {
    xs: 'h-6 w-6 border-2',
    sm: 'h-8 w-8 border-4',
    md: 'h-10 w-10 border-4',
    lg: 'h-20 w-20 border-8',
    xl: 'h-24 w-24 border-8',
}

const Spinner = ({
    size = 'lg',
    color = 'blue',
    variant = 'solid',
    srText = 'Loading...',
}: SpinnerProps) => {
    const classes = clsx(sizeClasses[size], 'animate-spin rounded-full')
    return (
        <>
            {variant === 'solid' && (
                <div
                    className={`${classes} border-gray-200 border-t-${color}-600`}
                />
            )}
            {variant === 'dashed' && (
                <div
                    className={`${classes} border-dashed border-${color}-600`}
                />
            )}

            <span className="sr-only">{srText}</span>
        </>
    )
}

export default Spinner
