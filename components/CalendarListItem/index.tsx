import DayItem from "@components/DayItem";
import CalendarIcon from "@public/svgs/CalendarIcon";
import ChevronLeftIcon from "@public/svgs/ChevronLeftIcon";
import ChevronRightIcon from "@public/svgs/ChevronRightIcon";
import moment from "moment";
import Link from "next/link";
import { Dispatch, SetStateAction, useCallback } from "react";
import { Calendar as Cal, DateLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

interface Props {
  localizer: DateLocalizer;
  date?: Date;
  setIsCalendar: Dispatch<SetStateAction<boolean>>;
}

const DragAndDropCalendar = withDragAndDrop(Cal);

export default function CalendarListItem({
  localizer,
  date,
  setIsCalendar,
}: Props) {
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
        <div className="w-4/5 flex justify-between">
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
        <button
          className="ml-auto my-auto cursor-pointer"
          onClick={() => setIsCalendar(true)}
        >
          <CalendarIcon
            className="hover:fill-[#2f2732]"
            fill="#b299be"
            width="1.8rem"
            height="1.8rem"
          />
        </button>
      </div>
    );
  };

  return (
    <div className="w-full">
      <DragAndDropCalendar
        localizer={localizer}
        events={[]}
        style={{ height: "90vh" }}
        views={["month"]}
        className="w-full"
        toolbar={true}
        components={{
          toolbar: CustomToolbar,
          month: {
            dateHeader: (props) => <DayItem date={props.date} />,
            header: () => <></>,
          },
        }}
        date={date}
        selectable={true}
      />
    </div>
  );
}
