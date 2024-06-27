import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Children } from "react";
import SideNavMenu from "@/components/SideNavMenu/SideNavMenu";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// const inter = Inter({ subsets: ["latin"] });

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Templates", href: "#", icon: UsersIcon, current: false },
  { name: "Database", href: "#", icon: FolderIcon, current: false },
  { name: "Logs", href: "#", icon: CalendarIcon, current: false },
];

const actions = [
  { name: "Send Notification", href: "#", icon: HomeIcon, current: false },
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
    <html className="h-full bg-white" lang="en">
      <body className="h-full">
        <div>
          {/* Static sidebar for desktop */}
          <SideNavMenu
            navigations={navigation}
            actions={actions}
            settings={settings}
          />
          <div className="lg:pl-72">
            {/* could add top bar in future or in other case*/}
            <main className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
