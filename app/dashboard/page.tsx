"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Overview from "@/myComponents/Overview";

export default function Dashboard() {
  const router = useRouter();

  return (
    <SidebarProvider>
      {/* Sidebar */}
      <Sidebar className="bg-black border-r border-yellow-500/20">
        <SidebarContent className="bg-black">
          {/* Logo */}
          <div className="p-6 text-2xl font-bold text-yellow-400">
            Shoe Admin
          </div>

          <SidebarMenu>
            {/* Overview */}
            <SidebarMenuItem>
              <Link href="/dashboard">
                <SidebarMenuButton className="text-white hover:bg-yellow-400 hover:text-black">
                  Overview
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>

            {/* Shoes */}
            <SidebarMenuItem>
              <Link href="/addproducts">
                <SidebarMenuButton className="text-white hover:bg-yellow-400 hover:text-black">
                  Shoes
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        {/* Footer Logout */}
        <SidebarFooter className="bg-black border-t border-yellow-500/20">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => router.push("/adminpage")}
                className="bg-yellow-400 text-black hover:bg-yellow-300"
              >
                Logout
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-neutral-950 text-white">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8">
          Dashboard Overview
        </h1>

        <Overview />
      </main>
    </SidebarProvider>
  );
}
