import Image from "next/image";
import smallcaps from "../../public/assets/rightnav/smallcaps.png";
import copySuccess from "../../public/assets/rightnav/copy-success.png";
import frame from "../../public/assets/rightnav/Frame 1000003671.png";
import arrowUp from "../../public/assets/rightnav/arrow-up.png";
import arrowDown from "../../public/assets/rightnav/arrow-down.png";
import arrowDropdown from "../../public/assets/rightnav/arrow_drop_down.png";

const RightNav = () => {
    return (
        <div className="space-y-4">
            {/* Font Settings Section */}
            <div className="border-b pb-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Image 
                            src={smallcaps} 
                            alt="Font Settings Icon" 
                            width={20} 
                            height={20}
                        />
                        <span className="text-sm font-medium">Font Settings</span>
                    </div>
                    <Image 
                        src={arrowUp} 
                        alt="Collapse" 
                        width={16} 
                        height={16}
                    />
                </div>
                
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-xs font-medium">Arabic Font Size</p>
                            <p className="text-xs">28</p>
                        </div>
                        <div className="relative w-full h-1.5 bg-gray-200 rounded-full">
                            <div className="absolute h-1.5 bg-[#417360] rounded-full" style={{ width: "28%" }}></div>
                            <div className="absolute h-3 w-3 bg-white border-2 border-[#417360] rounded-full top-1/2 transform -translate-y-1/2" style={{ left: "28%" }}></div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-xs font-medium">Translation Font Size</p>
                            <p className="text-xs">25</p>
                        </div>
                        <div className="relative w-full h-1.5 bg-gray-200 rounded-full">
                            <div className="absolute h-1.5 bg-[#417360] rounded-full" style={{ width: "25%" }}></div>
                            <div className="absolute h-3 w-3 bg-white border-2 border-[#417360] rounded-full top-1/2 transform -translate-y-1/2" style={{ left: "25%" }}></div>
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-xs font-medium mb-1">Arabic Script & Font Face</p>
                        <div className="flex justify-between items-center bg-[#eef6eb] rounded p-2">
                            <span className="text-xs">Uthma</span>
                            <Image 
                                src={arrowDropdown} 
                                alt="Dropdown" 
                                width={14} 
                                height={14}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* View Settings Section */}
            <div className="border-b pb-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image 
                            src={copySuccess} 
                            alt="View Settings Icon" 
                            width={20} 
                            height={20}
                        />
                        <span className="text-sm font-medium">View Settings</span>
                    </div>
                    <Image 
                        src={arrowDown} 
                        alt="Expand" 
                        width={16} 
                        height={16}
                    />
                </div>
            </div>
            
            {/* Appearance Settings Section */}
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image 
                            src={frame} 
                            alt="Appearance Settings Icon" 
                            width={20} 
                            height={20}
                        />
                        <span className="text-sm font-medium">Appearance Settings</span>
                    </div>
                    <Image 
                        src={arrowDown} 
                        alt="Expand" 
                        width={16} 
                        height={16}
                    />
                </div>
            </div>
        </div>
    );
};

export default RightNav;
