import CommonHead from "@components/shared/CommonHead/CommonHead";
import { countries } from "constants/country";
import Select from "react-select";

const Offices = () => {
  const options1 = [
    { value: "name", label: "Name" },
    { value: "address", label: "Address" },
  ];
  const options2 = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  return (
    <>
      <CommonHead isNormal createNewText="New Office" title="Offices" />
      <div className="h-screen flex p-4">
        <div className="w-full lg:w-8/12">Office details list</div>
        <div className="w-0 lg:w-4/12">
          <div>
            <h3 className="mb-4 ml-2">Search and Order</h3>
            <div className="flex w-full">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-[#dddddd]">
                Search
              </span>
              <input
                type="text"
                className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
                placeholder="Search for a office"
              />
            </div>
            <div className="flex">
              <Select
                isMulti
                className="w-full"
                closeMenuOnSelect={false}
                options={options1}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "100%",
                    borderRadius: 0,
                    borderWidth: 0,
                    borderLeftWidth: "1px",
                    borderBottomWidth: "1px",
                    "&:hover": {
                      borderLeftColor: "#ddd",
                    },
                    backgroundColor: state.isFocused ? "#f7f2fa" : "",
                    borderLeftColor: "#ddd",
                    borderBottomColor: "#ddd",
                    boxShadow: state.isFocused
                      ? "inset 0 0 8px rgb(70 4 101 / 10%)"
                      : "0 0 15px rgb(0 0 0 / 5%) inset",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    "&:hover": {
                      backgroundColor: "#460465",
                      color: "#ffff",
                    },
                    color: "#000",
                    backgroundColor: "#ffff",
                  }),
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
              <Select
                isMulti
                className="w-full"
                closeMenuOnSelect={false}
                options={options2}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "100%",
                    borderRadius: 0,
                    borderWidth: 0,
                    borderLeftWidth: "1px",
                    borderBottomWidth: "1px",
                    "&:hover": {
                      borderLeftColor: "#ddd",
                    },
                    backgroundColor: state.isFocused ? "#f7f2fa" : "",
                    borderLeftColor: "#ddd",
                    borderBottomColor: "#ddd",
                    boxShadow: state.isFocused
                      ? "inset 0 0 8px rgb(70 4 101 / 10%)"
                      : "0 0 15px rgb(0 0 0 / 5%) inset",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    "&:hover": {
                      backgroundColor: "#460465",
                      color: "#ffff",
                    },
                    color: "#000",
                    backgroundColor: "#ffff",
                  }),
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="my-4 ml-2">Filter by</h3>
            <div className="flex w-full">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-[#dddddd]">
                City
              </span>
              <input
                type="text"
                className="rounded-none border border-[#dddddd] border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
                placeholder="Any"
              />
            </div>
            <div className="relative flex border-[1px] font-light text-[14px] text-[#999] items-center border-[#dddd] border-solid ">
              <div className="px-3">Country</div>
              <Select
                isMulti
                className="w-full"
                closeMenuOnSelect={false}
                options={countries}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "100%",
                    borderRadius: 0,
                    borderWidth: 0,
                    borderLeftWidth: "1px",
                    "&:hover": {
                      borderLeftColor: "#ddd",
                    },
                    backgroundColor: state.isFocused ? "#f7f2fa" : "",
                    borderLeftColor: "#ddd",
                    boxShadow: state.isFocused
                      ? "inset 0 0 8px rgb(70 4 101 / 10%)"
                      : "0 0 15px rgb(0 0 0 / 5%) inset",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    "&:hover": {
                      backgroundColor: "#460465",
                      color: "#ffff",
                    },
                    color: "#000",
                    backgroundColor: "#ffff",
                  }),
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex w-full justify-end my-2">
              <button className="text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]">Reset</button>
              <button className="text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] ml-4 hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offices;
