import ButtonLink from "@components/ButtonLink";
import ContactsContent from "@components/Contacts/ContactsContent";
import Content from "@components/Content";

import DownloadIcon from "@public/svgs/DownloadIcon";
import FileIcon from "@public/svgs/FileIcon";
import { useCallback } from "react";

const ContactsForm = () => {
  const headerButtons = useCallback(() => {
    return (
      <>
        <ButtonLink
          linkTo="/contract/form"
          icon={<FileIcon />}
          label="New Contract"
        />
        <ButtonLink
          linkTo="/contract/export"
          icon={<DownloadIcon />}
          label="Export"
        />
      </>
    );
  }, []);
  return (
    <Content title="Contacts" leftContent={headerButtons}>
      <ContactsContent />
    </Content>
  );
};

export default ContactsForm;
