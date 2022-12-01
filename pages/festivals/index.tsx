import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import FileIcon from "@public/svgs/FileIcon";
import DownloadIcon from "@public/svgs/DownloadIcon";
import { useCallback, useState } from "react";
import { SearchAndOrder } from "@components/shared/SearchAndOrder";
import { InputText } from "@components/shared/InputText";
import UCFestivalItems from "@components/Festivals/UCFestival/UCFestivalItems/UCFestivalItems";
import CircleBlankIcon from "@public/svgs/CircleBlankIcon";
import FestivalItems from "@components/Festivals/FestivalItems";
import RefreshIcon from "@public/svgs/RefreshIcon";
import OkSignIcon from "@public/svgs/OkSignIcon";
import OkIcon from "@public/svgs/OkIcon";

const filterLabel = [
  { label: "Genre", borderBottom: true },
  { label: "Country", borderBottom: true },
  { label: "City", borderBottom: true },
  { label: "Status", borderBottom: true },
  { label: "Date Change", borderBottom: true },
  { label: "Category", borderBottom: true },
  { label: "Promoter", borderBottom: true },
  { label: "Contact", borderBottom: false },
];

const UCFestival = [
  {
    name: "SuperBowls",
    date: "6 Dec 22 - 24 Dec 22",
    isPending: true,
    isConfirmed: false,
    isCancelled: false,
  },
  {
    name: "SuperBowls",
    date: "6 Dec 22 - 24 Dec 22",
    isPending: false,
    isConfirmed: true,
    isCancelled: false,
  },
  {
    name: "SuperBowls",
    date: "6 Dec 22 - 24 Dec 22",
    isPending: false,
    isConfirmed: false,
    isCancelled: true,
  },
  {
    name: "SuperBowls",
    date: "6 Dec 22 - 24 Dec 22",
    isPending: true,
    isConfirmed: false,
    isCancelled: false,
  },
  {
    name: "SuperBowls",
    date: "6 Dec 22 - 24 Dec 22",
    isPending: false,
    isConfirmed: false,
    isCancelled: true,
  },
];

const FesticalItems = [
  {
    name: "Alicia Key Concert",
    date: "Thu 8 Dec 22 - Fri 16 Dec 22",
    category: "B",
    genre: "Urban",
    promoter: "Kim X",
    contact: "Christopher",
    isConfirmed: true,
    isCancelled: false,
    isPending: false,
  },
  {
    name: "Westlife All my Life",
    date: "Thu 8 Dec 22 - Fri 16 Dec 22",
    category: "B",
    genre: "Urban",
    promoter: "Kim X",
    contact: "Christopher",
    isConfirmed: false,
    isCancelled: true,
    isPending: false,
  },
  {
    name: "Justin Timberlake",
    date: "Thu 8 Dec 22 - Fri 16 Dec 22",
    category: "B",
    genre: "Urban",
    promoter: "Kim X",
    contact: "Christopher",
    isConfirmed: false,
    isCancelled: false,
    isPending: true,
  },
];

const Festivals = () => {
  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/festivals/form"
          icon={<FileIcon />}
          label="New Festival"
        />
        <ButtonLink
          linkTo="/festivals/form"
          icon={<DownloadIcon />}
          label="Export"
        />
      </>
    );
  }, []);

  const [searchOrderInfo, setSearchOrderInfo] = useState<any>({
    input: null,
    option1: null,
    option2: { value: "asc", label: "Ascending" },
  });
  return (
    <Content title="Festivals" leftContent={headerButtons}>
      <div className="space-y-4 w-full pl-[25px]">
        <div className="grid grid-cols-6 gap-4">
          <div className="grid col-span-4">
            <div className="">
              <div>
                <div>
                  <p className="text-[26px] text-[#460465] font-light">
                    Upcoming festivals
                  </p>
                </div>
                <div className="grid grid-flow-row grid-cols-3">
                  {UCFestival.map((i, k) => (
                    <UCFestivalItems key={k} UCFestivalItems={i} />
                  ))}
                </div>
              </div>
              {UCFestival.length <= 0 && (
                <div>
                  <p className="text-[18px] text-[#460465] font-light">
                    There are no upcoming festivals
                  </p>
                </div>
              )}
            </div>

            <div className="mt-[24px]">
              <div>
                <p className="text-[24px] text-[#460465] font-light">
                  All festivals
                </p>
              </div>
              {FesticalItems.map((i, k) => (
                <FestivalItems key={k} festival={i} />
              ))}
            </div>
          </div>
          <div className="grid col-span-2">
            <div>
              <div className="grid grid-flow-row ">
                <SearchAndOrder
                  classNameHeader="text-[18px] mb-[5px] ml-0"
                  searchHolder="Search for a festival"
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
                <div className="w-full mt-[15px]">
                  <div className="w-full">
                    <div className="font-extralight text-[#460465] text-[18px] mb-[15px]">
                      Filter By
                    </div>
                    {filterLabel.map((i, k) => (
                      <InputText
                        key={k}
                        noBorderBottom={i.borderBottom}
                        inputName={i.label}
                        placeholder="Any"
                        classNameInput="placeholder:text-[#ddd] shadow-[inset_0_0_15px_rgb(0,0,0,0.05)] bg-white"
                        classNameLabel="w-[30%] text-[14px] text-[#999]"
                      />
                    ))}
                  </div>
                  <div className="flex justify-end mt-[30px] space-x-2">
                    <button className="flex justify-center items-center space-x-2 hover:bg-[#e5d5ef] hover:border-[#d0b3e2] bg-[#f7f2fa] border border-[#ece0f3]  w-[101px] h-[42px]">
                      <div>
                        <RefreshIcon fill="#460465" />
                      </div>
                      <div className="text-[#460465]">Reset</div>
                    </button>
                    <button className="flex justify-center items-center space-x-2 hover:bg-[#e5d5ef] hover:border-[#d0b3e2]  bg-[#f7f2fa] border border-[#ece0f3] w-[101px] h-[42px]">
                      <div>
                        <OkIcon fill="#460465" />
                      </div>
                      <div className="text-[#460465]">Apply</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Festivals;
