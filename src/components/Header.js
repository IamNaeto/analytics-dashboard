import Image from "next/image";

const Header = () => {
    return ( 
        <nav className="bg-[#FAFAFA] py-4 px-4 flex items-center justify-between border-2 border-b-[#E5EAEF]">
            <section className="flex items-center justify-between w-[60%]">
                <h1 className="text-[20px] text-[#26282C] font-medium">Dashboard</h1>

                <div className="relative">
                    <input type="search" placeholder="Search..." className="pl-8 py-2 px-4 text-[16px] border border-[#DADDDD] rounded-full outline-none"/>
                    <Image src="/img/search.png" width={17} height={17} alt="search" loading="lazy" className="absolute left-2 top-3"/>
                </div>
            </section>

            <section className="flex items-center gap-6">
                <div className="flex items-center justify-center gap-2">
                    <Image src="/img/calender.png" width={20} height={20} alt="calender" loading="lazy"/>
                    <h2 className="text-[14px] text-[#26282C] font-medium">November 15, 2023</h2>
                </div>

                <div className="p-2 rounded-full bg-white border border-[#DADDDD] cursor-pointer">
                <Image src="/img/bell.png" width={20} height={20} alt="bell" loading="lazy"/>
                </div>

                <div className="flex items-center justify-center gap-4 rounded-full py-1 px-2 border border-[#DADDDD]">
                    <Image src="/img/justin.png" width={30} height={30} alt="bell" loading="lazy"/>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-[16px] text-[#26282C] font-normal">Justin Bergson</h2>
                        <h2 className="text-[14px] text-[#787486] font-normal">Justin@gmail.com</h2>
                    </div>
                    <Image src="/img/arrowdown.png" width={20} height={20} alt="bell" loading="lazy"/>
                </div>
            </section>
        </nav>
     );
}
 
export default Header;