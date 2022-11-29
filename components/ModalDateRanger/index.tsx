import { InputDate } from "@components/shared/InputDate";
import style from "./ModalDateRanger.module.css";

export type Props = {
  formModalDateRanger: {
    visible: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
  };
};

export const ModalDateRanger = ({ formModalDateRanger }: Props) => {
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <div className="flex w-11/12 m-auto">
          <button
            className="bg-[#dddddd] w-20 border rounded"
            onClick={() => formModalDateRanger.hide()}
          >
            Cancel
          </button>
          <div className="w-200 m-auto text-[#460465]">Select A Date Range</div>
          <button
            className="bg-[#dddddd] w-20 border rounded"
            onClick={() => formModalDateRanger.hide()}
          >
            Set date
          </button>
        </div>
        <div className="h-0.5 bg-[#dddddd] mt-2" />
        <div className="w-11/12 m-auto mt-5">
          <InputDate inputName="From" />
          <InputDate inputName="To" />
        </div>
      </div>
    </div>
  );
};
