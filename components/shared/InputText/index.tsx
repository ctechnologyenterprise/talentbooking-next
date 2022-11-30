import clsxm from "@libs/clsxm";

export type Props = {
  inputName: string;
  required?: boolean;
  classNameInput?: string;
  classNameContainer?: string;
  classNameLabel?: string;
  placeholder?: string;
};

export const InputText = ({
  inputName,
  required,
  classNameContainer,
  classNameInput,
  classNameLabel,
  placeholder,
}: Props) => {
  return (
    <div className={clsxm("flex", classNameContainer)}>
      <label
        className={clsxm(
          "text-[14px] text-[#999] flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8",
          classNameLabel
        )}
      >
        {inputName}
        {required && (
          <div className="text-[red] text-2xl ml-1 font-thin">*</div>
        )}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className={clsxm(
          "rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] bg-[#fff] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] shadow-[inset_0_0_15px_rgb(0,0,0,0.05)] focus:outline-0",
          classNameInput
        )}
      />
    </div>
  );
};
