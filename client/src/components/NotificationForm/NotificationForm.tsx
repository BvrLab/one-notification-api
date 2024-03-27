'use client'

import { FC } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
// import { sendEmail } from '@/utils/send-email';

export type FormData = {
  to: string;
  email: string;
  content: string;
};

const NotificationForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => { 
    console.log(data);
    // sendEmail(data);
  
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='relative mb-5'>
        <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          To
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('to', { required: true })}
        />
      </div>
      <div className='relative'>
        <label
          htmlFor='email'
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register('content', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default NotificationForm;
