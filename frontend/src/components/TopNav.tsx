import logo from "../../public/assets/topnav/logo.png";
import iconOne from "../../public/assets/topnav/icon (1).png";
import iconTwo from "../../public/assets/topnav/icon (2).png";
import language from "../../public/assets/topnav/language.png";
import support from "../../public/assets/topnav/btn.png";
import Image from "next/image";

const TopNav = () => {
    return (
        <>
            <div className="flex justify-between items-center bg-[#fafffa] p-4 border-b border-gray-300">
                <div className="flex gap-4 items-center  ">
                    <div>
                        <h1 className="font-semibold text-xl">Dua <span className="text-[#417360]">&</span> Ruqyah</h1>
                        <p>Hisnul Muslim</p>
                    </div>

                </div>

                <div className="flex justify-end items-center gap-4 ">
                    <Image
                        src={iconOne}
                        alt="iconOne"
                    />
                    <Image
                        src={iconTwo}
                        alt="iconTwo"
                    />
                    <Image
                        src={language}
                        alt="language"
                    />
                    <Image
                        src={support}
                        alt="support"
                    />
                </div>

            </div>
        </>

    );
}

export default TopNav;