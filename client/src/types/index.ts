import { Content } from 'next/font/google'
import { object, z } from 'zod'

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

export type AuthFormState =
    | {
          error?: {
              username?: string[]
              email?: string[]
              password?: string[]
          }
          message?: string
      }
    | undefined

export const SignupFormSchema = z.object({
    username: z.string().trim().min(2, {
        message: 'Name must be at least 2 characters long.',
    }),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, {
            message: 'Contain at least one letter.',
        })
        .regex(/[0-9]/, {
            message: 'Contain at least one number.',
        })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
})

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z.string().min(1, {
        message: 'Password field must not be empty.',
    }),
})

export type EmailNotificationFormState =
    | {
          error?: {
              recipient?: string[]
              subject?: string[]
              content?: string[]
          }
          message?: string
      }
    | undefined

export const emailnotificationFormSchema = z.object({
    recipient: z.string().email({ message: 'Please enter a valid email.' }),
    subject: z.string().min(1, {
        message: 'Object field must not be empty.',
    }),
    content: z.string(),
})
