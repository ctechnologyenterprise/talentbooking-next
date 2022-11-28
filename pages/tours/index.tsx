import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import { InputDate } from "@components/shared/InputDate";
import { SearchAndOrder } from "@components/shared/SearchAndOrder";
import FileIcon from "@public/svgs/FileIcon";
import { useCallback, useState } from "react";

const Tours = () => {
  const [searchOrderInfo, setSearchOrderInfo] = useState<any>({
    input: null,
    option1: null,
    option2: { value: "asc", label: "Ascending" },
  });

  const headerButtons = useCallback(() => {
    return (
      <ButtonLink linkTo="/tours/form" icon={<FileIcon />} label="New Tour" />
    );
  }, []);

  return (
    <>
      <Content title="Tours" leftContent={headerButtons}>
        <div className="base:w-full xl:w-1/3 h-14 mt-5 mr-5 ml-auto">
          <SearchAndOrder
            searchHolder="Search for a tour"
            searchLabel="Search"
            options1={[
              { value: "name", label: "Name" },
              { value: "address", label: "Address" },
              { value: "capacity", label: "Capacity" },
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
              className="w-1/5 inline-flex items-center px-3 text-sm text-[#999999] border border-r-1 border-[#dddddd]"
            >
              Artist
            </label>
            <input
              type="text"
              className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
              placeholder="Any"
            />
          </div>
          <div className="flex w-full">
            <label
              htmlFor="Search"
              className="w-1/5 inline-flex items-center px-3 text-sm text-[#999999] border border-t-0 border-r-1 border-[#dddddd]"
            >
              Agent
            </label>
            <input
              type="text"
              className="rounded-none border border-[#dddddd] border-l-0 border-t-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
              placeholder="Any"
            />
          </div>
          <h3 className="mb-4 mt-4 ml-2 text-[#460465] text-2xl font-extralight">
            Filter by
          </h3>

          <div className="flex w-full">
            <InputDate inputName={"From"} />
            <InputDate inputName={"To"} />
          </div>

          <div className="flex w-full justify-end my-5">
            <button className="text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]">
              Reset
            </button>
            <button className="text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] ml-4 hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]">
              Apply
            </button>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Tours;
