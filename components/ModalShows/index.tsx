import { InputDate } from "@components/shared/InputDate";
import { InputText } from "@components/shared/InputText";
import style from "./ModalShows.module.css";

export type Props = { setOpenModal: (val: boolean) => void };

export const ModalShows = ({ setOpenModal }: Props) => {
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <div className="flex w-11/12 m-auto">
          <div className="w-200 m-auto"> Add Shows</div>
          <button
            className="w-20 text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]"
            onClick={() => setOpenModal(false)}
          >
            Close
          </button>
        </div>
        <div className="h-0.5 bg-[#dddddd] mt-2" />
        <div className="w-11/12 m-auto mt-5">
          <div className="bg-[#7f5295] h-10 py-2 pl-5">
            <div className="text-white font-light">Find Shows</div>
          </div>
          <div className="mt-5" />
          <InputText inputName={"Artist"} />
          <InputDate inputName={"Start Date"} />
          <InputDate inputName={"End Date"} />
          <div className="mt-10" />
          <div className="bg-[#7f5295] h-10 py-2 pl-5">
            <div className="text-white font-light">Lists Shows</div>
          </div>
          <div className="flex justify-center mt-2 font-semibold">
            No shows found.
          </div>
          <div className="mt-32" />
        </div>
      </div>
    </div>
  );
};
