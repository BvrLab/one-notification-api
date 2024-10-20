import React, { useState } from 'react'
import { clsx } from 'clsx'
import { ColorScheme, Size, maxWidthClass } from '@/components/constant'
import { CheckboxGroupOption } from '@/types'
import Flexbox from '@/components/Containers/flexbox/Flexbox'

interface CheckboxGroupProps {
    legendName?: string
    options: CheckboxGroupOption[]
    onChange: (value: CheckboxGroupOption[]) => void
    maxSize?: Size
    textSize?: Size
    isDisabled?: boolean
    colorScheme?: ColorScheme
}

const textSizeClass = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
}

const CheckboxGroup = ({
    legendName,
    options,
    onChange,
    textSize = 'sm',
    maxSize,
    colorScheme = 'indigo',
    isDisabled = false,
}: CheckboxGroupProps) => {
    const [optionsProp, setOptionsProps] =
        useState<CheckboxGroupOption[]>(options)

    const handleCheckboxChange = (optionId: string) => {
        const newOptions = optionsProp.map((option) =>
            option.id === optionId
                ? { ...option, isSelected: !option.isSelected }
                : option
        )
        setOptionsProps(newOptions)
        onChange(newOptions)
    }

    return (
        <div
            className={clsx(
                'w-full',
                [maxSize && maxWidthClass[maxSize]],
                isDisabled && 'opacity-60'
            )}
        >
            <fieldset>
                {legendName && (
                    <legend className="sr-only">{legendName}</legend>
                )}
                <Flexbox direction="column" gap="md">
                    <div className="space-y-5">
                        {optionsProp.map((option) =>
                            renderOption(
                                option,
                                handleCheckboxChange,
                                isDisabled,
                                colorScheme,
                                textSize
                            )
                        )}
                    </div>
                </Flexbox>
            </fieldset>
        </div>
    )
}

const renderOption = (
    option: CheckboxGroupOption,
    handleCheckboxChange: (optionId: string) => void,
    isDisabled: boolean,
    colorScheme: ColorScheme,
    textSize: Size
) => {
    return (
        <div className="relative flex items-start" key={option.id}>
            <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                    <input
                        disabled={isDisabled}
                        id={option.id}
                        aria-describedby={option.description}
                        name={option.name}
                        type="checkbox"
                        className={clsx(
                            `w-4 rounded border-gray-300 text-${colorScheme}-600`,
                            `focus:ring-${colorScheme}-600`,
                            option.isSelected && `accent-${colorScheme}-600`
                        )}
                        onChange={() => handleCheckboxChange(option.id)}
                        checked={option.isSelected}
                    />
                </div>

                <div
                    className={clsx('ml-3 leading-6', [
                        textSize && textSizeClass[textSize],
                    ])}
                >
                    <label
                        htmlFor={option.id}
                        className="font-medium text-gray-900"
                    >
                        {option.name}
                    </label>
                    <p id={option.description} className="text-gray-500">
                        {option.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CheckboxGroup
