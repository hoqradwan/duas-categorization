import Image from "next/image";
import smallcaps from "../../public/assets/rightnav/smallcaps.png";
import copySuccess from "../../public/assets/rightnav/copy-success.png";
import frame from "../../public/assets/rightnav/Frame 1000003671.png";

const RightNav = () => {
  return (
    <>
      <div>
        <div>
          <div className="flex items-center gap-2">
            <Image src={smallcaps} alt="dua" />
            <p>Font Settings</p>
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
          </div>

          <div className="flex items-center gap-2">
            <Image src={copySuccess} alt="dua" />
            <p>View Settings</p>
          </div>

          <div className="flex items-center gap-2">
            <Image src={frame} alt="dua" />
            <p>Appearance Settings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightNav;
