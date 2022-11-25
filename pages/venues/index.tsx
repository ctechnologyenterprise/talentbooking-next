import CommonHead from "@components/shared/CommonHead/CommonHead";
import { SearchAndOrder } from "@components/shared/SearchAndOrder";
import { useState } from "react";

const Venues = () => {
  const [searchOrderInfo, setSearchOrderInfo] = useState<any>({
    input: null,
    option1: null,
    option2: { value: "asc", label: "Ascending" },
  });

  return (
    <>
      <CommonHead
        isNormal
        canExport
        exportText="Export"
        createNewText="New Venue"
        title="Venues"
        href="venues/form"
      />
      <div className="mt-20" />
      <div className="base:w-full xl:w-1/3 h-14 mt-5 mr-5 ml-auto">
        <SearchAndOrder
          searchHolder="Search for a venue"
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
            City
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
            Country
          </label>
          <input
            type="text"
            className="rounded-none border border-[#dddddd] border-l-0 border-t-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
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
    </>
  );
};

export default Venues;
