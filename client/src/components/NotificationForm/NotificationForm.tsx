"use client";

import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { sendEmail } from '@/utils/send-email';

export type FormData = {
  to: string;
  subject: string;
  content: string;
};

const NotificationForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // sendEmail(data);
  };

  return (
    <div 
      className="p-2 bg-orange-50" 
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full mt-5 items-center border-0 border-b-xs border-solid">
          <label
            htmlFor="name"
            className="inline-block bg-orange-50 pr-2 text-base font-medium text-gray-900"
          >
            To:
          </label>
          <input
            type="text"
            placeholder="example@domain.com"
            className="block w-full border-0 py-1.5 px-2 bg-orange-50 text-gray-900 shadow-sm sm:text-sm sm:leading-6 focus:outline-none"
            {...register("to", { required: true })}
          />
        </div>
        <div className="h-px w-full bg-[#DCDEE4]"></div>

        <div className="flex w-full mt-5 items-center border-0 border-b-xs border-solid">
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
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm bg-orange-50 sm:text-sm sm:leading-6 focus:outline-none"
            {...register("subject", { required: true })}
          />
        </div>
        <div className="h-px w-full bg-[#DCDEE4]"></div>

        <div className="h-2 w-full bg-teal-700"></div>
        
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
          </label>
          <textarea
            rows={4}
            placeholder="Type your message here..."
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm bg-orange-50 sm:text-sm sm:leading-6 focus:outline-none"
            {...register("content", { required: true })}
          ></textarea>
        </div>
        <div className="flex justify-end px-4 pb-2">
          <button className="hover:bg-teal-800 rounded-md bg-teal-900 py-3 px-6 mx-2 text-base font-semibold text-white outline-none">
            Submit
          </button>
          <button className="hover:bg-emerald-400 rounded-md bg-emerald-500 py-3 px-6 mx-2 text-base font-semibold text-white outline-none">
            Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotificationForm;
