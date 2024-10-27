import CheckboxGroup from '../Checkboxs/CheckboxGroup'
import Container from '../Containers/Container'
import Flexbox from '../Containers/flexbox/Flexbox'
import Input from '../Inputs/Input'
import { useFormState } from 'react-dom'
import { signUp } from '@/lib/auth'
import React from 'react'
import Button from '../Buttons/Button'

interface LocalAuthFormProps {
    setIsLogin: (isLogin: boolean) => void
}
export function LocalRegisterForm({ setIsLogin }: LocalAuthFormProps) {
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
