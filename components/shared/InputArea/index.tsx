import clsxm from "@libs/clsxm";

export type Props = {
  placeholder: string;
  borderBottom?: boolean;
  classNameContainer?: string;
  classNameTextArea?: string;
  classNameWrapperButton?: string;
  icon?: JSX.Element;
  iconName?: string;
};

export const InputArea = ({
  placeholder,
  classNameContainer,
  classNameTextArea,
  classNameWrapperButton,
  icon,
  iconName,
}: Props) => {
  return (
    <div
      className={clsxm(
        "group hover:bg-[#ed2241] flex relative",
        classNameContainer
      )}
    >
      <textarea
        placeholder={placeholder}
        className={clsxm(
          classNameTextArea,
          "resize-none focus:h-32 h-10 placeholder:pl-3 placeholder:text-[#999] group-hover:placeholder:text-white rounded-none text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0 focus:bg-[#f7f2fa] hover:bg-[#7f5295]"
        )}
      />
      <div
        className={clsxm(
          "group-focus-within:invisible group-hover:pointer-events-none absolute right-3 top-3",
          classNameWrapperButton
        )}
      >
        <div className="flex items-center space-x-1 group-hover:fill-white">
          <div>{icon}</div>
          <div className="text-[#000] font-light group-hover:text-white">
            {iconName}
          </div>
        </div>
      </div>
    </div>
  );
};
