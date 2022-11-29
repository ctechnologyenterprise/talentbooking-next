export type Props = {
  placeholder: string;
};

export const Input = ({ placeholder }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-none border border-[#dddddd] text-gray-900 block flex-1 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
    />
  );
};
