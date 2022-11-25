import ContactsContent from "@components/Contacts/ContactsContent";
import CommonHead from "@components/shared/CommonHead/CommonHead";

const ContactsForm = () => {
  return (
    <>
      <CommonHead
        isNormal
        exportText="Export"
        createNewText="Save"
        title="New Contact"
        href="contacts/form"
      />
      <ContactsContent />
    </>
  );
};

export default ContactsForm;
