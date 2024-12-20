'use server'

import { redirect } from 'next/navigation'
import { BACKEND_URL } from './constants'
import { AuthFormState, LoginFormSchema, SignupFormSchema } from '@/types'
import { createSession, updateTokens } from './session'

export async function signUp(
    state: AuthFormState,
    formData: FormData
): Promise<AuthFormState> {
    const validationFields = SignupFormSchema.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validationFields.success) {
        return {
            error: validationFields.error.flatten().fieldErrors,
        }
    }

    const response = await fetch(`${BACKEND_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(validationFields.data),
    })

    if (response.ok) {
        redirect('/dashboard')
    } else
        return {
            message:
                response.status === 409
                    ? 'The user is already existed!'
                    : response.statusText,
        }
}

export async function signIn(
    state: AuthFormState,
    formData: FormData
): Promise<AuthFormState> {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        }
    }

    const response = await fetch(`${BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedFields.data),
    })

    if (response.ok) {
        const result = await response.json()

        // Create The Session For Authenticated User.
        await createSession({
            user: {
                id: result.id,
                name: result.name,
            },
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
        })
        redirect('/dashboard')
    } else {
        return {
            message:
                response.status === 401
                    ? 'Invalid Credentials!'
                    : response.statusText,
        }
    }
}
