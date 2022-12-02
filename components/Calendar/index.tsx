import ChevronLeftIcon from "@public/svgs/ChevronLeftIcon";
import ChevronRightIcon from "@public/svgs/ChevronRightIcon";
import moment from "moment";
import { useCallback } from "react";
import { Calendar as Cal, DateLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

type Props = {
  localizer: DateLocalizer;
  formModalAddPencilledCalendar: any;
};

const DragAndDropCalendar = withDragAndDrop(Cal);

export default function Calendar({
  localizer,
  formModalAddPencilledCalendar,
}: Props) {
  const date = new Date();
  const dateNextMonth = new Date();
  dateNextMonth.setMonth(date.getMonth() + 1);
  const datePrevMonth = new Date();
  datePrevMonth.setMonth(date.getMonth() - 1);
  const CustomToolbar = (toolbar: any) => {
    const goToBack = useCallback(() => {
      toolbar.date.setMonth(toolbar.date.getMonth() - 1);
      toolbar.onNavigate("prev");
    }, [toolbar]);

    const goToNext = useCallback(() => {
      toolbar.date.setMonth(toolbar.date.getMonth() + 1);
      toolbar.onNavigate("next");
    }, [toolbar]);

    const label = () => {
      const date = moment(toolbar.date);
      return (
        <span className="w-full font-light">
          <span>{date.format("MMMM")}</span>
          <span> {date.format("YYYY")}</span>
        </span>
      );
    };

    return (
      <div className="w-full flex mb-5">
        <div className="w-60 flex justify-between">
          <button className="w-fit cursor-pointer" onClick={goToBack}>
            <ChevronLeftIcon
              fill="#460465"
              width="1.2rem"
              height="1.2rem"
              className="text-sm"
            />
          </button>
          <label className="w-2/3 text-[#460465] text-xl font-extralight text-center">
            {label()}
          </label>
          <button className="w-fit cursor-pointer" onClick={goToNext}>
            <ChevronRightIcon fill="#460465" width="1.2rem" height="1.2rem" />
          </button>
        </div>
      </div>
    );
  };
  return (
    <DragAndDropCalendar
      localizer={localizer}
      events={[]}
      style={{ height: "90vh" }}
      className="w-full "
      views={["month"]}
      components={{
        toolbar: CustomToolbar,
        month: {
          dateHeader: (props) => (
            <div className="md:flex base:block mt-2 ml-2 text-[#2f2732] font-light">
              <div className="flex justify-start">{props.label}</div>
              <button
                onClick={() => formModalAddPencilledCalendar.show()}
                className="bg-[#EFEFEF] border-2 border-[#000] w-6 flex justify-center ml-auto"
              >
                +
              </button>
            </div>
          ),
        },
      }}
    />
  );
}
