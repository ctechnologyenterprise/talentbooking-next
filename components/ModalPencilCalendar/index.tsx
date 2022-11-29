import { CountrySelect } from "@components/shared/CountrySelect";
import { InputArea } from "@components/shared/InputArea";
import { InputText } from "@components/shared/InputText";
import { COUNTRY } from "constants/country";
import { COMMENTS, SET_TIMES } from "constants/enum";
import style from "./ModalPencilCalendar.module.css";

export type Props = {
  formModalAddPencilledCalendar: {
    visible: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
  };
};

export const ModalPencilCalendar = ({
  formModalAddPencilledCalendar,
}: Props) => {
  const items = [
    { name: "Type", icon: true },
    { name: "Artist", icon: true },
    { name: "Venue", icon: true },
    { name: "City", icon: true },
    { name: "Country", icon: true },
    { name: "Promoter", icon: true },
    { name: "Contact(s)", icon: false },
    { name: "Fee", icon: false },
    { name: "Tax", icon: true },
    { name: "End Date", icon: false },
    { name: "Set Times", icon: false },
    { name: "Comments", icon: false },
  ];

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <div className="flex w-11/12 m-auto">
          <button
            className="bg-[#dddddd] w-20 border rounded"
            onClick={() => formModalAddPencilledCalendar.hide()}
          >
            Cancel
          </button>
          <div className="w-200 m-auto text-[#460465]"> Pencil</div>
          <button
            className="bg-[#dddddd] w-20 border rounded"
            onClick={() => formModalAddPencilledCalendar.hide()}
          >
            Save
          </button>
        </div>
        <div className="h-0.5 bg-[#dddddd] mt-2" />
        <div className="w-11/12 m-auto mt-5 overflow-y-auto h-full">
          {items.map((item) =>
            item.name === COUNTRY ? (
              <div className="flex">
                <label className="text-sm text-slate-400 flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8">
                  Country
                  <div className="text-[red] text-2xl ml-1 font-thin">*</div>
                </label>
                <CountrySelect />
              </div>
            ) : item.name === SET_TIMES || item.name === COMMENTS ? (
              <InputArea placeholder={item.name} />
            ) : (
              <InputText
                key={item.name}
                inputName={item.name}
                icon={item.icon}
              />
            )
          )}

          <div className="mt-5" />
        </div>
      </div>
    </div>
  );
};
