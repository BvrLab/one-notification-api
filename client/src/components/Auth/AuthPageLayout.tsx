import Image from 'next/image'
import Container from '../Containers/Container'
import Flexbox from '../Containers/flexbox/Flexbox'
import { LoginForm } from './LoginForm'

export function AuthPageLayout() {
    return (
        <Flexbox className="min-h-full bg-amber-50" flex="1" direction="row">
            <Flexbox
                className="px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
                flex="1"
                direction="column"
                justifyContent="center"
            >
                <Container className="mx-auto w-full max-w-sm lg:w-96">
                    <LoginForm />
                </Container>
            </Flexbox>

            <Container className="relative hidden w-0 flex-1 lg:block">
                <Image
                    alt=""
                    src="/images/signin_page_picture.jpg"
                    className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
                    width={1280}
                    height={960}
                />
            </Container>
        </Flexbox>
    )
}
