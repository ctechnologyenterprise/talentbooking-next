import { InputBox } from "@components/shared/InputBox";

type FormSelect = { item: string };

const FormSelect = ({ item }: FormSelect) => {
  return (
    <div className="mt-7">
      <div className="bg-[#7f5295] h-10 py-2 pl-5 mb-5">
        <div className="text-white">{item}</div>
      </div>
      {["Booking", "Festival", "Pencil"].includes(item) && (
        <InputBox inputName="*" />
      )}
      <InputBox inputName="create" />
      <InputBox inputName="read" />
      <InputBox inputName="update" />
      <InputBox inputName="delete" />
      {!["Booking", "Festival", "Pencil"].includes(item) && (
        <InputBox inputName="*" borderBottom={false} />
      )}

      {["Booking", "Festival", "Pencil"].includes(item) && (
        <InputBox inputName="export" />
      )}
      {item === "Pencil" && (
        <div>
          <InputBox inputName="convert" />
          <InputBox inputName="readTypePencil" />
          <InputBox inputName="readTypeRejected" />
          <InputBox inputName="readTypeBlock" />
          <InputBox inputName="readTypeConfirmed" />
          <InputBox inputName="readTypeManagement" borderBottom={false} />
        </div>
      )}
    </div>
  );
};

export default FormSelect;
