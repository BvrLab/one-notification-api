import React, { forwardRef } from 'react'
import { clsx } from 'clsx'
import { ButtonVariant, ColorScheme, Size } from '@/components/constant'
import Spinner from '@/components/Spinners/Spinner'

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    variant?: ButtonVariant
    size?: 'sm' | 'md' | 'lg' | 'xs' | 'xl' | 'xxs' | 'xxl'
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    colorScheme?: ColorScheme
    isLoading?: boolean
    loadingText?: string
    loadingIcon?: React.ReactNode
    disabled?: boolean
}

const Button = forwardRef(
    (
        {
            className,
            variant = 'primary',
            colorScheme = 'indigo',
            size,
            isLoading = false,
            loadingText = 'Loading...',
            loadingIcon,
            disabled,
            leftIcon,
            rightIcon,
            ...props
        }: ButtonProps,
        ref
    ) => {
        const getLoadingIcon = () => {
            return (
                loadingIcon ?? (
                    <Spinner
                        size={'xs'}
                        variant={'solid'}
                        color={colorScheme}
                    />
                )
            )
        }

        return (
            <button
                {...props}
                disabled={disabled || isLoading}
                className={clsx(
                    'inline-flex justify-center gap-2 rounded-md font-semibold leading-6 shadow-md',
                    'focus-visible:outline-${colorTheme}-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                    `active:ring-2 active:ring-offset-2 active:ring-${colorScheme}-700`,
                    `disabled:cursor-not-allowed disabled:opacity-70`,
                    'disabled:outline-none disabled:ring-0 disabled:ring-transparent disabled:ring-offset-0',
                    { 'text-md w-full px-3.5 py-2.5': !size },
                    { 'px-2 py-1 text-xs': size === 'xxs' },
                    { 'px-2 py-1 text-sm': size === 'xs' },
                    { 'px-2.5 py-1.5 text-sm': size === 'sm' },
                    { 'px-3 py-2 text-sm': size === 'md' },
                    { 'text-md px-3.5 py-2.5': size === 'lg' },
                    { 'text-md px-6 py-3': size === 'xl' },
                    { 'text-md px-8 py-3.5': size === 'xxl' },
                    [
                        variant === 'primary' &&
                            `bg-${colorScheme}-600 text-white hover:bg-${colorScheme}-700 active:bg-${colorScheme}-800`,
                    ],
                    [
                        variant === 'secondary' &&
                            `bg-transparent text-${colorScheme}-600 hover:bg-${colorScheme}-100 border-2 border-${colorScheme}-600 shadow-md active:bg-${colorScheme}-100`,
                    ],
                    [
                        variant === 'tertiary' &&
                            `bg-transparent shadow-none text-${colorScheme}-600 hover:bg-${colorScheme}-100 active:bg-${colorScheme}-200`,
                    ],
                    className
                )}
            >
                {!isLoading && leftIcon}
                {!isLoading && props.children}
                {!isLoading && rightIcon}
                {isLoading && getLoadingIcon()}
                {isLoading && loadingText}
            </button>
        )
    }
)

Button.displayName = 'Button'
export default Button
