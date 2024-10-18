import React, { forwardRef, useEffect, useState } from 'react'
import { ColorScheme, maxWidthClass, Size } from '@/components/constant'
import { clsx } from 'clsx'

export interface InputValidatorProps {
    validatorFn?: (value: string) => boolean
    errorMessage?: string
}

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
    label?: string
    colorScheme?: ColorScheme
    maxSize?: Size
    leadingIcon?: React.ReactNode
    trailingIcon?: React.ReactNode
    isInvalid?: boolean
    errorMessage?: string
    // optional validator function
    validators?:
        | ((value: string) => boolean | string)[]
        | ((value: string) => boolean | string)
}

const Input = forwardRef(
    ({
        label,
        onChange,
        colorScheme = 'indigo',
        maxSize,
        leadingIcon,
        trailingIcon,
        isInvalid = false,
        errorMessage,
        validators,
        ...props
    }: InputProps) => {
        const [isError, setError] = useState(false)
        const [errorMessages, setErrorMessages] = useState<string[]>(
            errorMessage ? [errorMessage] : []
        )

        useEffect(() => {
            if (!validators) {
                setError(isInvalid)
            }
        }, [isInvalid, validators])

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (validators) {
                const messages: string[] = []
                const fns = Array.isArray(validators)
                    ? validators
                    : [validators]
                fns.forEach((fn) => {
                    const result = fn(e.target.value)
                    if (typeof result === 'string') {
                        messages.push(result)
                    }
                })
                setErrorMessages(messages)
                setError(messages.length > 0)
            }
            onChange && onChange(e)
        }

        return (
            <>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    {label}
                </label>

                <div
                    className={clsx(
                        'relative mt-2 flex',
                        maxSize && maxWidthClass[maxSize]
                    )}
                >
                    {/*leading icon*/}
                    {leadingIcon && (
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            {leadingIcon}
                        </div>
                    )}

                    {/*input control*/}
                    <input
                        {...props}
                        onChange={handleChange}
                        className={clsx(
                            'block w-full flex-1',
                            'rounded-md border-0',
                            'p-2 pl-3',
                            'text-gray-900',
                            'shadow-sm outline-none',
                            'ring-1 ring-inset ring-gray-300',
                            `focus:ring-2 focus:ring-${colorScheme}-600`,
                            'placeholder:text-gray-400 sm:text-sm sm:leading-6',
                            // { 'placeholder:pl-5': leadingIcon },
                            { 'pl-11': leadingIcon },
                            { 'pr-11': trailingIcon },
                            { 'text-red-600 ring-1 ring-red-600': isError },
                            props.className
                        )}
                    />

                    {/*trailing icon*/}
                    {trailingIcon && (
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            {trailingIcon}
                        </div>
                    )}
                </div>
                {/*error message*/}
                {isError && (
                    <>
                        {errorMessages.map((message) => (
                            <p
                                key={message}
                                className="mt-2 text-sm text-red-600"
                            >
                                {message}
                            </p>
                        ))}
                    </>
                )}
            </>
        )
    }
)

Input.displayName = 'Input'

export default Input
