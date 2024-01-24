import Image from "next/image";

const SideBar = () => {

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
        <main className="fixed h-screen flex flex-col items-center justify-between bg-[#F7F8FA] border border-r-[#EBECF2] z-50">
            <section>
                <div className="p-4 mb-2 flex items-center justify-center w-full">
                    <Image src="/img/logo.png" width={40} height={40} alt="logo" loading="lazy" />
                </div>
                {icons.map((icon) => (
                    <div key={icon.id} className="px-4 mb-4 flex items-center justify-center w-full hover:border-r-[#0D062D] border-transparent border-r-2 cursor-pointer transition-all delay-150">
                        <Image src={icon.src} width={20} height={20} alt="icon" loading="lazy" />
                    </div>
                ))}

                <div className="mx-4 py-2 mb-4 flex flex-col items-center justify-center gap-5 transition-all delay-150 bg-white rounded-full">
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
        </main>
    );
}

export default SideBar;