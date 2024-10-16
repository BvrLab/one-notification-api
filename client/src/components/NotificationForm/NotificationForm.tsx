'use client'

import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
// import { sendEmail } from '@/utils/send-email';

export type FormData = {
    to: string
    subject: string
    content: string
}

interface NotificationFormProps {
    isOpen: boolean
}

const NotificationForm: FC<NotificationFormProps> = ({ isOpen }) => {
    const { register, handleSubmit } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
        // sendEmail(data);
    }

    return (
        <div className="h-full overflow-auto rounded-2xl bg-orange-50 px-8 py-2 sm:w-9/12 md:w-8/12 lg:w-6/12">
            <form
                className="flex h-full flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="border-b-xs mt-5 flex w-full items-center border-0 border-solid">
                    <label
                        htmlFor="name"
                        className="inline-block bg-orange-50 pr-2 text-base font-medium text-gray-900"
                    >
                        To:
                    </label>
                    <input
                        type="text"
                        placeholder="example@domain.com"
                        className="block w-full border-0 bg-orange-50 py-1.5 text-gray-900 ring-0 focus:ring-0 sm:text-sm sm:leading-6"
                        {...register('to', { required: true })}
                    />
                </div>
                <div className="h-px w-full border-t bg-[#DCDEE4]"></div>

                <div className="border-b-xs mt-5 flex w-full items-center border-0 border-solid">
                    {/*           className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" */}
                    <label
                        htmlFor="subject"
                        className="inline-block bg-orange-50 pr-2 text-base font-medium text-gray-900"
                    >
                        Subject:
                    </label>
                    <input
                        type="text"
                        placeholder="This is a subject"
                        className="block w-full rounded-md border-0 bg-orange-50 py-1.5 text-gray-900 ring-0 focus:ring-0 sm:text-sm sm:leading-6"
                        {...register('subject', { required: true })}
                    />
                </div>
                <div className="my-2 h-px w-full border-t bg-[#DCDEE4]"></div>

                <div className="h-2 min-h-1 w-full bg-teal-700"></div>

                <div className="mb-5 flex-grow">
                    <textarea
                        rows={15}
                        placeholder="Type your message here..."
                        className="block h-full w-full rounded-md border-0 bg-orange-50 py-3 text-gray-900 ring-0 focus:ring-0 sm:text-sm sm:leading-6"
                        {...register('content', { required: true })}
                    ></textarea>
                </div>
                <div className="flex justify-end px-4 pb-2">
                    <button className="mx-2 rounded-md bg-teal-900 px-6 py-3 text-base font-semibold text-white outline-none hover:bg-teal-800">
                        Submit
                    </button>
                    <button className="mx-2 rounded-md bg-emerald-500 px-6 py-3 text-base font-semibold text-white outline-none hover:bg-emerald-400">
                        Schedule
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NotificationForm
