import Flexbox, { FlexboxProps } from '@/components/Containers/flexbox/Flexbox'
import { clsx } from 'clsx'

type FlexItemProps = FlexboxProps & {
    order?:
        | '0'
        | '1'
        | '2'
        | '3'
        | '4'
        | '5'
        | '6'
        | '7'
        | '8'
        | '9'
        | '10'
        | '11'
        | '12'
        | 'last'
        | 'first'
}

/*
 * FlexItem
 * FlexItem is a wrapper for FlexBox that set default props commonly used for items under FlexBox
 */
const FlexItem = ({ order, className, ...props }: FlexItemProps) => (
    <Flexbox
        flex={'initial'}
        justifyContent={'center'}
        alignItems={'center'}
        alignContent={'center'}
        direction={'row'}
        wrap={true}
        wrapReverse={false}
        {...props}
        className={clsx(className, {
            'order-0': order === '0',
            'order-1': order === '1',
            'order-2': order === '2',
            'order-3': order === '3',
            'order-4': order === '4',
            'order-5': order === '5',
            'order-6': order === '6',
            'order-7': order === '7',
            'order-8': order === '8',
            'order-9': order === '9',
            'order-10': order === '10',
            'order-11': order === '11',
            'order-12': order === '12',
            'order-last': order === 'last',
            'order-first': order === 'first',
        })}
    ></Flexbox>
)

export default FlexItem
