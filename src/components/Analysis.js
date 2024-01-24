import Image from "next/image";
const Analysis = () => {
    const analysis = [
        {
            id: 1,
            logo: "/img/box-tick.png",
            graph: "/img/rise.png",
            total_order: "350",
            arrow: "/img/trending-up.png"
        },
        {
            id: 2,
            logo: "/img/3d-rotate.png",
            graph: "/img/fall.png",
            total_order: "270",
            arrow: "/img/trending-down.png"
        },
        {
            id: 3,
            logo: "/img/shopping-cart.png",
            graph: "/img/fall.png",
            total_order: "1567",
            arrow: "/img/trending-down.png"
        },
        {
            id: 4,
            logo: "/img/coin.png",
            graph: "/img/rise.png",
            total_order: "$350.000",
            arrow: "/img/trending-up.png"
        },
    ]

    const getBackgroundColor = (arrowSrc) => {
        if (arrowSrc === "/img/trending-up.png") {
            return "bg-[#34CAA51F]";
        } else if (arrowSrc === "/img/trending-down.png") {
            return "bg-[#ED544E1F]";
        } else {
            return "bg-gray-300"; // Default to light grey
        }
    };
    

    return (
        <main className="w-[39%] grid grid-cols-2 gap-2">
            {analysis.map((data) => (
                <section key={data.id} className="bg-white rounded-2xl border border-[#EDF2F7] p-3">
                    <div className="flex items-center justify-between">
                        <div className="p-2 rounded-full border border-[#E6E6E6]">
                            <Image src={data.logo} width={20} height={20} alt="icon" />
                        </div>
                        <div>
                            <Image src={data.graph} width={100} height={100} alt="graph" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 my-4">
                        <h2 className="text-[18px] text-[#898989] font-normal">Total Order</h2>
                        <h1 className="text-[24px] text-[#3A3F51] font-medium">{data.total_order}</h1>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <div className={`px-2 py-1 rounded-full flex items-center justify-center gap-1 ${getBackgroundColor(data.arrow)}`}>
                            <Image src={data.arrow} width={12} height={12} alt="arrow" />
                            <span className="text-[12px] text-[#34CAA5] font-normal">23.5%</span>
                        </div>

                        <p className="text-[14px] text-[#606060] font-normal">vs. previous month</p>
                    </div>
                </section>
            ))}
        </main>
    );
}

export default Analysis;