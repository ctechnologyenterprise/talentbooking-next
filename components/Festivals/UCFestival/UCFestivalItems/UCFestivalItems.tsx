import CircleBlankIcon from "@public/svgs/CircleBlankIcon";
import CircleCheckIcon from "@public/svgs/CircleCheckIcon";
import CircleRemoveIcon from "@public/svgs/CircleRemoveIcon";
import { UCFestivalItems } from "models/festivals";

export type UCFestival = {
  UCFestivalItems: UCFestivalItems;
};

const UCFestivalItems = ({ UCFestivalItems }: UCFestival) => {
  return (
    <div className="text-[14px] space-y-2 mt-[12px]">
      <div>{UCFestivalItems.name}</div>
      <div>{UCFestivalItems.date}</div>
      {UCFestivalItems.isPending && (
        <div className="flex items-center space-x-2">
          <div>
            <CircleBlankIcon fill="#4899c7" />
          </div>
          <div className="text-[#4899c7]">Pending</div>
        </div>
      )}
      {UCFestivalItems.isCancelled && (
        <div className="flex items-center space-x-2">
          <div>
            <CircleRemoveIcon fill="#df4141" />
          </div>
          <div className="text-[#df4141]">Cancelled</div>
        </div>
      )}
      {UCFestivalItems.isConfirmed && (
        <div className="flex items-center space-x-2">
          <div>
            <CircleCheckIcon />
          </div>
          <div className="text-[#8ac748]">Confirmed</div>
        </div>
      )}
    </div>
  );
};

export default UCFestivalItems;
