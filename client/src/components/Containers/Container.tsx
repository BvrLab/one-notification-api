import React from 'react'
import { clsx } from 'clsx'

export type ContainerProps = React.ComponentPropsWithoutRef<'div'> & {
    type?: 'flex' | 'grid'
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'none'
    justifyItems?: 'start' | 'center' | 'end' | 'stretch'
    justifyContent?:
        | 'start'
        | 'center'
        | 'end'
        | 'between'
        | 'around'
        | 'normal'
        | 'evenly'
        | 'stretch'
    alignContent?:
        | 'start'
        | 'center'
        | 'end'
        | 'between'
        | 'around'
        | 'stretch'
        | 'normal'
        | 'evenly'
        | 'baseline'
    alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
    position?: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static'
    contentPlacement?:
        | 'center'
        | 'start'
        | 'end'
        | 'between'
        | 'around'
        | 'evenly'
        | 'stretch'
        | 'baseline'
}

const Container = ({
    type,
    gap,
    justifyItems,
    justifyContent,
    alignContent,
    alignItems,
    position,
    className,
    children,
    contentPlacement,
    ...props
}: ContainerProps) => {
    return (
        <div
            {...props}
            className={clsx(className, {
                flex: type === 'flex',
                grid: type === 'grid',
                // Justify Items
                'justify-items-start': justifyItems === 'start',
                'justify-items-center': justifyItems === 'center',
                'justify-items-end': justifyItems === 'end',
                'justify-items-stretch': justifyItems === 'stretch',

                // Justify content for items in flex or grid
                'justify-start': justifyContent === 'start',
                'justify-center': justifyContent === 'center',
                'justify-end': justifyContent === 'end',
                'justify-between': justifyContent === 'between',
                'justify-around': justifyContent === 'around',
                'justify-normal': justifyContent === 'normal',
                'justify-stretch': justifyContent === 'stretch',
                'justify-evenly': justifyContent === 'evenly',

                // Align content for controlling how rows are positioned in multi-row flex and grid containers.
                'content-start': alignContent === 'start',
                'content-center': alignContent === 'center',
                'content-end': alignContent === 'end',
                'content-between': alignContent === 'between',
                'content-around': alignContent === 'around',
                'content-stretch': alignContent === 'stretch',
                'content-normal': alignContent === 'normal',
                'content-evenly': alignContent === 'evenly',
                'content-baseline': alignContent === 'baseline',

                // Align items in flex or grid
                'items-start': alignItems === 'start',
                'items-center': alignItems === 'center',
                'items-end': alignItems === 'end',
                'items-baseline': alignItems === 'baseline',
                'items-stretch': alignItems === 'stretch',

                // Gap
                'gap-1': gap === 'xs',
                'gap-2': gap === 'sm',
                'gap-4': gap === 'md',
                'gap-6': gap === 'lg',
                'gap-8': gap === 'xl',
                'gap-10': gap === 'xxl',
                'gap-12': gap === 'xxxl',
                'gap-14': gap === 'xxxxl',
                'gap-0': gap === 'none',

                // Position
                relative: position === 'relative',
                absolute: position === 'absolute',
                fixed: position === 'fixed',
                sticky: position === 'sticky',
                static: position === 'static',

                // Content Placement
                'place-content-center': contentPlacement === 'center',
                'place-content-start': contentPlacement === 'start',
                'place-content-end': contentPlacement === 'end',
                'place-content-between': contentPlacement === 'between',
                'place-content-around': contentPlacement === 'around',
                'place-content-evenly': contentPlacement === 'evenly',
                'place-content-stretch': contentPlacement === 'stretch',
                'place-content-baseline': contentPlacement === 'baseline',
            })}
        >
            {children}
        </div>
    )
}

export default Container
