import { StatusSelect } from "../shared/Status/statusSelect";
import { InputText } from "@components/shared/InputText";
import { AccountSelect } from "./Form/AccountSelect";

const AdministratorsContent = () => {
  return (
    <>
      <div className="base:w-full w-11/12 base:ml-0 lg:ml-10 m-auto">
        <div className="lg:flex base:block w-full">
          <StatusSelect />
          <div className="flex base:w-full lg:w-3/5 lg:mt-20 mt-5 base:ml-0 lg:ml-20">
            <label
              htmlFor="Search"
              className="lg:w-1/5 w-2/5 inline-flex items-center px-3 text-base text-slate-400 border border-r-1 border-[#dddddd]"
            >
              Associated Artists
            </label>
            <input
              type="text"
              className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 base:w-3/5 lg:w-4/5 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
            />
          </div>
        </div>
        <div className="lg:flex base:block">
          <div className="base:w-full lg:w-1/2 mt-5">
            <div className="bg-[#7f5295] h-10 py-2 pl-5 mb-5">
              <div className="text-white font-light">Role Permissions</div>
            </div>
            <InputText inputName={"First Name "} required={true} />
            <InputText inputName={"Last Name "} />
            <InputText inputName={"Mobile "} />
            <div className="bg-[#7f5295] h-10 py-2 pl-5 mt-10 mb-5">
              <div className="text-white font-light">Login Details</div>
            </div>
            <InputText inputName={"Email "} required={true} />
            <div className="h-10 py-2 pl-5 border border-t-0 border-[#dddddd] flex">
              <label className="text-sm text-slate-400">
                Send Email Invite
              </label>
              <input
                type="checkbox"
                className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border  border-slate-400 "
              />
            </div>
            <div className="h-10 py-2 pl-5 border border-t-0 border-[#dddddd] flex">
              <label className="text-sm text-slate-400">
                Two Factor Authentication Enabled?
              </label>
              <input
                type="checkbox"
                className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border  border-slate-400 "
              />
            </div>
            <div className="h-10 py-2 pl-5 border border-t-0 border-[#dddddd] flex">
              <label className="text-sm text-slate-400">SSO Login Only?</label>
              <input
                type="checkbox"
                className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border  border-slate-400 "
              />
            </div>
            <div className="bg-[#7f5295] h-18 py-2 pl-5 mt-10">
              <div className="text-white font-light">Featured Agent</div>
              <div className="text-white">
                A featured agent is one that contracts can be associated with
              </div>
            </div>
            <div className="mt-5 h-10 py-2 pl-5 border border-[#dddddd] flex">
              <label className="text-sm text-slate-400">Featured</label>
              <input
                type="checkbox"
                className="accent-[#7f5295] ml-auto mr-3 w-6 h-6 hover:bg-[#7f5295] checked:bg-[#7f5295] border border-[#dddddd]"
              />
            </div>
          </div>
          <div className="base:w-full lg:w-1/2 mt-5 base:ml-0 lg:ml-10">
            <div className="bg-[#7f5295] h-10 py-2 pl-5">
              <div className="text-white font-light">Type & Status</div>
            </div>
            <div className="bg-[#f7f2fa] base:h-38 lg:h-32 py-2 pl-5 mt-5">
              <div className="text-[#c09853] text-base font-light mt-3">
                Please get a grasp of the different user permissions before
                creating a new user.
              </div>
              <div className="mt-2 border rounded bg-[#df4141] w-12 flex justify-center text-white leading-5 text-xs font-bold">
                root
              </div>
              <div className="mt-2 border rounded bg-[#999999] w-6 flex justify-center text-white leading-5 text-xs font-bold">
                A
              </div>
            </div>

            <AccountSelect />
            <div className="h-20" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdministratorsContent;
