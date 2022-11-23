import CommonHead from "@components/shared/CommonHead/CommonHead";

const Promoters = () => {
  return (
    <>
      <CommonHead
        isNormal
        canExport
        exportText="Export"
        createNewText="New Promoter"
        title="Promoters"
      />
      <div className="h-screen">Promoters</div>
    </>
  );
};

export default Promoters;
