import React, { ElementType } from 'react'

export interface CheckboxGroupOption {
    id: string
    name: string
    description?: string
    value: string
    isSelected: boolean
}

export interface NavigationOption {
    name: string
    href: string
    icon: React.ElementType
    current: boolean
}
