import Image from "next/image";
import NotificationForm from "../components/NotificationForm/NotificationForm";
import SideNavMenu from "@/components/SideNavMenu/SideNavMenu";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
    {/* <main> */}

    <div className="mt-40">
        <Link 
            className="m-auto hover:bg-teal-800 rounded-md bg-teal-900 py-3 px-6 mx-2 text-base font-semibold text-white outline-none" 
            href="/dashboard/send-notification"
        >
            DEMO: Direct to dashbord/send-notification
        </Link>

        <div className="mt-5 hover:bg-teal-800 rounded-md bg-teal-900 py-3 px-6 mx-2 text-base font-semibold text-white outline-none" >
          Login
        </div>
    </div>

      {/* <h1>intor page</h1>
      <h1>login</h1> */}

      {/* <SideNavMenu /> */}
      {/* <div className="w-full py-16 px-10">
        <NotificationForm />
      </div> */}
    </main>
  );
}
