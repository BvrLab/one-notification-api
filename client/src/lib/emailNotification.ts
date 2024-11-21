'use server'

import {
    emailnotificationFormSchema,
    EmailNotificationFormState,
} from '@/types'
import { BACKEND_URL } from './constants'
import { getSession } from './session'

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

    //TODO: fault condition mey need here
    const session = await getSession()
    const userId = session?.user.id

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
        //TODO: If sucess , tell front end
    } else
        return {
            message:
                response.status === 409
                    ? 'The user is already existed!'
                    : response.statusText,
        }
}
