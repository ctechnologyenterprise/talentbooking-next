import clsxm from "@libs/clsxm";
import DownloadIcon from "@public/svgs/DownloadIcon";
import FileIcon from "@public/svgs/FileIcon";
import ListIcon from "@public/svgs/ListIcon";
import SaveIcon from "@public/svgs/SaveIcon";
import classNames from "classnames";
import Link from "next/link";
import styles from "./CommonHead.module.css";

type CommonHeadProps = {
  title?: string;
  createNewText?: string;
  exportText?: string;
  canExport?: boolean;
  canCreateItenerary?: boolean;
  isCalendar?: boolean;
  isNormal?: boolean;
  href?: string;
};

const CommonHead = ({
  title,
  createNewText,
  exportText,
  canExport,
  canCreateItenerary,
  isCalendar,
  isNormal,
  href,
}: CommonHeadProps) => {
  const wrapperNewButton = classNames("flex aligns-center pr-2", {
    ["justify-end"]: !canExport,
  });
  const wrapperButtonClass = classNames(
    "flex items-center justify-center w-[150px] space-x-1 h-full hover:bg-[#e5d5ef]",
    {
      ["w-[100px]"]: !canExport && !isCalendar && !isNormal,
    }
  );
  const wrapperExportButton = classNames(
    "flex items-center justify-center space-x-1 w-[80px] h-full cursor-pointer hover:bg-[#e5d5ef]",
    {
      ["w-[20%]"]: canCreateItenerary,
    }
  );

  return (
    <div className="lg:flex hidden md:fixed left-[80px] justify-between right-0 h-[56px] bg-common-head bg-no-repeat bg-[#f7f2fa] z-999">
      <div className="py-3 pl-[30px] pr-[15px] text-white font-extralight tracking-wide">
        <h1 className="text-2xl font-extralight">{title}</h1>
      </div>
      <div className={wrapperNewButton}>
        {isNormal && (
          <Link href={href || "/"} className={wrapperButtonClass}>
            <div className={clsxm(styles.icon)}>
              {createNewText === "Save" ? <SaveIcon /> : <FileIcon />}
            </div>
            <div className=" flex">
              <p className="text-[#460465] font-normal">{createNewText}</p>
            </div>
          </Link>
        )}

        {isCalendar && (
          <Link href="/" className={wrapperButtonClass}>
            <div className={clsxm(styles.icon)}>
              <ListIcon />
            </div>
            <div className=" flex">
              <p className="text-[#460465] font-normal">Calendar List</p>
            </div>
          </Link>
        )}

        {canCreateItenerary && (
          <Link href="/" className={wrapperButtonClass}>
            <div className={clsxm("", styles.icon)}>
              <FileIcon />
            </div>
            <div className="flex justify-center">
              <p className="text-[#460465] font-normal">New Itinerary</p>
            </div>
          </Link>
        )}

        {canExport && (
          <div className={wrapperExportButton}>
            <div className={styles.icon}>
              <DownloadIcon />
            </div>
            <div>
              <p className="text-[#460465] font-normal">{exportText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonHead;
