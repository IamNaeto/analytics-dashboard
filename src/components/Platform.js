import Link from "next/link";
const Platform = ({theme}) => {
    return ( 
        <main className={`w-full lg:w-[39%] grid grid-cols-1 gap-2 p-4 rounded-2xl border ${theme === 'dark' ? 'bg-[#202020]' : 'bg-white'} ${theme === 'dark' ? 'border-[#374151]' : 'border-[#EDF2F7]'}`}>
            <section className="flex items-center justify-between">
                <h1 className={`text-[16px] md:text-[18px] font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#26282C]'}`}>Top Platform</h1>

                <Link href={"/"} className="text-[16px] md:text-[18px] text-[#34CAA5] font-medium">See All</Link>
            </section>

            <section className="grid gap-4">
                <div className="grid gap-2">
                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-[#22242C]'} text-[16px] md:text-[18px] font-medium`}>Book Bazaar</h1>
                    <div className="w-full h-[8px] sm:h-[12px] bg-[#F5F5F5] rounded-2xl">
                        <div className="w-[50%] h-full bg-[#6160DC] rounded-2xl"></div>
                    </div>

                    <div className={`flex items-center justify-between ${theme === 'dark' ? 'text-white' : 'text-[#525252]'}`}>
                        <p className="text-[16px] md:text-[18px] font-medium"> $2,500,000</p>
                        <p className="text-[16px] md:text-[18px] font-medium"> +15%</p>
                    </div>
                </div>

                <div className="grid gap-2">
                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-[#22242C]'} text-[16px] md:text-[18px] font-medium`}>Artisan Aisle</h1>
                    <div className="w-full h-[8px] sm:h-[12px] bg-[#F5F5F5] rounded-2xl">
                        <div className="w-[35%] h-full bg-[#54C5EB] rounded-2xl"></div>
                    </div>

                    <div className={`flex items-center justify-between ${theme === 'dark' ? 'text-white' : 'text-[#525252]'}`}>
                        <p className="text-[16px] md:text-[18px] font-medium"> $1,800,000</p>
                        <p className="text-[16px] md:text-[18px] font-medium"> +10%</p>
                    </div>
                </div>

                <div className="grid gap-2">
                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-[#22242C]'} text-[16px] md:text-[18px] font-medium`}>Toy Troop</h1>
                    <div className="w-full h-[8px] sm:h-[12px] bg-[#F5F5F5] rounded-2xl">
                        <div className="w-[25%] h-full bg-[#FFB74A] rounded-2xl"></div>
                    </div>

                    <div className={`flex items-center justify-between ${theme === 'dark' ? 'text-white' : 'text-[#525252]'}`}>
                        <p className="text-[16px] md:text-[18px] font-medium"> $1,200,000 </p>
                        <p className="text-[16px] md:text-[18px] font-medium"> +8%</p>
                    </div>
                </div>

                <div className="grid gap-2">
                    <h1 className={`${theme === 'dark' ? 'text-white' : 'text-[#22242C]'} text-[16px] md:text-[18px] font-medium`}>XStore</h1>
                    <div className="w-full h-[8px] sm:h-[12px] bg-[#F5F5F5] rounded-2xl">
                        <div className="w-[25%] h-full bg-[#FF4A55] rounded-2xl"></div>
                    </div>

                    <div className={`flex items-center justify-between ${theme === 'dark' ? 'text-white' : 'text-[#525252]'}`}>
                        <p className="text-[16px] md:text-[18px] font-medium"> $600,000 </p>
                        <p className="text-[16px] md:text-[18px] font-medium"> +5% </p>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default Platform;