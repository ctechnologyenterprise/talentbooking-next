import ProductionNotes from "@components/shared/ProductionNotes/ProductionNotes";
import EditIcon from "@public/svgs/EditIcon";
import ButtonLink from "@components/ButtonLink";
import PlusSignIcon from "@public/svgs/PlusSignIcon";
import RefreshIcon from "@public/svgs/RefreshIcon";
import DownloadIcon from "@public/svgs/DownloadIcon";
import { useCallback, useState } from "react";
import Select from "react-select";
import FileIcon from "@public/svgs/FileIcon";
import Content from "@components/Content";
import { StatusSelect } from "@components/shared/Status/statusSelect";
import { SelectForm } from "@components/shared/SelectForm";

const ContractsForms = () => {
  const [filterByInfo, setFilterByInfo] = useState<any>({
    input: null,
    option: null,
  });
  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/contract/form"
          icon={<FileIcon />}
          label="New Contract"
        />
        <ButtonLink
          linkTo="/contract/export"
          icon={<DownloadIcon />}
          label="Export"
        />
      </>
    );
  }, []);

  return (
    <Content title="New Contract" leftContent={headerButtons}>
      <div className=" py-[25px]">
        <div className="grid xl:grid-rows-1 grid-rows-3 md:grid-rows-2 grid-flow-col gap-0 xl:gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <div className="w-screen">
            <StatusSelect
              isNewContract
              className="mt-0 w-full xl:w-[310px] lg:w-[370px] md:w-[370px]"
              classNameLabel="mr-0 h-[42px]"
            />
          </div>

          <div className=" w-[370px] flex justify-between border">
            <div className="border-r-[1px] flex justify-center items-center w-[30%]">
              <p className="font-light text-[#999] text-[14px]">
                Agent(s)<em className="text-[#b91c1c]">*</em>
              </p>
            </div>
            <input
              type="text"
              className="shadow-[inset_0_0_15px_rgb(0,0,0,0.05)] text-gray-900 block flex-1 min-w-0 w-[70%] text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
            />
          </div>
          <div className=" w-[370px] flex justify-between border">
            <SelectForm
              classNameContainer="w-[370px]"
              icon={true}
              options={[
                { value: "artist", label: "Artist" },
                {
                  value: "echoLocationEmployee",
                  label: "Echo Location Employee",
                },
                { value: "manager", label: "Manager" },
                { value: "other", label: "Other" },
                { value: "productionAssistant", label: "Production Assistant" },
                { value: "promoterOrBuyer", label: "Promoter/Buyer" },
                { value: "tourManager", label: "Tour Manager" },
              ]}
              selectLabel="Office"
              onSelect={(val) =>
                setFilterByInfo({ ...filterByInfo, option: val })
              }
            />
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-2 mt-[15px] gap-7">
          <div>
            <div>
              <div>
                <p className="text-[#7f5295] text-[18px] font-thin">Artist</p>
              </div>
              <div className="w-full bg-[#f7f1f9] py-3 pl-2">
                <div className="flex items-center space-x-2">
                  <div>
                    <PlusSignIcon fill="#000" />
                  </div>
                  <div className="font-light text-[12px]">Select an artist</div>
                </div>
              </div>
              <div className=" mt-[3%]">
                <div className="w-full bg-[#7f5295]">
                  <div className="flex justify-between px-4 py-[7px]">
                    <div className="text-white font-light">Shows</div>
                    <div className="flex items-center space-x-1">
                      <div>
                        <PlusSignIcon fill="#fff" />
                      </div>
                      <div className="text-white font-light">Add</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center font-semibold text-[14px]">
                    <p>No shows have been added yet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p className="text-[#450460] text-[18px] font-thin">Promoter</p>
              </div>
              <div className="w-full py-3 pl-2 bg-[#f7f1f9]">
                <div className="flex items-center space-x-2">
                  <div>
                    <PlusSignIcon />
                  </div>
                  <div className="font-light text-[12px]">
                    Select a promoter
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[3%]">
              <div className="w-full bg-[#7f5295]">
                <div className="flex justify-between px-4 py-[7px]">
                  <div className="text-white font-light">
                    Overall Fee And Tax
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 xl:flex space-x-7 mt-[3%]">
              <div className="w-[62%]">
                <div className="flex justify-between border">
                  <div className="border-r-[1px] flex justify-center items-center w-[30%]">
                    <p className="font-light text-[#999] text-[14px]">
                      Deal Type<em className="text-[#b91c1c]">*</em>
                    </p>
                  </div>
                  <div className="w-[70%]">
                    <Select
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          width: "100%",
                          borderRadius: 0,
                          borderWidth: 0,
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
                <div className="flex justify-between border">
                  <div className="border-r-[1px] flex justify-center items-center w-[30%]">
                    <p className="font-light text-[#999] text-[14px]">
                      Percentage
                    </p>
                  </div>
                  <input
                    type="text"
                    className="shadow-[inset_0_0_15px_rgb(0,0,0,0.05)] text-gray-900 block flex-1 min-w-0 w-[70%] text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
                  />
                </div>
                <div className="flex justify-between border">
                  <div className="border-r-[1px] flex justify-center items-center w-[30%]">
                    <p className="font-light text-[#999] text-[14px]">
                      Overal Fee
                    </p>
                  </div>
                  <input
                    type="text"
                    className="shadow-[inset_0_0_15px_rgb(0,0,0,0.05)] text-gray-900 block flex-1 min-w-0 w-[70%] text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
                  />
                </div>
                <div className="flex justify-between border">
                  <div className="border-r-[1px] flex justify-center items-center w-[30%]">
                    <p className="font-light text-[#999] text-[14px]">
                      Fee Notes
                    </p>
                  </div>
                  <input
                    type="text"
                    className="shadow-[inset_0_0_15px_rgb(0,0,0,0.05)] text-gray-900 block flex-1 min-w-0 w-[70%] text-sm p-2.5 focus:text-[#460465] focus:bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
                  />
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex border py-[10px] px-[12px]">
                  <div>
                    <div className="text-[#999] text-[15px] leading-[14px]">
                      Cross Collateralised
                    </div>
                    <div className="text-[#999] pr-[18%] text-[15px] leading-[20px]">
                      Note: Set the tax in the indiviudal shows
                    </div>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      className="rounded-[3px] bg-red-100 border-red-300 text-red-500 focus:ring-red-200 shadow-[inset_0_0_4px_rgb(0,0,0,0.3)] w-[24px] h-[24px]"
                    />
                  </div>
                </div>
                <div className="border flex items-center justify-between py-[10px] px-[12px]">
                  <div className="text-[#999] text-[15px] leading-[14px]">
                    Special Tax Circumstances
                  </div>
                  <input type="checkbox" className="w-[24px] h-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-2 mt-[15px] gap-7">
          <div className=" mt-[3%]">
            <div className="w-full bg-[#7f5295]">
              <div className="flex justify-between px-4 py-[7px]">
                <div className="text-white font-light">Payment Schedule</div>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1">
                    <div>
                      <PlusSignIcon fill="#fff" />
                    </div>
                    <div className="text-white font-light">Copy</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div>
                      <PlusSignIcon fill="#fff" />
                    </div>
                    <div className="text-white font-light">Add</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center font-semibold text-[14px]">
                <p>No shows have been added yet</p>
              </div>
            </div>
          </div>
        </div>
        <ProductionNotes />
        <div>
          <div className=" mt-[3%] w-full">
            <div className="w-full bg-[#7f5295]">
              <div className="flex justify-between px-4 py-[7px]">
                <div className="text-white font-light">General Provisions</div>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <div>
                      <RefreshIcon className="fill-white" />
                    </div>
                    <div className="text-white">Reset</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <EditIcon className="fill-white" />
                    </div>
                    <div className="text-white">Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border h-[40px]" />
          </div>
        </div>
      </div>
    </Content>
  );
};

export default ContractsForms;
