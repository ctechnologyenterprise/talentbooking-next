import { CountrySelect } from "@components/shared/CountrySelect";
import { CurrencySelect } from "@components/shared/CurrencySelect";
import { InputText } from "@components/shared/InputText";
import { COUNTRY } from "constants/country";
import { CURRENCY } from "constants/currency";
import style from "./ModalPencil.module.css";

export type Props = {
  formModalAddPencilled: {
    visible: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
  };
};

export const ModalPencil = ({ formModalAddPencilled }: Props) => {
  const items = [
    { name: "Date", icon: true },
    { name: "Venue", icon: true },
    { name: "Capacity", icon: false },
    { name: "Address Line 1", icon: true },
    { name: "Address Line 2", icon: false },
    { name: "Postcode", icon: true },
    { name: "City", icon: true },
    { name: "Country", icon: true },
    { name: "Currency", icon: true },
    { name: "Ticket Price", icon: false },
    { name: "Offer", icon: false },
    { name: "Walkout", icon: false },
    { name: "Promoter", icon: false },
    { name: "Promoter Email Address 1", icon: false },
    { name: "Promoter Email Address 2", icon: false },
  ];

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <div className="flex w-11/12 m-auto">
          <button
            className="bg-[#dddddd] w-20 border rounded"
            onClick={() => formModalAddPencilled.hide()}
          >
            Cancel
          </button>
          <div className="w-200 m-auto text-[#460465]"> Pencil</div>
          <button
            className="bg-[#dddddd] w-20 border rounded"
            onClick={() => formModalAddPencilled.hide()}
          >
            Save
          </button>
        </div>
        <div className="h-0.5 bg-[#dddddd] mt-2" />
        <div className="w-11/12 m-auto mt-5 overflow-y-auto h-full">
          {items.map((item) =>
            item.name === COUNTRY ? (
              <div className="flex" key={item.name}>
                <label className="text-sm text-slate-400 flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8">
                  Country
                  <div className="text-[red] text-2xl ml-1 font-thin">*</div>
                </label>
                <CountrySelect />
              </div>
            ) : item.name === CURRENCY ? (
              <div className="flex">
                <label className="text-sm text-slate-400 flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8">
                  Currency
                  <div className="text-[red] text-2xl ml-1 font-thin">*</div>
                </label>
                <CurrencySelect />
              </div>
            ) : (
              <InputText
                key={item.name}
                inputName={item.name}
                required={item.icon}
              />
            )
          )}
          <div className="flex w-full">
            <label className="h-32 text-sm text-slate-400 flex w-2/5 py-2 pl-5 border border-[#dddddd] pb-8">
              General Notes
            </label>
            <textarea className="h-32 rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0" />
          </div>
          <div className="mt-5" />
        </div>
      </div>
    </div>
  );
};
