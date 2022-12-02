import { useCallback } from "react";

interface Props {
  date: Date;
}

export default function DayItem({ date }: Props) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="w-full h-16 border border-[#dddddd] border-b-0 text-xl">
      <div className="mt-1 w-20 flex justify-center text-[#979499]">
        {date.getDate()}
      </div>
      <div className="w-20 flex justify-center text-[#d7d2d9]">
        {days[date.getDay()]}
      </div>
    </div>
  );
}
