import PlusSignIcon from "@public/svgs/PlusSignIcon";
import classnames from "classnames";
import { Fragment } from "react";
import ActiveBar from "../ActiveBar/ActiveBar";
import { InputArea } from "../InputArea";

const notescol1 = [
  {
    name: "Productions",
    icon: <PlusSignIcon />,
    iconName: "Add",
  },
  {
    name: "Travel Requirements",
    icon: <PlusSignIcon />,
    iconName: "Add",
  },
  {
    name: "Hotel Requirements",
    icon: <PlusSignIcon />,
    iconName: "Add",
  },
  {
    name: "Ground Transport",
    icon: <PlusSignIcon />,
    iconName: "Add",
  },
];
const notescol2 = [
  {
    name: "Visa Requirements",
    icon: <PlusSignIcon />,
    iconName: "Add",
  },
  {
    name: "Meals & Incidentals",
    icon: <PlusSignIcon />,
    iconName: "Add",
  },
  {
    name: "Passes",
    icon: <PlusSignIcon />,
    iconName: "Add",
  },
  {
    name: "Additional Provisions",
    icon: <PlusSignIcon />,
    iconName: "Add",
  },
];

const ProductionNotes = () => {
  return (
    <>
      <div className=" mt-[3%] w-full">
        <div className="w-full bg-[#7f5295]">
          <div className="flex justify-between px-4 py-[7px]">
            <div className="text-white font-light">Production Notes</div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-cols-2 grid-cols-1 md:gap-3">
        <div className="grid grid-flow-row grid-cols-1 md:mt-[15px]">
          <div>
            {notescol1.map((i, k) => {
              return (
                <div key={k} className={classnames("border")}>
                  <InputArea
                    placeholder={i.name}
                    icon={i.icon}
                    iconName={i.iconName}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-1 md:mt-[15px] ">
          <div>
            {notescol2.map((i, k) => {
              return (
                <div key={k} className={classnames("border")}>
                  <InputArea
                    placeholder={i.name}
                    icon={i.icon}
                    iconName={i.iconName}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductionNotes;
