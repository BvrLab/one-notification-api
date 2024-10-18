import Button from "../Buttons/Button";
import Container from "../Containers/Container";
import Flexbox from "../Containers/flexbox/Flexbox";
import { Devider } from "../Devider/Devider";
import { LocalAuthForm } from "./LocalAuthForm";
import { SocialAuthForm } from "./SocialAuthForm";

export function LoginForm () {
    return(
        <Container >
        {/* Logo */}

        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome to One Notification,
        </h2>
        <h3 className="mt-8 text-lg font-bold leading-6 tracking-tight text-gray-700">
            Log in With
        </h3>

        {/* Social Login */}
        <Container className="mt-6">
            <SocialAuthForm />
        </Container>

        {/* Divider */}
        <Devider />

        {/* Password Login */}
        <Container className="mt-8">
            <LocalAuthForm />
        </Container>

        <Flexbox justifyContent="between" flex="1" className="py-8">
            <Container alignContent="center" className="text-sm">
                <a
                    href="#"
                    className="font-semibold text-black-500 hover:text-amber-900"
                >
                    Don't have an account? Register
                </a>
            </Container>

            <Container>
                <Button colorScheme="amber" className="rounded-3xl">
                    Sign in
                </Button>
            </Container>
        </Flexbox>
    </Container>
    )

}