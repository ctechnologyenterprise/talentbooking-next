import CalendarListItem from "@components/CalendarListItem";
import { Dispatch, SetStateAction } from "react";
import { DateLocalizer } from "react-big-calendar";
import { getDate, datePrevMonth, dateNextMonth } from "util/formatDateTime";

type Props = {
  localizer: DateLocalizer;
  setIsCalendar: Dispatch<SetStateAction<boolean>>;
};

export default function CalendarList({ localizer, setIsCalendar }: Props) {
  return (
    <div className="xl:flex base:block w-full justify-between">
      <div className=" xl:w-[32%] base:w-full h-screen ">
        <CalendarListItem
          localizer={localizer}
          date={datePrevMonth()}
          setIsCalendar={setIsCalendar}
        />
      </div>
      <div className=" xl:w-[32%] base:w-full h-screen ">
        <CalendarListItem
          localizer={localizer}
          date={getDate()}
          setIsCalendar={setIsCalendar}
        />
      </div>
      <div className=" xl:w-[32%] base:w-full h-screen ">
        <CalendarListItem
          localizer={localizer}
          date={dateNextMonth()}
          setIsCalendar={setIsCalendar}
        />
      </div>
    </div>
  );
}
