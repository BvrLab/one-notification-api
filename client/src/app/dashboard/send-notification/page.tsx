import NotificationForm from "@/components/NotificationForm/NotificationForm";
import SendNotoficationHeader from "@/components/Headers/SendNotificationHeader";


export default function Page() {
  return (

    <section className="h-full flex flex-col">
        {/* send-notification-header */}
        <SendNotoficationHeader />

        <div className="h-full my-8 sm:my-10 lg:my-12 mx-4 sm:mx-6 lg:mx-8p">
            <NotificationForm/>
        </div>
    </section>

  );
}
