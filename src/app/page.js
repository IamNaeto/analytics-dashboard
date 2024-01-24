import DashBoard from "@/components/Dashboard";
import SideBar from "@/components/SideBar";
export default function Home() {
  return (
    <main className="flex flex-col">
          <SideBar />
          <DashBoard />
    </main>
  );
}
