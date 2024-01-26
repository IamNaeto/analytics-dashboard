import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Header = ({ menu, setMenu }) => {
    const toggleSideBar = () => {
        setMenu(!menu);
      };

    return (
        <nav className="fixed top-0 z-30 w-full py-4 px-4 flex flex-col xl:flex-row items-center justify-between border-2 border-b-[#E5EAEF] backdrop-blur-2xl pr-auto md:pr-[100px] xl:pr-0 gap-4 xl:gap-0">
            <section className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href={"/aside"}><h1 className="text-[20px] text-[#26282C] font-bold">Dashboard</h1></Link>
                    <IoMenu className="block md:hidden text-[#34CAA5] text-3xl cursor-pointer"  onClick={toggleSideBar}/>
                </div>

                <div className="relative">
                    <input type="search" placeholder="Search..." className="pl-8 py-2 px-4 text-[16px] border border-[#DADDDD] rounded-full outline-none" />
                    <Image src="/img/search.png" width={17} height={17} alt="search" loading="lazy" className="absolute left-2 top-3" />
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-between xl:justify-center gap-4 w-full">
                <div className="flex items-center justify-center gap-2">
                    <Image src="/img/calender.png" width={20} height={20} alt="calender" loading="lazy" />
                    <h2 className="text-[14px] text-[#26282C] font-medium">November 15, 2023</h2>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <div className="p-2 rounded-full bg-white border border-[#DADDDD] cursor-pointer">
                        <Image src="/img/bell.png" width={20} height={20} alt="bell" loading="lazy" />
                    </div>

                    <div className="flex items-center justify-center gap-4 rounded-full py-1 px-1 md:px-2 border border-[#DADDDD] cursor-pointer md:cursor-default">
                        <Image src="/img/justin.png" width={30} height={30} alt="bell" loading="lazy" />
                        <div className="hidden md:flex flex-col items-center justify-center">
                            <h2 className="text-[16px] text-[#26282C] font-normal">Justin Bergson</h2>
                            <h2 className="text-[14px] text-[#787486] font-normal">Justin@gmail.com</h2>
                        </div>
                        <Image src="/img/arrowdown.png" width={20} height={20} alt="bell" loading="lazy" className="hidden md:flex" />
                    </div>
                </div>
            </section>
        </nav>
    );
}

export default Header;