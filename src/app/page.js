"use client"
import DashBoard from "@/components/Dashboard";
import SideBar from "@/components/SideBar";
import { useState } from "react";
export default function Home() {
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState("light");
  
  return (
        <main className={`w-full flex ${theme === 'dark' ? 'bg-black' : 'bg-[#F7F8FA]'}`}>
          <SideBar menu={menu} setMenu={setMenu} theme={theme} setTheme={setTheme}/>
          <DashBoard menu={menu} setMenu={setMenu} theme={theme} setTheme={setTheme}/>
    </main>
  );
}
