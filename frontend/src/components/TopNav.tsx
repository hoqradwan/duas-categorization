import Image from "next/image";
import iconOne from "../../public/assets/topnav/icon (1).png";
import iconTwo from "../../public/assets/topnav/icon (2).png";
import language from "../../public/assets/topnav/language.png";
import support from "../../public/assets/topnav/btn.png";
import logo from "../../public/assets/sidenav/logo.png";

const TopNav = () => {
    return (
        <div className=" flex justify-between items-center bg-[#fafffa] py-1 px-4 border-b border-gray-200 w-full">

            <div className="flex items-center gap-3">
                <Image
                    src={logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="bg-[#cae7c3]"
                />
                <div className="ms-6">
                    <h1 className="font-semibold text-xl">Dua <span className="text-[#417360]">&</span> Ruqyah</h1>
                    <p className="text-sm text-gray-500">Hisnul Muslim</p>
                </div>
            </div>


            <div className="flex justify-end items-center gap-3">
                <button className="p-1 hover:bg-gray-100 rounded-full">
                    <Image
                        src={iconOne}
                        alt="Settings"
                        width={30}
                        height={30}
                    />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                    <Image
                        src={iconTwo}
                        alt="Notifications"
                        width={30}
                        height={30}
                    />
                </button>
                <div className="flex items-center bg-[#ebf3eb] rounded-lg px-3 py-1">
                    <Image
                        src={language}
                        alt="Language"
                        width={40}
                        height={40}
                        className="mr-1"
                    />
                    <span className="text-sm font-medium">EN</span>
                </div>
                <button className="bg-[#417360] rounded-lg ">
                    <Image src={support} alt="support" />
                </button>
            </div>
        </div>
    );
}

export default TopNav;

