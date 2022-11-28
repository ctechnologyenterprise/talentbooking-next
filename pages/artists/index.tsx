import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";

import { SearchAndOrder } from "@components/shared/SearchAndOrder";
import DownloadIcon from "@public/svgs/DownloadIcon";
import FileIcon from "@public/svgs/FileIcon";
import { useCallback, useState } from "react";

const Artist = () => {
  const [searchOrderInfo, setSearchOrderInfo] = useState<any>({
    input: null,
    option1: null,
    option2: { value: "asc", label: "Ascending" },
  });

  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/contract/form"
          icon={<FileIcon />}
          label="New Artist"
        />
      </>
    );
  }, []);

  return (
    <Content title="Artists" leftContent={headerButtons}>
      <div className="base:w-full xl:w-1/3 h-14 mt-5 mr-5 ml-auto">
        <SearchAndOrder
          searchHolder="Search for a artist"
          searchLabel="Search"
          options1={[
            { value: "name", label: "Name" },
            { value: "email", label: "Email" },
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
        <div className="flex w-full justify-end my-2">
          <button className="text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]">
            Reset
          </button>
          <button className="text-[#460465] bg-[#f7f2fa] px-4 py-2 border border-[#ece0f3] ml-4 hover:text-[#460465] hover:bg-[#e5d5ef] hover:border-[#d0b3e2]">
            Apply
          </button>
        </div>
      </div>
    </Content>
  );
};

export default Artist;
