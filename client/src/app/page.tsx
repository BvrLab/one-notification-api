import Image from "next/image";
import NotificationForm from "../components/NotificationForm/NotificationForm";
import SideNavMenu from "@/components/SideNavMenu/SideNavMenu";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
    {/* <main> */}
        <Link 
            className="m-auto hover:bg-teal-800 rounded-md bg-teal-900 py-3 px-6 mx-2 text-base font-semibold text-white outline-none" 
            href="/dashboard"
        >
            Direct to dashbord 
        </Link>

      {/* <h1>intor page</h1>
      <h1>login</h1> */}

      {/* <SideNavMenu /> */}
      {/* <div className="w-full py-16 px-10">
        <NotificationForm />
      </div> */}
    </main>
  );
}
