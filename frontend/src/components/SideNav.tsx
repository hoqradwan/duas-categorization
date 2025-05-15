import Image from "next/image";
import logo from "../../public/assets/sidenav/logo.png";
import duaCat from "../../public/assets/sidenav/dua cat.png";
import categoryTwo from "../../public/assets/sidenav/category-2.png";
import lampChange from "../../public/assets/sidenav/lamp-charge.png";
import archieveMinus from "../../public/assets/sidenav/archive-minus.png";
import hospital from "../../public/assets/sidenav/hospital.png";
import book from "../../public/assets/sidenav/book.png";
import challenge from "../../public/assets/sidenav/challange.png";
import menu from "../../public/assets/sidenav/menu.png";

const SideNav = () => {
    return (
        <div className="h-full flex flex-col justify-between py-4">
            <div className="flex flex-col items-center gap-4">
             
                
                <button className="p-2 rounded-full bg-[#cae7c3] flex items-center justify-center">
                    <Image
                        src={duaCat}
                        alt="Dua Categories"
                        width={22}
                        height={22}
                    />
                </button>
                
                <button className="p-2 rounded-full hover:bg-[#e8f0e8] flex items-center justify-center">
                    <Image
                        src={categoryTwo}
                        alt="Categories"
                        width={22}
                        height={22}
                    />
                </button>
                
                <button className="p-2 rounded-full hover:bg-[#e8f0e8] flex items-center justify-center">
                    <Image
                        src={lampChange}
                        alt="Light Mode"
                        width={22}
                        height={22}
                    />
                </button>
                
                <button className="p-2 rounded-full hover:bg-[#e8f0e8] flex items-center justify-center">
                    <Image
                        src={archieveMinus}
                        alt="Archive"
                        width={22}
                        height={22}
                    />
                </button>
                
                <button className="p-2 rounded-full hover:bg-[#e8f0e8] flex items-center justify-center">
                    <Image
                        src={hospital}
                        alt="Medical"
                        width={22}
                        height={22}
                    />
                </button>
                
                <button className="p-2 rounded-full hover:bg-[#e8f0e8] flex items-center justify-center">
                    <Image
                        src={book}
                        alt="Book"
                        width={22}
                        height={22}
                    />
                </button>
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <button className="p-2 rounded-full hover:bg-[#e8f0e8] flex items-center justify-center">
                    <Image
                        src={challenge}
                        alt="Challenge"
                        width={35}
                        height={35}
                    />
                </button>
                
                <button className="p-2 rounded-full hover:bg-[#e8f0e8] flex items-center justify-center">
                    <Image
                        src={menu}
                        alt="Menu"
                        width={35}
                        height={35}
                    />
                </button>
            </div>
        </div>
    );
}

export default SideNav;

// import logo from "../../public/assets/sidenav/logo.png";
// import duaCat from "../../public/assets/sidenav/dua cat.png";
// import categoryTwo from "../../public/assets/sidenav/category-2.png";
// import lampChange from "../../public/assets/sidenav/lamp-charge.png";
// import archieveMinus from "../../public/assets/sidenav/archive-minus.png";
// import hospital from "../../public/assets/sidenav/hospital.png";
// import book from "../../public/assets/sidenav/book.png";
// import challenge from "../../public/assets/sidenav/challange.png";
// import menu from "../../public/assets/sidenav/menu.png";
// const SideNav = () => {


//     return <>
//         <div className=" bg-[#edf6ea] ">
//             <div className="flex flex-col gap-6 items-center  h-full p-3">
//                 <Image
//                     src={logo}
//                     alt="logo"
//                     className="mb-24"
//                 />
//                 <Image
//                     src={duaCat}
//                     alt="duaCat"
//                 />
//                 <Image
//                     src={categoryTwo}
//                     alt="categoryTwo"
//                 />
//                 <Image
//                     src={lampChange}
//                     alt="lampChange"
//                 />
//                 <Image
//                     src={archieveMinus}
//                     alt="archieveMinus"
//                 />
//                 <Image
//                     src={hospital}
//                     alt="hospital"
//                 />
//                 <Image
//                     src={book}
//                     alt="book"
//                 />

//             </div>
//             <div className="flex flex-col items-center mt-32 pb-32 gap-3">
//                 <Image
//                     src={challenge}
//                     alt="challenge"
//                 />
//                 <Image
//                     src={menu}
//                     alt="menu"
//                 />
//             </div>
//         </div>


//     </>
// }


// export default SideNav;