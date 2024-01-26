import Image from "next/image";
import { FaWindowClose } from "react-icons/fa";

const SideBar = ({ menu, setMenu }) => {
    const toggleSideBar = () => {
        setMenu(!menu);
    };

    const icons = [
        {
            id: 1,
            src: "/img/category.png"
        },
        {
            id: 2,
            src: "/img/trend.png"
        },
        {
            id: 3,
            src: "/img/profile.png"
        },
        {
            id: 4,
            src: "/img/box.png"
        },
        {
            id: 5,
            src: "/img/shape.png"
        },
        {
            id: 6,
            src: "/img/circle.png"
        },
    ]

    const icons2 = [
        {
            id: 1,
            src: "/img/arrowright.png"
        },
        {
            id: 2,
            src: "/img/setting.png"
        },
        {
            id: 3,
            src: "/img/logout.png"
        },
    ]
    return (
        <main className={`fixed h-screen z-50 backdrop-blur w-full md:w-[80px] ${menu ? "block md:block" : 'hidden md:block'}`}>
            <section className="w-[80px] md:w-full h-screen flex flex-col items-center justify-start gap-4 sm:gap-0 sm:justify-between bg-[#F7F8FA] border border-r-[#EBECF2] ">
                <section>
                    <div className="p-4 mb-2 flex items-center justify-center w-full">
                        <Image src="/img/logo.png" width={40} height={40} alt="logo" loading="lazy" />
                    </div>
                    {icons.map((icon) => (
                        <div key={icon.id} className="px-4 mb-4 flex items-center justify-center w-full hover:border-r-[#0D062D] border-transparent border-r-2 cursor-pointer transition-all delay-150">
                            <Image src={icon.src} width={20} height={20} alt="icon" loading="lazy" />
                        </div>
                    ))}

                    <div className="mx-4 py-2 mb-4 flex flex-col items-center justify-center gap-3 md:gap-5 transition-all delay-150 bg-white rounded-full">
                        <Image src="/img/light.png" width={20} height={20} alt="icon" loading="lazy" className="cursor-pointer" />
                        <Image src="/img/dark.png" width={20} height={20} alt="icon" loading="lazy" className="cursor-pointer" />
                    </div>
                </section>

                <section>
                    {icons2.map((icon2) => (
                        <div key={icon2.id} className="px-4 mb-4 flex items-center justify-center w-full hover:border-r-[#0D062D] border-transparent border-r-2 cursor-pointer transition-all delay-150">
                            <Image src={icon2.src} width={20} height={20} alt="icon" loading="lazy" />
                        </div>
                    ))}
                </section>

                <FaWindowClose className="block md:hidden text-[#34CAA5] text-[30px] mb-4 cursor-pointer"  onClick={toggleSideBar} />
            </section>
        </main>
    );
}

export default SideBar;