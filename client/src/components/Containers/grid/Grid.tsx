import React from 'react'
import { clsx } from 'clsx'
import Container, { ContainerProps } from '@/components/Containers/Container'

type GridProps = {
    isColumnsSubgrid?: boolean
    isRowsSubgrid?: boolean
    columns?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    rows?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    autoFlow?: 'row' | 'column' | 'row dense' | 'column dense' | 'dense'
    implicitRowSize?: 'auto' | 'min' | 'max' | 'fr'
    implicitColumnSize?: 'auto' | 'min' | 'max' | 'fr'
} & ContainerProps

const Grid = ({
    columns = 0,
    rows = 0,
    isColumnsSubgrid = false,
    isRowsSubgrid = false,
    autoFlow,
    implicitRowSize,
    implicitColumnSize,
    children,
    className,
    ...props
}: GridProps) => {
    return (
        <Container
            {...props}
            type={'grid'}
            className={clsx(className, {
                // Number of Columns
                // 'grid-cols-none': columns === 0,
                'grid-cols-subgrid': isColumnsSubgrid,
                'grid-cols-1': columns === 1,
                'grid-cols-2': columns === 2,
                'grid-cols-3': columns === 3,
                'grid-cols-4': columns === 4,
                'grid-cols-5': columns === 5,
                'grid-cols-6': columns === 6,
                'grid-cols-7': columns === 7,
                'grid-cols-8': columns === 8,
                'grid-cols-9': columns === 9,
                'grid-cols-10': columns === 10,
                'grid-cols-11': columns === 11,
                'grid-cols-12': columns === 12,

                // Number of Rows
                // 'grid-rows-none': rows === 0,
                'grid-rows-subgrid': isRowsSubgrid,
                'grid-rows-1': rows === 1,
                'grid-rows-2': rows === 2,
                'grid-rows-3': rows === 3,
                'grid-rows-4': rows === 4,
                'grid-rows-5': rows === 5,
                'grid-rows-6': rows === 6,
                'grid-rows-7': rows === 7,
                'grid-rows-8': rows === 8,
                'grid-rows-9': rows === 9,
                'grid-rows-10': rows === 10,
                'grid-rows-11': rows === 11,
                'grid-rows-12': rows === 12,

                // Auto Flow for controlling how elements in a grid are auto-placed.
                'grid-flow-row': autoFlow === 'row',
                'grid-flow-col': autoFlow === 'column',
                'grid-flow-row-dense': autoFlow === 'row dense',
                'grid-flow-col-dense': autoFlow === 'column dense',
                'grid-flow-dense': autoFlow === 'dense',

                // Auto Rows for controlling the size of implicitly created rows.
                'auto-rows-auto': implicitRowSize === 'auto',
                'auto-rows-min': implicitRowSize === 'min',
                'auto-rows-max': implicitRowSize === 'max',
                'auto-rows-fr': implicitRowSize === 'fr',

                // Auto Columns for controlling the size of implicitly created columns.
                'auto-cols-auto': implicitColumnSize === 'auto',
                'auto-cols-min': implicitColumnSize === 'min',
                'auto-cols-max': implicitColumnSize === 'max',
                'auto-cols-fr': implicitColumnSize === 'fr',
            })}
        >
            {children}
        </Container>
    )
}

export default Grid
