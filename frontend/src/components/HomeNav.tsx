// Home #e1ebe1
// section #e4ede4

import home from "../../public/assets/homeNav/home.png";
import arrowRight from "../../public/assets/homeNav/arrow-right.png";
import Image from "next/image";

const HomeNav = () => {
    return (
        <div className="flex items-center bg-[#e1ebe1]">
            <div className="flex gap-2">
                <Image
                    src={home}
                    alt="home"
                />
                <p className="text-[#417360]">Home</p>
            </div>
            <div className="flex items-center gap-2">
                <Image
                    src={arrowRight}
                    alt="arrowRight"
                />
                <p className="text-[#417360]">Categories of Dua</p>
                </div>

        </div>
    );
}
export default HomeNav;