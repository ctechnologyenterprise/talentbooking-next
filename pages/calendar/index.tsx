import ButtonLink from "@components/ButtonLink";
import Calendar from "@components/Calendar";
import CalendarList from "@components/CalendarList";
import Content from "@components/Content";
import { ModalPencilCalendar } from "@components/ModalPencilCalendar";
import { InputFilter } from "@components/shared/InputFilter";
import FileIcon from "@public/svgs/FileIcon";
import ListIcon from "@public/svgs/ListIcon";
import useVisible from "hooks/useVisible";
import moment from "moment";
import { useCallback, useState } from "react";
import { momentLocalizer } from "react-big-calendar";

const localizer = momentLocalizer(moment);

const Calendars = () => {
  const [isCalendar, setIsCalendar] = useState<boolean>(true);
  const inputListItem = [
    { name: "Artist", borderBottom: true },
    { name: "Venue", borderBottom: true },
    { name: "Agent", borderBottom: true },
    { name: "Status", borderBottom: false },
  ];

  const formModalAddPencilledCalendar = useVisible(false);
  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/contracts/form"
          icon={<FileIcon />}
          label="New Contract"
        />
        <button
          className="flex items-center p-[10px] hover:bg-[#e5d5ef] h-[100%]"
          onClick={() => setIsCalendar(!isCalendar)}
        >
          <p>
            <ListIcon fill="#460465" />
          </p>
          <p className="text-[#460465] font-normal pl-[5px]">
            {isCalendar ? "Calendar List" : "Calendar"}
          </p>
        </button>
      </>
    );
  }, [isCalendar]);

  return (
    <Content title="Calendar" leftContent={headerButtons}>
      <div className="base:w-full w-[98%] m-auto">
        <div className="xl:flex base:block w-full">
          <div className="xl:w-[78%] base:w-full h-screen base:mr-0 mr-5">
            {isCalendar ? (
              <Calendar
                localizer={localizer}
                formModalAddPencilledCalendar={formModalAddPencilledCalendar}
              />
            ) : (
              <CalendarList
                localizer={localizer}
                setIsCalendar={setIsCalendar}
              />
            )}
          </div>
          <div className="base:w-full xl:w-[22%] h-14 ml-auto">
            <h3 className="mb-4 ml-2 text-[#460465] text-2xl font-extralight">
              Filter by
            </h3>

            {inputListItem.map((item, index) => (
              <div key={index}>
                <InputFilter
                  inputName={item.name}
                  borderBottom={item.borderBottom}
                />
              </div>
            ))}

            <div className="flex w-full justify-end my-5">
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

      {formModalAddPencilledCalendar.visible && (
        <ModalPencilCalendar
          formModalAddPencilledCalendar={formModalAddPencilledCalendar}
        />
      )}
    </Content>
  );
};

export default Calendars;
