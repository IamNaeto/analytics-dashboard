import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import bell from "../../public/img/bell.png"
import whiteBell from "../../public/img/white-bell.png"
import calender from "../../public/img/calender.png"
import whiteCalender from "../../public/img/white-calendar.png"
import arrowDown from "../../public/img/arrowdown.png"
import arrowdownWhite from "../../public/img/arrow-down-white.png"

const Header = ({ menu, setMenu, theme }) => {
    const toggleSideBar = () => {
        setMenu(!menu);
      };

      const bellIcon = theme === "dark" ? whiteBell :  bell ;
      const calenderIcon = theme === "dark" ? whiteCalender :  calender ;
      const arrowIcon = theme === "dark" ? arrowdownWhite :  arrowDown ;

    return (
        <nav className={`fixed top-0 z-30 w-full ${theme === 'dark' ? 'bg-black' : 'bg-[#f7f8fa]'} py-4 px-4 flex flex-col xl:flex-row items-center justify-between border-2 ${theme === 'dark' ? 'border-[#374151]' : 'border-[#E5EAEF]'} backdrop-blur-2xl pr-auto md:pr-[100px] xl:pr-0 gap-4 xl:gap-0`}>
            <section className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href={"/aside"}><h1 className={`text-[20px] font-bold ${theme === 'dark' ? 'text-white' : 'text-[#26282C]'}`}>Dashboard</h1></Link>
                    <IoMenu className="block md:hidden text-[#34CAA5] text-3xl cursor-pointer"  onClick={toggleSideBar}/>
                </div>

                <div className="relative">
                    <input type="search" placeholder="Search..." className={`pl-8 py-2 px-4 text-[16px] border ${theme === 'dark' ? 'border-[#202020] text-white' : 'border-[#E5EAEF] text-gray-800'} ${theme === 'dark' ? 'bg-[#202020]' : 'bg-white'} rounded-full outline-none`}/>
                    <Image src="/img/search.png" width={17} height={17} alt="search" loading="lazy" className="absolute left-2 top-3" />
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-between xl:justify-center gap-4 w-full">
                <div className="flex items-center justify-center gap-2">
                    <Image src={calenderIcon} width={20} height={20} alt="calender" loading="lazy" />
                    <h2 className={`text-[14px] font-medium ${theme === 'dark' ? 'text-white' : 'text-[#26282C]'}`}>November 15, 2023</h2>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <div className={`p-2 rounded-full border ${theme === 'dark' ? 'bg-[#202020]' : 'bg-white'} ${theme === 'dark' ? 'border-[#374151]' : 'border-[#EBECF2]'} cursor-pointer`}>
                        <Image src={bellIcon} width={20} height={20} alt="bell" loading="lazy" />
                    </div>

                    <div className={`flex items-center justify-center gap-4 rounded-full py-1 px-1 md:px-2 border  cursor-pointer md:cursor-default ${theme === 'dark' ? 'bg-[#202020]' : 'bg-none'} ${theme === 'dark' ? 'border-[#374151]' : 'border-[#EBECF2]'}`}>
                        <Image src="/img/justin.png" width={30} height={30} alt="bell" loading="lazy" />
                        <div className="hidden md:flex flex-col items-center justify-center">
                            <h2 className={`text-[16px] font-normal ${theme === 'dark' ? 'text-white' : 'text-[#26282C]'} `}>Justin Bergson</h2>
                            <h2 className="text-[14px] text-[#787486] font-normal">Justin@gmail.com</h2>
                        </div>
                        <Image src={arrowIcon} width={20} height={20} alt="bell" loading="lazy" className="hidden md:flex" />
                    </div>
                </div>
            </section>
        </nav>
    );
}

export default Header;