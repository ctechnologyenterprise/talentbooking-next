import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import { ModalDateRanger } from "@components/ModalDateRanger";
import { Input } from "@components/shared/Input";
import CalendarIcon from "@public/svgs/CalendarIcon";
import DownloadIcon from "@public/svgs/DownloadIcon";
import useVisible from "hooks/useVisible";
import { useCallback } from "react";

const Finance = () => {
  const formModalDateRanger = useVisible(false);
  console.log("formModalDateRanger :", formModalDateRanger);

  const headerButtons = useCallback(() => {
    return (
      <ButtonLink linkTo="/roles/form" icon={<DownloadIcon />} label="Export" />
    );
  }, []);

  const NAV_TABLE = [
    "DATE",
    "ARTIST",
    "VENUE",
    "OVERALL FEE",
    "PAYMENT HISTORY",
    "BALANCE / WHT",
    "CONTRACT SENT",
    "COUNTERSIGNED",
    "ARTWORK",
    "SET TIME & RUNNING ORDER",
  ];

  return (
    <>
      <Content title="Finances" leftContent={headerButtons}>
        <h3 className="text-[#460465] text-2xl font-extralight mx-5 mb-5">
          Filter by
        </h3>
        <div className="grid gap-x-5 grid-cols-7 mx-5">
          <Input placeholder="Artist" />
          <Input placeholder="Venue" />
          <Input placeholder="Responsible Agent" />
          <Input placeholder="City" />
          <button
            onClick={() => formModalDateRanger.show()}
            className="flex justify-between items-center bg-[#f7f2fa] border border-[#dddddd]"
          >
            <div className="flex w-11/12 m-auto justify-between items-center">
              <div className="font-light text-[#2f2732] text-sm">
                Date range
              </div>
              <CalendarIcon />
            </div>
          </button>
          <button
            onClick={() => formModalDateRanger.show()}
            className="flex justify-between items-center bg-[#f7f2fa] border border-[#dddddd]"
          >
            <div className="flex w-11/12 m-auto justify-between items-center">
              <div className="font-light text-[#2f2732] text-sm">
                Date range
              </div>
              <CalendarIcon />
            </div>
          </button>
          <div className="flex justify-between items-center bg-[#f7f2fa] border border-[#dddddd]">
            <div className="flex w-11/12 m-auto">
              <input type="checkbox" />
              <div className="font-light text-[#2f2732] ml-3 text-sm">
                Paid Out
              </div>
            </div>
          </div>
        </div>
        <table className="w-full m-5">
          <thead>
            <tr className="text-sm">
              {NAV_TABLE.map((item, index) => (
                <th className="font-normal" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </Content>
      {formModalDateRanger.visible && (
        <ModalDateRanger formModalDateRanger={formModalDateRanger} />
      )}
    </>
  );
};

export default Finance;
