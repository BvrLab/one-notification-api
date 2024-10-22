import { useState } from 'react'
import Button from '../Buttons/Button'
import Container from '../Containers/Container'
import Flexbox from '../Containers/flexbox/Flexbox'
import { Devider } from '../Devider/Devider'
import { LocalAuthForm } from './LocalAuthForm'
import { SocialAuthForm } from './SocialAuthForm'
import { LocalRegisterForm } from './LocalRegisterForm'

export function LoginForm() {
    const [isLogin, setIsLogin] = useState(true);

    function triggerIsLogin( isLogin:boolean){
        return setIsLogin(isLogin);
    }

    return (
        <Container>
            {/* Logo */}

            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Welcome to One Notification,
            </h2>
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
                {   isLogin ? (
                    <LocalAuthForm
                        setIsLogin = {triggerIsLogin}
                    
                    /> 
                ): 
                    (<LocalRegisterForm 
                        setIsLogin = {triggerIsLogin}
                    />)
                }
            </Container>
        </Container>
    )
}
