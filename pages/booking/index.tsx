import CommonHead from "@components/shared/CommonHead/CommonHead";

const Booking = () => {
  return (
    <>
      <CommonHead
        isNormal
        canExport
        exportText="Export"
        createNewText="New Contract"
        title="Bookings"
      />
      <div className="h-screen">Booking</div>;
    </>
  );
};

export default Booking;
