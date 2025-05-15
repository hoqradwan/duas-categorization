import Image from "next/image";
import home from "../../public/assets/homeNav/home.png";
import arrowRight from "../../public/assets/homeNav/arrow-right.png";

const HomeNav = () => {
    return (
        <div className="flex items-center bg-[#e1ebe1] py-4 px-4 text-sm">
            <div className="flex items-center gap-1">
                <Image
                    src={home}
                    alt="Home"
                    width={16}
                    height={16}
                />
                <span className="text-[#417360]">Home</span>
            </div>
            
            <div className="flex items-center gap-1 mx-2">
                <Image
                    src={arrowRight}
                    alt="Arrow Right"
                    width={16}
                    height={16}
                />
            </div>
            
            <span className="text-[#417360]">Dua's Importance</span>
            
            <div className="flex items-center gap-1 mx-2">
                <Image
                    src={arrowRight}
                    alt="Arrow Right"
                    width={16}
                    height={16}
                />
            </div>
            
            <span className="text-gray-600">The servant is dependent on his Lord</span>
        </div>
    );
}

export default HomeNav;

