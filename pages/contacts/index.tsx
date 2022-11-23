import CommonHead from "@components/shared/CommonHead/CommonHead";

const Contact = () => {
  return (
    <>
      <CommonHead
        isNormal
        canExport
        exportText="Export"
        createNewText="New Contact"
        title="Contacts"
      />
      <div className="h-screen">Contacts</div>
    </>
  );
};

export default Contact;
