import CommonHead from "@components/shared/CommonHead/CommonHead";
import VenuesContent from "@components/venues/venuesContent";

const VenuesForm = () => {
  return (
    <>
      <CommonHead
        isNormal
        exportText="Export"
        createNewText="Save"
        title="New Venues"
        href="venues/form"
      />
      <VenuesContent />
    </>
  );
};

export default VenuesForm;
