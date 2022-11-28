export type Props = {
  inputName: string;
};

export const InputDate = ({ inputName }: Props) => {
  return (
    <div className="flex w-full">
      <label className="text-sm text-slate-400 flex w-2/5 h-10 py-2.5 pl-5 border border-[#dddddd] pb-8">
        {inputName}
      </label>
      <input
        type="date"
        className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-3/5 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
      />
    </div>
  );
};
