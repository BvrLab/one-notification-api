import CheckboxGroup from '../Checkboxs/CheckboxGroup'
import Container from '../Containers/Container'
import Flexbox from '../Containers/flexbox/Flexbox'
import Input from '../Inputs/Input'

export function LocalRegisterForm() {
    return (
        <Container>
            <form action="#" method="POST" className="space-y-6">
                <Container>
                    <Input
                        label="Name"
                        id="name"
                        name="name"
                        type="name"
                        required
                        autoComplete="name"
                        colorScheme="amber"
                    />
                </Container>

                <Container>
                    <Input
                        label="Email Address"
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        colorScheme="amber"
                    />
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
            </form>
        </Container>
    )
}
