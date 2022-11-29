import ButtonLink from "@components/ButtonLink";
import Content from "@components/Content";
import { ModalPencilCalendar } from "@components/ModalPencilCalendar";
import { InputFilter } from "@components/shared/InputFilter";
import FileIcon from "@public/svgs/FileIcon";
import ListIcon from "@public/svgs/ListIcon";
import useVisible from "hooks/useVisible";
import moment from "moment";
import { useCallback } from "react";
import { Calendar as Cal, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Cal);

const Calendars = () => {
  const inputListItem = ["Artist", "Venue", "Agent", "Status"];

  const formModalAddPencilledCalendar = useVisible(false);
  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/administrators/form"
          icon={<FileIcon />}
          label="New Contract"
        />
        <ButtonLink
          linkTo="/administrators/form"
          icon={<ListIcon />}
          label="Calendar List"
        />
      </>
    );
  }, []);
  return (
    <Content title="Calendar" leftContent={headerButtons}>
      <div className="flex">
        <div className="text-[#000] w-2/3 h-screen mr-2">
          <DragAndDropCalendar
            localizer={localizer}
            events={[]}
            style={{ height: "90vh" }}
            views={["month"]}
            components={{
              month: {
                dateHeader: (props) => (
                  <div className="flex justify-between mt-2 ml-2">
                    {props.label}
                    <button
                      onClick={() => formModalAddPencilledCalendar.show()}
                      className="bg-[#EFEFEF] border-2 border-[#000] w-6 flex justify-center"
                    >
                      +
                    </button>
                  </div>
                ),
              },
            }}
          />
        </div>
        <div className="base:w-full xl:w-1/3 h-14 mr-5 ml-auto">
          <h3 className="mb-4 ml-2 text-[#460465] text-2xl font-extralight">
            Filter by
          </h3>

          {inputListItem.map((item, index) => (
            <div key={index}>
              <InputFilter inputName={item} />
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
      {formModalAddPencilledCalendar.visible && (
        <ModalPencilCalendar
          formModalAddPencilledCalendar={formModalAddPencilledCalendar}
        />
      )}
    </Content>
  );
};

export default Calendars;
