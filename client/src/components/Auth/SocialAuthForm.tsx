import { GoogleButton } from './GoogleButton'
import { GitHubButton } from './GitHubButton'

export function SocialAuthForm() {
    return (
        <div>
            {/* <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                    Or continue with
                </span>
            </div> */}
            <div className="mt-6 grid grid-cols-2 gap-12">
                <GoogleButton>Google</GoogleButton>
                <GitHubButton>GitHub</GitHubButton>
            </div>
        </div>
    )
}
