export type Props = {
  placeholder: string;
  borderBottom?: boolean;
};

export const InputArea = ({ placeholder }: Props) => {
  return (
    <textarea
      placeholder={placeholder}
      className="focus:h-32 h-10 placeholder:pl-3 rounded-none border border-[#dddddd] text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0 focus:bg-[#f7f2fa] hover:bg-[#7f5295]"
    />
  );
};
