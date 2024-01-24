import Analysis from "./Analysis";
import Chart from "./Chart";
const Body = () => {
    return ( 
        <main className="w-full min-h-screen px-[1.5%] py-4 bg-[#F7F8FA]">
            <section className="flex justify-between">
                <Chart />
                <Analysis />
            </section>
        </main>
     );
}
 
export default Body;