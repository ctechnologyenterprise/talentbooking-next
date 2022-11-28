import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import EditIcon from "@public/svgs/EditIcon";
import FileIcon from "@public/svgs/FileIcon";
import Link from "next/link";
import { useCallback } from "react";

const Roles = () => {
  const headerButtons = useCallback(() => {
    return (
      <ButtonLink linkTo="/roles/form" icon={<FileIcon />} label="New role" />
    );
  }, []);

  return (
    <Content title="Roles" leftContent={headerButtons}>
      <div className="w-11/12 h-14 bg-[#f7f2fa] flex">
        <Link href="roles/form" className="ml-5 h-full w-15 flex items-center">
          <div className="text-[#7f5295]">root</div>
        </Link>
        <div className="ml-5 h-full flex items-center text-base font-light">
          <span className="text-slate-400 mr-2">created: </span>Today at 05:30
        </div>
        <div className="ml-auto bg-[#eae6ec] hover:bg-[#7f5295]">
          <div className="w-16 h-full flex items-center">
            <div className="m-auto">
              <EditIcon className="ml-1" />
              <div className="text-xs text-slate-400 mt-1">Edit</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 h-14 bg-[#f7f2fa] mt-5 flex">
        <Link href="roles/form" className="ml-5 h-full w-15 flex items-center">
          <div className="text-[#7f5295]">root</div>
        </Link>
        <div className="ml-5 h-full flex items-center text-base font-light">
          <span className="text-slate-400 mr-2">created: </span>Today at 05:30
        </div>
        <div className="ml-auto bg-[#eae6ec] hover:bg-[#7f5295]">
          <div className="w-16 h-full flex items-center">
            <div className="m-auto">
              <EditIcon className="ml-1" />
              <div className="text-xs text-slate-400 mt-1">Edit</div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Roles;
