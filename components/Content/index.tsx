import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
  leftContent?: () => JSX.Element;
};

export default function Content({ title, leftContent, children }: Props) {
  return (
    <>
      <div className="lg:flex hidden md:fixed left-[80px] justify-between right-0 h-[56px] bg-common-head bg-no-repeat bg-[#f7f2fa] z-999">
        <div className="py-3 pl-[30px] pr-[15px] text-white font-extralight tracking-wide">
          <h1 className="text-2xl font-extralight">{title}</h1>
        </div>

        {leftContent && (
          <div className="flex items-center pr-[20px]">{leftContent()}</div>
        )}
      </div>
      {children}
    </>
  );
}
