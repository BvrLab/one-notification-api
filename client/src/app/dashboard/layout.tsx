import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Children } from "react";
import SideNavMenu from "@/components/SideNavMenu/SideNavMenu";
import {
  Square2StackIcon,
  ServerStackIcon,
  BookOpenIcon,
  HomeIcon,
  PaperAirplaneIcon,
  DocumentIcon,
  Cog6ToothIcon

} from "@heroicons/react/24/outline";
// const inter = Inter({ subsets: ["latin"] });

const navigation = [
  { name: "Home", href: "/dashboard", icon: HomeIcon, current: true },
  { name: "Templates", href: "#", icon: Square2StackIcon, current: false },
  { name: "Database", href: "#", icon: ServerStackIcon, current: false },
  { name: "Logs", href: "#", icon: BookOpenIcon, current: false },
];

const actions = [
  {
    name: "Send Notification",
    href: "/dashboard/send-notification",
    icon: PaperAirplaneIcon,
    current: false,
  },
  { name: "Docs", href: "#", icon: DocumentIcon, current: false },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900">
        <div className="min-h-screen bg-gray-900">
            {/* Static sidebar for desktop */}
            <SideNavMenu
                    navigations={navigation}
                    actions={actions}
            />
            <div className="lg:pl-52 min-h-screen">
                {/* could add top bar in future or in other case*/}
                <main className="min-h-screen">
                    <div className="min-h-screen">{children}</div>
                </main>
          </div>
        </div>
      </body>
    </html>
  );
}
