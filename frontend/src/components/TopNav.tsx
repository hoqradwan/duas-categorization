import Image from "next/image";
import logo from "../../public/assets/topnav/logo.png";
import iconOne from "../../public/assets/topnav/icon (1).png";
import iconTwo from "../../public/assets/topnav/icon (2).png";
import language from "../../public/assets/topnav/language.png";
import support from "../../public/assets/topnav/btn.png";

const TopNav = () => {
    return (
        <div className="flex justify-between items-center bg-[#fafffa] py-3 px-4 border-b border-gray-200 w-full">
            <div className="flex gap-4 items-center">
                <div>
                    <h1 className="font-semibold text-xl">Dua <span className="text-[#1fa47b]">&</span> Ruqyah</h1>
                    <p className="text-sm text-gray-500">Hisnul Muslim</p>
                </div>
            </div>

            <div className="flex justify-end items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Image
                        src={iconOne}
                        alt="Settings"
                        width={22}
                        height={22}
                    />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Image
                        src={iconTwo}
                        alt="Notifications"
                        width={22}
                        height={22}
                    />
                </button>
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
                    <Image
                        src={language}
                        alt="Language"
                        width={18}
                        height={18}
                        className="mr-1"
                    />
                    <span className="text-sm font-medium">EN</span>
                </div>
                <button className="bg-[#1fa47b] hover:bg-[#1a8f6c] text-white px-4 py-1 rounded-lg flex items-center gap-1">
                    <span>Support Us</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default TopNav;

// import iconOne from "../../public/assets/topnav/icon (1).png";
// import iconTwo from "../../public/assets/topnav/icon (2).png";
// import language from "../../public/assets/topnav/language.png";
// import support from "../../public/assets/topnav/btn.png";
// import Image from "next/image";

// const TopNav = () => {
//     return (
//         <>
//             <div className="flex justify-between items-center bg-[#fafffa] p-4 border-b border-gray-300">
//                 <div className="flex gap-4 items-center  ">
//                     <div>
//                         <h1 className="font-semibold text-xl">Dua <span className="text-[#417360]">&</span> Ruqyah</h1>
//                         <p>Hisnul Muslim</p>
//                     </div>

//                 </div>

//                 <div className="flex justify-end items-center gap-4 ">
//                     <Image
//                         src={iconOne}
//                         alt="iconOne"
//                     />
//                     <Image
//                         src={iconTwo}
//                         alt="iconTwo"
//                     />
//                     <Image
//                         src={language}
//                         alt="language"
//                     />
//                     <Image
//                         src={support}
//                         alt="support"
//                     />
//                 </div>

//             </div>
//         </>

//     );
// }

// export default TopNav;