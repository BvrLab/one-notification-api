import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Children } from "react";
import SideNavMenu from "@/components/SideNavMenu/SideNavMenu";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
// const inter = Inter({ subsets: ["latin"] });

const navigation = [
  { name: "Home", href: "/dashboard", icon: HomeIcon, current: true },
  { name: "Templates", href: "#", icon: UsersIcon, current: false },
  { name: "Database", href: "#", icon: FolderIcon, current: false },
  { name: "Logs", href: "#", icon: CalendarIcon, current: false },
];

const actions = [
  { name: "Send Notification", href: "/dashboard/send-notification", icon: HomeIcon, current: false },
  { name: "Docs", href: "#", icon: UsersIcon, current: false },
];

const settings = [
  { name: "settings", href: "#", icon: HomeIcon, current: false },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-full bg-gray-900">
          {/* Static sidebar for desktop */}
          <SideNavMenu
            navigations={navigation}
            actions={actions}
            settings={settings}
          />
          <div className="lg:pl-52 h-full">
            {/* could add top bar in future or in other case*/}
            <main className="py-10 h-full">
              <div className="px-4 sm:px-6 lg:px-8 h-full">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
