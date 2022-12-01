import GetFestivalDetailModal from "@components/modals/festivals/GetFestivalDetailModal/GetFestivalDetailModal";
import CircleBlankIcon from "@public/svgs/CircleBlankIcon";
import CircleCheckIcon from "@public/svgs/CircleCheckIcon";
import CircleRemoveIcon from "@public/svgs/CircleRemoveIcon";
import EditIcon from "@public/svgs/EditIcon";
import InfoIcon from "@public/svgs/InfoIcon";
import RemoveIcon from "@public/svgs/RemoveIcon";
import { Festival } from "models/festivals";
import { useState } from "react";

export type FestivalItemsProps = {
  festival: Festival;
};

const FestivalItems = ({ festival }: FestivalItemsProps) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="w-full min-h-[65px] flex mt-[25px]">
      <div className="py-[10px] px-[15px] w-[90%] bg-[#f7f2fa]">
        <div>
          <div className=" space-x-5">
            <div className="flex items-center float-left">
              <p className="text-[16px] font-thin text-[#460465] whitespace-nowrap overflow-hidden">
                {festival.name}
              </p>
            </div>
            <div className="flex space-x-1 font-normal text-[14px] clear-none float-left">
              <p className=" text-[#999]">Dates:</p>
              <div className="text-[#2f2732]">{festival.date}</div>
            </div>
            <div className="flex space-x-1 font-normal text-[14px] float-left">
              <p className=" text-[#999]">Category:</p>
              <div className="text-[#2f2732]">{festival.category}</div>
            </div>
            <div className="flex space-x-1 font-normal text-[14px] float-left">
              <p className=" text-[#999]">Genre:</p>
              <div className="text-[#2f2732]">{festival.genre}</div>
            </div>
            <div className="flex font-normal text-[14px] items-center float-left">
              <p className=" text-[#999]">Promoter:</p>
              <div className="text-[#2f2732]">{festival.promoter}</div>
            </div>
            <div className="flex font-normal text-[14px] items-center float-left">
              <p className=" text-[#999]">Contacts:</p>
              <div className="text-[#2f2732]">{festival.contact}</div>
            </div>
            <div className="flex font-normal text-[14px] items-center float-right">
              {festival.isConfirmed && (
                <div className="flex items-center space-x-1">
                  <CircleCheckIcon />
                  <div className="text-[14px] text-[#8ac748]">Confirmed</div>
                </div>
              )}
              {festival.isCancelled && (
                <div className="flex items-center space-x-1">
                  <CircleRemoveIcon fill="#df4141" />
                  <div className="text-[14px] text-[#df4141]">Cancelled</div>
                </div>
              )}
              {festival.isPending && (
                <div className="flex items-center space-x-1">
                  <CircleBlankIcon fill="#4899c7" />
                  <div className="text-[14px] text-[#4899c7]">Pending</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eae6ec] w-[130px] flex px-3">
        <button
          onClick={() => setOpenModal(true)}
          className=" group w-[50%] flex flex-col justify-center items-center space-y-1 cursor-pointer hover:bg-[#7f5295]"
        >
          <div>
            <InfoIcon className="group-hover:fill-white" />
          </div>{" "}
          <div className="text-[10px] group-hover:text-white">Details</div>
        </button>
        <button className="group w-[50%] flex flex-col justify-center items-center space-y-1 cursor-pointer hover:bg-[#7f5295]">
          <div>
            <EditIcon className="group-hover:fill-white" />
          </div>{" "}
          <div className="text-[10px] group-hover:text-white">Edit</div>
        </button>
      </div>
      {isOpenModal && (
        <GetFestivalDetailModal setIsOpen={setOpenModal} isOpen={isOpenModal} />
      )}
    </div>
  );
};

export default FestivalItems;
