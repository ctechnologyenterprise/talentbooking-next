import PlusSignIcon from "@public/svgs/PlusSignIcon";
import { SVGProps } from "react";

export type ActiveBarProps = {
  name?: string;
  icon?: JSX.Element;
  iconName?: string;
  isMoreAction?: boolean;
};

const ActiveBar = ({ name, icon, iconName }: ActiveBarProps) => {
  return (
    <div className="group w-full">
      <div className="flex justify-between px-4 py-[7px] hover:bg-[#7f5295]">
        <div className="text-[#999] font-light group-hover:text-white">
          {name}
        </div>
        <div className="flex items-center space-x-1 group-hover:fill-white">
          <div>{icon}</div>
          <div className="text-[#999] font-light group-hover:text-white">
            {iconName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveBar;
