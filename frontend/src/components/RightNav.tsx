import Image from "next/image";
import smallcaps from "../../public/assets/rightnav/smallcaps.png";
import copySuccess from "../../public/assets/rightnav/copy-success.png";
import frame from "../../public/assets/rightnav/Frame 1000003671.png";
import arrowUp from "../../public/assets/rightnav/arrow-up.png";
import arrowDown from "../../public/assets/rightnav/arrow-down.png";
import arrowDropdown from "../../public/assets/rightnav/arrow_drop_down.png";

const RightNav = () => {
    return (
        <>
            <div>
                <div>
                    <div className="flex items-center gap-2">
                        <Image src={smallcaps} alt="dua" />
                        <p>Font Settings</p>
                        <Image src={arrowUp} alt="arrowUp" />
                    </div>

                    <div>
                        <div>
                            <p className="font-semibold">Arabic Font Size</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                                <div className="bg-[#417360] h-2.5 rounded-full" style={{ width: "28%" }}></div>
                                {/* Small round circle at the end of the progress */}
                                <div
                                    className="absolute top-0 w-4 h-4 bg-[#417360] rounded-full"
                                    style={{
                                        left: "28%", // Position the circle at 28% of the progress bar width
                                        transform: "translateY(-50%)",
                                    }}
                                ></div>
                            </div>
                            <p className="text-xs text-right mt-1">28</p>
                        </div>

                        <div>
                            <p className="font-semibold">Translation Font Size</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                                <div className="bg-[#417360] h-2.5 rounded-full" style={{ width: "28%" }}></div>
                                {/* Small round circle at the end of the progress */}
                                <div
                                    className="absolute top-0 w-4 h-4 bg-[#417360] rounded-full"
                                    style={{
                                        left: "28%", // Position the circle at 28% of the progress bar width
                                        transform: "translateY(-50%)",
                                    }}
                                ></div>
                            </div>
                            <p className="text-xs text-right mt-1">28%</p>
                        </div>

                        <p>Arabic Script & Font Face</p>
                        <div className="flex justify-items-stretch items-center bg-[#eef6eb]">
                            <p>Uthma</p>
                            <Image src={arrowDropdown} alt="arrowDropdown" className="justify-self-end" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Image src={copySuccess} alt="dua" />
                        <p>View Settings</p>
                        <Image src={arrowDown} alt="arrowDown" />

                    </div>

                    <div className="flex items-center gap-2">
                        <Image src={frame} alt="dua" />
                        <p>Appearance Settings</p>
                        <Image src={arrowDown} alt="arrowDown" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightNav;
