import CommonHead from "@components/shared/CommonHead/CommonHead";

const Festivals = () => {
  return (
    <>
      <CommonHead
        isNormal
        canExport
        exportText="Export"
        createNewText="New Festival"
        title="Festivals"
      />
      <div className="h-screen">Festivals</div>;
    </>
  );
};

export default Festivals;
