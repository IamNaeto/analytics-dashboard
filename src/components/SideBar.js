import Image from "next/image";
import { FaWindowClose } from "react-icons/fa";
import light from "../../public/img/light.png";
import activeLight from "../../public/img/active-light.png";
import dark from "../../public/img/dark.png";
import activeDark from "../../public/img/active-dark.png";

const SideBar = ({ menu, setMenu, theme, setTheme }) => {

  const lightIcon = theme === "dark" ? light : activeLight;
  const moonIcon = theme === "dark" ? activeDark : dark;

  const toggleLight = () => {
    setTheme("light");
  };
  
  const toggleDark = () => {
    setTheme("dark");
  };

  const toggleSideBar = () => {
    setMenu(!menu);
  };

  const icons = [
    {
      id: 1,
      src: theme === "dark" ? "/img/category-lite.png" : "/img/category.png",
    },
    {
      id: 2,
      src: "/img/trend.png",
    },
    {
      id: 3,
      src: "/img/profile.png",
    },
    {
      id: 4,
      src: "/img/box.png",
    },
    {
      id: 5,
      src: "/img/shape.png",
    },
    {
      id: 6,
      src: "/img/circle.png",
    },
  ];

  const icons2 = [
    {
      id: 1,
      src: "/img/arrowright.png",
    },
    {
      id: 2,
      src: "/img/setting.png",
    },
    {
      id: 3,
      src: "/img/logout.png",
    },
  ];

  return (
    <main className={`fixed h-screen z-50 backdrop-blur w-full md:w-[80px] ${menu ? "block md:block" : 'hidden md:block'} `}>
      <section className={`w-[80px] md:w-full h-screen flex flex-col items-center justify-start gap-8 sm:gap-0 sm:justify-between ${theme === 'dark' ? 'bg-black' : 'bg-[#f7f8fa]'} border ${theme === 'dark' ? 'border-black border-r-[#374151]' : 'border-[#f7f8fa] border-r-[#EBECF2]'}`}>
        <section>
          <div className="p-4 mb-2 flex items-center justify-center w-full">
            <Image src="/img/logo.png" width={40} height={40} alt="logo" loading="lazy" />
          </div>
          {icons.map((icon) => (
            <div key={icon.id} className={`px-4 mb-4 flex items-center justify-center w-full hover:border-r-${theme === 'dark' ? '#0D062D' : '#34CAA5'} border-transparent border-r-2 cursor-pointer transition-all delay-150`}>
              <Image src={icon.src} width={20} height={20} alt="icon" loading="lazy" className="logo" />
            </div>
          ))}

          <div className={`mx-4 py-4 mb-4 flex flex-col items-center justify-center border gap-3 md:gap-5 transition-all delay-150 ${theme === 'dark' ? 'bg-[#202020]' : 'bg-white'} ${theme === 'dark' ? 'border-[#374151]' : 'border-[#EBECF2]'} rounded-full`}>
            <Image src={lightIcon} width={20} height={20} alt="icon" loading="lazy" className="cursor-pointer" onClick={toggleLight} />
            <Image src={moonIcon} width={20} height={20} alt="icon" loading="lazy" className="cursor-pointer" onClick={toggleDark} />
          </div>
        </section>

        <section>
          {icons2.map((icon2) => (
            <div key={icon2.id} className={`px-4 mb-4 flex items-center justify-center w-full hover:border-r-${theme === 'dark' ? '#0D062D' : '#34CAA5'} border-transparent border-r-2 cursor-pointer transition-all delay-150`}>
              <Image src={icon2.src} width={20} height={20} alt="icon" loading="lazy" className="logo" />
            </div>
          ))}
        </section>

        <FaWindowClose className={`block md:hidden text-[#34CAA5] text-[30px] mb-4 cursor-pointer`} onClick={toggleSideBar} />
      </section>
    </main>
  );
}

export default SideBar;
