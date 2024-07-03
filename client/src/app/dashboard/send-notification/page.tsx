'use client';

import NotificationForm from "@/components/NotificationForm/NotificationForm";
import SendNotificationHeader from "@/components/Headers/SendNotificationHeader";
import NotificaitonConfigDrawer from "@/components/NotificationConfigDrawer/NotificationConfigDrawer"
import { useState } from "react";
import "@/components/NotificationForm/NotificationForm.css";


export default function Page() {
    let [isOpen, setIsOpen] = useState(true)
  return (

    <section className="min-h-screen flex flex-col relative overflow-hidden">

        <SendNotificationHeader 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
        
        <div>
            <NotificaitonConfigDrawer 
                isOpen={isOpen}
            />
        </div>

        <div className="min-h-screen w-full flex flex-row justify-center">
            <div className={`flex flex-row justify-center h-auto w-full my-8 sm:my-10 lg:my-12 mx-4 sm:mx-6 lg:mx-8 ${isOpen ? 'formSlideIn' : 'formSlideOut'}`}>
                <NotificationForm
                    isOpen={isOpen}
                />
            </div>

        </div>

        

    </section>

  );
}
