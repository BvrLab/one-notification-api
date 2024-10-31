import React from 'react'
import Button from '../Buttons/Button'
import CheckboxGroup from '../Checkboxs/CheckboxGroup'
import Container from '../Containers/Container'
import Flexbox from '../Containers/flexbox/Flexbox'
import Input from '../Inputs/Input'
import { signIn } from '@/lib/auth'
import { useFormState } from 'react-dom'
import { error } from 'console'

interface LocalAuthFormProps {
    setIsLogin: (isLogin: boolean) => void
}

export function LocalAuthForm({ setIsLogin }: LocalAuthFormProps) {
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
