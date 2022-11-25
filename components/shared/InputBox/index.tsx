import classNames from "classnames";

export type Props = {
  inputName: string;
  borderBottom?: boolean;
};

export const InputBox = ({ inputName, borderBottom = true }: Props) => {
  return (
    <div
      className={classNames("h-10 py-2 pl-5 border border-[#dddddd] flex", {
        ["border-b-0"]: borderBottom,
      })}
    >
      <label className="text-base text-slate-400">{inputName}</label>
      <input
        type="checkbox"
        className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-[#dddddd]"
      />
    </div>
  );
};
