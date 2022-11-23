import CommonHead from "@components/shared/CommonHead/CommonHead";
import ChevronLeftIcon from "@public/svgs/ChevronLeftIcon";
import ChevronRightIcon from "@public/svgs/ChevronRightIcon";
import EditIcon from "@public/svgs/EditIcon";
import PencilIcon from "@public/svgs/PencilIcon";
import Select from "react-select";
import RemoveIcon from "@public/svgs/RemoveIcon";
import dayjs from "dayjs";

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

  return (
    <>
      <CommonHead
        isNormal
        canExport
        exportText="Export"
        createNewText="New Contract"
        title="Bookings"
      />

      <div className="px-[30px] w-screen absolute">
        <div className="flex w-[30%] justify-evenly items-center">
          <div>
            <ChevronLeftIcon />
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
            <ChevronRightIcon />
          </div>
        </div>
        <div>
          <table className="table-auto border-separate [border-spacing:0.15rem] w-[94%]">
            <thead>
              <tr className="font-normal">
                {tableHeader.map((i, k) => {
                  return (
                    <th key={k} className="font-semibold text-xs py-2">
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
                    <td className="bg-[#c9bece] w-[111px] text-[12px] text-center uppercase font-medium text-white">
                      {dayjs(a).format("D ddd")}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="flex bg-[#e9e6ec] py-2 justify-around">
                        <div className="pl-[20px]">
                          <PencilIcon />
                        </div>
                        <div className="opacity-50">
                          <EditIcon />
                        </div>
                        <div className="opacity-50">
                          <RemoveIcon />
                        </div>
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
            <ChevronLeftIcon />
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
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
