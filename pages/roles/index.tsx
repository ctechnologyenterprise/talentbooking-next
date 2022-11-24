import CommonHead from "@components/shared/CommonHead/CommonHead";
import Link from "next/link";
import EditIcon from "@public/svgs/EditIcon";

const Roles = () => {
  return (
    <>
      <CommonHead
        isNormal
        createNewText="New Role"
        title="Roles"
        href="/roles/form"
      />
      <div className="w-11/12 h-14 bg-[#f7f2fa] m-auto mt-20 flex">
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
      <div className="w-11/12 h-14 bg-[#f7f2fa] m-auto mt-5 flex">
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
    </>
  );
};

export default Roles;
