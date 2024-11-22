'use server'
import { getSession } from './session'
import { emailnotificationFormSchema, EmailNotificationFormState } from '@/types'
import { BACKEND_URL } from './constants'

export async function sendEmailNotification(
    state: EmailNotificationFormState,
    formData: FormData
): Promise<EmailNotificationFormState> {
    const validationFields = emailnotificationFormSchema.safeParse({
        recipient: formData.get('recipient'),
        subject: formData.get('subject'),
        content: formData.get('content'),
    })

    if (!validationFields.success) {
        return {
            error: validationFields.error.flatten().fieldErrors,
        }
    }

    const session = await getSession()
    const userId = session?.user.id

    if (!userId) {
        return {
            message: 'User session not found' ,
        }
    }

    try {
        const response = await fetch(
            `${BACKEND_URL}/email-api/${userId}/send-email`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(validationFields.data),
            }
        )

        if (response.ok) {
            const result = await response.json()
            // console.log('Email sent successfully:', result)
            return {
                message: 'Email sent successfully',
            }
        } else {
            const errorText = await response.text()
            console.error('Failed to send email:', errorText)
            return {
                    message:
                        response.status === 409
                            ? 'The user already exists!'
                            : response.statusText,

            }
        }
    } catch (error) {
        console.error('Error sending email:', error)
        return {
            message: 'An unexpected error occurred' ,
        }
    }
}
