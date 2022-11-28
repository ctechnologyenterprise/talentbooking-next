import PlusSignIcon from "@public/svgs/PlusSignIcon";
import classnames from "classnames";
import { Fragment } from "react";
import ActiveBar from "../ActiveBar/ActiveBar";

const notes = [
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
      <div className="grid grid-flow-row grid-cols-2 mt-[15px] gap-x-3">
        <div>
          {notes.slice(0, 4).map((i, k) => {
            return (
              <div key={k} className={classnames("border")}>
                <ActiveBar name={i.name} icon={i.icon} iconName={i.iconName} />
              </div>
            );
          })}
        </div>
        <div>
          {notes.slice(4, 9).map((i, k) => {
            return (
              <div key={k} className="border">
                <ActiveBar name={i.name} icon={i.icon} iconName={i.iconName} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductionNotes;
