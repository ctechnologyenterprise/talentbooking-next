import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import BookingPencilModal from "@components/modals/BookingPencilModal/BookingPencilModal";
import { InputText } from "@components/shared/InputText";
import ChevronLeftIcon from "@public/svgs/ChevronLeftIcon";
import ChevronRightIcon from "@public/svgs/ChevronRightIcon";
import DownloadIcon from "@public/svgs/DownloadIcon";
import EditIcon from "@public/svgs/EditIcon";
import FileIcon from "@public/svgs/FileIcon";
import PencilIcon from "@public/svgs/PencilIcon";
import RemoveIcon from "@public/svgs/RemoveIcon";
import classNames from "classnames";
import dayjs from "dayjs";
import useVisible from "hooks/useVisible";
import { useCallback, useState } from "react";
import Select from "react-select";

const tableHeader = [
  "DATE",
  "STATUS",
  "VENUE / SHOW NAME",
  "LOCATION",
  "PROMOTER",
  "FEE",
  "COMMENTS",
];

const months = [
  {
    label: "January 2022",
  },
  {
    label: "February 2022",
  },
  {
    label: "March 2022",
  },
  {
    label: "April 2022",
  },
  {
    label: "May 2022",
  },
  {
    label: "June 2022",
  },
  {
    label: "July 2022",
  },
  {
    label: "August 2022",
  },
  {
    label: "September 2022",
  },
  {
    label: "October 2022",
  },
  {
    label: "November 2022",
  },
  {
    label: "December 2022",
  },
];

const daysInMonth = () => {
  let days = [];
  for (let index = 0; index < dayjs().daysInMonth(); index++) {
    const dayJs = dayjs();
    const x = dayjs(`${dayJs.year()}-${dayJs.month() + 1}-${index + 1}`).format(
      "DD ddd"
    );
    days.push(dayjs(`${dayJs.year()}-${dayJs.month() + 1}-${index + 1}`));
  }
  return days;
};

const Booking = () => {
  const dayOfWeek = daysInMonth();
  const detailModal = useVisible(false);

  const mainContainer = classNames("px-[30px]", {
    ["fixed"]: detailModal.visible,
  });

  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/contracts/form"
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
    <Content title="Bookings" leftContent={headerButtons}>
      <div className={mainContainer}>
        <div className="grid grid-flow-row grid-cols-2">
          <div className="hidden md:flex justify-start items-center">
            <div className="cursor-pointer">
              <ChevronLeftIcon />
            </div>

            <div className="pb-5">
              <section className="static mt-[20px] ">
                <div>
                  <div>
                    <fieldset>
                      <div className="relative flex border-[1px] font-light text-[14px] text-[#999] items-center border-[#dddd] border-solid ">
                        <div className="px-3">Select Month</div>
                        <Select
                          options={months}
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              width: "200px",
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
                    </fieldset>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <ChevronRightIcon className="cursor-pointer" />
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <div className="flex justify-end items-center space-x-3 w-full">
              <div className="font-extralight text-[#460465] text-[18px]">
                Filter By
              </div>
              <InputText
                placeholder="Select an artist"
                inputName="Artist"
                classNameInput="placeholder:text-[#ddd]"
                classNameContainer="w-[70%]"
                classNameLabel="font-light w-[30%]"
              />
            </div>
          </div>
        </div>

        <div>
          <table className="table-fixed border-spacing-y-[1px] md:border-spacing-y-0 border-separate md:[border-spacing:0.15rem] w-[100%]">
            <thead>
              <tr className="font-normal md:contents hidden">
                {tableHeader.map((i, k) => {
                  return (
                    <th key={k} className="font-normal text-xs py-2 ">
                      {i}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {(dayOfWeek || []).map((a, index) => {
                return (
                  <tr
                    key={index}
                    className="odd:bg-[#f7f1f9] even:bg-[#fcfafd]"
                  >
                    <td className="bg-[#c9bece] md:w-[111px] py-1 w-[70px] text-[12px] text-center uppercase font-normal text-white">
                      {dayjs(a).format("D ddd")}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="md:contents hidden">
                      <div className="flex bg-[#e9e6ec] py-2 justify-around">
                        <button
                          className="pl-[20px]"
                          onClick={detailModal.show}
                        >
                          <PencilIcon />
                        </button>
                        <button className="opacity-50">
                          <EditIcon />
                        </button>
                        <button className="opacity-50">
                          <RemoveIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex w-[30%] justify-evenly items-center">
          <div>
            <ChevronLeftIcon className="cursor-pointer" />
          </div>
          <div className=" pb-5">
            <section className="static mt-[20px] ">
              <div>
                <div>
                  <fieldset>
                    <div className="relative flex border-[1px] font-light text-[14px] text-[#999] items-center border-[#dddd] border-solid ">
                      <div className="px-3">Select Month</div>
                      <Select
                        options={months}
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            width: "200px",
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
                  </fieldset>
                </div>
              </div>
            </section>
          </div>
          <div>
            <ChevronRightIcon className="cursor-pointer" />
          </div>
        </div>
      </div>

      {detailModal.visible && (
        <BookingPencilModal
          onHide={detailModal.hide}
          isOpen={detailModal.visible}
        />
      )}
    </Content>
  );
};

export default Booking;
