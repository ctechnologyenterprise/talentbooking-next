import { CountrySelect } from "@components/shared/CountrySelect";
import { InputArea } from "@components/shared/InputArea";
import { InputText } from "@components/shared/InputText";
import SelectAndText from "@components/shared/SelectAndText";
import clsxm from "@libs/clsxm";
import Modal from "react-modal";

import { TYPE_INPUT } from "constants/enum";
import "./BookingPencilModal.module.css";
import styles from "./BookingPencilModal.module.css";
import PlusSignIcon from "@public/svgs/PlusSignIcon";

export type Props = {
  isOpen: boolean;
  onHide: () => void;
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

const PencilModal = ({ isOpen, className, onHide }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={500}
      onRequestClose={onHide}
      preventScroll
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 10000,
        },
        content: {
          position: "absolute",
          width: "60%",
          inset: "10% 0 10% 20%",
          background: "#fff",
          overflow: "auto",
          border: "none",
          WebkitOverflowScrolling: "touch",
          borderRadius: "0px",
          outline: "none",
          boxShadow: "0 5px 15px rgb(0 0 0 / 50%)",
          padding: "20px",
        },
      }}
    >
      <div className={clsxm(styles.modal, className)}>
        <div className="flex">
          <button
            className="w-[70px] h-[34px] border border-[#ece0f3] bg-[#f7f2fa] hover:boder-[#d0b3e2] hover:bg-hover-modal-button"
            onClick={onHide}
          >
            <p className="text-[14px] font-light">Cancel</p>
          </button>
          <div className="w-200 m-auto text-[18px] font-extralight text-[#460465]">
            Pencil
          </div>
          <button
            className="bg-[#f7f2fa] w-[70px] h-[34px] border border-[#ece0f3] hover:boder-[#d0b3e2] hover:bg-hover-modal-button"
            onClick={onHide}
          >
            <p className="text-[14px] font-light text-[#460465]">Save</p>
          </button>
        </div>
        <div className="h-[1px] bg-[#dddddd] mt-2 mb-[30px]" />
        <div className="w-11/12 m-auto mt-5">
          {items.map((item) => (
            <div key={item.name}>
              {checkTypeInput(
                item.typeInput,
                item.name,
                item.required,
                item.icon,
                item.iconName
              )}
            </div>
          ))}
          <div className="mt-5" />
        </div>
      </div>
    </Modal>
  );
};

export default PencilModal;
