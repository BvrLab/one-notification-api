import React from 'react'
import { clsx } from 'clsx'
import Container, { ContainerProps } from '@/components/Containers/Container'

export type FlexboxProps = {
    direction?: 'row' | 'column'
    wrap?: boolean
    wrapReverse?: boolean
    flex?: 'none' | 'auto' | 'initial' | '1'
} & ContainerProps

const Flexbox = ({
    direction = 'row',
    wrap = true,
    wrapReverse = false,
    flex,
    className,
    children,
    ...props
}: FlexboxProps) => {
    return (
        <Container
            {...props}
            type={'flex'}
            className={clsx(className, 'flex', {
                // direction
                'flex-row': direction === 'row',
                'flex-col': direction === 'column',

                // Flex for controlling how flex items both grow and shrink
                'flex-none': flex === 'none',
                'flex-auto': flex === 'auto',
                'flex-initial': flex === 'initial',
                'flex-1': flex === '1',

                // Wrap
                'flex-wrap': wrap,
                'flex-nowrap': !wrap,
                'flex-wrap-reverse': wrapReverse,
            })}
        >
            {children}
        </Container>
    )
}

export default Flexbox
