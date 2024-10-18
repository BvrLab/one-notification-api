'use client'

import AuthPage from '@/components/Auth/AuthPage'
import '../globals.css' // Assuming you have global styles defined

export default function LoginPage() {
    return (
        <html className="h-full bg-zinc-900" lang="en">
            <body className="h-full">
                <div className="h-full">
                    <AuthPage />
                </div>
            </body>
        </html>
    )
}
