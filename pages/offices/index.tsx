import CommonHead from "@components/shared/CommonHead/CommonHead";
import { FilterBy } from "@components/shared/FilterBy";
import { SearchAndOrder } from "@components/shared/SearchAndOrder";
import { countries } from "constants/country";
import { useState } from "react";
import Select from "react-select";

const Offices = () => {
  const [searchOrderInfo, setSearchOrderInfo] = useState<any>({
    input: null,
    option1: null,
    option2: { value: "asc", label: "Ascending" },
  });
  const [filterByInfo, setFilterByInfo] = useState<any>({
    input: null,
    option: null,
  });

  return (
    <>
      <CommonHead isNormal createNewText="New Office" title="Offices" />
      <div className="h-screen flex p-4 mt-[5%]">
        <div className="w-full lg:w-8/12">
          <div className="text-center">Showing 0 of 0 items.</div>
        </div>
        <div className="w-0 lg:w-4/12">
          <SearchAndOrder
            searchHolder="Search for a office"
            searchLabel="Search"
            options1={[
              { value: "name", label: "Name" },
              { value: "address", label: "Address" },
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
          <FilterBy
            searchHolder="City"
            searchLabel="Any"
            selectLabel="Country"
            onInput={(val) => setFilterByInfo({ ...filterByInfo, input: val })}
            onSelect={(val) =>
              setFilterByInfo({ ...filterByInfo, option: val })
            }
          />
          <div>
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
      </div>
    </>
  );
};

export default Offices;
