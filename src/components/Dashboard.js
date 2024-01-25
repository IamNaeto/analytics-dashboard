import Header from "./Header";
import Body from "./Body";
const DashBoard = ({ menu, setMenu }) => {
    return ( 
        <main className="relative w-full md:ml-[73px] bg-[#F7F8FA]">
            <Header menu={menu} setMenu={setMenu} />
            <Body />
        </main>
     );
}
 
export default DashBoard;