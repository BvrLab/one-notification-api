import React from 'react'
import Container from '../Containers/Container'
import Flexbox from '../Containers/flexbox/Flexbox'
import { useState } from 'react'
import Button from '../Buttons/Button'
import { Devider } from '../Devider/Devider'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { signIn } from '../../lib/auth'
import Input from '../Inputs/Input'
import CheckboxGroup from '../Checkboxs/CheckboxGroup'
import { signUp } from '../../lib/auth'
import { GoogleButton } from './GoogleButton'
import { GitHubButton } from './GitHubButton'
import { BACKEND_URL } from '@/lib/constants'
import { env } from 'process'

interface LocalAuthFormProps {
    setIsLogin: (isLogin: boolean) => void
}

interface LocalAuthFormProps {
    setIsLogin: (isLogin: boolean) => void
}

function LocalRegisterForm({ setIsLogin }: LocalAuthFormProps) {
    const [state, action] = useFormState(signUp, undefined)

    return (
        <Container>
            <form action={action} method="POST" className="space-y-6">
                {state?.message && (
                    <p className="text-xs text-red-500">{state.message}</p>
                )}

                <Container>
                    <Input
                        label="Name"
                        id="username"
                        name="username"
                        type="username"
                        required
                        autoComplete="name"
                        colorScheme="amber"
                    />
                    {state?.error?.username && (
                        <p className="text-sm text-red-500">
                            {state.error.username}
                        </p>
                    )}
                </Container>

                <Container>
                    <Input
                        label="Email Address"
                        id="email"
                        name="email"
                        // type="email"
                        required
                        autoComplete="email"
                        colorScheme="amber"
                    />

                    {state?.error?.email && (
                        <p className="text-xs text-red-500">
                            {state.error.email}
                        </p>
                    )}
                </Container>

                <Container>
                    <Input
                        label="Password"
                        id="password"
                        name="password"
                        // type="password"
                        required
                        autoComplete="current-password"
                        colorScheme="amber"
                    />
                    {state?.error?.password && (
                        <div className="text-xs text-red-500">
                            <p>Password must:</p>
                            <ul>
                                {state.error.password.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Container>

                <Flexbox
                    alignItems="center"
                    justifyContent="between"
                    // className="flex items-center justify-between"
                >
                    <Container className="flex items-center">
                        <CheckboxGroup
                            onChange={() => {}}
                            options={[
                                {
                                    id: 'remember-me',
                                    isSelected: false,
                                    name: 'Remember me',
                                    value: 'Remember-me',
                                },
                            ]}
                            colorScheme="amber"
                        />
                    </Container>

                    <Container className="text-sm leading-6">
                        <a
                            href="#"
                            className="font-semibold text-amber-600 hover:text-amber-500"
                        >
                            Forgot password?
                        </a>
                    </Container>
                </Flexbox>

                <Flexbox justifyContent="between" flex="1" className="py-8">
                    <Container alignContent="center" className="text-sm">
                        <a
                            href="#"
                            className="text-black-500 font-semibold hover:text-amber-900"
                            onClick={(e) => {
                                setIsLogin(true)
                            }}
                        >
                            Already have an account? Login
                        </a>
                    </Container>

                    <Container>
                        <Button
                            type="submit"
                            className="mt-2 w-full"
                            colorScheme="amber"
                        >
                            Register
                        </Button>
                    </Container>
                </Flexbox>
            </form>
        </Container>
    )
}

function LocalAuthForm({ setIsLogin }: LocalAuthFormProps) {
    const [state, action] = useFormState(signIn, undefined)

    return (
        <Container>
            <form action={action} method="POST" className="space-y-6">
                <Container>
                    {state?.message && (
                        <p className="text-sm text-red-500">{state.message}</p>
                    )}
                    <Input
                        label="Email Address"
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        colorScheme="amber"
                    />
                    {state?.error?.email && (
                        <p className="text-sm text-red-500">
                            {state.error.email}
                        </p>
                    )}
                </Container>

                <Container>
                    <Input
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        colorScheme="amber"
                    />
                    {state?.error?.password && (
                        <p className="text-sm text-red-500">
                            {state.error.password}
                        </p>
                    )}
                </Container>

                <Flexbox
                    alignItems="center"
                    justifyContent="between"
                    // className="flex items-center justify-between"
                >
                    <Container className="flex items-center">
                        <CheckboxGroup
                            onChange={() => {}}
                            options={[
                                {
                                    id: 'remember-me',
                                    isSelected: false,
                                    name: 'Remember me',
                                    value: 'Remember-me',
                                },
                            ]}
                            colorScheme="amber"
                        />
                    </Container>

                    <Container className="text-sm leading-6">
                        <a
                            href="#"
                            className="font-semibold text-amber-600 hover:text-amber-500"
                        >
                            Forgot password?
                        </a>
                    </Container>
                </Flexbox>

                <Flexbox justifyContent="between" flex="1" className="py-8">
                    <Container alignContent="center" className="text-sm">
                        <a
                            href="#"
                            className="text-black-500 font-semibold hover:text-amber-900"
                            onClick={(e) => {
                                e.preventDefault()
                                setIsLogin(false)
                            }}
                        >
                            Don&apos;t have an account? Register
                        </a>
                    </Container>

                    <Container>
                        <Button
                            type="submit"
                            className="mt-2 w-full"
                            colorScheme="amber"
                        >
                            Login
                        </Button>
                    </Container>
                </Flexbox>
            </form>
        </Container>
    )
}

function SocialAuthForm() {
    return (
        <div>
            <div className="mt-6 grid grid-cols-2 gap-12">
                <GoogleButton
                    onClick={() => {
                        window.location.href = `${BACKEND_URL}/auth/google/login`
                    }}
                >
                    Google
                </GoogleButton>
                <GitHubButton>GitHub</GitHubButton>
            </div>
        </div>
    )
}

export function LoginForm() {
    const [isLogin, setIsLogin] = useState(true)

    const router = useRouter()

    function triggerIsLogin(isLogin: boolean) {
        return setIsLogin(isLogin)
    }

    return (
        <Container>
            {/* Logo */}

            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Welcome to One Notification,
            </h2>

            <Button
                className="mt-3"
                variant="primary"
                colorScheme="orange"
                onClick={() => {
                    router.push('/dashboard/send-notification')
                }}
            >
                Demo Without Login
            </Button>
            <h3 className="mt-8 text-lg font-bold leading-6 tracking-tight text-gray-700">
                {isLogin ? 'Login' : 'Register'} With
            </h3>

            {/* Social Login */}
            <Container className="mt-6">
                <SocialAuthForm />
            </Container>

            {/* Divider */}
            <Devider />

            {/* Password Login */}
            <Container className="mt-8">
                {isLogin ? (
                    <LocalAuthForm setIsLogin={triggerIsLogin} />
                ) : (
                    <LocalRegisterForm setIsLogin={triggerIsLogin} />
                )}
            </Container>
        </Container>
    )
}
