import PromotersContent from "@components/Promoters/PromotersContent";
import CommonHead from "@components/shared/CommonHead/CommonHead";

const PromotersForm = () => {
  return (
    <>
      <CommonHead
        isNormal
        exportText="Export"
        createNewText="Save"
        title="New Promoter"
        href="promoters/form"
      />
      <PromotersContent />
    </>
  );
};

export default PromotersForm;
