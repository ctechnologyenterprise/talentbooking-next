import styles from "@components/Artist.module.css";
import EditArtistIcon from "@public/svgs/EditArtistIcon";
import OkSignIcon from "@public/svgs/OkSignIcon";

const ArtistDetail = () => {
  return (
    <div className="flex w-[60%] mt-6 ml-6">
      <div className="bg-[#f7f1f9] w-[87%] px-3">
        <div className="py-1">
          <p className="text-[16px] font-extralight text-[#460465] hover:underline decoration-[#460465]">
            David
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 py-1">
            <div>
              <p className="font-light">
                <span className="text-[#999]">Email:</span> test@gmail.com
              </p>
            </div>
            <div>
              <p className="font-light">
                <span className="text-[#999]">Tel:</span> 932022223
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex space-x-1 items-center">
              <div>
                <OkSignIcon />
              </div>
              <div className="text-[#8ac748] text-[15px]"> Enabled</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e9e6ec] items-center w-[13%] flex justify-center">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center">
            <EditArtistIcon />
          </div>
          <div className="text-[#403545] text-[12px] font-light">Edit</div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
