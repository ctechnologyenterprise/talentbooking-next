import CommonHead from "@components/shared/CommonHead/CommonHead";

const Calendars = () => {
  return (
    <>
      <CommonHead
        isNormal
        isCalendar
        createNewText="New Contract"
        title="Calendar"
      />
      <div className="h-screen">Calendar</div>
    </>
  );
};

export default Calendars;
