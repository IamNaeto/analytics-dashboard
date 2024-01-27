import Analysis from "./Analysis";
import Charts from "./Chart";
import Orders from "./Orders";
import Platform from "./Platform";
const Body = () => {
    return ( 
        <main className="w-full relative top-[210px] md:top-[150px] xl:top-[100px] flex flex-col gap-4 px-[3%] sm:px-[1.5%] py-4 bg-[#F7F8FA]">
            <section className="w-full flex flex-col xl:flex-row gap-4">
                <Charts />
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