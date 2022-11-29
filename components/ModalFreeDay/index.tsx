import { InputDate } from "@components/shared/InputDate";
import { InputText } from "@components/shared/InputText";
import style from "./ModalFreeDay.module.css";

export type Props = { formModalAddFreeDay: any };

export const ModalFreeDay = ({ formModalAddFreeDay }: Props) => {
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
            onClick={() => formModalAddFreeDay.hide()}
          >
            Cancel
          </button>
          <div className="w-200 m-auto text-[#460465]">Add Free Days</div>
          <button
            className="bg-[#dddddd] w-20 border rounded"
            onClick={() => formModalAddFreeDay.hide()}
          >
            Save
          </button>
        </div>
        <div className="h-0.5 bg-[#dddddd] mt-2" />
        <div className="w-11/12 m-auto mt-5 overflow-y-auto h-full">
          {Array.from({ length: 5 }).map((index, key) => (
            <InputDate key={key} inputName="date" />
          ))}

          <div className="mt-60" />
        </div>
      </div>
    </div>
  );
};
