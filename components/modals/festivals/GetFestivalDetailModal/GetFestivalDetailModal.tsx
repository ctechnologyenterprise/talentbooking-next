import { CountrySelect } from "@components/shared/CountrySelect";
import { InputArea } from "@components/shared/InputArea";
import { InputText } from "@components/shared/InputText";
import SelectAndText from "@components/shared/SelectAndText";
import clsxm from "@libs/clsxm";
import Modal from "react-modal";

import { TYPE_INPUT } from "constants/enum";
import PlusSignIcon from "@public/svgs/PlusSignIcon";
import PromoterIcon from "@public/svgs/PromoterIcon";

export type Props = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  className?: string;
};

const items = [
  { name: "Type", required: true, typeInput: TYPE_INPUT.SELECT },
  { name: "Artist", required: true, typeInput: TYPE_INPUT.SELECT },
  { name: "Venue", required: true, typeInput: TYPE_INPUT.SELECT },
  { name: "Promoter", required: true, typeInput: TYPE_INPUT.SELECT },
  { name: "City", required: true, typeInput: TYPE_INPUT.TEXT },
  { name: "Country", required: true, typeInput: TYPE_INPUT.TEXT },
  { name: "Contact(s)", required: false, typeInput: TYPE_INPUT.TEXT },
  { name: "Fee", required: false, typeInput: TYPE_INPUT.TEXT },
  { name: "Tax", required: false, typeInput: TYPE_INPUT.TEXT },
  { name: "End Date", required: false, typeInput: TYPE_INPUT.TEXT },
  {
    name: "Set Times",
    required: false,
    icon: <PlusSignIcon />,
    iconName: "Add",
    typeInput: TYPE_INPUT.TEXT_AREA,
  },
  {
    name: "Comments",
    required: false,
    icon: <PlusSignIcon />,
    iconName: "Add",
    typeInput: TYPE_INPUT.TEXT_AREA,
  },
];

const checkTypeInput = (
  typeInput: string,
  name: string,
  required: boolean,
  icon?: JSX.Element,
  iconName?: string
) => {
  switch (typeInput) {
    case TYPE_INPUT.SELECT:
      return <SelectAndText selectName={name} required={required} />;
    case TYPE_INPUT.TEXT:
      return <InputText inputName={name} required={required} />;
    case TYPE_INPUT.TEXT_AREA:
      return (
        <InputArea
          classNameContainer="border"
          placeholder={name}
          icon={icon}
          iconName={iconName}
        />
      );
    default:
      break;
  }
};

const GetFestivalDetailModal = ({ isOpen, className, setIsOpen }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={500}
      onRequestClose={() => {
        setIsOpen(false);
      }}
      preventScroll
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "unset",
          zIndex: 10000,
        },
        content: {
          position: "absolute",
          width: "30%",
          inset: "10% 0 10% 35%",
          background: "#fff",
          overflow: "auto",
          border: "none",
          WebkitOverflowScrolling: "touch",
          borderRadius: "0px",
          outline: "none",
          boxShadow: "0 5px 10px rgb(0 0 0 / 10%)",
          padding: "0",
        },
      }}
    >
      <div>
        <div className="grid grid-cols-1 divide-y">
          <div className="flex justify-left px-3 py-5 items-center text-[#460465] text-[18px] font-light">
            Bruno Mars Just give me a reason
          </div>
          <div className="px-[25px] py-[10px]">
            <div className="flex items-center space-x-1">
              <div>
                <PromoterIcon width="0.85em" height="0.85em" fill="#999" />
              </div>
              <div className="text-[14px] text-[#999]">Promoter(s)</div>
            </div>
            <div className="w-full px-[30px] text-[14px]">
              <div className="flex space-x-3">
                <p className="text-[#999]">Name</p>
                <p>bebas</p>
              </div>
              <div className="flex space-x-3">
                <p className="text-[#999]">Email 1</p>
                <p>test@gmail.com</p>
              </div>
              <div className="flex space-x-3">
                <p className="text-[#999]">Email 2</p>
                <p>r@gmail.com</p>
              </div>
              <div className="flex space-x-3">
                <p className="text-[#999]">Phone 1</p>
                <p>3445232</p>
              </div>
              <div className="flex space-x-3">
                <p className="text-[#999]">Phone 2</p>
                <p>23526332</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GetFestivalDetailModal;
