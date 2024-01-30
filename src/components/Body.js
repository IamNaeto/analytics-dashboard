import Analysis from "./Analysis";
import Charts from "./Chart";
import Orders from "./Orders";
import Platform from "./Platform";
const Body = ({theme}) => {
    return ( 
        <main className={`w-full relative top-[80px] sm:top-[215px] md:top-[145px] xl:top-[90px] flex flex-col gap-4 px-[3%] sm:px-[1.5%] py-4 ${theme === 'dark' ? 'bg-black' : 'bg-[#F7F8FA]'}`}>
            <section className="w-full flex flex-col xl:flex-row gap-4">
                <Charts theme={theme}/>
                <Analysis theme={theme}/>
            </section>

            <section className="w-full flex flex-col lg:flex-row gap-4">
                <Orders theme={theme}/>
                <Platform theme={theme}/>
            </section>
        </main>
     );
}
 
export default Body;