import CommonHead from "@components/shared/CommonHead/CommonHead";

const Venues = () => {
  return (
    <>
      <CommonHead
        isNormal
        canExport
        exportText="Export"
        createNewText="New Venue"
        title="Venues"
      />
      <div className="h-screen">Venues</div>
    </>
  );
};

export default Venues;
