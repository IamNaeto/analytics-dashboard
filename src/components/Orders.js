import Link from "next/link";
import Image from "next/image";
import download from "../../public/img/download.png"
import downloadWhite from "../../public/img/download-white.png"
const Orders = ({theme}) => {
    const orderDetails = [
        {
            id: 1,
            img: "/img/user01.png",
            name: "Marcus Bergson",
            date: "Nov 15, 2023",
            amount: "$80,000",
            status: "Paid",
        },
        {
            id: 2,
            img: "/img/user02.png",
            name: "Jaydon Vaccaro",
            date: "Nov 15, 2023",
            amount: "$150,000",
            status: "Refund",
        },
        {
            id: 3,
            img: "/img/user03.png",
            name: "Corey Schleifer",
            date: "Nov 14, 2023",
            amount: "$87,000",
            status: "Paid",
        },
        {
            id: 4,
            img: "/img/user04.png",
            name: "Cooper Press",
            date: "Nov 14, 2023",
            amount: "$100,000",
            status: "Refund",
        },
        {
            id: 5,
            img: "/img/user05.png",
            name: "Phillip Lubin",
            date: "Nov 13, 2023",
            amount: "$78,000",
            status: "Paid",
        }
    ]

    const getStatusColor = (status) => {
        if (status === "Paid") {
            return "text-[#34CAA5]";
        } else if (status === "Refund") {
            return "text-[#ED544E]";
        } else {
            return "text-gray-300"; // Default to light grey
        }
    };

    const downloadIcon = theme === "dark" ? downloadWhite :  download ;

    return (
        <main className={`${theme === 'dark' ? 'bg-[#202020]' : 'bg-white'} ${theme === 'dark' ? 'border-[#374151]' : 'border-[#EDF2F7]'} grid gap-4 w-full lg:w-[750px] rounded-2xl border overflow-x-scroll md:overflow-hidden`}>
            <section className="grid gap-4 p-4 w-full rounded-2xl">
                <section className="flex items-center justify-between">
                    <h1 className={`text-[16px] md:text-[18px] font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#26282C]'}`}>Last Orders</h1>

                    <Link href={"/"} className="text-[16px] md:text-[18px] text-[#34CAA5] font-medium">See All</Link>
                </section>

                <section className="max-w-full">
                    <div className="flex items-center justify-between w-full py-2 border-b border-b-[#EDF2F6] mb-2">
                        <h1 className="text-[14px] md:text-[16px] text-[#9CA4AB] font-medium w-[200px]">Name</h1>
                        <h1 className="text-[14px] md:text-[16px] text-[#9CA4AB] font-medium w-[110px]">Date</h1>
                        <h1 className="text-[14px] md:text-[16px] text-[#9CA4AB] font-medium w-[100px]">Amount</h1>
                        <h1 className="text-[14px] md:text-[16px] text-[#9CA4AB] font-medium w-[100px]">Status</h1>
                        <h1 className="text-[14px] md:text-[16px] text-[#9CA4AB] font-medium w-[100px]">Invoice</h1>
                    </div>

                    {orderDetails.map((orderDetail) => (
                        <div key={orderDetail.id} className="flex items-center justify-between w-full py-2 border-b border-b-[#EDF2F6] mb-2">
                            <div className=" w-[200px] flex items-center gap-1">
                                <Image src={orderDetail.img} width={30} height={30} alt="user" loading="lazy" />
                                <h1 className={`text-[14px] md:text-[16px]  font-medium ${theme === 'dark' ? 'text-white' : 'text-[#3A3F51]'}`}>{orderDetail.name}</h1>
                            </div>

                            <h1 className="text-[#737373] text-[14px] md:text-[16px] font-normal w-[110px]">{orderDetail.date}</h1>
                            <h1 className={`${theme === 'dark' ? 'text-white' : 'text-[#0D062D]'} text-[14px] md:text-[16px] font-normal w-[100px]`}>{orderDetail.amount}</h1>
                            <h1 className={`text-[14px] md:text-[16px] font-normal w-[100px] ${getStatusColor(orderDetail.status)}`}>{orderDetail.status}</h1>

                            <div className="w-[100px] flex items-center gap-1">
                                <Image src={downloadIcon} width={20} height={18} alt="download" loading="lazy" />
                                <h1 className={`text-[12px] md:text-[14px] font-normal ${theme === 'dark' ? 'text-white' : 'text-[#0D062D]'}`}>View</h1>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </main>
    );
}

export default Orders;