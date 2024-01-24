import Analysis from "./Analysis";
import Chart from "./Chart";
import Orders from "./Orders";
import Platform from "./Platform";
const Body = () => {
    return ( 
        <main className="relative grid gap-4 w-full min-h-screen px-[1.5%] py-4 bg-[#F7F8FA]">
            <section className="flex justify-between">
                <Chart />
                <Analysis />
            </section>

            <section className="flex justify-between">
                <Orders />
                <Platform />
            </section>
        </main>
     );
}
 
export default Body;