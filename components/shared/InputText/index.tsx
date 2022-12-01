import clsxm from "@libs/clsxm";
import classNames from "classnames";

export type Props = {
  required?: boolean;
  placeholder?: string;
  noBorderBottom?: boolean;
  inputName: string;
  classNameInput?: string;
  classNameContainer?: string;
  classNameLabel?: string;
};

export const InputText = ({
  inputName,
  required,
  noBorderBottom,
  placeholder,
  classNameContainer,
  classNameInput,
  classNameLabel,
}: Props) => {
  const wrapperLabelClass = classNames(
    "text-sm font-normal text-slate-400 flex w-2/5 h-10 py-2 pl-5 border border-[#dddddd] pb-8",
    {
      ["border-b-0"]: noBorderBottom,
    }
  );

  const wrapperInputClass = classNames(
    "rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0",
    {
      ["border-b-0"]: noBorderBottom,
    }
  );
  return (
    <div className={clsxm("flex w-full", classNameContainer)}>
      <label className={clsxm(wrapperLabelClass, classNameLabel)}>
        {inputName}
        {required && (
          <div className="text-[red] text-2xl ml-1 font-thin">*</div>
        )}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        className={clsxm(wrapperInputClass, classNameInput)}
      />
    </div>
  );
};
