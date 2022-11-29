export type Props = {
  inputName: string;
  icon?: boolean;
};

export const InputFilter = ({ inputName }: Props) => {
  return (
    <div className="flex w-full">
      <label
        htmlFor="Search"
        className="w-1/5 inline-flex items-center px-3 text-sm text-[#999999] border border-r-1 border-[#dddddd]"
      >
        {inputName}
      </label>
      <input
        type="text"
        className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
        placeholder="Any"
      />
    </div>
  );
};
