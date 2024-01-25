import Analysis from "./Analysis";
import Chart from "./Chart";
import Orders from "./Orders";
import Platform from "./Platform";
const Body = () => {
    return ( 
        <main className="relative top-[210px] md:top-[150px] xl:top-[100px] flex flex-col gap-4 px-[3%] sm:px-[1.5%] py-4 bg-[#F7F8FA]">
            <section className="w-full flex flex-col lg:flex-row gap-4">
                <Chart />
                <Analysis />
            </section>

            <section className="w-full flex flex-col lg:flex-row gap-4">
                <Orders />
                <Platform />
            </section>
        </main>
     );
}
 
export default Body;