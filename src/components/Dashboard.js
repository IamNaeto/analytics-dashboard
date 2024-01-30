import Header from "./Header";
import Body from "./Body";
const DashBoard = ({ menu, setMenu, theme, setTheme }) => {
    return ( 
        <main className={`relative w-full md:ml-[73px] ${theme === 'dark' ? 'bg-black' : 'bg-[#F7F8FA]'}`}>
            <Header menu={menu} setMenu={setMenu} theme={theme} setTheme={setTheme}/>
            <Body theme={theme} setTheme={setTheme}/>
        </main>
     );
}
 
export default DashBoard;