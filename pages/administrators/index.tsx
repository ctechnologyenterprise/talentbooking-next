import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import { SearchAndOrder } from "@components/shared/SearchAndOrder";
import CircleCheckIcon from "@public/svgs/CircleCheckIcon";
import EditIcon from "@public/svgs/EditIcon";
import FileIcon from "@public/svgs/FileIcon";
import Link from "next/link";
import { useCallback, useState } from "react";

const Administrators = () => {
  const [searchOrderInfo, setSearchOrderInfo] = useState<any>({
    input: null,
    option1: null,
    option2: { value: "asc", label: "Ascending" },
  });

  const headerButtons = useCallback(() => {
    return (
      <ButtonLink
        linkTo="/administrators/form"
        icon={<FileIcon />}
        label="New Contract"
      />
    );
  }, []);

  return (
    <Content title="New Account" leftContent={headerButtons}>
      <div className="lg:mt-16 mt-0"></div>
      <div className="base:block xl:flex">
        <div className="base:w-full xl:w-3/5 base:h-fit lg:h-14 bg-[#f7f2fa] base:ml-0 lg:ml-5 mr-5 mt-5 flex ">
          <div className="base:block lg:flex">
            <Link
              href="administrators/form"
              className="ml-5 base:h-fit lg:h-full w-15 flex items-center"
            >
              <div className="text-[#7f5295]">tuan sy</div>
            </Link>
            <div className="ml-5 base:h-fit lg:h-full flex items-center text-base font-light">
              <span className="text-slate-400 mr-2">Email: </span>
              phamcongtuansy@gmail.com
            </div>
            <div className="ml-5 base:h-fit lg:h-full flex items-center text-base font-light">
              <span className="text-slate-400 mr-2">Role: </span>
              <div className="border rounded bg-[#df4141] w-12 flex justify-center text-white leading-5 text-xs font-bold">
                root
              </div>
            </div>
          </div>

          <div className="ml-auto flex">
            <div className="h-full flex items-center mr-10 text-[#8ac748] md:mt-0 mt-5">
              <CircleCheckIcon className="mr-1" />
              Enabled
            </div>
            <div className="bg-[#eae6ec] hover:bg-[#7f5295] w-16 xl:h-full md:flex hidden">
              <div className="flex m-auto">
                <div className="m-auto mt-3">
                  <EditIcon className="ml-1" />
                  <div className="text-xs text-slate-400 mt-1">Edit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="base:w-full xl:w-2/5 h-14 mt-5 mr-5">
          <SearchAndOrder
            searchHolder="Search for a account"
            searchLabel="Search"
            options1={[
              { value: "name", label: "Name" },
              { value: "email", label: "Email" },
              { value: "status", label: "Status" },
            ]}
            onInput={(val) =>
              setSearchOrderInfo({ ...searchOrderInfo, input: val })
            }
            onSelect1={(val) =>
              setSearchOrderInfo({ ...searchOrderInfo, option1: val })
            }
            onSelect2={(val) =>
              setSearchOrderInfo({ ...searchOrderInfo, option2: val })
            }
          />
          <h3 className="mb-4 mt-4 ml-2 text-[#460465] text-2xl font-extralight">
            Filter by
          </h3>
          <div className="flex w-full">
            <label
              htmlFor="Search"
              className="w-1/5 inline-flex items-center px-3 text-sm text-gray-900 border border-r-1 border-[#dddddd]"
            >
              Artist
            </label>
            <input
              type="text"
              className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
              placeholder="Any"
            />
          </div>
          <div className="flex w-full justify-end my-2">
            <button className="text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]">
              Reset
            </button>
            <button className="text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] ml-4 hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]">
              Apply
            </button>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Administrators;
