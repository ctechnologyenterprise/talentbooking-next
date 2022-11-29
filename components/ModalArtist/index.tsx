import { CountrySelect } from "@components/shared/CountrySelect";
import { InputArea } from "@components/shared/InputArea";
import { InputText } from "@components/shared/InputText";
import style from "./ModalArtist.module.css";

export type Props = {
  formModalArtist: {
    visible: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
  };
};

export const ModalArtists = ({ formModalArtist }: Props) => {
  const items = [
    { name: "Name", icon: true },
    { name: "EmaØil 1", icon: true },
    { name: "Email 2", icon: false },
    { name: "Telephone 1", icon: true },
    { name: "Telephone 2", icon: true },
    { name: "Fax", icon: false },
    { name: "Address Line 1", icon: false },
    { name: "Address Line 2", icon: false },
    { name: "Postcode", icon: false },
    { name: "City", icon: false },
  ];

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <div className="flex w-11/12 m-auto">
          <button
            className="bg-[#dddddd] w-20 border rounded"
            onClick={() => formModalArtist.hide()}
          >
            Cancel
          </button>
          <div className="w-200 m-auto"> New Touring Company</div>
          <button
            className="bg-[#dddddd] w-20 border rounded"
            onClick={() => formModalArtist.hide()}
          >
            Save
          </button>
        </div>
        <div className="h-0.5 bg-[#dddddd] mt-2" />
        <div className="w-11/12 m-auto mt-5 overflow-y-auto h-full">
          {items.map((item) => (
            <InputText key={item.name} inputName={item.name} icon={item.icon} />
          ))}
          <div className="flex">
            <label className="text-sm text-slate-400 flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8">
              Country
              <div className="text-[red] text-2xl ml-1 font-thin">*</div>
            </label>
            <CountrySelect />
          </div>
          <InputArea placeholder="info" />
          <div className="mt-5" />
        </div>
      </div>
    </div>
  );
};
