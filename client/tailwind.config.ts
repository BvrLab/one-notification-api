import type { Config } from 'tailwindcss'

const colourList = [
    'lime',
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
]

const shades = [
    50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750,
    800, 850, 900, 950,
]

const states = ['hover', 'focus', 'active', 'disabled', 'focus-visible']

const colorSafeList: string[] = []
const colorSafeListWithStates: string[] = []

colourList.forEach((colorName) => {
    shades.forEach((shade) => {
        colorSafeList.push(`text-${colorName}-${shade}`)
        colorSafeList.push(`bg-${colorName}-${shade}`)
        colorSafeList.push(`outline-${colorName}-${shade}`)
        colorSafeList.push(`border-${colorName}-${shade}`)
        colorSafeList.push(`border-t-${colorName}-${shade}`)
        colorSafeList.push(`border-b-${colorName}-${shade}`)
        colorSafeList.push(`ring-${colorName}-${shade}`)
    })
})

colorSafeList.forEach((color) => {
    colorSafeListWithStates.push(color)
    states.forEach((state) => {
        colorSafeListWithStates.push(`${state}:${color}`)
    })
})

const config: Config = {
    safelist: colorSafeListWithStates,
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
export default config
