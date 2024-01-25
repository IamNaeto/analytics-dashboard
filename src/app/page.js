"use client"
import DashBoard from "@/components/Dashboard";
import SideBar from "@/components/SideBar";
import { useState } from "react";
export default function Home() {
  const [menu, setMenu] = useState(false)
  
  return (
        <main className="w-full flex">
          <SideBar menu={menu} setMenu={setMenu}/>
          <DashBoard menu={menu} setMenu={setMenu}/>
    </main>
  );
}
