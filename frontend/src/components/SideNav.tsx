import Image from "next/image";
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
        <div className="h-screen flex flex-col justify-between overflow-y-auto">
            <div className="flex flex-col items-center gap-4 mt-28">
             
                
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
                <div className="mt-18">
                <button className="p-2 rounded-full  flex items-center justify-center">
                    <Image
                        src={challenge}
                        alt="Challenge"
                        width={30}
                        height={30}
                    />
                </button>
                
                <button className="p-2 rounded-full hover:bg-[#e8f0e8] flex items-center justify-center">
                    <Image
                        src={menu}
                        alt="Menu"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
            </div>
            
         
        </div>
    );
}

export default SideNav;


