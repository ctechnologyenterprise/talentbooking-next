import CommonHead from "@components/shared/CommonHead/CommonHead";

const Shows = () => {
  return (
    <>
      <CommonHead
        isNormal
        canExport
        cancreateItenerary
        exportText="Export"
        createNewText="New Contract"
        title="Shows"
      />
      <div className="h-screen">Shows</div>;
    </>
  );
};

export default Shows;
